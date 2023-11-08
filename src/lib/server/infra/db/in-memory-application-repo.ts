import { Application, type ApplicationRepoTrait } from '$lib/server/domain/application';
import { type UID, type IResult, Ok, Logger, ID } from 'types-ddd';

export class InMemoryApplicationRepository implements ApplicationRepoTrait {
	async fetchForId(id: UID<string>): Promise<IResult<Application>> {
		Logger.info('Fake fetchForId');
		const application = Application.createWithDefaults({
			applicantId: ID.create(id)
		}).value();
		Logger.info(JSON.stringify(application.toObject(), undefined, 2));
		return Ok(application);
	}

	async save(application: Application): Promise<IResult<void>> {
		Logger.info('Fake Permit application…');
		Logger.info(JSON.stringify(application.toObject(), undefined, 2));
		return Ok();
	}
}
