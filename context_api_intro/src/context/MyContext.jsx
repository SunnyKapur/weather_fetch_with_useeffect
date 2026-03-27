
import { createContext, useState } from "react";


export let MyStore = createContext();

export let ContextProvider = ({children}) => {

    const [count, setCount] = useState(0)

    return <MyStore.Provider value={{count, setCount}}>
        {children}
    </MyStore.Provider> 
}




