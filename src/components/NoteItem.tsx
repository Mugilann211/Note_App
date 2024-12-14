import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { Note } from '../types/Note';

const NoteItem: React.FC<{ note: Note }> = ({ note }) => {
  const { deleteNote } = useContext(NotesContext)!;

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
