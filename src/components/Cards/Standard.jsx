import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
gsap.registerPlugin(ScrollTrigger);
const Standard = ({data}) => {
  const [green, setgreen] = useState(false);
  const [yellow, setyellow] = useState(false);
  const [red, setred] = useState(false);
  const cardRef = useRef();

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
  x:100,
  opacity:0,
  scrollTrigger:{
    trigger: cardRef.current,
      start: "top 45%",
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
    start:'top 65%',
    end:'top 60%',
    scrub: true,
    // markers: true,
  }
  });
  t2.fromTo(cardRef.current, { opacity:0 ,scale: 0.2 }, {opacity:1,scale: 0.7, duration: 0.5   })

}
return () => console.log("cleaned responsive animations");
});
});

  return (
    <div ref={cardRef} key={1} 
    className=
    {`
      ${ yellow? `border-4 border-yellow-600`:red? `border-4 border-red-600`:green?`border-4 border-green-600` :``} 
    relative bg-[#ffffff] w-120 duration-75 lg:scale-100 scale-[0.65] ease-in-out rounded-2xl p-5 h-100 group`}>
      <div className={`bg-cover bg-center w-110 h-65 rounded-2xl`} style={{ backgroundImage: `url(${data.thumbnail})` }} ></div>
      <div className='flex mt-3 gap-5'>
        <div className={`bg-[url(../../../public/rick.webp)] bg-cover bg-center rounded-full h-15 w-15`} ></div>
        <div>
          <h1 className='text-2xl font-bold' >{data.title}</h1>
          <p>{data.channel}</p>
          <div className='flex gap-4'>
            <h6>{data.views}</h6>
            <h6>{data.uploaded}</h6>
          </div>
        </div>
      </div>
      <HiOutlineDotsVertical className='text-4xl absolute right-3 bottom-10' />
      <div className='absolute group-hover:opacity-100 flex items-center justify-center gap-3 bottom-5 right-6 rounded-3xl lg:rounded-2xl lg:opacity-0 duration-200 ease-in-out bg-[#1d1c1c] lg:w-25 lg:h-8 w-34 h-12'>
      <button 
      title='Mark As Watched'
      onClick={()=>{ToggleBorder('green')}} 
      className={`lg:w-[18px] w-[26px] h-[26px] cursor-pointer rounded-full lg:h-[18px] border-2 border-[#22c55e] ${(green)?`bg-[#22c55e]`:`duration-150 ease-in-out hover:bg-[#16a34a] hover:border-[#16a34a]` }`}></button>
      <button 
      title='Mark As Important'
      onClick={()=>{ToggleBorder('red')}} 
      className={`lg:w-[18px] w-[26px] h-[26px] cursor-pointer rounded-full lg:h-[18px] border-2 border-[#ef4444] ${(red)? `bg-[#ef4444]`:`duration-150 ease-in-out hover:bg-[#b91c1c] hover:border-[#b91c1c]`}`}></button>
      <button 
      title='Want to Watched'
      onClick={()=>{ToggleBorder('yellow')}} 
      className={`lg:w-[18px] w-[26px] h-[26px] cursor-pointer rounded-full lg:h-[18px] border-2 border-[#fde047] ${(yellow)?`bg-[#fde047]`:`duration-150 ease-in-out hover:bg-[#facc15] hover:border-[#facc15]`} `}></button>
      
      </div>
    </div>
  )
}

export default Standard