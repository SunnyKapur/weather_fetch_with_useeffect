import { createContext, useState } from "react";

export let Auth = createContext();

export let AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );
  const [loggedInUsers, setLoggedInUsers] = useState(
    JSON.parse(localStorage.getItem("logIn user")) || null,
  );
  return (
    <Auth.Provider
      value={{
        setRegisteredUsers,
        setLoggedInUsers,
        registeredUsers,
        loggedInUsers,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
