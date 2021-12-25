// Core
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


export const rootReducer = combineReducers({
    //theme
});

const developmentEnvironment = process.env.NODE_ENV === 'development';


const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = developmentEnvironment && devtools ? devtools : compose;

const middleware = [thunk];

if (developmentEnvironment) {
        middleware.push(logger);
}


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);