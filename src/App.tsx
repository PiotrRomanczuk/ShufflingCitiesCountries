const capitolCountries = [
	{
		country: 'United States',
		capitol: 'Washington',
	},
	{
		country: 'Germany',
		capitol: 'Berlin',
	},
	{
		country: 'Poland',
		capitol: 'Warsaw',
	},
];

function App() {
	return (
		<>
			<h1>Shuffling game!!!</h1>
			{capitolCountries.map((item, index) => (
				<div key={index}>
					<p>Country: {item.country}</p>
					<p>Capital: {item.capitol}</p>
				</div>
			))}
		</>
	);
}

export default App;
