import Header from './components/Header.jsx'
import Todo from './components/Todo.js'
import { TodosProvider } from './context/TodoProvider.js'

function App() {

	return (
		<TodosProvider>
				<Header />
				<main>
					<Todo />
				</main>
		</TodosProvider>
	)
}

export default App
