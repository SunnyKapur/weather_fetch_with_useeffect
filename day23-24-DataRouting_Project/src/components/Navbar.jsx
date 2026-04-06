import { useContext } from "react";
import { NavLink } from "react-router";
import {  useAuth } from '../context/AuthContext'

const Navbar = () => {

 let {setLoggedInUsers} = useAuth()

  return (
    <div className="flex flex-col justify-between border-r border-gray-500 px-4 py-8">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold" >Logo</h1>
        <div className="flex flex-col gap-5">
          <NavLink to="/dashboard">Home</NavLink>
          <NavLink to={`/dashboard/about/${Math.floor(Math.random() * 10)}`}>
            About
          </NavLink>
          <NavLink to="/dashboard/contact">Contact</NavLink>
        </div>
      </div>

      <button onClick={() => {
        localStorage.removeItem("logIn user")
       setLoggedInUsers(null)
      }}  
      className="text-xl bg-black text-white p-2 rounded cursor-pointer" >Logout</button>
    </div>
  );
};

export default Navbar;
