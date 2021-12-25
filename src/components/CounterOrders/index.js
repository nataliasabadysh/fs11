import { useSelector, useDispatch } from "react-redux";
import { onIncrement, onDecrement } from "../../redux/counter/actions";

export const CounterOrders = () => {

    const count = useSelector(globalState => globalState.count.countValue) // taking the GLOBAL state 
    const dispatch = useDispatch(); // on click, call ACTION  

    return(
        <>
            <h1> 2: {count} </h1>
            <button type="button" onClick={()=> dispatch(onIncrement(6))}>  + </button>
            <button type="button" onClick={()=> dispatch(onDecrement(6))}>  - </button>
        </>
    )
}