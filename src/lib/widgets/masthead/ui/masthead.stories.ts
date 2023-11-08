import type { Meta, StoryObj } from '@storybook/svelte';

import Masthead from './masthead.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Widgets/Masthead',
	component: Masthead,
	tags: ['widgets'],
	argTypes: {}
} satisfies Meta<Masthead>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	render: (args) => ({
		Component: Masthead,
		props: args
	}),
	args: {}
};
