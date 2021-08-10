import { render, screen } from '@testing-library/react';
import Header from './Header';
import links from './links.json';

describe('Header component', () => {
	beforeEach(() => {
		render(<Header links={links} />);
	});

	test('render without error', () => {
		const header = screen.getByText('Magneto');
		expect(header).toBeInTheDocument();
	});

	test('render navTabs', () => {
		const tabs = screen.getByRole('tablist');
		expect(tabs).toBeInTheDocument();
	});
});
