import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Pricing from '../Routes/Pricing'
import Blog from '../Routes/Blog'
import Workspace from '../Routes/Workspace'
import CookiePolicy from '../Routes/CookiePolicy'
import PrivacyPolicy from '../Routes/PrivacyPolicy'
import TermsOfService from '../Routes/TermsOfService'
import FAQ from './FAQ'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/MTWorkspace' element={<Workspace/>} />
      <Route path='/Pricing' element={<Pricing/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/CookiePolicy' element={<CookiePolicy/>} />
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
      <Route path='/TermsOfService' element={<TermsOfService/>} />
      <Route path='/FAQ' element={<FAQ />} />
    </Routes>
  )
}

export default Mainroutes