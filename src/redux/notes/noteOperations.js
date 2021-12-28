import * as notesActions from './action';

// CRUD 
const saveNoteAPI = note => {
    return fetch('http://localhost:9000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    }).then(res => res.json())
}; 

const getNoteAPI = () => {
    return fetch('http://localhost:9000/notes', {
        method: 'GET',
    }).then(res => res.json())
}; 

const deleteNoteAPI = id => {
    return fetch(`http://localhost:9000/notes/${id}`, {
        method: 'DELETE',
    }).then(res => res.json());
};


// MIDDLEWARE asyn Action 
export const saveNote = text => dispatch => {
    // action start
    const note = { }
    saveNoteAPI(note)// then =>  data, => error
    // action stop 
};

export const getNote = () => dispatch => {
     // action start
    getNoteAPI()// then =>  data, => error
     // action stop 
};


export const deleteNote = id => dispatch => {
     // action start
    deleteNoteAPI()// then =>  data, => error
     // action stop 
};