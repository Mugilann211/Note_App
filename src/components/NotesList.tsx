import React, { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteForm from './NoteForm';
import { Note } from '../types/Note';

const NotesList: React.FC = () => {
  const { notes, deleteNote } = useContext(NotesContext)!;
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [viewingNote, setViewingNote] = useState<Note | null>(null);

  return (
    <div>
      <h2>Notes List</h2>
      {notes.map((note) => (
        <div key={note.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{note.title}</h3>
          <button onClick={() => setViewingNote(note)}>View</button>
          <button onClick={() => setEditingNote(note)}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
      {editingNote && (
        <NoteForm
          note={editingNote}
          onClose={() => {
            setEditingNote(null);
          }}
        />
      )}
      {viewingNote && (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
          <h2>{viewingNote.title}</h2>
          <p>{viewingNote.content}</p>
          <button onClick={() => setViewingNote(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default NotesList;
