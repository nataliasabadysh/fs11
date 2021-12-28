import { POST_FETCH_ERROR, POST_FETCH_SUCCESS, POST_FETCH_START, POST_STOP_LOADING } from "./types";

// SYNC action 
const fetchStart = () => ({
    type: POST_FETCH_START,
});

const fetchStop = () => ({
    type: POST_STOP_LOADING,
});

const fetchSuccess = data => ({
    type: POST_FETCH_SUCCESS,
    payload: data,
});

const fetchError = error => ({
    type: POST_FETCH_ERROR,
    payload: error,
});


//  async actions MiddleWare 
export const fetchPost = () => dispatch => {
    dispatch(fetchStart());
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(data => dispatch(fetchSuccess(data)))
        .catch(err => dispatch(fetchError(err)))
        .finally(()=> dispatch(fetchStop()))
};
