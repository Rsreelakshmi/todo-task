import { render, screen } from '@testing-library/react';
import Todos from '../../components/Todos';
import TestWrapper from '../../utils/TestWrapper';

describe('Todos', () => {
	test('renders Todo list', () => {
		render(
			<Todos
				title="Test"
				data={[
					{
						id: 1,
						title: 'test',
						done: true,
					},
				]}
			/>,
			{
				wrapper: TestWrapper,
			}
		);
		const titleEl = screen.getByTestId('todos-title');
		const labelEls = screen.getAllByTestId('todo-label');
		expect(titleEl.textContent).toEqual('Test');
		expect(labelEls.length).toEqual(1);
	});
    test('renders empty list', () => {
		render(
			<Todos
				title="Test"
				data={[]}
			/>,
			{
				wrapper: TestWrapper,
			}
		);
		const titleEl = screen.getByTestId('todos-title');
		const emptyEl = screen.getByTestId('todos-empty');
		expect(titleEl.textContent).toEqual('Test');
		expect(emptyEl).toBeInTheDocument();
	});
});
