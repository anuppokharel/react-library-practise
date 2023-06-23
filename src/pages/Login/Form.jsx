import { Login } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../components/Input";

const Form = () => {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (userData === null) {
      toast.error("Please provide your credentials");
    } else if (!userData.email.includes("@")) {
      toast.error("Please enter a valid email address");
    } else if (userData.password.length <= 4) {
      toast.error("Password length too short");
    } else {
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Logging in");
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Box>
        <Typography
          fontWeight="bold"
          fontSize="h5"
          sx={{ margin: "0 0 15px 15px" }}
        >
          Welcome to React Library Management System
        </Typography>
        <Box>
          <Input
            id="email"
            label="email"
            name="email"
            handleChange={changeHandler}
          />
        </Box>
        <Box>
          <Input
            id="password"
            type="password"
            label="password"
            name="password"
            handleChange={changeHandler}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ margin: "0 15px 10px 15px", width: "96.5%" }}
            size="large"
            startIcon={<Login />}
            type="submit"
            // onClick={() => navigate("/home")}
          >
            Login
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Form;
