import axios from "axios";

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const root = 'https://api.themoviedb.org/3';

export const fetchMovies = () => axios
    .get(root + '/trending/movie/day?api_key=4dce7cd3557cfb8e6e269a90f5961d8a')
    .then(response => response.data.results);


export const fetchMovieWithQuery = query =>
    axios.get(`${root}/search/movie?api_key=4dce7cd3557cfb8e6e269a90f5961d8a&query=${query}`,)
    .then(response => response.data.results);


export const fetchMovieWithId = id =>  
    axios.get(`movie/${id}?api_key=4dce7cd3557cfb8e6e269a90f5961d8a`).then(response => response.data);