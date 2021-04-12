import { act, fireEvent, render, screen } from '@testing-library/react';
import TodoForm from '../../components/TodoForm';
import TestWrapper from '../../utils/TestWrapper';
import * as todosThunk from '../../store/thunks/todosThunk';

describe('TodoForm', () => {
	afterEach(()  => {
		jest.clearAllMocks();
	});
	test('renders TodoForm wrapper', () => {
		render(<TodoForm />, {
			wrapper: TestWrapper,
		});
		const inputEl = screen.getByTestId('todo-form-input');
		const submitEl = screen.getByTestId('todo-form-submit');
		expect(inputEl).toBeInTheDocument();
		expect(submitEl).toBeInTheDocument();
	});
	test('should throw error on submit', async () => {
		render(<TodoForm />, {
			wrapper: TestWrapper,
		});
		const spy = jest.spyOn(todosThunk, 'addTodo');
		const inputEl = screen.getByTestId('todo-form-input');
		const submitEl = screen.getByTestId('todo-form-submit');
        fireEvent.change(inputEl, { target: { value: 'te' } });
		act(() => {
            fireEvent.click(submitEl);
		});
        const errorEl = await screen.findByTestId('todo-form-error');
        expect(errorEl).toBeInTheDocument();
		expect(spy).not.toHaveBeenCalledWith({ title: 'test', done: false });
	});
    test('should submit new todo', async () => {
		render(<TodoForm />, {
			wrapper: TestWrapper,
		});
		const spy = jest.spyOn(todosThunk, 'addTodo');
		const inputEl = screen.getByTestId('todo-form-input');
		const todoForm = screen.getByTestId('todo-form');
        fireEvent.change(inputEl, { target: { value: 'Hello World' } });
		fireEvent.submit(todoForm);
        await screen.findByTestId('todo-form-input');
		expect(spy).toHaveBeenCalled();
	});
});
