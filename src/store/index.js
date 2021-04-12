import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosSlice';

export default configureStore({
	reducer: {
        todos: todosReducer,
    },
});
