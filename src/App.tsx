import { useState } from 'react';
import './App.css';

type ButtonState = 'DEFAULT' | 'SELECTED' | 'WRONG';
const blueColor = '#009BFF';

function CountryCapitalGame({ data }: { data: Record<string, string> }) {
	const countries = Object.keys(data);
	const capitols = Object.values(data);
	const options = [...countries, ...capitols];

	const [colorMap, setColorMap] = useState<Record<string, ButtonState>>({});

	options.sort(() => Math.random() - 0.5);

	return (
		<>
			{options.map((option, idx) => {
				return (
					<button
						className={colorMap[option] === 'SELECTED' ? 'selected' : ''}
						onClick={() => {
							setColorMap({
								...colorMap,
								[option]: 'SELECTED',
							});
						}}
						key={idx}
					>
						{option}
					</button>
				);
			})}
		</>
	);
}

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
