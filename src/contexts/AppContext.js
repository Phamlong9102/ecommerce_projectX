import { createContext } from 'react'
import { useState } from 'react'; 

export const AppContext = createContext({ cartItems:[] })

export const AppContextProvider = ({ children }) => { 
    const [cartItems, setCartItems] = useState([]); 
    return (
        <AppContext.Provider children={children} value={{cartItems, setCartItems}}/>
    )
}








