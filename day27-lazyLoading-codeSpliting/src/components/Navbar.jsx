import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between p-8'>
        <h1>Logo</h1>
        <div className='flex gap-6'>
        <NavLink className={({isActive}) => isActive ?"text-red-500": "text-white"} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ?"text-red-500": "text-white"} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ?"text-red-500": "text-white"} to="/products">Products</NavLink>
        <NavLink className={({isActive}) => isActive ?"text-red-500": "text-white"} to="/users">Users</NavLink>
    </div>
    <div></div>
    </div>
    
  )
}

export default Navbar