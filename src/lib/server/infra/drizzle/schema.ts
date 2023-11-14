import { userSchema } from '$lib/server/entities/user';
import { permitSchema } from '$lib/server/entities/permit';

export const schema = {
	...userSchema,
	...permitSchema
};
