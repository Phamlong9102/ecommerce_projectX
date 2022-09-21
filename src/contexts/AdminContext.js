import { createContext } from 'react'
import { useState } from 'react'; 

export const AdminContext = createContext({ dataContext:[] })

export const AdminContextProvider = ({ children }) => { 
    const [adminData, setAdminData] = useState([]); 
    const isAuthAdmin = localStorage.getItem('dataAdmin')
    
    return (
        <AdminContext.Provider children={children} value={{adminData, setAdminData, isAuthAdmin}}/>
    )
}