// Core
import { combineReducers } from 'redux';
import { postsReducer, loadingReducer, errorReducer } from '../redux/post/reducer';
import { notesReducer } from '../redux/notes/reducer';

export const themeReducer = (state = { name: 'dark'}, action) => state;

const rootPost = combineReducers({
    list: postsReducer,
    error: errorReducer,
    loading: loadingReducer,
})


// Reducers
export const rootReducer = combineReducers({
    theme: themeReducer,
    posts: rootPost,
    notes: notesReducer
});