import style from "./SearchInput.module.css";

type SearchInputProps = {
	setCharacterSearch: (ev: string) => void;
};

const SearchInput = ({ setCharacterSearch }: SearchInputProps) => (
	<input
		className={style.search}
		type="text"
		name="search"
		onChange={(ev) => setCharacterSearch(ev.target.value)}
		placeholder="Search..."
	/>
);

export default SearchInput;
