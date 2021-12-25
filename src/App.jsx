// Core
import React, { useState } from 'react';
import { CounterOrders } from './components/CounterOrders';
import { FavoritesItems } from './components/FavoritesItems';
import { ShowContainer } from './components/ShowContainer';

function App() {

    const [count, setCount] = useState(0);

    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);

    return (
        <>
            <h1> {count} </h1>
            <button type="button" onClick={onIncrement}>  + </button>
            <button type="button" onClick={onDecrement}>  - </button>

            <br/>
            
            <CounterOrders />
            <FavoritesItems />
            <ShowContainer />

        </>
    )
}
export default App;
