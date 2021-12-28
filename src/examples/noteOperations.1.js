import * as notesActions from './action';

const fetchNotesAPI = () => {
    return fetch('http://localhost:9000/notes').then(res => res.json());
};

const saveNoteAPI = note => {
    return fetch('http://localhost:9000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    }).then(res => res.json());
};    

const deleteNoteAPI = id => {
    return fetch(`http://localhost:9000/notes/${id}`, {
        method: 'DELETE',
    }).then(res => res.json());
};


const fetchNotes = () => dispatch => {
    dispatch(notesActions.fetchNotesStart());

    fetchNotesAPI()
        .then(notes => dispatch(notesActions.fetchNotesSuccess(notes)))
        .catch(error => dispatch(notesActions.fetchNotesFailure(error)));
};

const saveNote = text => dispatch => {
    const note = { text, completed: false };

    dispatch(notesActions.addNoteStart());

    saveNoteAPI(note)
    .then(savedNote => dispatch(notesActions.addNoteSuccess(savedNote)))
    .catch(error => dispatch(notesActions.addNoteFailure(error)));
};

const deleteNote = id => dispatch => {
    dispatch(notesActions.deleteNoteStart());

    deleteNoteAPI(id)
    .then(() => dispatch(notesActions.deleteNoteSuccess(id)))
    .catch(error => dispatch(notesActions.deleteNoteFailure(error)));
};