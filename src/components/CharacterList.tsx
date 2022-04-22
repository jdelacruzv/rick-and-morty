import { useState, useEffect } from 'react';
import { Character } from '../types';
import { CharacterCard } from "./CharacterCard";
import style from './CharacterList.module.css';
import SearchInput from './SearchInput';

export const CharacterList = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [characterSearch, setCharacterSearch] = useState<string>('');

  const normalizaSearch = characterSearch.toLowerCase();
	
  const characterFiltered = characterSearch
		? characterList.filter((user) => user.name.toLowerCase().startsWith(normalizaSearch))
		: characterList;
    
  const characterRendered = characterFiltered.length > 0
    ? characterFiltered.map(character => <CharacterCard key={character.id} character={character} />)
    : <p>No hay personajes...</p>
  
  useEffect(() => {
    // función autoinvocada
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then((res) => res.json());
      setCharacterList(data.results);
      console.log(data.results);
    })();
  }, []);

  return (
		<>
			<SearchInput setCharacterSearch={setCharacterSearch} />
			<ul className={style.list}>
        {characterRendered}
      </ul>
		</>
	);
};