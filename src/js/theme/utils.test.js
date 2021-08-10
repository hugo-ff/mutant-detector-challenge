import palette from './palette';
import { getColor } from './utils';

describe('getColor function', () => {
	test('return default color primary when has wrong args', () => {
		const emptyArg = getColor();
		expect(emptyArg).toEqual('');
		const nullColor = getColor('third', 'second');
		expect(nullColor).toEqual('');
		const arrayArg = getColor([]);
		expect(arrayArg).toEqual('');
		const wrongGrey = getColor('grey', '1000');
		expect(wrongGrey).toEqual('');
	});

	test('return primary palette', () => {
		const primaryMain = getColor('primary', 'main');
		expect(primaryMain).toEqual(palette.primary.main);
		const primaryDark = getColor('primary', 'dark');
		expect(primaryDark).toEqual(palette.primary.dark);
	});

	test('return success palette', () => {
		const successMain = getColor('success', 'main');
		expect(successMain).toEqual(palette.success.main);
		const successLight = getColor('success', 'light');
		expect(successLight).toEqual(palette.success.light);
	});
});
