import { useEffect, useState } from 'react';
import axios from 'axios';

// Instruments
import './theme/index.css';
import { Modal } from './components/Modal';
import { Registration } from './examples/Registration/Registration';

import { Layout } from './common/Layout';
import { ThemeProvider } from './context/theme';
import { LoginFormExample } from './examples/form/example2';


export const api = {
    fetchMovies: (page) => `https://api.themoviedb.org/3/trending/movie/day?api_key=4dce7cd3557cfb8e6e269a90f5961d8a&page=${page}`,
};


function App() {

    const [page, setPage] = useState(2);
    const [listMovies, setListMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const [isModalOpen, setIModalOpen] = useState(false)

    useEffect(()=> {
        setLoader(true);

        axios.get(api.fetchMovies(page))
            .then(res=>setListMovies(res.data.results))
            .catch((error)=> setError(error))
            .finally(() => setLoader(false));
    }, [page]);

    const listJsx = listMovies.map((item) =>
        <li key={item.id} onClick={()=>setPage(item)}> {item.title}</li>
    )

    const paginationJSX = [1, 2, 3, 4, 5].map(item=> <li key={item} onClick={()=> setPage(item)}>{item}</li>)

    return(

        <>
            <ul>
                {listJsx}
            </ul>
        </>

    )
}

export default App;
