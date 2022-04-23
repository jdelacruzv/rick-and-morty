import { FC } from "react";
import Character from "../types";
import style from "./CharacterCard.module.css";

export type Props = {
	character: Character;
};

const CharacterCard: FC<Props> = (props) => {
	const { character } = props;

	return (
		<li>
			<h3>{character.name}</h3>
			<img
				className={style.card}
				src={character.image}
				alt={character.name}
				width={180}
			/>
			<p>{character.status}</p>
		</li>
	);
};

export default CharacterCard;
