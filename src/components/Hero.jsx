import Aurora from "../assets/Backgrounds/Aurora/Aurora"
import { IoIosArrowDown } from "react-icons/io";
import Standard from '../components/Cards/Standard';
import SpotlightCard from "../assets/Components/SpotlightCard/SpotlightCard";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../Wrapper";
import { useLenis } from "lenis/react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);
const Hero = () => {
    let {data}=useContext(MyContext);
    const  lenis=useLenis();
    const cardRef = useRef(null);
    const bgRef = useRef(null);
    const homebtnsRef = useRef(null);

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

useGSAP(() => {
  const mm = gsap.matchMedia();

  // ✅ matchMedia should be "called" like this:
  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;

if (isDesktop) {
  gsap.from("#marktube", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },"a");
      
    gsap.from(cardRef.current, {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },"a");
    }

      if (isMobile) {
        gsap.from("#marktube", {
          x: -100,
          opacity:0,
          duration: 1.5,
          ease: "power2.out",
        });
      }

      return () => console.log("cleaned responsive animations");
    }
  );

  gsap.from(bgRef.current, {
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: "power2.out",
  });
  gsap.from(".hometext", {
    opacity: 0,
    filter:"blur(1px)",
    duration: 1.5,
    delay:1,
    ease: "power2.out",
  });
  gsap.from(homebtnsRef.current, {
    opacity: 0,
    filter:"blur(1px)",
    duration: 1.5,
    delay:1,
    ease: "power2.out",
  });
  gsap.from(".stats", {
    opacity: 0,
    duration: 1.5,
    delay:1,
    ease: "power2.out",
  });
  // ✅ Cleanup
  return () => mm.revert();
}, []);

    
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
    <div className="flex justify-around lg:items-center lg:h-160 lg:items-[50%]">
          <MdKeyboardDoubleArrowDown className="absolute text-2xl lg:block text-white hidden transform translate-x-1/2 bottom-10 animate-bounce z-50"/>
      <div>
        <div className="top flex-col lg:h-100 gap-5 justify-center lg:mt-12 bg-gray-950 text-white flex lg:p-0 p-5">
          <h1 className='text-white z-30 flex items-center gap-2 text-4xl lg:text-8xl lg:mb-0 mb-5 font-extrabold font-[gilroy]'><img className='h-11 lg:hidden z-5' src='/logo.png'/><span id="marktube" >MarkTube</span></h1>
        <p className="hometext text-white w-80 lg:w-120 z-10 ">Tired of losing track of important videos? With MarkTube, save what matters, mark what’s next, and finally bring order to your YouTube flow.</p>
            <h3 className='hometext text-white z-30 text-lg font-extrabold font-[gilroy]'> Manage Your YouTube. Your Way.</h3>
          <div ref={homebtnsRef} className="flex lg:mt-0 mt-6 mb-5 lg:gap-5 gap-3" >
        <div className="flex items-center" >
            <button onClick={handleDownload} className=" border-1 overflow-hidden relative flex justify-between items-center py-5 gap-5 pl-5 rounded-xl h-5 hover:text-green-200 hover:scale-105  active:scale-95" >
              <h1>Try It Now</h1>
              <img className="h-10 pr-6 pb-2 pt-2 bg-green-400 duration-350 ease-in-out hover:bg-green-500" src='/chromelogo.png' alt="chrome" />
              <IoIosArrowDown className="absolute animate-pulse right-1 text-lg text-white"/></button>
        </div>
        <button onClick={scrollToWorking} className=" active:scale-95 hover: relative border-1 flex items-center p-5 rounded-xl h-5 overflow-hidden group transition duration-300 ease-out">
          <span className="absolute inset-0 bg-white scale-x-0 z-10 group-hover:scale-x-100 w-35 transform-translate rounded-lg origin-left duration-800" ></span>
          <h1 className="group-hover:text-black z-12 transition duration-300">How it Works</h1>
          </button>
      </div>
    <iframe className="bg-transparent z-50 p-2 mt-5 mb-5 aspect-video hidden rounded-3xl" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className="stats flex flex-wrap gap-3 lg:mt-0 mt-5 lg:gap-4">
  {/* Card 1 */}
  <SpotlightCard className="flex flex-col justify-center items-center w-24 lg:w-auto h-24 bg-gradient-to-tr lg:from-green-500/20 from-green-400/30 from-2%  lg:to-neutral-900/40 lg:to-25% to-gray-800/60 text-center">
    <h1 className="font-extrabold text-2xl lg:text-4xl leading-none">250K+</h1>
    <p className="text-sm font-semibold leading-tight">
      <span className="lg:inline hidden">Videos Marked</span>
      <span className="lg:hidden inline">Marked</span>
    </p>
  </SpotlightCard>

  {/* Card 2 */}
  <SpotlightCard className="flex flex-col justify-center items-center w-24 lg:w-auto h-24 bg-gradient-to-tr lg:from-green-500/20 from-green-400/30 from-2%  lg:to-neutral-900/40 lg:to-25% to-gray-800/60 text-center">
    <h1 className="font-extrabold text-2xl lg:text-4xl leading-none">80K+</h1>
    <p className="text-sm font-semibold leading-tight">
      <span className="lg:inline hidden">Active Users</span>
      <span className="lg:hidden inline">Users</span>
    </p>
  </SpotlightCard>

  {/* Card 3 */}
  <SpotlightCard className="flex flex-col justify-center items-center w-24 lg:w-auto h-24 bg-gradient-to-tr lg:from-green-500/20 from-green-400/30 from-2%  lg:to-neutral-900/40 lg:to-25% to-gray-800/60 text-center">
    <h1 className="font-extrabold text-2xl lg:text-4xl leading-none">98%</h1>
    <p className="text-sm font-semibold leading-tight">
      <span className="lg:inline hidden">User Satisfaction Rate</span>
      <span className="lg:hidden inline">USR</span>
    </p>
  </SpotlightCard>
</div>

      <p className="text-white" >*These are made up stats just for Demo</p>
      </div>
     </div>
     <div ref={cardRef} className="lg:flex z-30 items-center hidden"><Standard imgl={'/rick.jpg'} data={data[0]} /></div>
     </div>
    </>
  )
}

export default Hero