import { Container, Box, Typography } from "@mui/material";
import Form from "./Form";

const Login = () => {
  return (
    <Container maxWidth="md">
      <Box border="1px solid #000" margin="25px auto">
        <Typography
          align="center"
          fontWeight="bold"
          fontSize="28px"
          color="primary"
          margin="15px auto"
        >
          React Library Management System
        </Typography>
        <Form />
      </Box>
    </Container>
  );
};

export default Login;
