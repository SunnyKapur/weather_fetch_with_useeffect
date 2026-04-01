import { useContext } from "react";
import { NavLink } from "react-router";
import { CartStore } from "../context/CartContext";

const Navbar = () => {

  let {cartLength} = useContext(CartStore)

  return (
    <div className="h-[10%] flex justify-between items-center">
      <h1 className="text-3xl font-bold">Navbar</h1>

      <div className="flex gap-10 text-xl font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-700" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "text-red-700" : "")}
        >
          Cart
          <span>{cartLength}</span>
        </NavLink>
      </div>
      <div>Login</div>
    </div>
  );
};

export default Navbar;
