import { TextField } from "@mui/material";

export const Input = ({ value, handleChange, label })=> 
    <TextField fullWidth label={label} variant="outlined" value={value} onChange={handleChange}/>