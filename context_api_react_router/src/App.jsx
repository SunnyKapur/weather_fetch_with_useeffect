import { useContext } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Theme } from "./context/ThemeContext";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router";

const App = () => {
  let { theme, renderPages } = useContext(Theme);

  return (
    <div
      className={`h-screen ${theme === "Dark" ? "bg-gray-700" : "bg-white"} flex flex-col gap-6`}
    >
      <Navbar />
      <div className="h-[90%] px-[100px] py-5">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
      </div>
    </div>
  );
};

export default App;
