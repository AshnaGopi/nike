import React,{useContext,createContext,useState} from 'react'

export const AppContext=createContext(null);
export function useAppCont(){
    return useContext(AppContext);
}

export default function AppProvider({children}){

    const [check, setCheck] = useState(5)
    return(
        <AppContext.Provider value={{check,setCheck}}>
            {children}
        </AppContext.Provider>
    )
}