import React, { useContext, useRef } from 'react'
import Hero from './components/Hero'
import Handon from './components/Handon'
import { MyContext } from './Wrapper'
import CardGrid from './components/CardGrid'
import { ReactLenis} from 'lenis/react'
import EndOfHomePage from './components/EndofPage'


const App = () => {
  let {data}=useContext(MyContext);
  


  return (
    <ReactLenis root options={{ smooth:true , autoRaf:false , duration: 1.2 }}>
    <Hero />
    <hr className='text-white mt-3 mx-[19rem]' />
    <Handon data={data}/>
    <hr className='text-white mt-3 mx-[19rem]' />
    <CardGrid/>
    <EndOfHomePage/>
    </ReactLenis>
  )
}

export default App