import { createContext, useEffect, useState } from "react";
import { storage } from "../utils/localStorage";

export let Auth = createContext();

export let AuthContextProvider = ({ children }) => {
  const [registeredAdmins, setRegisteredAdmins] = useState([]);
  const [loggedInAdmin, setLoggedInAdmin] = useState(null);

  console.log("registeredAdmin--->", registeredAdmins);
  console.log("loggedInAdmin--->", loggedInAdmin);

  useEffect(() => {
    let data = storage.get("reg admins");
    setRegisteredAdmins(data == data ? [] : null);

    let ldata = storage.get("log admins");
    setLoggedInAdmin(ldata);
  }, []);

  return (
    <Auth.Provider
      value={{
        registeredAdmins,
        setRegisteredAdmins,
        loggedInAdmin,
        setLoggedInAdmin,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
