/* eslint-disable no-debugger */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from 'react';
import './App.css';

type ButtonState = 'DEFAULT' | 'SELECTED' | 'WRONG';

type Option = {
	value: string;
	state: ButtonState;
};

function CountryCapitalGame({ data }: { data: Record<string, string> }) {
	const countries = Object.keys(data);
	const capitals = Object.values(data);

	const [options, setOptions] = useState<Option[]>(
		[...countries, ...capitals]
			.sort(() => Math.random() - 0.5)
			.map((value) => ({
				value,
				state: 'DEFAULT',
			}))
	);

	const [selected, setSelected] = useState<Option>();
	const isGameOver = options.length === 0;

	if (isGameOver) {
		return <h1 className='green'>Congratulations</h1>;
	}

	return (
		<>
			{options.map((option) => {
				return (
					<button
						className={
							option.state === 'SELECTED'
								? 'selected'
								: option.state === 'WRONG'
								? 'wrong'
								: ''
						}
						key={option.value}
						onClick={() => {
							if (!selected) {
								setSelected(option);
								setOptions(
									options.map((opt) => {
										return opt === option
											? {
													...option,
													state: 'SELECTED',
											  }
											: { ...opt, state: 'DEFAULT' };
									})
								);
							} else {
								if (
									// good pairing
									selected.value === data[option.value] ||
									data[selected.value] === option.value
								) {
									setOptions(
										options.filter((opt) => {
											return !(
												opt.value === selected.value ||
												opt.value === option.value
											);
										})
									);
								} else {
									// wrong pairing
									setOptions(
										options.map((opt) => {
											return opt.value === selected.value ||
												opt.value === option.value
												? { ...opt, state: 'WRONG' }
												: opt;
										})
									);
								}
								setSelected(undefined);
							}
						}}
					>
						{option.value}
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
