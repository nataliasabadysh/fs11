import { Button as ButtonMUI } from '@mui/material';

export const Button = ({ lable, onClick, disabled })=> 
    <ButtonMUI fullWidth variant="contained" onClick={onClick} disabled={disabled}>{lable}</ButtonMUI>