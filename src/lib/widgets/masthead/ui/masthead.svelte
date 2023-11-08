<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { UserButton } from '$lib/features/user-button';
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
		<span class="text-sm" data-testid="masthead-tagline">Keeping folks accountable</span>
	</svelte:fragment>

	<div class="flex justify-center space-x-2">
		<span class="text-sm" data-testid="masthead-brand"> Permit Watch </span>
	</div>

	<svelte:fragment slot="trail">
		<UserButton />
	</svelte:fragment>
</AppBar>
