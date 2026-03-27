
import { useContext, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {

  const [theme, setTheme] = useState("Dark")

  let data = useContext(theme)

  return (
    <div className={`h-screen ${theme ==='Dark' ? "bg-gray-700" : "bg-white"} flex flex-col gap-6`}>
      <Navbar setTheme={setTheme} theme={theme} />
      <div className="h-[90%] px-[100px] py-5">
        <Home />
      </div>
    </div>
  );
};

export default App;
