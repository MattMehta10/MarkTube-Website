import React, {useRef } from 'react'
import Standard from './Cards/Standard'
import WideCard from './Cards/WideCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import arrow1 from '/arrow.png?/url'
import arrow2 from '/arrow2.png?/url'
import arrow22 from '/arrow22.png?/url'
import arrowtext from '/arrowtext.png?/url'
import arrowtext2 from '/arrowtext2.png?/url'
import arrowtext3 from '/arrowtext3.png?/url'

gsap.registerPlugin(ScrollTrigger)


const Handon = ({data}) => {
  const containerRef=useRef();
  const heading1Ref=useRef();
  const heading2Ref=useRef();
  const ButtonW=useRef();
  const ButtonI=useRef();
  const ButtonTW=useRef();
  const ButtonE=useRef();
  const FButtonI=useRef();
  const FButtonTW=useRef();
  const FButtonE=useRef();
  const WidecardRef=useRef();
  const arrow1ref=useRef();
  const arrow2ref=useRef();
  const arrow3ref=useRef();
  const arrow4ref=useRef();
  const arrowtextref=useRef();
  const arrowtext2ref=useRef();
  const arrowtext3ref=useRef();
  const arrowtext4ref=useRef();
  const FeedcardRef=useRef();
  useGSAP(()=>{
     const mm = gsap.matchMedia();
      mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;
      const t1 = gsap.timeline();
      
const tl = gsap.timeline({
    scrollTrigger: {
      trigger: WidecardRef.current,
      start: "20% 55%",
      end: "+=500", // adjust depending on how long your animation is
      pin: true,
      scrub: true, // let the timeline control time
      // markers: true
    }
  });

  tl.fromTo(ButtonW.current, { opacity: 0 }, { opacity: 1, duration: 1   })
    .fromTo(ButtonI.current, { opacity: 0 }, { opacity: 1, duration: 1  })
    .fromTo(ButtonTW.current, { opacity: 0 }, { opacity: 1, duration: 1  })
    .fromTo(ButtonE.current, { opacity: 0 }, { opacity: 1, duration: 1  })
   .fromTo(arrow1ref.current, { opacity: 0, translateX:18,  rotate:-12 }, { opacity: 1, rotate:5,translateX:0, duration: 1  })
    .fromTo(arrowtextref.current, { opacity: 0 }, { opacity: 1, duration: 2.5  })
gsap.from(
      ".cardp1",{
        opacity:0,
        y:-10,
        duration:1,
        delay:1,
      scrollTrigger:{
        trigger:".cardp1",
        start:'top 50%',
        end:'top 30%',
        scrub:true,
        // markers:true,
      }}
    )    
    gsap.from(
      ".cardp2",{
        opacity:0,
        y:-10,
        duration:1,
        delay:1,
      scrollTrigger:{
        trigger:".cardp2",
        start:'top 50%',
        end:'top 30%',
        scrub:true,
        // markers:true,
      }}
    ) 



if (isDesktop) {
const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: FeedcardRef.current,
      start: "10% 35%",
      end: "+=500", // adjust depending on how long your animation is
      pin: true,
      scrub: true, // let the timeline control time
      // markers: true
    }
  });

  t2
    .fromTo(FButtonI.current, { opacity: 0 }, { opacity: 1, duration: 1  })
    .fromTo(FButtonTW.current, { opacity: 0 }, { opacity: 1, duration: 1  })
    .fromTo(FButtonE.current, { opacity: 0 }, { opacity: 1, duration: 1  })

 
  t2.fromTo(arrow2ref.current, { opacity: 0,rotate:-60,translateX:-58 }, { opacity: 1,rotate:-30,translateX:0, duration: 1  })
    .fromTo(arrowtext2ref.current, { opacity: 0 }, { opacity: 1, duration: 2.5  })
gsap.from(
      heading1Ref.current,{
        y:100,
        opacity:0,
        filter:'blur(10px)',
        duration:5,
      scrollTrigger:{
        trigger:heading1Ref.current,
        start:'top 80%',
        end:'top 50%',
        scrub:true,
        // markers:true,
      }}
    )
    gsap.from(
      heading2Ref.current,{
        scale:.5,
        opacity:0,
        filter:'blur(10px)',
        duration:5,
      scrollTrigger:{
        trigger:heading2Ref.current,
        start:'top 80%',
        end:'top 50%',
        scrub:true,
        // markers:true,
      }}
    )
}

