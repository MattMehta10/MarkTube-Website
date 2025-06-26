import React, { useContext } from 'react'

// import Playlist from './Cards/Playlist'
import { MyContext } from '../Wrapper'
import Playlist from './Cards/Playlist';
import Login from './Login';
import Notification from './Notification';


const Workspace = () => {
  return (
    <div className='w-full h-[90vh] font-extrabold flex flex-col font-[gilroy] items-center text-white justify-center'>
            <video src='/uc.webm' className='aspect-video' autoPlay muted loop></video>
           <h1 className='lg:text-3xl text-[5vw] '>Site is Under Development</h1>
    </div>
    )
}

export default Workspace