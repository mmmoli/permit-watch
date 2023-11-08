import { test, beforeEach, describe, expect } from 'vitest';
import { Application } from './application.ar';
import { ID } from 'types-ddd';

describe('AR: Application', () => {
	test('can create with defaults', () => {
		const result = Application.createWithDefaults({
			applicantId: ID.create()
		});
		expect(result.isOk()).toBeTruthy();
	});

	describe('status log', () => {
		let a1: Application;

		beforeEach(() => {
			a1 = Application.createWithDefaults({
				applicantId: ID.create()
			}).value();
		});

		test('has a log', () => {
			const log = a1.statusUpdates;
			expect(log).toBeDefined();
		});

		test('knows the latest entry', () => {
			const status = a1.latestStatusUpdate();
			expect(status).toBeDefined();
		});
	});
});
