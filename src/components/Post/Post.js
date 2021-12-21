import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { api } from "../../api";



export const Post = () => {
    const [post, setPost] = useState({})
    const { postId } = useParams(); // :id

    useEffect(() => {
        fetch(api .getPost(postId))
            .then(res=> res.json())
            .then(data => setPost(data))
    }, [postId])

    return <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
    </>
}
