import React from 'react';
import { Character } from '../types';
import '../App.css';

export type Props = {
  character: Character;
};

export const CharacterCard: React.FC<Props> = (props) => {
  const { character } = props;
  return (
    <li>
      <h3>{character.name}</h3>
      <img 
        className='character-img'
        src={character.image} 
        alt={character.name} 
        width={180}
      />
      <p>{character.status}</p>
    </li>
  );
};

export default CharacterCard;