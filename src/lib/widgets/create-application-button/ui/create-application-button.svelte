<script lang="ts">
	import { page } from '$app/stores';
	import { trpc } from '$lib/shared/trpc';
	import ClerkLoaded from 'clerk-sveltekit/client/ClerkLoaded.svelte';
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	const trpcClient = trpc($page);

	let loading = false;
	let userId: string;

	const mutation = async () => {
		if (!userId) throw new Error('No user defined');
		loading = true;
		try {
			await trpcClient.createApplication.mutate({
				applicantId: userId
			});
		} catch (error) {
			console.log(error);
		}
		loading = false;
	};
</script>

<ClerkLoaded let:clerk>
	{#if clerk && clerk.user}
		<button
			type="button"
			aria-busy={loading}
			class="btn variant-filled-primary"
			on:click|preventDefault={() => {
				userId = String(clerk.user?.id);
				mutation();
			}}>Create Application</button
		>
	{:else}
		<SignInButton mode="modal">
			<button type="button" class="btn variant-filled-primary">Create Application</button>
		</SignInButton>
	{/if}
</ClerkLoaded>
