import { createAsyncThunk } from '@reduxjs/toolkit';
import db from '../../services/database';

/**
 * Get todos from indexed DB
 */
export const getTodos = createAsyncThunk('todos/getAllTodos', async () => {
	return await db.table('todos').toArray();
});

/**
 * Add todo to indexed DB
 */
export const addTodo = createAsyncThunk(
	'todos/addTodo',
	async ({ title, done = false }) => {
		const id = await db.table('todos').add({ title, done });
		return { id, title, done };
	}
);

/**
 * Delete todo from indexed DB
 */
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
	await db.table('todos').delete(id);
	return id;
});

/**
 * Update todo in indexed DB
 */
export const updateTodo = createAsyncThunk(
	'todos/updateTodo',
	async ({ id, title, done = false }) => {
		await db.table('todos').update(id, { title, done });
		return { id, title, done };
	}
);
