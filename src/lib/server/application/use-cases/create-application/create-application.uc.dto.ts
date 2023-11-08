import { z } from 'zod';

export const CreateApplicationUseCaseDTOSchema = z.object({
	applicantId: z.string().min(1)
});

export type CreateApplicationUseCaseDTO = z.infer<typeof CreateApplicationUseCaseDTOSchema>;
