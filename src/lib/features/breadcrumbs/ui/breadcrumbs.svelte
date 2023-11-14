<script lang="ts">
	import { page } from '$app/stores';
	import { urlToBreadcrumbTrail } from '../utils/url-to-breadcrumb-trail';
	$: items = urlToBreadcrumbTrail($page.url);
</script>

<nav aria-label="Breadcrumb" data-testid="breadcrumbs">
	<ol>
		{#each items as item, index}
			<li>
				<a href={item.href} aria-current={index === items.length - 1 ? 'page' : undefined}>
					{item.label}
				</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	nav {
		@apply inline-block flex space-x-2;
	}

	nav li {
		@apply inline;
	}

	nav li + li::before {
		@apply inline-block mr-2 ml-1 border-r border-stone-500 h-2 rotate-12;
		content: '';
	}

	nav [aria-current='page'] {
		@apply font-bold;
	}
</style>
