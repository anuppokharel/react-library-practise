import {
  FormControl,
  Typography,
  Select,
  MenuItem,
  InputBase,
} from "@mui/material";
import FlexBetween from "../components/FlexBetween";

import { Message, Notifications } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <FlexBetween p="25px">
      <Typography
        fontWeight="bold"
        fontSize="28px"
        color="primary"
        onClick={() => navigate("/")}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        React Library Management
      </Typography>
      <FlexBetween gap="25px">
        <Message />
        <Notifications />
        <FormControl variant="standard" value="Anup Pokharel">
          <Select
            value="Anup Pokharel"
            input={<InputBase />}
            sx={{
              width: "150px",
              backgroundColor: "#F0F0F0",
              p: "0 10px",
              "& .MuiSelect-select:focus": {
                backgroundColor: "#F0F0F0",
              },
            }}
          >
            <MenuItem value="Anup Pokharel">
              <Typography>Anup Pokharel</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>
          </Select>
        </FormControl>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Header;
