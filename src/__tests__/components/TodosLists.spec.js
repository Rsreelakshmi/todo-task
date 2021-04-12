import { render, screen } from '@testing-library/react';
import TodosLists from '../../components/TodosLists';
import TestWrapper from '../../utils/TestWrapper';

describe('TodosLists', () => {
	test('renders Todos lists', () => {
		render(<TodosLists />, {
			wrapper: TestWrapper,
		});
		const pendingListEl = screen.getByTestId('todos-pending-list');
		const completedListEl = screen.getByTestId('todos-completed-list');
		expect(pendingListEl).toBeInTheDocument();
		expect(completedListEl).toBeInTheDocument();
	});
});
