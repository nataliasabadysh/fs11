// Core
import { createStore } from 'redux';

// function counterReducer(state = { count: 0 }, { payload,  type }) {
//     switch (type) {
//         case 'counter/incremented':
//             return { count: state.count + payload.value }
//         default:
//         return state
//     }
// }


export const store = createStore(
    // counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
);


// // Store 
// console.log(store.getState())

// // Action 
// console.log(
//     store.dispatch({
//         type: 'counter/incremented',
//         payload: {
//             value: 3
//         }
//     })
// )

// // new- Updated Store after action 
// console.log(store.getState())
