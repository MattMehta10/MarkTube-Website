import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiSun } from "react-icons/fi";
import { HiMiniUserCircle } from "react-icons/hi2";
import SpotlightCard from '../assets/Components/SpotlightCard/SpotlightCard';
import logo from '/logo.png'
import { IoMdNotificationsOutline } from "react-icons/io";
import HamburgerIcon from './Hamburger';
import MobileSidebar from './MobileSidebar';
import { AiOutlineMoon } from "react-icons/ai";
import Login from './Login';
import { MyContext } from '../Wrapper';

const Nav = () => {
  

  const { Notifshow, setNotifshow } = useContext(MyContext);
  const { showLogin, setShowLogin } = useContext(MyContext);
  const [theme, settheme] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
  <>
  <div className='bg-transparent z-5000 flex h-18 lg:pl-8 pl-4 pr-8 lg:pt-0 justify-between lg:items-center pt-3'>
    <button className='text-white z-505 fixed mix-blend-difference lg:hidden' ><h1><HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)} /></h1></button>
    <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
       <h1 className='text-white z-100 lg:flex items-center gap-2 text-xl font-extrabold font-[gilroy] hidden'><img className='h-7' src={logo}/>MarkTube</h1>
    <div className='lg:fixed top-4 left-1/2 [text-shadow:0_0_6px_rgba(0,0,0,0.6)] lg:flex transform -translate-x-1/2 z-50 hidden'>
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
    <div className='flex fixed lg:right-8 right-3 mix-blend-difference lg:top-6 top-3 z-500 items-center gap-4 text-white text-[1.4em]' >
      <div className='h-8 w-8 duration-300 ease-in-out flex items-center justify-center rotate-0 rounded-full relative hover:bg-gray-800' onClick={()=>{setNotifshow(!Notifshow)}}><IoMdNotificationsOutline />
      <div className='w-[6px] h-[6px] absolute right-1 top-1 bg-red-500 animate-ping z-20 rounded-full' ></div></div>
      <div className='h-8 w-8 z-500  duration-300 ease-in-out flex items-center justify-center rotate-0 rounded-full hover:bg-gray-800 hover:rotate-30' onClick={()=>{settheme(!theme)}}>{theme?<FiSun/>:<AiOutlineMoon/>}</div>
    <div className='h-8 w-8 duration-300 z-300 ease-in-out flex items-center justify-center rounded-full hover:bg-gray-800'  onClick={()=>{setShowLogin(!showLogin)}} ><HiMiniUserCircle/></div>
    </div>
    
  </div>
  </>
  )
}

export default Nav