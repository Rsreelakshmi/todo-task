import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
	test('renders layout', () => {
		render(<App />);
		const layout = screen.getByTestId('layout');
		expect(layout).toBeInTheDocument();
	});
});
