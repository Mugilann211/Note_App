import React, { useState } from 'react';
import { NotesProvider } from './context/NotesContext';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <NotesProvider>
      <div>
        <h1>Notes App</h1>
        <SearchBar />
        <button onClick={() => setShowAddForm(true)}>Add Note</button>
        {showAddForm && <NoteForm onClose={() => setShowAddForm(false)} />}
        <NotesList />
      </div>
    </NotesProvider>
  );
};

export default App;
