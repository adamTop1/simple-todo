import { FaCheck } from 'react-icons/fa6'
import { RiDeleteBinLine } from 'react-icons/ri'
import { MdOutlineEdit } from 'react-icons/md'
import useTodos from '../hooks/useTodos'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { todoType } from '../context/TodoProvider'
import { useState } from 'react'
import Modal from '../components/Modal'
import EditPage from './EditPage'
import DeletePage from './DeletePage'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

function TodoItem({ title, id, isDone }: todoType) {
	const [openEditModal, setOpenEditModal] = useState<boolean>(false)
	const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)

	const { dispatch } = useTodos()

	const handleChangeTodoStatus = () => {
		dispatch({ type: 'STATUS', payload: { isDone: !isDone, id: id } })
	}

	const deleteTodo = () => {
		setOpenDeleteModal(true)
	}

	const editTodo = () => {
		setOpenEditModal(true)
	}
	const closeEditTodo = () => {
		setOpenEditModal(false)
	}
	const closeDeleteTodo = () => {
		setOpenDeleteModal(false)
	}

	return (
		<>
			<div className='flex items-center justify-between text-xl border-b border-black'>
				<li
					className={cn('no-underline', {
						'line-through': isDone,
					})}>
					{title}
				</li>
				<div className='flex gap-4 p-2'>
					<button
						className={cn('text-green-600', {
							'text-gray-500': isDone,
						})}
						onClick={handleChangeTodoStatus}>
						<FaCheck />
					</button>
					<button
						onClick={editTodo}
						className={cn('text-black', {
							'text-gray-500': isDone,
						})}>
						<MdOutlineEdit />
					</button>
					<button
						className={cn('text-red-600', {
							'text-red-600': isDone,
						})}
						onClick={deleteTodo}>
						<RiDeleteBinLine />
					</button>
				</div>
			</div>
			{openEditModal && (
				<Modal onClose={closeEditTodo}>
					<EditPage onClose={closeEditTodo} id={id} />
				</Modal>
			)}
			{openDeleteModal && (
				<Modal onClose={closeDeleteTodo}>
					<DeletePage onClose={closeDeleteTodo} id={id} />
				</Modal>
			)}
			
		</>
	)
}

export default TodoItem
