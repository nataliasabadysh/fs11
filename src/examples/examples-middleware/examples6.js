
// State 
const globalState = {
  movies: [],
  filter: '',

  auth: {
    user: {
      name: null,
      avatar: null,
    },
    token: null,
  },

  role: false,
  theme: 'light'
};

// SELECTOR 
const getFilterValue = state => state.filter;
const getMovies = state => state.movies;

// Kомпозиция селекторов
export const getMoviesById = (state, id) => {
  const movies = getMovies(state);

  return movies.find(move => move.id === id);
};

