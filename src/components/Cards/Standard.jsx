import React, { useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";

const Standard = ({data}) => {
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

  console.log(data)
  return (
    <div key={1} 
    className=
    {`
      ${ yellow? `border-4 border-yellow-600`:red? `border-4 border-red-600`:green?`border-4 border-green-600` :``} 
    relative bg-[#ffffff] w-120 duration-75 ease-in-out rounded-2xl p-5 h-100 group`}>
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
      <div className='absolute group-hover:opacity-100 flex items-center justify-center gap-3 bottom-5 right-6 rounded-2xl opacity-0 duration-200 ease-in-out bg-[#1d1c1c] w-25 h-8'>
      <button 
      title='Mark As Watched'
      onClick={()=>{ToggleBorder('green')}} 
      className={`w-[18px] cursor-pointer rounded-full h-[18px] border-2 border-[#22c55e] ${(green)?`bg-[#22c55e]`:`duration-150 ease-in-out hover:bg-[#16a34a] hover:border-[#16a34a]` }`}></button>
      <button 
      title='Mark As Important'
      onClick={()=>{ToggleBorder('red')}} 
      className={`w-[18px] cursor-pointer rounded-full h-[18px] border-2 border-[#ef4444] ${(red)? `bg-[#ef4444]`:`duration-150 ease-in-out hover:bg-[#b91c1c] hover:border-[#b91c1c]`}`}></button>
      <button 
      title='Want to Watched'
      onClick={()=>{ToggleBorder('yellow')}} 
      className={`w-[18px] cursor-pointer rounded-full h-[18px] border-2 border-[#fde047] ${(yellow)?`bg-[#fde047]`:`duration-150 ease-in-out hover:bg-[#facc15] hover:border-[#facc15]`} `}></button>
      
      </div>
    </div>
  )
}

export default Standard