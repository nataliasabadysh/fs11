import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoItem } from '../TodoItem/Item';
import { Box } from '@mui/system';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import storage from '../../utils/storage';
import { ToastContainer, toast } from 'react-toastify';


export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const [value, setValue] = useState('');

    const [filterValue, setFilterValue] = useState(''); 

    const handleValueChange = (e) => setValue(e.target.value)

    const resetValue = ()=>  setValue('');

    useEffect(() => {
        // const  list = JSON.parse(localStorage.getItem('list'))
        const  list = storage.get('list')
        setTodos(list || [])
    }, []);


    useEffect(() => {
        // localStorage.setItem('list', JSON.stringify(todos))
        storage.save('list', todos)
    }, [todos]);


    const onSave = () => {
        const data = { 
            name: value, 
            id: uuidv4(), 
            completed: false 
        }
        
        const findContact = todos.find(item => item.name === value);

        if(!findContact){
            setTodos((prevState)=> {
                return [...prevState, data]
            });
        }
        else {
            toast.error(`Number ${value} already exist`)
        }



        resetValue();
    }


    const onDelete = (id) => {
        const list = todos.filter(item => item.id !==id);
        setTodos(list)
    }

    const onUpdate = (id, text) => {
        const list = todos.map(item=> item.id === id ? {...item, name: text} : item )
        setTodos(list)
    }

    const onComleted = (id, completedParams) => {
        const list = todos.map(item=> item.id === id ? {...item, completed: !completedParams} : item )
        setTodos(list)
    }

    const visibleTodos = todos.filter(item =>item.name.toLowerCase().includes(filterValue.toLowerCase()))

    return(

        <div style={{ width: 700, margin: '0 auto', marginTop: 40}}> 
            <h1 style={{ textTransform: 'uppercase', paddingBottom: 50,}}>contacts list</h1>
        </div>

    )
}