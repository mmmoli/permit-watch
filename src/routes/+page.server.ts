import { fetchPokemon } from '$lib/pages/home/lib/fetch-pokemon';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		pokemon: fetchPokemon()
	};
};
