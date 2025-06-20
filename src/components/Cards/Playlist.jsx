import React, { useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';

const Playlist = ({data, size }) => {
  const [green, setGreen] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [red, setRed] = useState(false);
  const [CardSize, setCardSize] = useState(size);

  useEffect(() => {
    setCardSize(size);
  }, [size]);

  const ToggleBorder = (btn) => {
    switch (btn) {
      case 'green':
        setGreen(!green);
        break;
      case 'yellow':
        setYellow(!yellow);
        break;
      case 'red':
        setRed(!red);
        break;
      default:
        console.log('NA');
    }
  };

  return (
    <div
      key={1}
      className={`
        ${yellow ? 'border-4 border-yellow-600' : red ? 'border-4 border-red-600' : green ? 'border-4 border-green-600' : ''}
        relative bg-[#ffffff] pr-5 w-150 whitespace-pre-wrap scale-${CardSize} duration-75 ease-in-out aspect-video flex gap-5 items-center rounded-2xl py-10 h-55 group
      `}
    >
      {/* Thumbnail fixed with image tag for proper rendering */}
      <div className="m-5 w-[300px] h-[160px] bg-cover bg-center rounded-2xl overflow-hidden bg-gray-200" style={{ backgroundImage: `url(${data.thumbnail})` }}>
      </div>

      {/* Text & Info Block */}
      <div className="mt-3 gap-5 flex flex-col justify-between">
        <h1 className="text-3xl font-bold max-w-[500px] leading-snug">{data.title}</h1>

        <div>
          <p className="text-lg flex items-center gap-2">
            {data.channel}
            {data.verified && <MdVerified className="text-blue-500" />}
          </p>
          <div className="flex text-lg gap-4">
            <h6>{data.views}</h6>
            <h6>{data.uploaded}</h6>
          </div>
        </div>
      </div>

      {/* Options icon */}
      <HiOutlineDotsVertical className="text-4xl absolute right-3 bottom-10" />

      {/* Hover Buttons */}
      <div className="absolute group-hover:opacity-100 flex items-center justify-center gap-3 bottom-5 right-6 rounded-2xl opacity-0 duration-200 ease-in-out bg-[#1d1c1c] w-25 h-8 px-2">
        <button
          title="Mark As Watched"
          onClick={() => ToggleBorder('green')}
          className={`w-[18px] h-[18px] cursor-pointer rounded-full border-2 border-[#22c55e] ${
            green
              ? 'bg-[#22c55e]'
              : 'duration-150 ease-in-out hover:bg-[#16a34a] hover:border-[#16a34a]'
          }`}
        ></button>
        <button
          title="Mark As Important"
          onClick={() => ToggleBorder('red')}
          className={`w-[18px] h-[18px] cursor-pointer rounded-full border-2 border-[#ef4444] ${
            red
              ? 'bg-[#ef4444]'
              : 'duration-150 ease-in-out hover:bg-[#b91c1c] hover:border-[#b91c1c]'
          }`}
        ></button>
        <button
          title="Want to Watched"
          onClick={() => ToggleBorder('yellow')}
          className={`w-[18px] h-[18px] cursor-pointer rounded-full border-2 border-[#fde047] ${
            yellow
              ? 'bg-[#fde047]'
              : 'duration-150 ease-in-out hover:bg-[#facc15] hover:border-[#facc15]'
          }`}
        ></button>
      </div>
    </div>
  );
};

export default Playlist;
