import { TextField } from "@mui/material";

const Input = ({ id, label, type, name, value, handleChange }) => {
  return (
    <>
      <TextField
        id={`outlined-basic ${id}`}
        variant="outlined"
        type={type}
        name={name}
        label={`${label}`.toUpperCase()}
        value={value}
        onChange={handleChange}
        sx={{ margin: "0 15px 10px 15px", width: "96.5%" }}
      />
    </>
  );
};

export default Input;
