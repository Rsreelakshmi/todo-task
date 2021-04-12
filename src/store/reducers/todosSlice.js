import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
	addTodo,
	deleteTodo,
	getTodos,
	updateTodo,
} from '../thunks/todosThunk';

const todosAdapter = createEntityAdapter({
	// index  todos based on id
	selectId: (todo) => todo.id,
	// Keep the "all todos" array sorted based on name
	sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const todosSlice = createSlice({
	name: 'todos',
	initialState: todosAdapter.getInitialState(),
	reducers: {},
	extraReducers: {
		[getTodos.fulfilled]: (state, action) => {
			todosAdapter.setAll(state, action.payload);
		},
		[addTodo.fulfilled]: (state, action) => {
			todosAdapter.addOne(state, action.payload);
		},
		[updateTodo.fulfilled]: (state, action) => {
			const { id, title, done } = action.payload;
			todosAdapter.updateOne(state, {
				id,
				changes: {
					title,
					done,
				},
			});
		},
		[deleteTodo.fulfilled]: (state, action) => {
			todosAdapter.removeOne(state, action.payload);
		},
	},
});

export const { selectAll, selectById } = todosAdapter.getSelectors();
export default todosSlice.reducer;
