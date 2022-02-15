import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [userState, setUserState] = useState({
        userData: null,
        authToken: null,
        loggedIn: false,
    })

    return <AuthContext.Provider value={{
        userState, 
        setUserState
    }}>
        {children}
    </AuthContext.Provider>
}