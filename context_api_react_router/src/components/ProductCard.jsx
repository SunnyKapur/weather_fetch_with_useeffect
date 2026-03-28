import { useContext } from "react";
import { Theme } from "../context/ThemeContext";


const ProductCard = () => {
  let {theme, setTheme} = useContext(Theme)
  return (
    <div className={`w-[30%] ${theme === "Dark" ? "text-white bg-black": "text-black bg-white"} flex flex-col gap-8 rouded-xl p-6 rounded-xl shadow-2xl`}>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <h1>Product name</h1>
        <p>Product price</p>
      </div>
      <div className="flex justify-between">
        <button className=" bg-cyan-500 px-3 py-2 rounded cursor-pointer">
          Update
        </button>
        <button className=" bg-red-500 px-3 py-2 rounded cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
