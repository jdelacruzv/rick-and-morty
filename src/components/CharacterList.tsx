import { useState, useEffect } from "react";
import Character from "../types";
import CharacterCard from "./CharacterCard";
import SearchInput from "./SearchInput";
import ScrollUpButton from "./ScrollUpButton";
import style from "./CharacterList.module.css";

const CharacterList = () => {
	const [characterList, setCharacterList] = useState<Character[]>([]);
	const [characterSearch, setCharacterSearch] = useState<string>("");
	const [characterPage, setCharacterPage] = useState<number>(1);

	const normalizaSearch = characterSearch.toLowerCase();

	const characterFiltered = characterSearch
		? characterList.filter((character) =>
				character.name.toLowerCase().startsWith(normalizaSearch))
		: characterList;

	const characterRendered =
		characterFiltered.length > 0 ? (
			characterFiltered.map((character) => (
				<CharacterCard key={character.id} character={character} />
			))
		) : (
			<p className={style.message}>No hay personajes...</p>
		);

	const nextCharacterPage = async () => {
		const nextCharImg = await fetchData(characterPage + 1);
		setCharacterPage(() => characterPage + 1);
		setCharacterList([...characterList, ...nextCharImg.results]);
	};

	const fetchData = async (page: number) => (
		await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&limit=20`)
	).json();

	useEffect(() => {
		// función autoinvocada
		(async () => {
			const data = await fetchData(1);
			setCharacterList(data.results);
		})();
	}, []);

	return (
		<>
			<SearchInput setCharacterSearch={setCharacterSearch} />
			<ul className={style.list}>{characterRendered}</ul>
			<button className={style.next} onClick={nextCharacterPage}>
				Next character
			</button>
			<ScrollUpButton />
		</>
	);
};

export default CharacterList;
