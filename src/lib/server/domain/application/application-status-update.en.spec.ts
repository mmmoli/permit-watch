import { describe, test, expect } from 'vitest';
import { ApplicationStatusUpdate } from './application-status-update.en';

describe('En: ApplicationStatusUpdate', () => {
	test('can create with defaults', () => {
		const result = ApplicationStatusUpdate.createWithDefaults();
		expect(result.isOk()).toBeTruthy();
	});

	describe('dates', () => {
		test('cannot be in the future', () => {
			const result = ApplicationStatusUpdate.createWithDefaults({
				when: new Date('3000-01-01')
			});
			expect(result.isFail()).toBeTruthy();
		});

		test('can be set in the past', () => {
			const when = new Date('2000-01-01');
			const result = ApplicationStatusUpdate.createWithDefaults({
				when
			});

			const statusUpdate = result.value();
			expect(result.isOk()).toBeTruthy();
			expect(statusUpdate.get('when')).toEqual(when);
		});
	});
});
