import React, { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const SearchBar: React.FC = () => {
  const { notes } = useContext(NotesContext)!;
  const [query, setQuery] = useState('');

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase()) || note.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search notes..." />
      <div>
        {filteredNotes.map((note) => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
