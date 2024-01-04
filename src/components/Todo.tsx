import Input from './Input'
import Stats from './Stats'
import TodoList from './TodoList'

function Todo() {
	return (
		<div className='flex flex-col items-center justify-center px-20 py-12 font-mono'>
			<Input />
            <Stats />
			<TodoList />
		</div>
	)
}

export default Todo
