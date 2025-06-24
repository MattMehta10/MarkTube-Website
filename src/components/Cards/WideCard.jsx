import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const WideCard = ({imgl,data}) => {
  const [green, setgreen] = useState(false);
  const [yellow, setyellow] = useState(false);
  const [red, setred] = useState(false);
  
const ToggleBorder=(btn)=>{
  switch(btn){
  case('green'): setgreen(!green) 
  break;
  case('yellow'): setyellow(!yellow)
  break; 
  case('red'): setred(!red)
  break;
  default: console.log('NA');
}

}

const cardRef = useRef();
const ButtonW=useRef();
const ButtonI=useRef();
const ButtonTW=useRef();


useGSAP(() => {
  const mm = gsap.matchMedia();
      mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;

if (isDesktop) {
gsap.from(cardRef.current,{
  x:-100,
  opacity:0,
  scrollTrigger:{
    trigger: cardRef.current,
      start: "top 35%",
      end: "top 25%",
      scrub: true,
      // markers: true,
  }
})
}

if (isMobile) {
  const t2 = gsap.timeline({
    scrollTrigger:{
    trigger: cardRef.current,
    start:'top 75%',
    end:'top 60%',
    scrub: true,
    // markers: true,
  }
  });
  t2.fromTo(cardRef.current, { opacity:0 ,scale: 0.2 }, {opacity:1,scale: 0.5, duration: 0.5   })

}

      return () => console.log("cleaned responsive animations");
    }
  );
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ButtonW.current,
      start: "20% 65%",
      end: "top 35%",
      scrub: true,
      // markers: true,
    }
  });

  tl.fromTo(ButtonW.current, { opacity: 0 }, { opacity: 1, duration: 1 })
    .fromTo(ButtonI.current, { opacity: 0 }, { opacity: 1, duration: 1 })
    .fromTo(ButtonTW.current, { opacity: 0 }, { opacity: 1, duration: 1 });
});


  return (
    <div ref={cardRef} key={1} 
    className={ `[relative lg:scale-100 bg-[#ffffff] w-160 duration-75 ease-in-out rounded-2xl p-5 h-120 group]`}>
      <div className={`bg-cover bg-position-[center_right_1rem] w-150 h-65 rounded-2xl`} style={{ backgroundImage: `url(${data.thumbnail})` }}></div>
      <div className='flex mt-3 gap-5'>
    <div className='flex' >
        <div className='flex flex-col gap-5'>
        <div className='flex gap-3'>
            <button ref={ButtonW} onClick={()=>{ToggleBorder('green')}} 
      className={`p-5 items-center flex cursor-pointer hover:text-white rounded-xl font-gilroy font-extrabold h-4 border-2 border-green-500 ${(green)?`bg-green-500 text-white`:`duration-150 ease-in-out hover:bg-[#16a34a] hover:border-[#16a34a]` }`}>
        {(green)?'Watched':'Mark As Watched'}</button>
      <button ref={ButtonI}
      onClick={()=>{ToggleBorder('red')}} 
      className={`p-5 items-center flex cursor-pointer hover:text-white rounded-xl h-4 border-2 font-gilroy font-extrabold border-red-500 ${(red)? `bg-red-500 text-white`:`duration-150 ease-in-out hover:bg-[#b91c1c] hover:border-[#b91c1c]`}`}>
        {(red)? 'IMP':'Mark As Important'}</button>
      <button ref={ButtonTW}
      onClick={()=>{ToggleBorder('yellow')}} 
      className={`p-5 items-center flex cursor-pointer rounded-xl h-4 border-2 font-gilroy font-extrabold border-[goldenrod] ${(yellow)?`bg-[goldenrod]`:`duration-150 ease-in-out hover:bg-[#facc15] hover:border-[#facc15]`} `}>
        {(yellow)? 'Want to Watch' : 'Mark for Watching'}</button></div>
      <div className='flex flex-col gap-5'>
    <h1 className='text-2xl font-bold' >{data.title}</h1>
      <div className='flex items-center gap-3.5' >
        <div className={`bg-[url(./public/psy-02.jpg)]  bg-cover bg-top rounded-full h-12 w-12`} ></div>
        <p className='font-extrabold' >{data.channel}</p>
      <div className='flex items-center justify-center gap-3 bottom-5 right-6 rounded-2xl bg-[#1d1c1c] w-25 h-10 text-white'>Subscribe</div></div></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default WideCard