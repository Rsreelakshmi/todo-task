import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTodo, updateTodo } from '../store/thunks/todosThunk';

const Todo = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<li className="border rounded shadow mb-2 p-4 flex items-center">
			<label
				htmlFor={data.id}
				className="flex flex-1 items-center cursor-pointer gap-2"
				data-testid="todo-label"
			>
				<input
					className="w-6 h-6"
					type="checkbox"
					value={data.done}
					name={data.id}
					id={data.id}
					onChange={() => {
						dispatch(
							updateTodo({
								...data,
								done: !data.done,
							})
						);
					}}
					checked={data.done}
					data-testid="todo-checkbox"
				/>
				<span className="text-lg" data-testid="todo-label-text">
					{data.title}
				</span>
			</label>
			<div className="w-0.5 h-7 bg-gray-200 mx-3" />
			<button
				className="text-sm text-gray-500 p-2"
				onClick={() => {
					dispatch(deleteTodo(data.id));
				}}
				data-testid="todo-delete"
			>
				Delete
			</button>
		</li>
	);
};

Todo.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
		title: PropTypes.string.isRequired,
		done: PropTypes.bool.isRequired,
	}),
};

export default Todo;
