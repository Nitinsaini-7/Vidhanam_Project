import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './pages/Login'

const OutletPage = () => {
  return (
    <div>
        <Outlet>
            <Login></Login>
        </Outlet>
    </div>
  )
}

export default OutletPage