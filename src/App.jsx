// Core
import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'
import FriendList from './components/FriendList';

import friends from './components/FriendList/data.json'; 
import { fetchPost } from './redux/post/actions';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import { NotesContainer } from './components/NotesContainer';
import { NoteList } from './components/NoteList';


const HomePage = ()=> {
    const dispatch = useDispatch()
    const data = useSelector(state => state.posts.list)
    const loading = useSelector(state => state.posts.loading)

    useEffect(() => { 
        dispatch(fetchPost())
    }, []);


    return(
    <>
        {loading && <ClipLoader color={'red'} size={150} />}
        <ul >
            {data.map(item => (
            <li key={item.id}>
            {item.title}
        </li>
        ))}
    </ul>
    </>
    )
}

function App() {

    return <>
            <HomePage/>
        </>
    }

export default App;
