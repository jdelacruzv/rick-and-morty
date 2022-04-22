import style from "./SearchInput.module.css";

const SearchInput = ({ setCharacterSearch }) => (
	<input
		className={style.search}
		type="text"
		name="search"
		onChange={(ev) => setCharacterSearch(ev.target.value)}
		placeholder="Search..."
	/>
);

export default SearchInput;
