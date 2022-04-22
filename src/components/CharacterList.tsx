import React from 'react';
import { Character } from '../types';
import { CharacterCard } from "./CharacterCard";
import '../App.css';

export const CharacterList = () => {
  // useState devuelve un array e inicializa en este caso un array vacío
  // el primer valor viene hacer como getter y el segundo como un setter
  const [characterList, setCharacterList] = React.useState<Character[]>([]);

  // useEffect permite tener disponible el ciclo de vida del componente 
  // para ejecutar funciones en distintos momentos
  React.useEffect(() => {
    // función autoinvocada
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then((res) => res.json());
      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      <ul className="character-list">
        {characterList.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </>
  );
};