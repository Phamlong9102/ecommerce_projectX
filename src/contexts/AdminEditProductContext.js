import { createContext } from 'react'
import { useState } from 'react'; 

export const AdminEditProductContext = createContext({ adminEdit: [] })

export const AdminEditProductProvider = ({ children }) => {
    const [adminEdit, setadminEdit] = useState([])
    const isAuthAdminEdit = localStorage.getItem('adminEdit')

    return (
        <AdminEditProductContext.Provider children={children} value={{ adminEdit, setadminEdit, isAuthAdminEdit}}/> 
    )
}