import Aurora from "../assets/Backgrounds/Aurora/Aurora"
import chromelogo from "/chromelogo.png?url"
import { IoIosArrowDown } from "react-icons/io";
import Standard from '../components/Cards/Standard';
import SpotlightCard from "../assets/Components/SpotlightCard/SpotlightCard";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../Wrapper";
import { useLenis } from "lenis/react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
const Hero = () => {
    let {data}=useContext(MyContext);
    const  lenis=useLenis();
    const cardRef = useRef(null);
    const bgRef = useRef(null);


    const scrollToWorking=()=>{
      lenis.scrollTo('#Working',{duration:2})
    }

    //connecting Lenis to GSAP ticker
    useEffect(()=>{
      function update(time){
        if(lenis){
        lenis.raf(time*1000) //GSAP gives seconds but Lenis wants ms 
      }
    }

      gsap.ticker.add(update)
      return ()=>gsap.ticker.remove(update)
    },[lenis])


    useGSAP(()=>{
      gsap.from(
        cardRef.current,
        {x:50,opacity:0,duration:2,delay:1}
      )
      gsap.from(
        bgRef.current,
        {display:'hidden',opacity:0,duration:2,delay:1}
      )
    },{scope:cardRef})
    
     const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'public/MarkTube-YouTube-Manager.zip'; // Relative to public folder
    link.download = 'MarkTube-YouTube-Manager.zip'; // Optional: customize file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (<>
  <div ref={bgRef}>
      <Aurora />
  </div>
    <div className="flex justify-around items-center h-160 items-[50%]">
          <MdKeyboardDoubleArrowDown className="absolute text-2xl text-white  transform translate-x-1/2 bottom-10 animate-bounce z-50"/>
      <div>
        <div className="flex-col h-100 gap-5 justify-center bg-gray-950 text-white flex p-0">
          <h1 className='text-white z-30 gap-2 text-8xl font-extrabold font-[gilroy]'>MarkTube</h1>
        <p className="text-white w-120 z-10 ">Tired of losing track of important videos? With MarkTube, save what matters, mark what’s next, and finally bring order to your YouTube flow.</p>
            <h3 className='text-white z-30 text-lg font-extrabold font-[gilroy]'> Manage Your YouTube. Your Way.</h3>
          <div className="flex gap-5" >
        <div className="flex items-center" >
            <button onClick={handleDownload} className="border-1 overflow-hidden relative flex justify-between items-center py-5 gap-5 pl-5 rounded-xl h-5 hover:text-green-200 hover:scale-105  active:scale-95" ><h1>Try It Now</h1><img className="h-10 pr-6 pb-2 pt-2 bg-green-400 duration-350 ease-in-out hover:bg-green-500" src={chromelogo} alt="" /><IoIosArrowDown className="absolute animate-pulse right-1 text-lg text-white"/></button>
        </div>
        <button onClick={scrollToWorking} className="active:scale-95 hover: relative border-1 flex items-center p-5 rounded-xl h-5 overflow-hidden group transition duration-300 ease-out">
          <span className="absolute inset-0 bg-white scale-x-0 z-10 group-hover:scale-x-100 w-35 transform-translate rounded-lg origin-left duration-800" ></span>
          <h1 className="group-hover:text-black z-12 transition duration-300">How it Works</h1>
          </button>
      </div>
      <div className="flex gap-4">
        <SpotlightCard className="flex flex-col bg-gradient-to-tr from-green-400/10 from-2%  to bg-neutral-900/40 to-25% justify-center items-center">
        <h1 className="font-extrabold text-4xl">250K+</h1>
        <p>Videos Marked</p>
        </SpotlightCard>
        <SpotlightCard className="flex flex-col bg-gradient-to-tr from-green-400/10 from-2%  to bg-neutral-900/40 to-25% justify-center items-center">
        <h1 className="font-extrabold text-4xl">80K+</h1>
        <p className="text-wrap" >Active Users</p>
        </SpotlightCard>
        <SpotlightCard className="flex flex-col justify-center bg-gradient-to-tr from-green-400/10 from-2%  to bg-neutral-900/40 to-25% items-center">
        <h1 className="font-extrabold text-4xl">98%</h1>
        <p>User Satisfaction Rate</p>
        </SpotlightCard>
      </div>
      <p className="text-white" >*These are made up stats just for Demo</p>
      </div>
     </div><div ref={cardRef} className="flex z-30 items-center"><Standard imgl={'/rick.jpg'} data={data[0]} /></div>
     </div>
    </>
  )
}

export default Hero