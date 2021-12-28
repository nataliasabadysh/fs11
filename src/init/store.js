// Core
import { createStore, applyMiddleware } from 'redux';

// Instruments
import { rootReducer } from './rootReducer';
import {
    composeEnhancers,
    middleware,
 } from './middleware';

export const storeApp = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);



// export const storeApp = createStore( // Core 
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
// );

// Core