import { CreateApplicationUseCase } from '../application/use-cases/create-application';
import { applicationRepo } from '../infra/db/application-repo';

export const createApplicationUseCase = new CreateApplicationUseCase({
	applicationRepo: applicationRepo
});
