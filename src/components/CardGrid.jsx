import React, { useContext, useRef } from 'react';
import Playlist from './Cards/Playlist';
import { MyContext } from '../Wrapper';
import './CardGrid.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

// Utility to shuffle an array
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CardGrid() {
  const {data} = useContext(MyContext);
  const totalRows = 5;
  const basePerRow = 10;
  const HeadRef=useRef();
  const containerRef=useRef();
  const TextRef1=useRef();
  const TextRef2=useRef();
  const TextRef3=useRef();
  

  // Step 1: Shuffle the full data once
  const shuffledOnce = shuffleArray(data);

  // Step 2: Expand or cycle the shuffled data to fill required slots
  const required = totalRows * basePerRow;
  const largeShuffledData = Array.from({ length: required }, (_, i) => shuffledOnce[i % shuffledOnce.length]);

  const scaleMap = {
    0: 'scale-[0.65] transform translate-y-13 opacity-40',
    1: 'scale-[0.83] opacity-80',
    2: 'scale-[1.2] opacity-100',
    3: 'scale-[0.83] opacity-80',
    4: 'scale-[0.65] transform -translate-y-13 opacity-50',
  };

  const rows = Array.from({ length: totalRows }, (_, rowIndex) => {
    const startIdx = rowIndex * basePerRow;
    const baseCards = largeShuffledData.slice(startIdx, startIdx + basePerRow).map((cardData, i) => (
      <div key={i} className="inline-block m-5">
        <Playlist data={cardData} size={100} />
      </div>
    ));

    const allCards = [...baseCards, ...baseCards]; // duplicate for infinite scroll effect
    const scrollClass = rowIndex % 2 === 0 ? 'scroll-left' : 'scroll-right';
    const scaleClass = scaleMap[rowIndex] || 'scale-[1]';

    return (
      <div key={rowIndex} className="w-full flex justify-center overflow-hidden">
        <div className={`transition-transform duration-700 ease-in-out transform origin-center ${scaleClass}`}>
          <div className={`fade-mask ${scrollClass} flex whitespace-nowrap py-[1px]`}>
            {allCards}
          </div>
        </div>
      </div>
    );
  });

  useGSAP((e)=>{
    const mm = gsap.matchMedia();
      mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;
    
    gsap.from(containerRef.current,{
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:containerRef.current,
          scrub:true,
          start:"top 20%",
          end:"start 10%",
          toggleActions: "play none none none", 
          // markers:true,
          once: true,  

    }
  })
    if(isDesktop){
let t1 = gsap.timeline({
      scrollTrigger:{
          trigger:".wrapper",
          scrub:true,
          start:"top 50%",
          end:"start 10%",
          toggleActions: "play none none none", 
          // markers:true,
          once: true,  
        }
    })
    t1.to(HeadRef.current,{
        text:'From cluttered queues to curated clarity.',
        duration:5,        
    })
    
    let t2=gsap.timeline({
    scrollTrigger:{
      trigger:".textwrapper",
        scrub:true,
        start:"top 50%",
        end:"start 30%",
        // markers:true,  
        toggleActions: "play none none none",
        once: true,  
      }
    })

  t2.from(TextRef1.current,{x:100,opacity:0,duration:5},"A")
  t2.from(TextRef3.current,{x:100,opacity:0,duration:5},"A")
t2.from(containerRef.current, { 
  css: { "pointer-events": "none" }
},"A");

  
  gsap.from(TextRef2.current,{
    x:-100,
    opacity:0,
    duration:5,
    scrollTrigger:{
      trigger:".textwrapper",
      scrub:true,
      start:"top 50%",
      end:"start 30%",
      toggleActions: "play none none none",
      once: true,  
      // markers:true,  
    }
  },"A")
    }
    if(isMobile){
let t1 = gsap.timeline({
      scrollTrigger:{
          trigger:".wrapper",
          scrub:true,
          start:"top 40%",
          end:"start 10%",
          toggleActions: "play none none none", 
          // markers:true,
          once: true,  
        }
    })
    t1.to(HeadRef.current,{
        text:'From cluttered queues to curated clarity.',
        duration:5,        
    })
    
    let t2=gsap.timeline({
    scrollTrigger:{
      trigger:".textwrapper",
        scrub:true,
        start:"top 50%",
        end:"start 40%",
        // markers:true,  
        toggleActions: "play none none none",
        once: true,  
      }
    })

  t2.from(TextRef1.current,{x:100,opacity:0,duration:5},"A")
  t2.from(TextRef3.current,{x:100,opacity:0,duration:5},"A")
  t2.from(TextRef2.current,{x:-100,opacity:0,duration:5},"A")
  t2.from(containerRef.current, {
  css: { "pointer-events": "none" }
},"A");

}
})

    




})
  
  return (
  <div className='wrapper relative flex flex-col lg:mt-0 mt-50 items-center ' >
      <p ref={HeadRef} className='absolute lg:mt-10 mt-0 lg:mb-0 mb-10 font-[gilroyE] font-normal z-5 text-white lg:text-4xl text-lg text-shadow-2xl' ></p>
    <div className=" lg:mt-0 mt-25 bg-black lg:h-auto h-120 relative flex justify-center lg:scale-70 lg:min-h-screen px-4 md:px-8 space-y-2 overflow-hidden fade-all-sides">
      <div className={`textwrapper absolute items-center flex font-[gilroyE] flex-col top-1/2 left-1/2 lg:text-7xl text-4xl lg:scale-145 font-extrabold -translate-x-1/2 -translate-y-1/2 z-50 text-white text-center`}>
          <span ref={TextRef1}  className='bg-[#101828] text-[#00d491] inline w-fit px-1' >REINVENT YOUR</span>
          <span ref={TextRef2} className='bg-[#101828] text-[#00d491]  inline w-fit px-1'>YOUTUBE</span>
          <span ref={TextRef3} className='bg-[#101828] text-[#00d491]  inline w-fit px-1'>EXPERIENCE.</span> 
      </div>
      <div ref={containerRef} className="px-4 lg:scale-100 lg:translate-y-0 -translate-y-50 scale-40 md:px-8 space-y-6 w-[150rem] -rotate-5">
        {rows}
      </div>
    </div>
    </div>
  );
}
