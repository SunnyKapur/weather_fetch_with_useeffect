import { useContext } from "react";
import { Theme } from "../context/ThemeContext";
import { NavLink } from "react-router";

const Navbar = () => {
  let { theme, setTheme, renderPages, setRenderPages } = useContext(Theme);

  return (
    <div
      className={`h-[10%] rounded shadow-2xl ${theme === "Dark" ? "text-white bg-black" : "text-black bg-white"} flex px-[100px] justify-between items-center`}
    >
      <h1 className="text-3xl font-bold">Logo</h1>
      <div className="flex items-center gap-10 text-xl font-semibold">
        <NavLink className={({isActive}) => isActive ? "text-red-500": ""} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-red-500": ""}  to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-red-500": ""} to="/contact">Contact</NavLink>
      </div>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "Light" ? "Dark" : "Light"))
        }
        className={`text-sm px-5 py-3 rounded ${theme === "Dark" ? "bg-black text-white" : "text-black"} border cursor-pointer shadow-2xl `}
      >
        {theme === "Light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;
