const inputcon = document.querySelector('#inputtext'); //Tareget the input
const addbtn = document.querySelector('.addbtn'); //  Target the button
const p = document.querySelector('.ptag'); // Target the p tag 
const addul = document.querySelector('.ullist'); // Target the UL

let editingNote = null; // Globally setting the variable 
const generateID = () => Math.random().toString(36).substr(2, 9); // Generating id for each msg

const createNote = (noteText) => {
    const noteID = generateID();
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note-item');
    noteDiv.setAttribute('data-id', noteID); // Track the id please later i can get it 

    const noteBar = document.createElement('div');
    noteBar.classList.add('note-bar');

    const noteP = document.createElement('p');
    noteP.classList.add('note-text');
    noteP.textContent = noteText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
        inputcon.value = noteP.textContent;
        addbtn.textContent = "Update";
        editingNote = noteP;
    });


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this note?')) {
            noteDiv.remove();
        }
    });

    noteBar.appendChild(noteP);
    noteBar.appendChild(editBtn);
    noteBar.appendChild(deleteBtn);
    noteDiv.appendChild(noteBar);

    return noteDiv;
};


const saveNotesToLocalStorage = () => {
    const notes = [];
    document.querySelectorAll('.note-item').forEach(note => {
        notes.push({
            id: note.getAttribute('data-id'),
            text: note.querySelector('.note-text').textContent
        });
    });
    localStorage.setItem('notes', JSON.stringify(notes));
};

const getNotesFromLocalStorage = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
};

const addNewNote = () => {
    const inputText = inputcon.value.trim();
    if (inputText.length <= 0) {
        p.textContent = "Your Note is empty!";
        return;
    }
    p.textContent = "";

    if (editingNote) {
        editingNote.textContent = inputText;
        editingNote = null;
        addbtn.textContent = "Add Note";
    } else {
        const noteElement = createNote(inputText);
        addul.appendChild(noteElement);
        saveNotesToLocalStorage();
    }
    inputcon.value = "";
};

window.addEventListener('load', () => {
    const notes = getNotesFromLocalStorage();
    notes.forEach(note => {
        const noteElement = createNote(note.text);
        noteElement.setAttribute('data-id', note.id);
        addul.appendChild(noteElement);
    });
});


addbtn.addEventListener('click', addNewNote);