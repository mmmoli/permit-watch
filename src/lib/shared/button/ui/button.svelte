<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';

	const button = cva('button', {
		variants: {
			intent: {
				primary: 'variant-filled-primary',
				secondary: 'secondary'
			},
			size: {
				small: 'small',
				medium: 'medium'
			}
		},
		compoundVariants: [{ intent: 'primary', size: 'medium', class: 'primaryMedium' }]
	});

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {}

	/**
	 * For Svelte components, we recommend setting your defaultVariants within
	 * Svelte props (which are `undefined` by default)
	 */
	export let intent: $$Props['intent'] = 'primary';
	export let size: $$Props['size'] = 'medium';
</script>

<button {...$$props} class={button({ intent, size, class: $$props.class })}>
	<slot />
</button>
