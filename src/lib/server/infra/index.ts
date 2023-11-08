import { CreateApplicationUseCase } from '$lib/server/application/use-cases/create-application';
import { InMemoryApplicationRepository } from './db/in-memory-application-repo';

const applicationRepo = new InMemoryApplicationRepository();

export const createApplicationUseCase = new CreateApplicationUseCase({
	applicationRepo
});
