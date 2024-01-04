import { FaRegNoteSticky } from "react-icons/fa6";

function Header() {
  return (
    <div className='flex items-center w-full px-10 py-10 font-mono border-b-2 border-black lg:px-20'>
        <h1 className="text-2xl ">REACT NOTES</h1>
        <div className="ml-2 text-lg">
        <FaRegNoteSticky />
        </div>
    </div>
  )
}

export default Header