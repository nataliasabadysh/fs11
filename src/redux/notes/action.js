import * as noteTypes from './types';

export const addNoteStart = {
    type: noteTypes.ADD_NOTE_START,
};  
export const addNoteStop = {
    type: noteTypes.ADD_NOTE_STOP,
};   

export const addNoteSuccess = note => {
    return {
        type: noteTypes.ADD_NOTE_SUCCESS,
        payload: {
            note,
        },
    };
}


export const addNoteFailure = error => {
    return {
        type: noteTypes.ADD_NOTE_FAILURE,
        payload: {
            error,
        },
    };
};



export const fetchNotesStart = {
    type: noteTypes.FETCH_NOTES_START,
};

export const fetchNotesStop= {
    type: noteTypes.FETCH_NOTES_STOP,
};


export const fetchNotesSuccess = notes => {
    return {
        type: noteTypes.FETCH_NOTES_SUCCESS,
        payload: {
            notes,
        },
    };
};

export const fetchNotesFailure = error => {
    return {
        type: noteTypes.FETCH_NOTES_FAILURE,
        payload: {
        error,
        },
    };
};


// start 
// stop 
export const deleteNoteSuccess = id => ({
        type: noteTypes.DELETE_NOTE_SUCCESS,
        payload: {
            id,
        },
    })

export const deleteNoteFailure = error => {
    return {
        type: noteTypes.DELETE_NOTE_FAILURE,
        payload: {
            error,
        },
    };
};
