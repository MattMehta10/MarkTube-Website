import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { MyContext } from "../Wrapper";
import { FcGoogle } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";

const Login = ({status,setstatus}) => {
  const { users, setusers } = useContext(MyContext);
  const { showLogin,setShowLogin } = useContext(MyContext);
  const [isMatched, setisMatched] = useState(true);
  const [isUEmpty, setisUEmpty] = useState(false);
  const [isPEmpty, setisPEmpty] = useState(false);
  const [isEEmpty, setisEEmpty] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const isWeakPassword = (password) => {
    if (password.length < 6) return true;
    const isAlpha = /^[a-zA-Z]+$/.test(password);
    const isNumeric = /^[0-9]+$/.test(password);
    return isAlpha || isNumeric;
  };

  const submitHandler = (userdata) => {
    const username = (userdata.username || "").trim();
    const password = (userdata.password || "").trim();
    const repassword = (userdata.repassword || "").trim();
    const email = (userdata.email || "").trim();

    const isUsernameEmpty = username === "";
    const isPasswordEmpty = password === "";
    const isEmailEmpty = email === "";
    const isPasswordMatch = password === repassword;

    setisUEmpty(isUsernameEmpty);
    setisPEmpty(isPasswordEmpty);
    setisEEmpty(isEmailEmpty);

    if (isUsernameEmpty || isPasswordEmpty || isEmailEmpty) {
      setisMatched(true);
      return;
    }

    const weak = isWeakPassword(password);
    setWeakPassword(weak);

    if (!isPasswordMatch) {
      setisMatched(false);
      return;
    }

    if (weak) return;

    const copy = { id: nanoid(), username, password, email };
    setusers([...users, copy]);
    reset();
    setWeakPassword(false);
    setisMatched(true);
  };

  const handleGoogleLogin = () => {
    alert("Google login (frontend-only placeholder)");
  };

  return (showLogin?(<>
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-black/40 z-10250 p-4" onClick={() => setShowLogin(!showLogin)}>
      <div className="w-full relative max-w-md bg-zinc-900 text-white shadow-xl rounded-2xl p-8 space-y-5">
    <div className="absolute right-5 top-5" onClick={()=>{setShowLogin(false)}}><IoCloseSharp className="text-xl cursor-pointer" /></div>
        <h2 className="text-2xl font-bold text-center text-white">Sign In to MarkTube</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              {...register("username")}
              className="mt-1 w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              placeholder="Enter your username"
            />
            {isUEmpty && <p className="text-sm text-red-400">Username cannot be empty</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register("email")}
              className="mt-1 w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              type="email"
              placeholder="you@example.com"
            />
            {isEEmpty && <p className="text-sm text-red-400">Email cannot be empty</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              {...register("password")}
              className="mt-1 w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              type="password"
              placeholder="Password"
            />
            {isPEmpty && <p className="text-sm text-red-400">Password cannot be empty</p>}
            {weakPassword && <p className="text-sm text-yellow-400">⚠️ Weak password (use mix of letters & numbers)</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              {...register("repassword")}
              className="mt-1 w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              type="password"
              placeholder="Confirm your password"
            />
            {!isMatched && <p className="text-sm text-red-400">Passwords do not match</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 cursor-pointer hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="flex items-center justify-center text-zinc-400">— OR —</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center cursor-pointer justify-center border border-zinc-600 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          <FcGoogle className="text-xl mr-2" />
          Continue with Google
        </button>

        {/* User List */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-zinc-400 mb-1">Registered Users:</h3>
          <ul className="list-disc list-inside text-sm text-zinc-300">
            {users.map((user, idx) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        </div>
      </div>
    </div></>
  ):<></>);
};

export default Login;
