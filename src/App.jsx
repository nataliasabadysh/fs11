// Core
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import { TodoList } from './components/TodoList/List';
import { Navigation } from './components/Navigation';

// Instruments
import './theme/index.css';
import { PostsPage } from './pages/Posts';
import { PostPage } from './pages/Post';


const Dashboard = () => <>Dashboard</>

// Pages 
function App() {

    return (
        <>
            <Navigation />
                <Routes>  
                    <Route path="/" element={<TodoList />} /> 
                    {/* <Route path="/" exact componet={HomePage} />   */}
                    {/* <Route path="/product" exact componet={Product} />   */}
                    <Route path='post/:postId' element={<PostPage />} />
                    <Route path="/dashboard" element={<Dashboard/>} />  
                    <Route path="/posts" element={<PostsPage/>} />  
                </Routes>

            {/* <Footer /> */}
        </>
    )
}

export default App;
