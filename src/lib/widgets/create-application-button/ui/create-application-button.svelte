<script lang="ts">
	import { page } from '$app/stores';
	import { trpc } from '$lib/shared/trpc';
	import { Button, type ButtonProps } from '$lib/shared/design-system/ui/button';
	import ClerkLoaded from 'clerk-sveltekit/client/ClerkLoaded.svelte';
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	const trpcClient = trpc($page);

	export let label = 'Create Application';
	let loading = false;

	const mutation = async (userId: string) => {
		if (!userId) throw new Error('No user defined');
		loading = true;
		try {
			await trpcClient.createApplication.mutate({
				applicantId: userId
			});
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	};

	const commonButtonProps: ButtonProps = {
		size: 'sm'
	};
</script>

<ClerkLoaded let:clerk>
	{#if clerk && clerk.user}
		<Button
			{...commonButtonProps}
			aria-busy={loading}
			on:click={() => mutation(String(clerk.user?.id))}
		>
			{label}
		</Button>
	{:else}
		<SignInButton mode="modal">
			<Button {...commonButtonProps}>{label}</Button>
		</SignInButton>
	{/if}
</ClerkLoaded>
