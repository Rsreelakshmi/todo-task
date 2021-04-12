import { useSelector } from 'react-redux';
import { getTodosData } from '../store/selectors/todosSelector';
import Todos from './Todos';

const TodosLists = () => {
	const data = useSelector(getTodosData);
	return (
		<div className="m-auto max-w-md">
			<section className="mb-4" data-testid="todos-pending-list">
				<Todos
					title="Pending"
					data={data.filter((item) => item.done !== true)}
				/>
			</section>
			<section className="mb-4" data-testid="todos-completed-list">
				<Todos
					title="Completed"
					data={data.filter((item) => item.done === true)}
				/>
			</section>
		</div>
	);
};

export default TodosLists;
