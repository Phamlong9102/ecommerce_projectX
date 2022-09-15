import React from "react";
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import UserList from "~/components/ChildrenLayout/UserList/UserList";


function Admintrial() {
    return (
        <>
            <Admin dataProvider={restProvider("https://630ed147379256341881df89.mockapi.io/users")}>
                <Resource name="black" list={UserList} /> 
            </Admin>
        </>

    )
}

export default Admintrial;