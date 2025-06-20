import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FiSun } from "react-icons/fi";
import { HiMiniUserCircle } from "react-icons/hi2";
import SpotlightCard from '../assets/Components/SpotlightCard/SpotlightCard';
import logo from '../assets/logo.png'
import { IoMdNotificationsOutline } from "react-icons/io";




const Nav = () => {

  return (
  <>
  <div className='bg-transparent z-200 flex h-18 pl-8 pr-8 justify-between items-center' >
       <h1 className='text-white z-100 flex items-center gap-2 text-xl font-extrabold font-[gilroy]'><img className='h-7' src={logo}/>MarkTube</h1>
    <div className='fixed top-4 left-1/2 [text-shadow:0_0_6px_rgba(0,0,0,0.6)] transform -translate-x-1/2 z-50'>
      <SpotlightCard className='flex gap-25 text-xl w-[40rem] h-11 rounded-2xl font-extrabold font-[gilroy]  items-center justify-center text-amber-50 bg-transparent '>
     <NavLink className={(e) => e.isActive ? "text-green-400 duration-300 ease-in" : "hover:text-green-300"}
        to="/">
        <h1>Home</h1>
      </NavLink>
      <NavLink className={(e) => e.isActive ? "text-green-400  duration-300 ease-in" : "hover:text-green-300"}
        to="/MTWorkspace">
        <h1>Workspace</h1>
      </NavLink>
      <NavLink className={(e) => e.isActive ? "text-green-400  duration-300 ease-in" : "hover:text-green-300"}
        to="/Pricing">
        <h1>Pricing</h1>
      </NavLink>
      <NavLink className={(e) => e.isActive ? "text-green-400  duration-300 ease-in" : "hover:text-green-300"}
        to="/Blog">
        <h1>Blog</h1>
      </NavLink>
    </SpotlightCard>
    </div>
    <div className='flex fixed right-8 mix-blend-difference top-6 z-100 items-center gap-4 text-white text-[1.4em]' >
      <div className='h-8 w-8 duration-300 ease-in-out flex items-center justify-center rotate-0 rounded-full relative hover:bg-gray-800'><IoMdNotificationsOutline />
      <div className='w-[6px] h-[6px] absolute right-1 top-1 bg-red-500 animate-ping z-20 rounded-full' ></div></div>
      <div className='h-8 w-8 duration-300 ease-in-out flex items-center justify-center rotate-0 rounded-full hover:bg-gray-800 hover:rotate-30'><FiSun /></div>
    <div className='h-8 w-8 duration-300 ease-in-out flex items-center justify-center rounded-full hover:bg-gray-800'><HiMiniUserCircle/></div>
    </div>
    
  </div>
  </>
  )
}

export default Nav