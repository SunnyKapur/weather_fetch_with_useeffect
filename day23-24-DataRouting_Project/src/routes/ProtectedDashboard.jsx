import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import {  useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const ProtectedDashboard = () => {
  console.log("Protected rendering....")

  let {loggedInUsers} = useAuth()

  if(!loggedInUsers){
    toast.error("Unauthorized user")
    return <Navigate to='/' />
  }


  return <Outlet />
}

export default ProtectedDashboard