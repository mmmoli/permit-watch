<script lang="ts">
	import type { PageData } from './$types';
	import { HomePage } from '$lib/pages/home';
	export let data: PageData;
	const { pokemon } = data;
</script>

<HomePage {pokemon} />
