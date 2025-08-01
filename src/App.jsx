import React, { useContext, useRef } from 'react'
import Hero from './components/Hero'
import Handon from './components/Handon'
import { MyContext } from './Wrapper'
import CardGrid from './components/CardGrid'
import EndOfHomePage from './components/EndofPage'
import UI from './components/UI'
import ReactLenis from 'lenis/react'


const App = () => {
  let {data}=useContext(MyContext);
    return (
    <>
    <ReactLenis root options={{ smooth:true , autoRaf:false , duration: 1.2 }}>
    <Hero />
    <hr className='lg:flex hidden text-white mt-3 mx-90' />
    <Handon data={data}/>
    <hr className='text-white lg:flex hidden mt-3 mx-[19rem]' />
    <UI></UI>
    <CardGrid/>
    <EndOfHomePage/>
    </ReactLenis>
    </>
  )
}

export default App