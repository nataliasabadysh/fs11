import { useSelector, useDispatch } from "react-redux";
import { onDecrement, onIncrement } from "../../redux/counter/actions";

export const FavoritesItems = () => {

    const count = useSelector(globalState => globalState.count.countValue) // taking the GLOBAL state 
    const dispatch = useDispatch();// on click, call ACTION  

    const onClickIncrement = () => dispatch(onIncrement(6));

    const onClickDecrement = () => {
        dispatch(onDecrement(6))
    }

    return(
        <>
        <h1> 2: {count} </h1>
        <button type="button" onClick={onClickIncrement}>  + </button>
        <button type="button" onClick={onClickDecrement}>  - </button>
        </>
    )
}
