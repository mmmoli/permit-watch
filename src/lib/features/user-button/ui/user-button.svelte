<script lang="ts">
	import ClerkLoading from 'clerk-sveltekit/client/ClerkLoading.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
</script>

<ClerkLoading>…</ClerkLoading>

<SignedIn>
	<UserButton afterSignOutUrl="/" />
</SignedIn>
<SignedOut>
	<SignInButton mode="modal" class="inline-block" />
</SignedOut>
