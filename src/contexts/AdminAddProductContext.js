import { createContext } from 'react'
import { useState } from 'react'; 

export const AdminAddProductContext = createContext({ adminProductContext: [] })

export const AdminAddProductProvider = ({ children }) => {
    const [adminAdd, setAdminAdd] = useState({})
    const isAuthAdminAdd = localStorage.getItem('adminAdd')

    return (
        <AdminAddProductContext.Provider children={children} value={{ adminAdd, setAdminAdd, isAuthAdminAdd }}  />
    )
}

