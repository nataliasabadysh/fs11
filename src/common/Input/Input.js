import { TextField } from "@mui/material";

export const Input = ({ value, handleChange, label, type="text" })=> 
    <TextField fullWidth label={label} variant="outlined" value={value} onChange={handleChange} type={type}/>