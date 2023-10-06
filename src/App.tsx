import './App.css';
import { CountryCapitalGame } from './CountryCapitalGame';

function App() {
	return (
		<div className='App'>
			<h1>Country and Capital game!!!</h1>
			<div className='game'>
				<CountryCapitalGame data={{ Germany: 'Berlin', Azerbeijan: 'Baku' }} />
			</div>
		</div>
	);
}

export default App;
