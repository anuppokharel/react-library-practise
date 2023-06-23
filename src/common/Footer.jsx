import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import FlexBetween from "../components/FlexBetween";

const Footer = () => {
  return (
    <FlexBetween
      p="10px 15px"
      position="fixed"
      width="100%"
      left="0"
      bottom="0"
    >
      <Box>&copy; Anup Pokharel</Box>
      <Box display="flex" flexDirection="column" marginRight="30px">
        <Link to="#">Facebook</Link>
        <Link to="#">Instagram</Link>
        <Link to="#">Twitter</Link>
      </Box>
    </FlexBetween>
  );
};

export default Footer;
