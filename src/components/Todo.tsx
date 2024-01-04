import Input from './Input'
import Stats from './Stats'
import TodoList from './TodoList'

function Todo() {
	return (
		<div className='flex flex-col items-center justify-center px-10 py-12 mx-auto font-mono lg:px-20 lg:max-w-screen-xl'>
			<Input />
            <Stats />
			<TodoList />
		</div>
	)
}

export default Todo
