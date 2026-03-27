const Navbar = ({ setTheme, theme }) => {
  return (
    <div className="h-[10%] rounded shadow-2xl text-white bg-black flex px-[100px] justify-between items-center">
      <h1 className="text-3xl font-bold">Logo</h1>
      <div className="flex items-center gap-10 text-xl font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "Light" ? "Dark" : "Light"))
        }
        className="text-sm px-5 py-3 rounded bg-black border border-white cursor-pointer text-white "
      >
        {theme === "Light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;
