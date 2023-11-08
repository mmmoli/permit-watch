export interface PokemonItem {
	height: number;
	id: number;
	name: string;
}

export const fetchPokemon = async () => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
	const data: PokemonItem = await response.json();
	return data;
};
