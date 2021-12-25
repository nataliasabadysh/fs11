
const fetchNotes = () => {
    return fetch('http://localhost:9000/todos').then(res => res.json());
};

const saveNote = note => {
    return fetch('http://localhost:9000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    }).then(res => res.json());
};

const deleteNote = id => {
    return fetch(`http://localhost:9000/todos/${id}`, {
        method: 'DELETE',
    }).then(res => res.json());
};
