import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleClerk } from 'clerk-sveltekit/server';
import { CLERK_SECRET_KEY } from '$env/static/private';

import { createContext } from '$lib/shared/trpc/api/context';
import { router } from '$lib/shared/trpc/api/router';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = sequence(
	handleClerk(CLERK_SECRET_KEY, {
		debug: true,
		protectedPaths: ['/dash'],
		signInUrl: '/sign-in'
	}),
	createTRPCHandle({ router, createContext })
);
