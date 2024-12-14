import React, { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { Note } from '../types/Note';

const NoteForm: React.FC<{ note?: Note; onClose: () => void }> = ({ note, onClose }) => {
  const { addNote, updateNote } = useContext(NotesContext)!;
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const handleSubmit = () => {
    if (!title || !content) return alert('Both title and content are required!');
    const newNote: Note = { id: note?.id || Date.now().toString(), title, content };
    note ? updateNote(newNote) : addNote(newNote);
    onClose();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h2>{note ? 'Edit Note' : 'Add Note'}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        rows={5}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleSubmit}>{note ? 'Save Changes' : 'Add Note'}</button>
      <button onClick={onClose} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
    </div>
  );
};

export default NoteForm;
