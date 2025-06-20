import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MyContext } from '../Wrapper';

const Login = () => {
const {users,setusers} = useContext(MyContext);
const [isMatched, setisMatched] = useState(true);
const [isUEmpty, setisUEmpty] = useState(false);
const [isPEmpty, setisPEmpty] = useState(false);
const [isEEmpty, setisEEmpty] = useState(false);
const{register,handleSubmit,reset}=useForm();
const submitHandler = (userdata) => {
    const username = (userdata.username || '').trim();
    const password = (userdata.password || '').trim();
    const repassword = (userdata.repassword || '').trim();
    const email = (userdata.email || '').trim();
    
    const isUsernameEmpty = username === '';
    const isPasswordEmpty = password === '';
    const isEmailEmpty = email === '';
    const isPasswordMatch = password === repassword;
    
    setisUEmpty(isUsernameEmpty);
    setisPEmpty(isPasswordEmpty);
    setisEEmpty(isEmailEmpty);
    
    if (isUsernameEmpty || isPasswordEmpty || isEmailEmpty) {
        setisMatched(true); // Avoid showing mismatch if fields are empty
        return;
    }
    
    if (isPasswordMatch) {
        setisMatched(true);
        const copy={username: userdata.username,password:userdata.password}
        copy.id=nanoid();
        setusers([...users,copy])
        reset();
    } else {
        setisMatched(false);
    }
};


  return (
    <><div className='w-150 absolute bg-amber-300 h-180 p-5'>
    <form onSubmit={handleSubmit(submitHandler)} className='text-white flex gap-2 flex-col  bg-blue-950  p-5' action="">
        <div className='flex flex-col gap-2'>
        <p>Username: </p>
        <input className='bg-white text-black'
        {...register("username")}
        type="text" 
        placeholder='username'/>
        <small className={isUEmpty?`text-red-500`:`hidden`}>username cannot be empty</small>
        </div>
        <div className='flex flex-col gap-2'>
        <p>Email: </p>
        <input className='bg-white text-black'
        {...register("email")}
        type="text" 
        placeholder='Email ID'/>
        <small className={isEEmpty?`text-red-500`:`hidden`}>Email cannot be empty</small>
        </div>
        <div  className='flex flex-col gap-2'>
        <p>Password:</p> 
        <input className='bg-white text-black'
        {...register("password")}
        type="text" 
        placeholder='Password'/>
        <small className={isPEmpty?`text-red-500`:`hidden`}>username cannot be empty</small>
        </div>
        <div className='flex flex-col gap-2'>
        <p>ReEnter Password:</p> 
        <input className='bg-white text-black'
        {...register("repassword")}
        type="text" 
        placeholder='Reenter Password'/>
        <small className= {isMatched?`hidden`: `text-red-500`}>Password doesn't match.</small>
        <button className='bg-yellow-300 py-1 px-3 active:scale-95' >Login</button>
        <div>{users.map((elem,idx)=><h1>{`${idx+1})${elem.username}`}</h1>)}</div>
        </div>
    </form></div>
    </>
  )
}

export default Login