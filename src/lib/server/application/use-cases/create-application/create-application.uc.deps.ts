import type { ApplicationRepoTrait } from '$lib/server/domain/application/application-repo-trait';

export interface CreateApplicationUseCaseDeps {
	applicationRepo: ApplicationRepoTrait;
}