if (isMobile) {
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: FeedcardRef.current,
      start: "10% 25%",
      end: "+=700", // adjust depending on how long your animation is
      pin: true,
      scrub: true, // let the timeline control time
      // markers: true
    }
  });

  t2
    .fromTo(FButtonI.current, { opacity: 0 }, { opacity: 1, duration: 1  })
    .fromTo(FButtonTW.current, { opacity: 0 }, { opacity: 1, duration: 1  })
    .fromTo(FButtonE.current, { opacity: 0 }, { opacity: 1, duration: 1  })

  gsap.from(
      heading1Ref.current,{
        y:50,
        opacity:0,
        filter:'blur(5px)',
        duration:5,
      scrollTrigger:{
        trigger:heading1Ref.current,
        start:'top 70%',
        end:'top 40%',
        scrub:true,
        // markers:true,
      }}
    )
    gsap.from(
      heading2Ref.current,{
        scale:.5,
        opacity:0,
        filter:'blur(10px)',
        duration:5,
      scrollTrigger:{
        trigger:heading2Ref.current,
        start:'top 70%',
        end:'top 50%',
        scrub:true,
        // markers:true,
      }}
    )
       
    gsap.from(arrow3ref.current,{
      rotate:0,
      opacity:0,
      x:20,
      duration:0.5,
      scrollTrigger:{
        trigger:arrow3ref.current,
        start:'top 20%',
        end:'top 15%',
        scrub:true,
        // markers:true,
      }
    })
    gsap.from(arrowtext3ref.current,{
      rotate:0,
      x:30,
      opacity:0,
      duration:0.5,
      scrollTrigger:{
        trigger:arrow3ref.current,
        start:'top 20%',
        end:'top 15%',
        scrub:true,
        // markers:true,
      }
    })
    gsap.from(arrowtext4ref.current,{
      rotate:0,
      opacity:0,
      x:20,
      duration:0.5,
      scrollTrigger:{
        trigger:arrowtext4ref.current,
        start:'top 20%',
        end:'top 15%',
        scrub:true,
        // markers:true,
      }
    })
    gsap.from(arrow4ref.current,{
      opacity:0,
      rotate:15,
      x:-20,
      duration:0.5,
      scrollTrigger:{
        trigger:arrow4ref.current,
        start:'top 20%',
        end:'top 15%',
        scrub:true,
        // markers:true,
      }
    })
}

      return () => console.log("cleaned responsive animations");
    }
  );


  },{scope:containerRef})
  return (<>
      <hr className='lg:hidden text-white mt-3 mx-15' />
    <div ref={containerRef} id='Working' className='flex flex-col gap-20 p-10 font-[gilroy] items-center'>
        <h1 ref={heading1Ref} className='font-extrabold lg:mt-40 mt-30 lg:mb-30 mb-10 lg:text-5xl text-3xl text-white' >“How It Works”</h1>
        <p  ref={heading2Ref} className='lg:text-5xl text-[6vw] lg:mb-20 mb-80 text-white'>An Interactive Walkthrough</p>
        <div ref={WidecardRef} className='flex lg:flex-row flex-col-reverse lg:mb-0 mb-90 lg:gap-15 h-100 lg:h-300'>
        <WideCard data={data[1]} size={100}/>
        <div className='flex flex-col lg:items-start items-center text-white lg:p-20'>
        <p className='cardp1 text-white text-lg'>MarkTube helps you to:</p><br />
        <ul>
            <li ref={ButtonW} >✅ Keep track of what you’ve <span className='text-green-400 font-bold'>Watched</span></li>
            <li ref={ButtonI}>⭐ Flag content as <span className='text-red-400 font-bold'>Important</span></li>
            <li ref={ButtonTW}>✔️ Bookmark videos as <span className='text-yellow-400 font-bold'>Want to Watch</span></li>
        </ul>
        <span className='lg:mt-0 mt-10' ref={ButtonE}>No clutter. No algorithms. Just your priorities.</span>
        <div ref={arrow1ref} className='absolute lg:flex hidden z-10 w-50 h-15 right-100 top-85' style={{backgroundImage: `url(${arrow1})`}} ></div>
        <div ref={arrowtextref} className='absolute lg:flex hidden z-10 w-80 h-15 right-20 top-80' style={{backgroundImage: `url(${arrowtext})`}} ></div>
        <div ref={arrow3ref} className='absolute flex lg:hidden z-10 w-40 h-15 right-40 scale-80 rotate-25 top-60' style={{backgroundImage: `url(${arrow1})`}} ></div>
        <div ref={arrowtext3ref} className='absolute flex opacity-100 lg:hidden z-10 w-80 h-15 scale-80 right-40 -top-8' style={{backgroundImage: `url(${arrowtext})`}} ></div>
        </div></div>
        <div ref={FeedcardRef} className='flex lg:flex-row flex-col lg:gap-15 lg:mt-0 mt-30 h-300 lg:h-300'>
        <div className='flex flex-col text-white lg:items-start items-center lg:p-20'>
        <p className='cardp2 text-white text-lg lg:pr-25 lg:pb-0 pb-4'>Interact with a sample feed video card:</p>
        <ul>
            <li ref={FButtonI}>✔️ Mark video from the feed</li>
            <li ref={FButtonTW} >⭐ Instant Save with Real-Time UI Update</li>
        </ul>
        <span className='lg:mt-0 mt-10' ref={FButtonE}>
        “It’s not just watching. It’s watching with intent.”
        </span>
        </div>
        <Standard data={data[0]}/>
        <div ref={arrow2ref} className='absolute z-10 w-35 h-15 left-20 lg:flex hidden lg:left-140 top-125 lg:top-75' style={{backgroundImage: `url(${arrow22})`}} ></div>
        <div ref={arrowtext2ref} className='absolute z-10 w-85 h-25 left-80 top-85 lg:flex hidden' style={{backgroundImage: `url(${arrowtext2})`}} ></div>
        <div ref={arrow4ref} className='absolute z-10 w-35 bg-left h-15 right-20 scale-50 -rotate-20 lg:left-140 flex transform lg:hidden top-123 lg:top-75' style={{backgroundImage: `url(${arrow2})`}} ></div>
        <div ref={arrowtext4ref} className='absolute z-10 w-125 h-25 left-0 scale-60 top-125 flex lg:hidden' style={{backgroundImage: `url(${arrowtext3})`}} ></div>
        </div>  
    </div>
  </>)
}

export default Handon