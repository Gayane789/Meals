import { NavLink as Link } from "react-router-dom"

export function Header() {
  return (
    <nav className=" bg-gray-200 p-4 flex justify-center items-center text-black-800 text-2xl">
      <Link className='m-2' to='/'>Home</Link>
      <Link className='m-2' to='/about'>About</Link>
      <Link className='m-2' to='/contact'>Contact</Link>
    </nav>
  )
}
