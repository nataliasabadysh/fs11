import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(api .getPosts())
            .then(response=> response.json())
            .then(data=> setPosts(data))
    }, []);

    return(
        <ul>
            {
                posts && posts.map(item=> <li key={item.id}> 
                <Link to={`/post/${item.id}`}>{item.title}</Link> </li>)
            }
        </ul>
    )
}
