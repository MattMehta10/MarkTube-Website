import React from 'react'
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate=useNavigate();
  function PlanList() {
  const planItems = []; // An empty array to store our JSX
  const NavigateHandler = (name) =>{
    navigate(`/Pricing/${name}`);
  }

  for (let i = 1; i <= 3; i++) {
    planItems.push(
      <div className='flex flex-col gap-2' key={i}>
        <h2 className='font-extrabold text-white' >Plan {i}</h2>
        <button onClick={()=>NavigateHandler(`Product${i}`)} className='bg-emerald-400 p-2 rounded-lg' ><h3>See Details</h3></button>
      </div>
    );
  }


  return planItems.map((e) => e); // Render all JSX we built
}

  return (
    <div className='w-full h-[90vh] font-extrabold flex flex-col font-[gilroy] items-center text-white justify-center'>
    <video src='/uc.webm' className='aspect-video' autoPlay muted loop></video>
    <h1 className='lg:text-3xl text-[5vw] '>Site is Under Development</h1>

  
  {/*
    <div className='h-[100vh] p-10' >
   <h1 className='text-5xl text-yellow-300 font-extrabold'>Plans</h1><br />
   <div className='flex font-[gilroy] justify-around'>{PlanList()}</div></div> */}
  </div>
  )
}

export default Pricing