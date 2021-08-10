import { render, screen, fireEvent } from '@testing-library/react';
import LinkTab from './LinkTab';

describe('LinkTab component', () => {
	const onClick = jest.fn();
	beforeEach(() => {
		render(<LinkTab onClick={onClick} />);
	});

	test('renders without error', () => {
		const tab = screen.getByRole('tab');
		expect(tab).toBeInTheDocument();
	});

	test('execute callback when user clicks', () => {
		const tab = screen.getByRole('tab');
		fireEvent.click(tab);
		expect(onClick).toHaveBeenCalled();
	});
});
