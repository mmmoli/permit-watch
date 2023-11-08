import { beforeEach, describe, expect, test } from 'vitest';
import { ApplicationStatusLog } from './application-status-log.vo';

describe('VO: ApplicationStatusLog', () => {
	let log: ApplicationStatusLog;
	beforeEach(() => {
		log = ApplicationStatusLog.createWithDefaults().value();
	});

	test('can create with defaults', () => {
		const result = ApplicationStatusLog.createWithDefaults();
		expect(result.isOk()).toBeTruthy();
	});

	test('knows latest', () => {
		const latest = log.latest();
		expect(latest).toBeDefined();
	});

	test('cannot be created empty', () => {
		const result = ApplicationStatusLog.createWithDefaults({
			entries: new Set()
		});
		expect(result.isFail()).toBeTruthy();
	});
});
