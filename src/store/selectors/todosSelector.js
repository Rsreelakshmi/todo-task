import { selectAll, selectById } from '../reducers/todosSlice';

export const getTodosData = (state) => selectAll(state.todos);
export const getTodoData = (id) => (state) => selectById(state.todos, id);
