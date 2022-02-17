import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const tokenHome = localStorage.getItem("token");
  console.log("TokenHome", tokenHome);

  const [userState, setUserState] = useState({
    userData: null,
    authToken: tokenHome,
    loggedIn: tokenHome != null ? true : false,
  });

  return (
    <AuthContext.Provider
      value={{
        userState,
        setUserState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
