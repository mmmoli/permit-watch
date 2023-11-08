import { test, describe, expect } from 'vitest';
import { BuildingType } from './building-type.vo';

describe('VO: BuildingType', () => {
	test('creates building by default', () => {
		const buildingBuildingType = BuildingType.create({
			label: 'small'
		}).value();

		const result = BuildingType.createWithDefaults();
		const Building = result.value();

		expect(result.isOk()).toBeTruthy();
		expect(Building.isEqual(buildingBuildingType)).toBeTruthy();
	});

	test('fails with unrecognise type', () => {
		const unrecogniseBuildingTypeResult = BuildingType.create({
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			label: 'nothing' as any
		});
		expect(unrecogniseBuildingTypeResult.isOk()).toBeFalsy();
	});
});
