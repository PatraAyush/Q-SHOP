import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/login'
function AllRoutes () {
  return (
    <Routes>
    <Route  path="/login" element={<Login/>}>
    </Route>
      
    </Routes>
  )
}

export default AllRoutes
