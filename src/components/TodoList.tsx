import TodoItem from './TodoItem'
import { todoType } from '../context/TodoProvider'
import useTodos from '../hooks/useTodos'

function TodoList() {
	
const {state} = useTodos()	

	return (
		<ul className='flex flex-col justify-center w-full gap-6 px-4 py-6 mt-10 border-2 border-black rounded '>
			{state?.map((todo: todoType) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} isDone={todo.isDone} />
			))}
			{!state && <p>Failed to fetch todos.</p>}
		</ul>
	)
}

export default TodoList
