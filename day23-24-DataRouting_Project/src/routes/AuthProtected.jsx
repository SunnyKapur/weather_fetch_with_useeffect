import React from 'react'
import { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const AuthProtected = () => {

    let {loggedInUsers} = useContext(Auth)

    if(loggedInUsers) {
        return <Navigate to="/dashboard" />
    }

  return <Outlet />
}

export default AuthProtected