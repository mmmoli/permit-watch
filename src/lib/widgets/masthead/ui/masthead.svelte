<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar
	background="bg-none"
	border="border-t-2 border-b-2 border-black"
	gridColumns="grid-cols-3"
	padding="py-2"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<span class="text-sm" data-testid="masthead-tagline">Creative Tech Entrepreneur</span>
	</svelte:fragment>

	<div class="flex justify-center space-x-2">
		<span class="text-sm" data-testid="masthead-brand"> Michele Memoli </span>
	</div>

	<svelte:fragment slot="trail">
		<button type="button" class="btn btn-sm variant-filled-primary">Button</button>
	</svelte:fragment>
</AppBar>
