import { combineReducers } from 'redux';
import * as noteTypes from './types';

export const notesReducer = (state = [], { type, payload }) => {
    switch (type) {
        case noteTypes.FETCH_NOTES_SUCCESS:
        return payload.notes;

        case noteTypes.ADD_NOTE_SUCCESS:
            return [...state, payload.note];

        case noteTypes.DELETE_NOTE_SUCCESS:
        const filtred = state.filter(note => note.id !== payload.id);

            return filtred;

        default:
            return state;
    }
};

// 
const loadingReducer = (state = false, { type }) => {
    switch (type) {
        case noteTypes.FETCH_NOTES_START:
        case noteTypes.ADD_NOTE_START:
        case noteTypes.DELETE_NOTE_START:
        return true;

        case noteTypes.FETCH_NOTES_SUCCESS:
        case noteTypes.FETCH_NOTES_FAILURE:
        case noteTypes.ADD_NOTE_SUCCESS:
        case noteTypes.ADD_NOTE_FAILURE:
        case noteTypes.DELETE_NOTE_SUCCESS:
        case noteTypes.DELETE_NOTE_FAILURE:
        return false;

        default:
        return state;
    }
};

const errorReducer = (state = null, { type, payload }) => {
    switch (type) {
        case noteTypes.FETCH_NOTES_START:
        case noteTypes.ADD_NOTE_START:
        case noteTypes.DELETE_NOTE_START:
        return null;

        case noteTypes.FETCH_NOTES_FAILURE:
        case noteTypes.ADD_NOTE_FAILURE:
        case noteTypes.DELETE_NOTE_FAILURE:
        return payload.error;

        default:
        return state;
    }
};
