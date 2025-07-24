import React, { useContext, useState } from 'react'
import { MyContext } from '../Wrapper';

const Overview = ({watchNext,importantItems}) => {
      const [streak, setStreak] = useState(5);
      const {Libdata} = useContext(MyContext);
  return (
    <>
            {/* Analytics Section */}
            <section className="grid grid-cols-4 gap-6 mb-4">
                <div className='text-white font-bold w-61 h-20 text-[23px] items-center flex p-2'>
        <h1 id='greeting'>Hey Yash! how are you today</h1>
      </div>
              <div className='vidsec bg-transparent px-1 bg-radial from-gray-700/40 from-0% to-gray-950/90 text-white flex justify-between items-center gap-2 rounded-2xl w-55 h-20'>
        <div className='font-[gilroy] relative border-l border-b border-gray-50/12 bg-gray-50/5 hover:bg-green-600/25 transition ease-in-out duration-300 flex justify-center font-extrabold rounded-xl text-2xl w-17 h-20'>
          <h1 className='pt-3'>{Libdata.watched.length}</h1>
          <p className='absolute bottom-2 text-[12px]'>Watched</p>
        </div>
        <div className='font-[gilroy] relative border-l border-b border-gray-50/12 bg-gray-50/5 hover:bg-red-600/25 transition ease-in-out duration-300 flex justify-center font-extrabold rounded-xl text-2xl w-17 h-20'>
          <h1 className='pt-3'>{Libdata.important.length}</h1>
          <p className='absolute bottom-2 text-[12px]'>Important</p>
        </div>
        <div className='font-[gilroy] relative border-l border-b border-gray-50/12 bg-gray-50/5 hover:bg-yellow-400/25 flex transition ease-in-out duration-300 justify-center font-extrabold rounded-xl text-2xl w-17 h-20'>
          <h1 className='pt-3'>{Libdata.toWatch.length}</h1>
          <p className='absolute bottom-2 text-[12px]'>Pending</p>
        </div>
      </div>
              <div className="h-36 border-2 border-gray-50/12 p-6 rounded-2xl bg-radial from-gray-700/50 from-10% to-gray-950/30 shadow-lg flex flex-col justify-center items-center">
                <h4 className="text-lg mb-2 font-bold text-white">Streak</h4>
                <div className='flex justify-start w-70'>
                  {[...Array(7)].map((_, i) => (
                  <video key={i} className='h-10 w-10' src='/fire.webm' autoPlay muted playsInline />
                ))}
                  </div>
                <p className="text-white text-2xl font-extrabold">{streak} days</p>
              </div>
              <div className="h-36 border-2 border-gray-50/12 p-6 rounded-2xl bg-radial from-gray-700/50 from-10% to-gray-950/30 shadow-lg flex flex-col justify-center items-center">
                <h4 className="text-lg mb-2 font-bold text-white">Activity</h4>
                <p className="text-white">📊 Weekly Progress</p>
              </div>
            </section>

  <div className='flex font-extrabold relative font-[gilroy] flex-col gap-5 w-full h-100 p-5 items-start rounded-2xl border border-gray-50/12 bg-radial from-gray-700/30 from-10% to-gray-950/30'>
      
      {/* 📺 To Watch */}
      <div className='w-full'>
        <h1 className='pl-2'>Want to Watch Next</h1>
        <div className="mt-2 w-300 h-35 border border-gray-50/12 rounded-3xl overflow-hidden">
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