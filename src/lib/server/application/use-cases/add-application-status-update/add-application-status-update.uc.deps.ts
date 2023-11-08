import type { ApplicationRepoTrait } from '$lib/server/domain/application';

export interface AddApplicationStatusUpdateUseCaseDeps {
	applicationRepo: ApplicationRepoTrait;
}
