import { POST_FETCH_SUCCESS, POST_FETCH_ERROR, POST_FETCH_START, POST_STOP_LOADING } from "./types";

export const postsReducer = (state =  [], { type, payload }) => {
    switch(type){
        case POST_FETCH_SUCCESS : {
            return payload
        }
        default: {
            return state
        }
    }   
}

export const loadingReducer = (state = false, { type }) => {
    switch(type){
        case POST_FETCH_START: {
            return true
        }
        case POST_STOP_LOADING: {
            return false
        }
        default: {
            return state
        }
    }
}


export const  errorReducer = (state = null, { type, payload }) => {
    switch(type){
        case POST_FETCH_ERROR: {
            return payload
        }
        default: {
            return state
        }
    }
}


// FETCH 
// {
//     list: [],
//     error: null,
//     loading: false
// }
