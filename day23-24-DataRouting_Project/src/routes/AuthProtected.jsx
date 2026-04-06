import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const AuthProtected = () => {

    let {loggedInUsers} = useAuth()

    if(loggedInUsers) {
        return <Navigate to="/dashboard" />
    }

  return <Outlet />
}

export default AuthProtected