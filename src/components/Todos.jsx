import PropTypes from 'prop-types';
import Todo from './Todo';

const Todos = ({ data, title }) => {
	return (
		<div className="w-full overflow-y-auto">
			<h2
				className="text-xl py-2 my-2 border-b-2"
				data-testid="todos-title"
			>
				{title}
			</h2>
			<ul data-testid="todos-list">
				{!data.length && (
					<li className="p-5 text-center" data-testid="todos-empty">
						<span className="text-xl capitalize">
							no {title} todos
						</span>
					</li>
				)}
				{data.length > 0 &&
					data.map((todo) => <Todo key={todo.id} data={todo} />)}
			</ul>
		</div>
	);
};

Todos.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			title: PropTypes.string.isRequired,
			done: PropTypes.bool.isRequired,
		})
	).isRequired,
};

export default Todos;
