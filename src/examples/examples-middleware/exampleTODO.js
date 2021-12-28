import shortid from 'shortid';

// TYPES 
export default {
    ADD: 'notes/add',
    DELETE: 'notes/delete',
    TOGGLE_COMPLETED: 'notes/toggleCompleted',
    CHANGE_FILTER: 'notes/changeFilter',
  };
  

// ACTIONS 
const addTodo = text => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// REDUCER 
const notesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};


// 

import { createSelector } from 'reselect';
const getNotes = state => state.todos.list;
const getFilter = state => state.todos.filter;

const getFilteredNotes = createSelector(
  [getNotes, getFilter],
  (notes, filter) => {
    return notes.filter(note =>
      note.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

// CRUD  API
const fetchNotes = () => {
  return fetch('http://localhost:9000/notes').then(res => res.json());
};

const saveNote = note => {
  return fetch('http://localhost:9000/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  }).then(res => res.json());
};

const deleteNote = id => {
  return fetch(`http://localhost:9000/notes/${id}`, {
    method: 'DELETE',
  }).then(res => res.json());
};


// CRUD REDUX 


const fetchNotes = () => dispatch => {
  dispatch(notesActions.fetchNotesStart());

  notesApiService
    .fetchNotes()
    .then(notes => dispatch(notesActions.fetchNotesSuccess(notes)))
    .catch(error => dispatch(notesActions.fetchNotesFailure(error)));
};

const saveNote = text => dispatch => {
  const note = { text, completed: false };

  dispatch(notesActions.addNoteStart());

  notesApiService
    .saveNote(note)
    .then(savedNote => dispatch(notesActions.addNoteSuccess(savedNote)))
    .catch(error => dispatch(notesActions.addNoteFailure(error)));
};

const deleteNote = id => dispatch => {
  dispatch(notesActions.deleteNoteStart());

  notesApiService
    .deleteNote(id)
    .then(() => dispatch(notesActions.deleteNoteSuccess(id)))
    .catch(error => dispatch(notesActions.deleteNoteFailure(error)));
};