import React, { useContext } from 'react'

// import Playlist from './Cards/Playlist'
import { MyContext } from '../Wrapper'
import Playlist from './Cards/Playlist';
import Login from './Login';


const Workspace = () => {
  return (<div className='w-full h-[90vh] font-extrabold flex flex-col font-[gilroy] items-center text-white justify-center'>
    <h1 className='text-3xl '>Site is Under Development</h1>
    <br />
    <h2 className='text-3xl' >What to Expect</h2><br />
  <h3 className='w-180 text-center text-2xl'><span className='text-green-600'>Workplace</span> will act as a personal space to watch your marked videos in an isolated environment. It'll allow you manage you data, track progress etc</h3>
  </div>)
}

export default Workspace