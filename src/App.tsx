import "./App.css";
import CharacterList from "./components/CharacterList";

const App = () => {
	return (
		<div className="app">
			<h1>Rick And Morty</h1>
			<CharacterList />			
		</div>
	);
};

export default App;
