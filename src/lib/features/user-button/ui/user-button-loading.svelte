<script lang="ts">
	import ClerkLoading from 'clerk-sveltekit/client/ClerkLoading.svelte';
	import { Skeleton } from '$lib/shared/design-system/ui/skeleton';
</script>

<ClerkLoading>
	<Skeleton class="h-[32px] w-[32px] rounded-full" />
</ClerkLoading>
