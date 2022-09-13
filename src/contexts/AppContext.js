import { createContext, useEffect } from 'react'
import { useState } from 'react'; 

export const AppContext = createContext({ cartItems:[] })

export const AppContextProvider = ({ children }) => { 
    const [cartItems, setCartItems, getCartItems] = useState([]); 
    useEffect(()=>{
    const getUserData = JSON.parse(localStorage.getItem('dataContext'))
        if (getUserData){
            const getCartItems = JSON.parse(localStorage.getItem('dataContext'))[0].cartItems
            setCartItems(getCartItems)
        }
    },[])
    return (
        <AppContext.Provider children={children} value={{cartItems, setCartItems, getCartItems}}/>
    )
}








