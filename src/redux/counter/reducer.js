import { counter_incremented, counter_decrement } from "./types";

// REDUCES
export function counterReducer(state = { countValue : 0 }, action ) {
    switch (action.type) {
        case counter_incremented:
            return { 
                countValue: state.countValue + action.payload
            }
        case counter_decrement:
            return { 
                countValue: state.countValue - action.payload
            }

        default:
            return state
    }
}