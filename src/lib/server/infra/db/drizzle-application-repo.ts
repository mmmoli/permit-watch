import { Application } from '$lib/server/domain/application/application.ar';
import { permits } from '$lib/server/entities/permit/lib/permit.drizzle-schema';
import { type UID, type IResult, Ok, Logger, ID, Fail } from 'types-ddd';
import { users } from '$lib/server/entities/user/lib/user.drizzle-schema';
import type { ApplicationRepoTrait } from '$lib/server/domain/application/application-repo-trait';
import type { Db } from '../drizzle';

export interface DrizzleApplicationRepositoryDeps {
	db: Db;
}

export class DrizzleApplicationRepository implements ApplicationRepoTrait {
	constructor(protected readonly deps: DrizzleApplicationRepositoryDeps) {}

	async fetchForId(id: UID<string>): Promise<IResult<Application>> {
		try {
			const find = await this.deps.db.query.permits.findFirst({
				where: (applications, { eq }) => eq(applications.id, id.value())
			});
			if (!find) return Fail('No application found');

			const result = Application.createWithDefaults({
				id: ID.create(find.id),
				applicantId: ID.create(find.applicantId)
			});
			if (result.isFail()) return Fail(result.error());
			const application = result.value();
			return Ok(application);
		} catch (error) {
			Logger.error(JSON.stringify(error, null, 2));
			return Fail('Unexpected error');
		}
	}

	async save(application: Application): Promise<IResult<void>> {
		try {
			const values = application.toObject();
			const userId = String(values.applicantId);

			await this.deps.db.insert(users).values({ id: userId }).onConflictDoNothing();

			await this.deps.db
				.insert(permits)
				.values(values)
				.onConflictDoUpdate({
					target: permits.id,
					set: {
						applicantId: values.applicantId
					}
				});
			return Ok();
		} catch (error) {
			Logger.error(JSON.stringify(error, null, 2));
			return Fail('Unexpected error');
		}
	}
}
