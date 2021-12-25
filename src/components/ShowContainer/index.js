import { useDispatch, useSelector } from "react-redux";
import { onOpen, onClose } from "../../redux/modal/actions";

export const ShowContainer = () => {

    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)

    return(
        <>
        <h1>{ modal ? "close": 'open'} </h1>
        <button type="button" onClick={()=> dispatch(onOpen)}>Click open </button>
        <button type="button" onClick={()=> dispatch(onClose)}>Click closse </button>
        </>
    )
}