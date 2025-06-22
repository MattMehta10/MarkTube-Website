import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Blog from '../components/Blog'
import Workspace from '../components/Workspace'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/MTWorkspace' element={<Workspace/>} />
      <Route path='/Pricing' element={<Pricing/>} />
      <Route path='/Blog' element={<Blog/>} />
    </Routes>
  )
}

export default Mainroutes