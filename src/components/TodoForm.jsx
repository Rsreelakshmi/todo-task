import { Formik, Form, Field, ErrorMessage } from 'formik';
import { string, object } from 'yup';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/thunks/todosThunk';

// Validation schema
const schema = object().shape({
	title: string()
		.required('Todo is a required field')
		.min(3, 'Must be a minimum of 3 characters')
		.max(100, 'Can only be a maximum of 100 characters'),
});

const TodoForm = () => {
	const dispatch = useDispatch();
	return (
		<Formik
			initialValues={{ title: '' }}
			validationSchema={schema}
			onSubmit={(values, { setSubmitting, setTouched, resetForm }) => {
				dispatch(addTodo(values)).then(() => {
					setSubmitting(false);
					resetForm();
					setTouched({
						title: false,
					});
				});
			}}
		>
			{({ isSubmitting }) => (
				<Form className="mt-8 max-w-md m-auto" data-testid="todo-form">
					<div className="grid grid-cols-1 gap-6">
						<label htmlFor="title" className="block">
							<span className="text-gray-700">Enter Todo</span>
							<Field
								className="mt-0 block w-full h-12 text-2xl px-0.5 border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-900"
								type="title"
								name="title"
								placeholder="e.g. Buy groceries"
								data-testid="todo-form-input"
							/>
							<ErrorMessage
								className="text-red-500 mt-2"
								name="title"
								component="div"
								data-testid="todo-form-error"
							/>
						</label>
					</div>
					<button
						className="w-full my-2 p-3 bg-blue-900 text-white rounded shadow"
						type="submit"
						disabled={isSubmitting}
						data-testid="todo-form-submit"
					>
						Add Todo
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default TodoForm;
