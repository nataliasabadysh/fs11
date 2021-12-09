import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination, CardMedia } from '@mui/material';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState({})

    console.log('selectedMovie', selectedMovie);

    useEffect(()=> {
        setLoader(true);

        axios.get(api.fetchMovies(page))
            .then(res=>setListMovies(res.data))
            .catch((error)=> setError(error))
            .finally(() => setLoader(false));
    }, [page]);


    const onSelect = (param)=> {
        setSelectedMovie(param)
        setIsModalOpen(true)
    };

    const onClose = ()=> {
        setIsModalOpen(false)
    };


    const listJsx = listMovies &&  listMovies.results && 
    listMovies.results.map((item) => <Card key={item.id} sx={{ maxWidth: 250, margin: 10 }}>
            <CardContent onClick={()=> onSelect(item)}>
                    <Typography gutterBottom variant="p">
                    Title: {item.title} {console.log('item', item)}
                    <CardMedia
                        component="img"
                        height="194"
                        image={`https://image.tmdb.org/t/p/original/${item.poster_path || ''}`}
                        alt="Paella dish"/>

                </Typography>
            </CardContent>
        </Card>
    )

    const handleChange = (event, value) => {
        setPage(value);
    };
    

    return(

        <div>
            {listJsx}

            {isModalOpen && <Modal onClose={onClose}>
                <h1>{selectedMovie.title}</h1>
                {selectedMovie.overview}
                <p>{selectedMovie.popularity}%</p>
                <CardMedia component="img" height="194" image={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path || ''}`} alt={selectedMovie.title}/>
            </Modal>}
                <Pagination count={listMovies.total_pages} defaultPage={listMovies.page} color="primary" variant="outlined" onChange={handleChange}/>
        </div>

    )
}

export default App;
