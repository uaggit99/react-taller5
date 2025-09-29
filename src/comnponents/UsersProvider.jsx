import { useState } from 'react';
import dataJson from '../assets/usuarios.json'
import { UserContext } from '../contexts/UserContext'





export const  UsersProvider=({children})=>{

    const[users, setUsers]=useState(dataJson);
    return(
        <UserContext.Provider value={{users, setUsers}}>
            {children}
        </UserContext.Provider>
    )

}