<script lang="ts">
	import type { PokemonItem } from '../lib/fetch-pokemon';
	export let pokemon: PokemonItem;
</script>

<svelte:head>
	<title>Page override: {pokemon.name}</title>
</svelte:head>

<h1 class="h1" data-testid="home-headline">Welcome to {pokemon.name}</h1>
<p>
	Visit
	<a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<button type="button" class="btn variant-filled-primary">Button</button>
