import { render, screen } from '@testing-library/react';
import Layout from '../../components/Layout';

describe('Layout', () => {
	test('renders layout wrapper with no children', () => {
		render(<Layout />);
		const layout = screen.getByTestId('layout');
		const main = screen.getByTestId('layout-main');
		expect(layout).toBeInTheDocument();
		expect(main).toBeInTheDocument();
		expect(main).toBeEmptyDOMElement();
	});
	test('renders layout wrapper with children', () => {
		render(
			<Layout>
				<div>Test</div>
			</Layout>
		);
		const layout = screen.getByTestId('layout');
		const main = screen.getByTestId('layout-main');
		expect(layout).toBeInTheDocument();
		expect(main).toBeInTheDocument();
		expect(main).not.toBeEmptyDOMElement();
	});
});
