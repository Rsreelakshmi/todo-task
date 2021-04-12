import store from '../../../store';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../../../store/thunks/todosThunk';
import { getTodoData, getTodosData } from  '../../../store/selectors/todosSelector';

describe('todosReducer', () => {
	test('should set initial state as empty list', () => {
		expect(getTodosData(store.getState()).length).toEqual(0);
	});
	test('should set initial state from DB', async () => {
		await store.dispatch(getTodos());
		expect(getTodosData(store.getState()).length).toEqual(1);
	});
	test('should add todo', async () => {
		await store.dispatch(addTodo({
			title: 'test'
		}));
		expect(getTodosData(store.getState()).length).toEqual(2);
	});
	test('should update todo', async () => {
		await store.dispatch(updateTodo({
			id: 2,
			title: 'update',
			done: true
		}));
		expect(getTodoData(2)(store.getState()).title).toEqual('update');
	});
	test('should delete todo', async () => {
		await store.dispatch(deleteTodo(2));
		expect(getTodoData(2)(store.getState())).toBeFalsy();
	});
});
