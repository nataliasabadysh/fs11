import { Posts } from "../components/Posts/Posts";
import { useLocation } from "react-router";
import queryString from 'query-string';
import { useEffect, useState } from "react";



const api = {
    getPhotos: (query, page = 1) =>`https://pixabay.com/api/?q=${query}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`,
}

export const Images = () => {
    const { search } = useLocation() // Window.location
    const [images, setImages] = useState([]);

    const parsed = queryString.parse(search); 

    useEffect(() => {
        if(search){
            fetch(api.getPhotos(parsed.query|| '')).then(r=> r.json()).then(setImages)
        }
    }, [search, parsed.query])

    const imagesJSX = images && images.hits && images.hits.map(item=> <li key={item.id}>{item.tags}</li>)

    return(
        <ul> {imagesJSX}
        </ul>
    )
}
