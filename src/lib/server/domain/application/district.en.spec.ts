import { describe, expect, test } from 'vitest';
import { District } from './district.en';

describe('En: District', () => {
	test('can be created', () => {
		const result = District.create({
			name: 'ทวีวัฒนา'
		});
		expect(result.isOk()).toBeTruthy();
	});

	test('knows the district (th)', () => {
		const province = 'กรุงเทพฯ';
		const district = District.create({
			name: 'ทวีวัฒนา'
		}).value();
		expect(district.province).toBe(province);
	});

	test('knows a different district (th)', () => {
		const province = 'นครศรีธรรมราช';
		const district = District.create({
			name: 'ทุ่งใหญ่'
		}).value();
		expect(district.province).toBe(province);
	});
});
