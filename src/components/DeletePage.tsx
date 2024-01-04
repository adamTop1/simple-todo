import useTodos from "../hooks/useTodos"

interface deleteModalTypes {
	onClose: () => void
	id: number
}


function DeletePage({ onClose, id }: deleteModalTypes) {

    const { dispatch } = useTodos()
	

	return <div >
    <h2 className='font-mono'>Do you really want to delete that todo?</h2>
    <p className='font-mono'>This action cannot be undone.</p>
    
    <div className='flex items-end justify-end gap-4 mt-3'>
    <button className='px-3 py-1' onClick={onClose}>Cancel</button>
    <button className='px-3 py-1 text-white bg-red-600 rounded' onClick={() => dispatch({ type: 'DELETE', payload: id })}>Delete</button>
    </div>
    </div>
}

export default DeletePage
