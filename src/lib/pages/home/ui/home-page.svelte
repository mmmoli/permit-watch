<script lang="ts">
	import { CreateApplicationButton } from '$lib/widgets/create-application-button';
	import type { PokemonItem } from '../lib/fetch-pokemon';
	export let pokemon: PokemonItem;
</script>

<svelte:head>
	<title>Page override: {pokemon.name}</title>
	<meta
		name="description"
		content={`	
			${pokemon.name} is a Pokémon species in Nintendo and Game Freak's Pokémon franchise.
		`}
	/>
</svelte:head>

<h1 class="h1" data-testid="home-headline">Welcome to {pokemon.name}</h1>
<p>
	Visit
	<a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<CreateApplicationButton />
