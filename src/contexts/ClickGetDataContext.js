import { createContext } from 'react'
import { useState } from 'react'; 

export const ClickGetDataContext = createContext({ dataContext:[] })

export const ClickGetDataContextProvider = ({ children }) => { 
    const [dataContext, setDataContext] = useState([]); 
    const isAuth = localStorage.getItem('dataUser')
    
    return (
        <ClickGetDataContext.Provider children={children} value={{dataContext, setDataContext, isAuth}}/>
    )
}

