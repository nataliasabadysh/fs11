// Core
import { createStore, combineReducers } from 'redux';
import { counterReducer } from '../redux/counter/reducer';
import { modalReducer } from '../redux/modal/reducer';

// EXample Reducer 
const listReducer = (state=[]) => [];
const orderedListReducer = (state=[]) => [];
const histroryReducer = (state=[]) => [];

const goods = combineReducers({
    list: listReducer, 
    oreder: orderedListReducer,
    history: histroryReducer
})

const root = combineReducers({
    count: counterReducer, 
    modal: modalReducer ,
    goods 
})

export const storeApp = createStore( // Core 
    root,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
);