import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Blog from '../components/Blog'
import Workspace from '../components/Workspace'
import CookiePolicy from '../components/CookiePolicy'
import PrivacyPolicy from '../components/PrivacyPolicy'
import TermsOfService from '../components/TermsOfService'
import FAQ from '../components/FAQ'

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