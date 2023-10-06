import { useState } from 'react';
import { Button } from './components/Button';

import { ButtonState } from './components/Button';

type Option = {
	value: string;
	state: ButtonState;
};

const randomize = () => {
	return Math.random() - 0.5;
};

export const CountryCapitalGame = ({
	data,
}: {
	data: Record<string, string>;
}) => {
	const getCountries = (data: Record<string, string>) => {
		return Object.keys(data);
	};
	const getCapitals = (data: Record<string, string>) => {
		return Object.values(data);
	};

	const countries = getCountries(data);
	const capitals = getCapitals(data);

	const [options, setOptions] = useState<Option[]>(() =>
		[...countries, ...capitals].sort(randomize).map((value) => ({
			value,
			state: 'DEFAULT',
		}))
	);

	const [selected, setSelected] = useState<Option | undefined>();

	const isPartOfPair = (opt: Option, selected: Option, option: Option) => {
		return opt.value === selected.value && opt.value === option.value;
	};

	const isGameOver = options.length === 0;

	const handleOptionClick = (option: Option) => {
		if (!selected) {
			setSelected(option);

			setOptions(() =>
				options.map((opt) => ({
					...opt,
					state: opt === option ? 'SELECTED' : 'DEFAULT',
				}))
			);
		}

		// if is already selected
		else {
			if (
				// Check if the pairing is correct
				selected.value === data[option.value] ||
				data[selected.value] === option.value
			) {
				setOptions(
					options.filter((opt) => !isPartOfPair(opt, option, selected))
				);
			} else {
				setOptions(
					options.map((opt) => {
						return !isPartOfPair(opt, option, selected)
							? { ...opt, state: 'WRONG' }
							: opt;
					})
				);
			}
			setSelected(undefined);
		}
	};

	return (
		<>
			{isGameOver ? (
				<h1 className='green'>Congratulations</h1>
			) : (
				options.map((option) => (
					<Button
						key={option.value}
						value={option.value}
						state={option.state}
						onClick={() => handleOptionClick(option)}
					/>
				))
			)}
		</>
	);
};
