import { pgTable, text } from 'drizzle-orm/pg-core';

export const users = pgTable('permits_user', {
	id: text('id').primaryKey()
});

export type UserModel = Readonly<typeof users.$inferSelect>;
