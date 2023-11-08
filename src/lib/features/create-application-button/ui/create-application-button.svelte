<script lang="ts">
	import { page } from '$app/stores';
	import { trpc } from '$lib/shared/trpc';
	const trpcClient = trpc($page);

	let loading = false;

	const mutation = async () => {
		try {
			await trpcClient.createApplication.mutate({
				name: 'user-xyz'
			});
		} catch (error) {
			console.log(error);
		}
	};

	const clickHandler = async () => {
		loading = true;
		await mutation();
		loading = false;
	};
</script>

<button
	type="button"
	aria-busy={loading}
	class="btn variant-filled-primary"
	on:click|preventDefault={clickHandler}>Create Application</button
>
