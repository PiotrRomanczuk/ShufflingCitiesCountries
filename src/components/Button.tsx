import styles from './Button.module.css'; // Import the CSS module

type ButtonState = 'DEFAULT' | 'SELECTED' | 'WRONG';

const Button = ({
	value,
	state,
	onClick,
}: {
	value: string;
	state: ButtonState;
	onClick: () => void;
}) => {
	const className =
		state === 'SELECTED'
			? styles.selected
			: state === 'WRONG'
			? styles.wrong
			: '';

	return (
		<button className={className} onClick={onClick}>
			{value}
		</button>
	);
};

export { Button };
export type { ButtonState };
