// Core
import { combineReducers } from 'redux'
import { contactReducer } from '../redux/contacts/reducer';

// Reducers
export const rootReducer = combineReducers({
    contacts: contactReducer
});
