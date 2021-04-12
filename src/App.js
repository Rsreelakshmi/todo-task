import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import TodoForm from './components/TodoForm';
import TodosLists from './components/TodosLists';
import { getTodos } from './store/thunks/todosThunk';

function App() {
	useEffect(() => {
		store.dispatch(getTodos());
	}, []);
	return (
		<Provider store={store}>
			<Layout>
				<TodoForm />
				<TodosLists />
			</Layout>
		</Provider>
	);
}

export default App;
