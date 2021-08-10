import { validateString, validateObject, validateArray } from './index';

describe('validateString', () => {
	describe('return false', () => {
		test('with param obj', () => {
			const emptyObj = validateString({});
			const obj = validateString({ name: 'Magneto' });
			expect(emptyObj).toBe(false);
			expect(obj).toBe(false);
		});

		test('with param array', () => {
			const emptyArr = validateString([]);
			const arr = validateString(['Magneto']);
			expect(emptyArr).toBe(false);
			expect(arr).toBe(false);
		});

		test('with param number', () => {
			const nan = validateString(NaN);
			const numb = validateString(8);
			expect(nan).toBe(false);
			expect(numb).toBe(false);
		});

		test('with param null', () => {
			const emptyArg = validateString();
			expect(emptyArg).toBe(false);
		});
	});

	describe('return true', () => {
		test('with param string', () => {
			const validString = validateString('Magneto');
			expect(validString).toBe(true);
		});

		test('with param empty string', () => {
			const validString = validateString('');
			expect(validString).toBe(true);
		});
	});
});

describe('validateObject', () => {
	describe('return false', () => {
		test('with param string', () => {
			const emptyString = validateObject('');
			const string = validateObject('Magneto');
			expect(emptyString).toBe(false);
			expect(string).toBe(false);
		});

		test('with param array', () => {
			const emptyArr = validateObject([]);
			const arr = validateObject(['Magneto']);
			expect(emptyArr).toBe(false);
			expect(arr).toBe(false);
		});

		test('with param number', () => {
			const nan = validateObject(NaN);
			const numb = validateObject(8);
			expect(nan).toBe(false);
			expect(numb).toBe(false);
		});

		test('with param null', () => {
			const emptyArg = validateObject();
			expect(emptyArg).toBe(false);
		});
	});

	describe('return true', () => {
		test('with param obj', () => {
			const validObj = validateObject({});
			expect(validObj).toBe(true);
		});

		test('with param empty object', () => {
			const validObj = validateObject({ name: 'Magneto' });
			expect(validObj).toBe(true);
		});
	});
});

describe('validateArray', () => {
	describe('return false', () => {
		test('with param string', () => {
			const emptyString = validateArray('');
			const string = validateArray('Magneto');
			expect(emptyString).toBe(false);
			expect(string).toBe(false);
		});

		test('with param object', () => {
			const emptyObj = validateArray({});
			const obj = validateArray({ name: 'Magneto' });
			expect(emptyObj).toBe(false);
			expect(obj).toBe(false);
		});

		test('with param number', () => {
			const nan = validateArray(NaN);
			const numb = validateArray(8);
			expect(nan).toBe(false);
			expect(numb).toBe(false);
		});

		test('with param null', () => {
			const emptyArg = validateArray();
			expect(emptyArg).toBe(false);
		});
	});

	describe('return true', () => {
		test('with param empty array', () => {
			const emptyArray = validateArray(['Magneto']);
			expect(emptyArray).toBe(true);
		});

		test('with param array', () => {
			const validArray = validateArray(['Magneto']);
			expect(validArray).toBe(true);
		});
	});
});
