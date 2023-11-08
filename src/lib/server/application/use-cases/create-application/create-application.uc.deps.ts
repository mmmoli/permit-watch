import type { ApplicationRepoTrait } from '$lib/server/domain/application';

export interface CreateApplicationUseCaseDeps {
	applicationRepo: ApplicationRepoTrait;
}
