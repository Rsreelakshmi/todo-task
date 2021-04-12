import { fireEvent, render, screen } from '@testing-library/react';
import Todo from '../../components/Todo';
import TestWrapper from '../../utils/TestWrapper';
import * as todosThunk from '../../store/thunks/todosThunk';

describe('Todo', () => {
	test('renders Todo wrapper with data', () => {
		render(
			<Todo
				data={{
					id: 1,
					title: 'test',
					done: true,
				}}
			/>,
			{
				wrapper: TestWrapper,
			}
		);
		const labelEl = screen.getByTestId('todo-label');
		const checkboxEl = screen.getByTestId('todo-checkbox');
		const deleteEl = screen.getByTestId('todo-delete');
		expect(labelEl.textContent).toEqual('test');
		expect(checkboxEl.value).toEqual('true');
		expect(deleteEl).toBeInTheDocument();
	});
	test('should dispatch deleteTodo', () => {
		const spy = jest.spyOn(todosThunk, 'deleteTodo');
		render(
			<Todo
				data={{
					id: 1,
					title: 'test',
					done: true,
				}}
			/>,
			{
				wrapper: TestWrapper,
			}
		);
		const deleteEl = screen.getByTestId('todo-delete');
		fireEvent.click(deleteEl);
		expect(spy).toHaveBeenCalledWith(1);
	});
	test('should dispatch updateTodo', () => {
		const spy = jest.spyOn(todosThunk, 'updateTodo');
		render(
			<Todo
				data={{
					id: 1,
					title: 'test',
					done: true,
				}}
			/>,
			{
				wrapper: TestWrapper,
			}
		);
		const checkboxEl = screen.getByTestId('todo-checkbox');
		fireEvent.click(checkboxEl);
		expect(spy).toHaveBeenCalledWith({ done: false, id: 1, title: 'test' });
	});
});
