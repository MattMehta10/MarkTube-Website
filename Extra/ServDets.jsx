import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ServDets = () => {
    const params= useParams();
    const {detail} = params;
    const navigate = useNavigate();
  return ( 
    <div className='p-10'> <h1 className='text-5xl text-yellow-300 font-extrabold'>{detail}</h1> 
        <p className='mt-5 text-xl text-white p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel accusamus quia molestiae velit perspiciatis, beatae neque nobis veniam eius qui cupiditate tempora sunt quos similique error labore, sapiente corporis esse.</p>
     <button onClick={()=>navigate("/Services")} className='bg-emerald-400 p-2 rounded-lg' ><h3>Close</h3></button>
      
    </div>
  )
}

export default ServDets