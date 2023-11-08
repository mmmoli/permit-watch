import { expect, test, describe, type Mock, afterEach, beforeEach, vi } from 'vitest';
import { CreateApplicationUseCase } from './create-application.uc';
import type { ApplicationRepoTrait } from '$lib/server/domain/application';
import { Ok } from 'types-ddd';

type MockedApplicationRepositoryTrait = ApplicationRepoTrait & {
	fetchForId: Mock;
	save: Mock;
};

const MockApplicationRepo = vi.fn();
MockApplicationRepo.prototype.fetchForId = vi.fn();
MockApplicationRepo.prototype.save = vi.fn();

describe('UC: CreateApplication', () => {
	let applicationRepo: MockedApplicationRepositoryTrait;

	beforeEach(() => {
		applicationRepo = new MockApplicationRepo();
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	test('exists', () => {
		const useCase = new CreateApplicationUseCase({
			applicationRepo
		});
		expect(useCase).toBeDefined();
	});

	test('can be executed', async () => {
		// Arrange
		applicationRepo.save.mockResolvedValueOnce(Ok());
		const useCase = new CreateApplicationUseCase({
			applicationRepo
		});

		// Act
		const result = await useCase.execute({});

		// Assert
		expect(result.isOk()).toBeTruthy();
		expect(applicationRepo.save).toBeCalledTimes(1);
	});

	// test('can be executed with valid input', async () => {
	//   // Arrange
	//   applicationRepo.save.mockResolvedValueOnce(Ok());
	//   const useCase = new CreateNoteUseCase({
	//     applicationRepo,
	//   });

	//   // Act
	//   const result = await useCase.execute({
	//     name: {
	//       value: 'Custom Note',
	//     },
	//     body: {
	//       value: 'Custom Note Body',
	//     },
	//   });

	//   // Expect
	//   expect(result.isOk()).toBeTruthy();
	//   expect(applicationRepo.save).toBeCalledTimes(1);
	// });

	// test('can be executed with invalid input', async () => {
	//   // Arrange
	//   applicationRepo.save.mockResolvedValueOnce(Ok());
	//   const useCase = new CreateNoteUseCase({
	//     applicationRepo,
	//   });

	//   // Act
	//   const result = await useCase.execute({
	//     name: {
	//       value: 'C',
	//     },
	//   });

	//   // Expect
	//   expect(result.isFail()).toBeTruthy();
	//   expect(applicationRepo.save).not.toBeCalled();
	// });
});
