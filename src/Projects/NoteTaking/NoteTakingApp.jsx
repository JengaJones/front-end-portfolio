import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import './NoteTakingApp.css';

const NoteTakingApp = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (event) => {
        setCurrentNote(event.target.value);
    };

    const addNote = () => {
        if (currentNote.trim()) {
            setNotes([...notes, currentNote.trim()]);
            setCurrentNote('');
        }
    };

    const editNote = (index) => {
        setIsEditing(true);
        setEditIndex(index);
        setCurrentNote(notes[index]);
    };

    const saveNote = () => {
        const updatedNotes = notes.map((note, index) => (index === editIndex ? currentNote.trim() : note));
        setNotes(updatedNotes);
        setCurrentNote('');
        setIsEditing(false);
        setEditIndex(null);
    };

    const deleteNote = (index) => {
        setNotes(notes.filter((note, i) => i !== index));
    };

    return (
        <div className="note-taking-app-background">
            <div className="note-taking-app-container">
                <Link to="/" className="home-link">Home</Link>
                <div className="note-taking-app">
                    <div className="note-taking-input">
                        <input
                            type="text"
                            value={currentNote}
                            onChange={handleInputChange}
                            placeholder="Enter new note"
                        />
                        {isEditing ? (
                            <button onClick={saveNote}>
                                <SaveIcon style={{ color: 'white' }} />
                            </button>
                        ) : (
                            <button onClick={addNote}>Add</button>
                        )}
                    </div>
                    <ul className="note-taking-items">
                        {notes.map((note, index) => (
                            <li key={index}>
                                {note}
                                <div className="note-actions">
                                    <button onClick={() => editNote(index)}>
                                        <EditIcon style={{ color: 'white' }} />
                                    </button>
                                    <button onClick={() => deleteNote(index)}>
                                        <DeleteIcon style={{ color: 'white' }} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NoteTakingApp;
