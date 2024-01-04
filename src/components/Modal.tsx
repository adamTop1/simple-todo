import { ReactElement, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface closeModalType {
    onClose: () => void
}

const Backdrop = ({onClose}: closeModalType) => {
	return <div className='fixed top-0 left-0 z-20 w-full h-screen backdrop-brightness-50' onClick={onClose} />
}
type ChildrenType = {
	children?: ReactElement | ReactNode
}
const ModalOverlay = ({ children }: ChildrenType) => {
	return (
		<div className='fixed z-30 w-4/12 p-4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg top-1/2 left-1/2'>
			<div>{children}</div>
		</div>
	)
}

const portalElement = document.getElementById('overlays')

interface ModalPropsType extends ChildrenType {
	onClose: any
}

function Modal({ onClose, children }: ModalPropsType) {
	return portalElement ? (
		<>
			{createPortal(<Backdrop onClose={onClose} />, portalElement)}
			{createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
		</>
	) : null
}

export default Modal