import { createContext } from '$lib/shared/trpc/api/context';
import { router } from '$lib/shared/trpc/api/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = createTRPCHandle({ router, createContext });
