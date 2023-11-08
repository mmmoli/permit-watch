import { z } from 'zod';
import type { Context } from './context';
import { initTRPC, TRPCError } from '@trpc/server';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	greeting: t.procedure.query(async () => {
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
	createApplication: t.procedure
		.input(z.object({ name: z.string() }))
		.mutation(async ({ input: { name } }) => {
			const useCase = await import('$lib/server/features/create-application').then((m) => {
				return m.createApplicationUseCase;
			});
			const result = await useCase.execute({
				applicantId: name
			});
			if (result.isFail())
				throw new TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: result.error()
				});
			return result.value();
		})
});

export type Router = typeof router;
