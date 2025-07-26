import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';

const LibCard = ({data, type, size }) => {
  const [CardSize, setCardSize] = useState(size);

  const bg = (type) =>{
    if(type == 'watched') return "to-green-500/15 hover:to-green-500/25"
    else if(type == 'toWatch') return "to-yellow-500/15 hover:to-yellow-500/25"
    else if(type == 'important') return "to-red-500/15 hover:to-red-500/25"
  }
  useEffect(() => {
    setCardSize(size);
  }, [size]);


  return (
    <motion.div
    initial={{opacity:0 ,x:30}}
                animate={{opacity:1, x:0}}
                transition={{duration:.5, delay:.5}}
      key={1}
      className={`bg-gradient-to-tr transition-all duration-500 ease-in-out from-70% from-transparent to-85% ${bg(type)} relative border-2 border-gray-500/30 w-80 lg:w-55 whitespace-pre-wrap aspect-video flex lg:flex-col lg:gap-0 gap-1 items-start rounded-2xl h-20 lg:h-40 lg:hover:scale-102 lg:hover:w-55 text-white`}
    > 
{/* Thumbnail fixed with image tag for proper rendering */}
      <div className=' w-[30%] lg:w-[100%]'><img
        src={data.thumbnail}
        alt={data.title}
        className="m-2 w-[110px] lg:w-50 lg:h-23 object-cover h-[60px] bg-cover bg-center rounded-2xl overflow-hidden bg-gray-200"
/></div>

      {/* Text & Info Block */}
      <div className='lg:w-[100%] w-[60%]'>
      <div className="mt-2 lg:-mt-1 ml-4 flex flex-col justify-start">
        <h1 className="text-[14px] font-[gilroyE] font-normal mt-1 leading-snug text-white overflow-hidden  break-words"
  style={{
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    maxHeight: '2.6em',
  }}>{data.title}</h1>

        <div>
          <p className="text-[13px] lg:hidden mt-1 flex items-center gap-2">
            {data.channel}
          </p>
        </div>
      </div></div>
</motion.div>
  );
};

export default LibCard;
