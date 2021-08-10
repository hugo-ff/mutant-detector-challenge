import { render, screen, fireEvent } from '@testing-library/react';
import links from '../Header/links.json';
import NavTabs from './NavTabs';

describe('navTabs component', () => {
	beforeEach(() => {
		render(<NavTabs links={links} />);
	});

	test('renders without error', () => {
		const testID = 'navTabs';
		const navTabs = screen.getByTestId(testID);
		expect(navTabs).toBeInTheDocument();
	});

	test('tablist renders', () => {
		const tablist = screen.getByRole('tablist');
		expect(tablist).toBeInTheDocument();
	});

	describe('user clicks on linktabs', () => {
		let firstTab;
		beforeEach(() => {
			firstTab = screen.getByRole('tab', { name: 'Detector de mutantes' });
			fireEvent.click(firstTab);
		});

		test('linkTab with label "Detector de mutantes" turns active when user clicks on it', () => {
			expect(firstTab).toHaveAttribute('aria-selected', 'true');
		});

		test('linkTab with label "Detector de mutantes" turns inactive when user clicks another tab', () => {
			const secondTab = screen.getByRole('tab', { name: 'Cargar mutantes' });
			fireEvent.click(secondTab);
			expect(firstTab).toHaveAttribute('aria-selected', 'false');
		});
	});
});
