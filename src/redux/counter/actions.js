import { counter_incremented, counter_decrement } from "./types";

// ACTIONS 
export const onIncrement = (params) => {
    return { 
        type: counter_incremented,
        payload: params
    }
}


export const onDecrement = (params) => {
    return {
        type: counter_decrement,
        payload: params
    }
}