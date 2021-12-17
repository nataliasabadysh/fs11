import { Button as ButtonMUI } from '@mui/material';

export const Button = ({ lable, onClick })=> 
    <ButtonMUI fullWidth variant="contained" onClick={onClick}>{lable}</ButtonMUI>