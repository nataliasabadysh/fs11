import { Posts } from "../components/Posts/Posts";
import { useNavigate } from "react-router";
import { Images } from "./Images";

export const PostsPage = () => {
    const navigate = useNavigate(); //  Window.history

    const onChangeSelect = ({ target}) => {
        navigate({
            search: `query=${target.value}`
        })
    }

    return(
        <>
            <select onChange={onChangeSelect}>
                <option value="cat">cat</option>
                <option value="dog">dog</option>
            </select>
            
            <Images />

            {/* <Posts/> */}
        </>
    )
}
