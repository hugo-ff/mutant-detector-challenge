import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without error', () => {
	render(<App />);
	const title = screen.getByText(/Mutant Detector/i);
	expect(title).toBeInTheDocument();
});
