import { getNote, deleteNote } from "../../redux/notes/noteOperations";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "@mui/material";
import { useEffect } from "react";

export const NoteList = () => {
    useEffect(() => {
       // dispatch get items 
    }, []);

    const onDelete = (id) => {
        // dispatch delete item 
    }

    return <ul>
        { /* GET notes from Global state */ [].map(item=> (
                    <Card sx={{ margin: 3, padding: 2 }} key={item.id}>
                        {item.text}
                        <Button variant="contained" onClick={()=> onDelete(item.id)}>Delete</Button>
                    </Card>
                ))
            }
    </ul>
}