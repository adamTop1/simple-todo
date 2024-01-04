import { KeyboardEvent, useRef} from 'react'
import useTodos from '../hooks/useTodos'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Input() {
	let addTodoRef = useRef<HTMLInputElement>(null)
	const { dispatch } = useTodos()

	const addTodoKeybordEvent = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			if (addTodoRef.current?.value === '') {
				toast.error('Enter some text!', {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				})
				return
			}
			
			if (addTodoRef.current?.value !== undefined) {
				dispatch({ type: 'ADD', payload: addTodoRef.current?.value })
				addTodoRef.current.value = ''
			}
		}
	}
	const addTodo = () => {
			if (addTodoRef.current?.value === '') {
				toast.error('Enter some text!', {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				})
				return
			}
			
			if (addTodoRef.current?.value !== undefined) {
				dispatch({ type: 'ADD', payload: addTodoRef.current?.value })
				addTodoRef.current.value = ''
			}
	}

	return (
		<div className='flex items-center justify-center w-full m-5'>
			<input
				type='text'
				name='addTodo'
				placeholder='Type here your new todo!'
				className='w-9/12 mr-4 border-b border-black outline-none focus:border-b-2 lg:w-6/12'
				ref={addTodoRef}
				onKeyDown={addTodoKeybordEvent}
			/>
			<button className='px-3 py-1 text-sm font-bold text-white bg-black rounded hover:bg-gray-600' onClick={addTodo}>
				ADD TODO
			</button>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</div>
	)
}

export default Input
