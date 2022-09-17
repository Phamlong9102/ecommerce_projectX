import { createContext, useEffect } from 'react'
import { useState } from 'react'; 

export const AppContext = createContext({ cartItems:[] })

export const AppContextProvider = ({ children }) => { 
    const [cartItems, setCartItems, getCartItems] = useState([]); 
    
    useEffect(()=>{
    const getDataProduct = JSON.parse(localStorage.getItem('dataProduct'))
    const getUserData = JSON.parse(localStorage.getItem('dataUser'))
        if (getDataProduct) {
            const getCurrentItems = JSON.parse(localStorage.getItem('dataProduct'))[0].cartItems
            setCartItems(getCurrentItems)
        } else if (getUserData) {
            const getCartItems = JSON.parse(localStorage.getItem('dataUser'))[0].cartItems
            setCartItems(getCartItems)
        }
    }, [])


    return (
        <AppContext.Provider children={children} value={{cartItems, setCartItems, getCartItems}}/>
    )
}








