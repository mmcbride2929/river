import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

const App = () => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false)

  return (
    <div className="">
      <Nav sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      {!sidebarActive ? (
        <>
          <ToastContainer />
          <Outlet />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
export default App
