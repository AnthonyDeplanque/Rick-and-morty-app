import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayCharacterList from './components/DisplayCharacterList';

import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('Rick');
  useEffect(() => {
    fetchCharacter()
  }, [search]);
  const fetchCharacter = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((result) => result.data)
      .then((result) => result.results)
      .then(setCharacters)
  };
  return (
    <>
      <div className="block-search">
        <h1>My first React API</h1>
        <h3>Type a name from the Rick and Morty Universe</h3>
        <input className="search-input"
          type='text'
          onChange={(e) => setSearch((e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)))}
          value={search}
        />
      </div>
      <DisplayCharacterList characters={characters} />
    </>
  );
};
export default App;
