import { useEffect, useState } from 'react';
import axios from 'axios';

// Instruments
import './theme/index.css';


export const api = {
    fetchMovies: (page) => `https://api.themoviedb.org/3/trending/movie/day?api_key=4dce7cd3557cfb8e6e269a90f5961d8a&page=${page}`,
};


function App() {

    const [page, setPage] = useState(9);
    const [listMovies, setListMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        setIsLoading(true);

        axios.get(api.fetchMovies(page)).then(res=>
            setListMovies(res.data.results)
        )
        .catch((error)=> setError(error))
        .finally(()=>{
            setIsLoading(false);
        })
    }, [page]);

    const listJsx = listMovies.map((item) =>
        <li key={item.id} onClick={()=>setPage(item)}> {item.title}</li>
    )


    return(

        <>
        {page}
        <ul>
        {listJsx}
        </ul>
        </>

    )
}

export default App;
