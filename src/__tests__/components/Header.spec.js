import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
	test('renders header wrapper and logo', () => {
		render(<Header />);
		const header = screen.getByTestId('header');
		const logo = screen.getByTestId('header-logo');
		expect(header).toBeInTheDocument();
		expect(logo).toBeInTheDocument();
	});
});
