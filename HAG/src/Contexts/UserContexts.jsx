import { useContext, createContext, useState } from "react";


export const UserContext = createContext();

export function UserProvider({children}){
    const [LoggedIn, SetLoggedIn] = useState(true) 

    return(
        <UserContext.Provider value={{LoggedIn, SetLoggedIn}}>
            {children}
        </UserContext.Provider>
    )

}
export function useUser(){
    return useContext(UserContext)
}
