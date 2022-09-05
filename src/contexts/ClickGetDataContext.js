import { createContext } from 'react'
import { useState } from 'react'; 

export const ClickGetDataContext = createContext({ datacontext:[] })

export const ClickGetDataContextProvider = ({ children }) => { 
    const [datacontext, setDataContext] = useState([]); 
    
    return (
        <ClickGetDataContext.Provider children={children} value={{datacontext, setDataContext}}/>
    )
}

