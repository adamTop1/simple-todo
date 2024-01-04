import useTodos from '../hooks/useTodos'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

interface closeModalType {
	onClose: () => void
	id: number
}

function EditPage({ onClose, id }: closeModalType) {
	const [EditTodoState, setEditTodoState] = useState<string>('')

	const { state, dispatch } = useTodos()
	const exactTodo = state.find(item => item.id === id)

	useEffect(() => {
		if (exactTodo) {
			setEditTodoState(exactTodo.title)
		}
	}, [])

	const editTodo = () => {
		if (EditTodoState === '' || EditTodoState === undefined) {
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
		dispatch({ type: 'EDIT', payload: { id, title: EditTodoState } })
		onClose()
	}

	return (
		<div className='flex flex-col gap-5'>
			<label htmlFor='editTodo' className='font-mono text-xl font-bold'>
				Enter here your edited todo
			</label>
			<input
				type='text'
				id='editTodo'
				value={EditTodoState}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEditTodoState(event.target.value)}
				className='border-2 border-gray-500 rounded'
			/>

			<div className='flex items-end justify-end gap-4'>
				<button onClick={onClose} className='px-3 py-1'>
					Cancel
				</button>
				<button className='px-3 py-1 text-white bg-black rounded' onClick={editTodo}>
					Save
				</button>
			</div>
		</div>
	)
}

export default EditPage
