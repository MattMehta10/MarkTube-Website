import React, { useContext, useState } from 'react'
import { MyContext } from '../Wrapper';
import Lottie from 'lottie-react';
import animationdata from '../assets/Streak Fire.json'
const Overview = ({watchNext,importantItems}) => {
      const [streak, setStreak] = useState(5);
      const {Libdata} = useContext(MyContext);
  return (
    <>
            {/* Analytics Section */}
            <section className="grid grid-cols-2 lg:grid-cols-4 relative gap-y-3 lg:gap-6 mb-4">
                <div className='text-white absolute top-0 lg:relative font-bold lg:w-61 lg:h-20 lg:text-[23px] items-center flex p-2'>
        <h1 id='greeting'>Hey Yash! <br className='hidden lg:block' /> how are you today</h1>
      </div>
              <div className='vidsec bg-transparent px-1 text-white flex justify-between items-center gap-2 lg:mt-0 mt-12.5 rounded-2xl ml-0 lg:ml-20 w-56 h-20'>
        <div className='font-[gilroy] relative border-l bg-radial from-gray-700/20 from-0% to-gray-950/20 border-b border-gray-50/12 bg-gray-50/5 lg:hover:bg-green-600/25 transition ease-in-out duration-300 flex justify-center font-extrabold rounded-xl text-2xl w-17 h-20'>
          <h1 className='pt-3'>{Libdata.watched.length}</h1>
          <p className='absolute bottom-2 text-[12px]'>Watched</p>
        </div>
        <div className='font-[gilroy] relative border-l bg-radial from-gray-700/20 from-0% to-gray-950/20 border-b border-gray-50/12 bg-gray-50/5 lg:hover:bg-red-600/25 transition ease-in-out duration-300 flex justify-center font-extrabold rounded-xl text-2xl w-17 h-20'>
          <h1 className='pt-3'>{Libdata.important.length}</h1>
          <p className='absolute bottom-2 text-[12px]'>Important</p>
        </div>
        <div className='font-[gilroy] relative border-l bg-radial from-gray-700/20 from-0% to-gray-950/20 border-b border-gray-50/12 bg-gray-50/5 lg:hover:bg-yellow-400/25 flex transition ease-in-out duration-300 justify-center font-extrabold rounded-xl text-2xl w-17 h-20'>
          <h1 className='pt-3'>{Libdata.toWatch.length}</h1>
          <p className='absolute bottom-2 text-[12px]'>Pending</p>
        </div>
      </div>
              <div className="lg:h-36 h-33 w-25 lg:ml-1 ml-16 lg:pt-0 pt-12 lg:w-full border-2 border-gray-50/12 p-6 rounded-2xl bg-radial from-gray-700/50 from-10% to-gray-950/30 shadow-lg flex flex-col justify-center lg:justify-between items-center">
                <h4 className="text-lg lg:mb-0 -mb-5 font-extrabold text-white">Streak</h4>
                <div className='lg:flex hidden justify-center my-3 gap-2 w-70'>
                  {[...Array(5)].map((_, i) => (<div className='scale-150'>
                    <Lottie animationData={animationdata} loop={true} />
                  </div>
                ))}
                </div>
                  <div className='w-35 flex items-baseline-last justify-center lg:hidden'>
                    <h1 className='absolute z-5 text-2xl text-[#131926] pb-6 font-[gilroy] font-extrabold'>{streak}</h1>
                    <Lottie animationData={animationdata} loop={true} />
                  </div>
                <p className="text-white lg:block hidden text-2xl font-extrabold">{streak} days</p>
              </div>
              <div className="h-36 lg:col-span-1 col-span-2 border-2 border-gray-50/12 p-6 rounded-2xl bg-radial from-gray-700/50 from-10% to-gray-950/30 shadow-lg flex flex-col justify-center items-center">
                <h4 className="text-lg mb-2 font-bold text-white">Activity</h4>
                <p className="text-white">📊 Weekly Progress</p>
              </div>
            </section>

  <div className='flex font-extrabold relative font-[gilroy] flex-col gap-5 w-full h-100 p-5 items-start rounded-2xl border border-gray-50/12 bg-radial from-gray-700/30 from-10% to-gray-950/30'>
      
      {/* 📺 To Watch */}
      <div className='w-full'>
        <h1 className='pl-2'>Want to Watch Next</h1>
        <div className="mt-2 w-full lg:w-300 h-35 border border-gray-50/12 rounded-3xl overflow-hidden">
          <div id='watchnextcontainer' className="flex flex-nowrap overflow-x-auto gap-4 p-3 scroll-smooth">
            {
            watchNext.length > 0 ? 
            (
              watchNext.map((video)=>  (
                <a
                  key={video._id}
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[120px] h-29 rounded-lg flex-shrink-0 bg-yellow-400/30 text-white overflow-hidden p-1 hover:scale-[1.03] transition-transform"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-300 bg-white h-15 object-cover rounded-md"
                  />
                  <p className="text-[15px] mt-1 leading-snug text-white overflow-hidden break-words"
  style={{
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    maxHeight: '2.6em',
  }}>
    {video.title}
    </p>
                </a>
                
              ))
            ) 
            : (
              <p className="text-sm text-white/50">No videos in watchlist</p>
            )
            }
          </div>
        </div>
      </div>

      {/* 🧠 Important */}
      <div className='w-full'>
        <h1 className='pl-2'>Revisiting the Important Videos</h1>
        <div className="mt-2 w-full h-35 border border-gray-50/12 rounded-3xl overflow-hidden">
          <div id='impcontainer' className="flex flex-nowrap overflow-x-auto gap-4 p-3 scroll-smooth">
            {
            importantItems.length > 0 ? 
            (
                importantItems.map((video) =>
                 (
                <a
                  key={video._id}
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[120px] h-29 rounded-lg flex-shrink-0 bg-red-800/30 text-white overflow-hidden p-1 hover:scale-[1.03] transition-transform"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full bg-white h-15 object-cover rounded-md"
                  />
                  <p className="text-[15px] mt-1 leading-snug text-white overflow-hidden break-words"
  style={{
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    maxHeight: '2.6em',
  }}>
    {video.title}
    </p>
                </a>
              ))
            ) 
            :(
              <p className="text-sm text-white/50">No important videos yet</p>
            )
            }
          </div>
        </div>
      </div>
    </div>
          </>
  )
}

export default Overview