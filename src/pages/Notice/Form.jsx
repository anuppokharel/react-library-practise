import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/Input";

const Form = ({
  noticeToBeUpdated,
  setNoticeToBeUpdated,
  dispatch,
  toggleModal,
}) => {
  const [formData, setFormData] = useState({ status: false });
  const [checked, setChecked] = useState(
    noticeToBeUpdated ? noticeToBeUpdated.status : false
  );

  console.log(formData);

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    if (noticeToBeUpdated === null) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else {
      setNoticeToBeUpdated((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (noticeToBeUpdated) {
      const { date, ...reqNoticeData } = noticeToBeUpdated;

      if (Object.values(reqNoticeData).includes("")) {
        toast.error("Missing field value");
        return;
      } else {
        dispatch({ type: "UPDATE", payload: reqNoticeData });
        setNoticeToBeUpdated(null);
        toast.success("Notice updated successfully");
      }
    } else if (Object.keys(formData).length < 2) {
      return toast.error("Please provide information for all field");
    } else {
      dispatch({ type: "CREATE", payload: formData });
      setFormData({ status: false });
      toast.success("Book created successfully");
    }

    toggleModal();
  };

  return (
    <form onSubmit={submitHandler}>
      <Box>
        <Input
          id="title"
          type="text"
          name="title"
          label="title"
          value={noticeToBeUpdated ? noticeToBeUpdated.title : formData.title}
          handleChange={changeHandler}
        />
      </Box>
      <Box>
        <Input
          id="description"
          type="text"
          name="description"
          label="description"
          value={
            noticeToBeUpdated
              ? noticeToBeUpdated.description
              : formData.description
          }
          handleChange={changeHandler}
        />
      </Box>
      <Box>
        <FormControlLabel
          label="Status"
          control={
            <Checkbox
              name="status"
              type="checkbox"
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
              onChange={changeHandler}
            />
          }
        />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" variant="outlined">
          {noticeToBeUpdated ? "Edit" : "Create"}
        </Button>
      </Box>
    </form>
  );
};

export default Form;
