import style from "./SearchInput.module.css";

type SearchInputProps = {
	setCharacterSearch: (ev: string) => void;
};

const SearchInput = ({ setCharacterSearch }: SearchInputProps) => (
	<div className={style.container}>
		<input
			className={style.search}
			type="text"
			name="search"
			onChange={(ev) => setCharacterSearch(ev.target.value)}
			placeholder="Search..."
		/>
	</div>
);

export default SearchInput;
