import { createContext, useEffect, useState } from "react";

export let Theme = createContext();

export let ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=>{
    return localStorage.getItem("theme") || "Dark"
  });
  const [renderPages, setRenderPages] = useState("home");

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  

  console.log("renderPages....", renderPages)

  return (
    <Theme.Provider value={{ theme, setTheme, renderPages, setRenderPages }}>
      {children}
    </Theme.Provider>
  );
};
