// Instruments
import './theme/index.css';
import { Route, Routes } from 'react-router-dom';

import { TodoList } from './components/TodoList/List';
import { HomePage } from './pages/Home';
import { Navigation } from './components/Navigation';

const Dashboard = () => <>dashboard</>
// Pages 

function App() {
    return (

        <>
        {/* <Navigation /> */}
        <TodoList/>

            {/* <Routes> 
                <Route path="/" element={<HomePage/>} /> 
                <Route path="/todos" element={<TodoList/>} />  
                <Route path="/dashboard" element={<Dashboard/>} />  
            </Routes>

        <h1 style={{ padding: 100 }}>Footer</h1> */}
        </>
    )
}

export default App;
