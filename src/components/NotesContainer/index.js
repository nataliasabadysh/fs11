
import { TextField, Box } from "@mui/material";
import { Button as ButtonMUI } from '@mui/material';
import { useState } from "react";
import { saveNote } from "../../redux/notes/noteOperations";
import { useDispatch } from "react-redux";

export const NotesContainer = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => setValue(e.target.value)

    const onClick = () => {
        //dispatch 
        setValue('')
    }

    return(

        <div style={{ paddingTop: 50 }} >
            <Box component="div">
                <TextField fullWidth label={'Note name'} variant="outlined" value={value} onChange={handleChange}/>
                <ButtonMUI fullWidth variant="contained" onClick={onClick}>Save</ButtonMUI>
            </Box>
        </div>
    )

}