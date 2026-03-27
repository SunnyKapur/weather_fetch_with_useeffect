import { createContext } from "react";

export let Theme = createContext();

export let ThemeProvider = ({children}) => {
    return <Theme.Provider value={"Light"}>
        {children}
    </Theme.Provider>
}