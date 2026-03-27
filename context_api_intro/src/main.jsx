import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./context/MyContext.jsx";
import Home from "./Home.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Home />
    <App />
  </ContextProvider>

  
);
