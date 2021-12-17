

// Components
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import { Card, Checkbox } from "@mui/material";
import { useState } from "react";


export const TodoItem = ({ todo, onDelete, onUpdate, onComleted }) => {
    const [value, setValue] = useState(todo.name);
    const [isEditable, setIsEditable] = useState(false)

    const handleVlaue = (e) => setValue(e.target.value)

    const checkOnComplited = todo.completed ? 'checked' : null;

    const onUpdateItem = () => {
        onUpdate(todo.id, value);
        setIsEditable(false)
    }

    const onCansel = () => {
        setValue(todo.name);
        setIsEditable(false)
    }

    return(
        <Card sx={{ margin: 3, padding: 2, }}>

                    {
                        isEditable ? 
                        <Input value={value} handleChange={handleVlaue} /> 
                        : <p style={{ textDecoration:  todo.completed ? 'line-through': 'none' }}>{value}</p>
                    }

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5}}>
                    <Checkbox checked={checkOnComplited} onChange={()=> onComleted(todo.id, todo.completed)}/>


                    {
                        isEditable ? 
                        <Button lable="Update" onClick={onUpdateItem} /> 
                        :   <Button lable="Edit" onClick={()=> setIsEditable(!isEditable)}/> 
                    }

                    { isEditable &&  <Button lable="Cansel" onClick={onCansel} />  }

                    <Button lable="Delete" onClick={()=> onDelete(todo.id)} /> 
                </div>
                
            </Card>
    )
}