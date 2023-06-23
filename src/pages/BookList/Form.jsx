import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/Input";

const Form = ({
  bookToBeUpdated,
  dispatch,
  setBookToBeUpdated,
  toggleModal,
}) => {
  const [formData, setFormData] = useState({ status: false });
  const [checked, setChecked] = useState(
    bookToBeUpdated ? bookToBeUpdated.status : false
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (bookToBeUpdated === null) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else {
      setBookToBeUpdated((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (bookToBeUpdated) {
      const { publication, date, ...reqBookData } = bookToBeUpdated;

      if (Object.values(reqBookData).includes("")) {
        toast.error("Missing field value");
        return;
      } else {
        dispatch({ type: "UPDATE", payload: reqBookData });
        setBookToBeUpdated(null);
        toast.success("Book updated successfully!");
      }
    } else if (Object.keys(formData).length < 4) {
      return toast.error("Please provide information for all fields");
    } else {
      dispatch({ type: "CREATE", payload: formData });
      setFormData({ status: false });
      toast.success("Book created successfully!");
    }

    toggleModal();
  };

  return (
    <form onSubmit={submitHandler}>
      <Box>
        <Input
          id="title"
          name="title"
          type="text"
          label="Book Title"
          value={bookToBeUpdated ? bookToBeUpdated.title : formData.title}
          handleChange={handleChange}
        />
      </Box>
      <Box>
        <Input
          id="description"
          name="description"
          type="text"
          label="Description"
          value={
            bookToBeUpdated ? bookToBeUpdated.description : formData.description
          }
          handleChange={handleChange}
        />
      </Box>
      <Box>
        <Input
          id="author"
          name="author"
          type="text"
          label="Author"
          value={bookToBeUpdated ? bookToBeUpdated.author : formData.author}
          handleChange={handleChange}
        />
      </Box>
      <Box>
        <FormControlLabel
          sx={{ margin: "auto 15px", textAlign: "center" }}
          label="Status"
          control={
            <Checkbox
              name="status"
              type="checkbox"
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" variant="outlined" sx={{ margin: "auto 15px" }}>
          {bookToBeUpdated ? "Update" : "Create"}
        </Button>
      </Box>
    </form>
  );
};

export default Form;
