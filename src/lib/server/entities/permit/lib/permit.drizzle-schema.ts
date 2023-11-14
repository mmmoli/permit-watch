import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { userSchema } from '../../user';
import { relations } from 'drizzle-orm';

export const permits = pgTable('permits_permit', {
	id: uuid('id').primaryKey(),
	applicantId: text('applicant_id')
		.references(() => userSchema.users.id)
		.notNull()
});

export const permitRelations = relations(permits, ({ one }) => ({
	applicantId: one(userSchema.users, {
		fields: [permits.applicantId],
		references: [userSchema.users.id]
	})
}));

export type PermitModel = Readonly<typeof permits.$inferSelect>;
