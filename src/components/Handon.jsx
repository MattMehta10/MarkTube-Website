import React, {useRef } from 'react'
import Standard from './Cards/Standard'
import WideCard from './Cards/WideCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import arrow1 from '/arrow.png?/url'
import arrow2 from '/arrow.png?/url'
import arrowtext from '/arrowtext.png?/url'
import arrowtext2 from '/arrowtext2.png?/url'

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
  const arrowtextref=useRef();
  const arrowtext2ref=useRef();
  const FeedcardRef=useRef();
  useGSAP(()=>{
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
    .fromTo(arrow2ref.current, { opacity: 0,rotate:150,translateX:-18 }, { opacity: 1,rotate:165,translateX:0, duration: 1  })
    .fromTo(arrowtext2ref.current, { opacity: 0 }, { opacity: 1, duration: 2.5  })



  },{scope:containerRef})
  return (
    <div ref={containerRef} id='Working' className='flex flex-col gap-20 p-10 font-[gilroy] items-center'>
        <h1 ref={heading1Ref} className='font-extrabold mt-60 mb-30 text-5xl text-white' >“How It Works”</h1>
        <p  ref={heading2Ref} className='text-5xl mb-20 text-white'>An Interactive Walkthrough</p>
        <div ref={WidecardRef} className='flex gap-15 h-300'>
        <WideCard data={data[1]} size={100}/>
        <p className='text-white text-lg p-20'>MarkTube helps you: <ul>
            <li ref={ButtonW} >✅ Keep track of what you’ve <span className='text-green-400 font-bold'>Watched</span></li>
            <li ref={ButtonI}>⭐ Flag content as <span className='text-red-400 font-bold'>Important</span></li>
            <li ref={ButtonTW}>✔️ Bookmark videos as <span className='text-yellow-400 font-bold'>Want to Watch</span></li>
        </ul>
        <span ref={ButtonE}>No clutter. No algorithms. Just your priorities.</span></p>
        <div ref={arrow1ref} className='absolute z-10 w-50 h-15 right-100 top-85' style={{backgroundImage: `url(${arrow1})`}} ></div>
        <div ref={arrowtextref} className='absolute z-10 w-80 h-15 right-20 top-80' style={{backgroundImage: `url(${arrowtext})`}} ></div>
        </div>
        <div ref={FeedcardRef} className='flex gap-30 justify-center h-300 '>
        <p className='text-white text-lg p-20 pr-25'>Interact with a sample feed video card: <ul>
            <li  ref={FButtonI}>✔️ Mark video from the feed</li>
            <li ref={FButtonTW} >⭐ Get Changes Saved And Reflected Instally in the UI</li>
        </ul>
        <span ref={FButtonE}>
        “It’s not just watching. It’s watching with intent.”
        </span>
        </p>
        <Standard data={data[0]}/>
        <div ref={arrow2ref} className='absolute z-10 w-50 h-15 left-140 rotate-165 top-75' style={{backgroundImage: `url(${arrow2})`}} ></div>
        <div ref={arrowtext2ref} className='absolute z-10 w-85 h-25 left-80 top-85' style={{backgroundImage: `url(${arrowtext2})`}} ></div>
        </div>  
    </div>
  )
}

export default Handon