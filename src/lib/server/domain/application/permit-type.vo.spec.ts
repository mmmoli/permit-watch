import { test, describe, expect } from 'vitest';
import { PermitType } from './permit-type.vo';

describe('VO: PermitType', () => {
	test('creates building by default', () => {
		const buildingPermitType = PermitType.create({
			label: 'building'
		}).value();

		const result = PermitType.createWithDefaults();
		const permit = result.value();

		expect(result.isOk()).toBeTruthy();
		expect(permit.isEqual(buildingPermitType)).toBeTruthy();
	});

	test('fails with unrecognise type', () => {
		const unrecognisePermitTypeResult = PermitType.create({
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			label: 'nothing' as any
		});
		expect(unrecognisePermitTypeResult.isOk()).toBeFalsy();
	});
});
