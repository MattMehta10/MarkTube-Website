import React, { useContext, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { MyContext } from '../Wrapper';
import { motion } from 'motion/react';

// Toggle Component
const Toggle = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer select-none">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={checked}
      onChange={onChange}
    />
    <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-emerald-500 transition-colors duration-300"></div>
    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
  </label>
);

const Setting = () => {
  const {showLogin, setShowLogin} = useContext(MyContext);
  const [openSection, setOpenSection] = useState('profile');
  const [theme, setTheme] = useState('System');

  const toggleSection = (key) => {
    setOpenSection(prev => (prev === key ? null : key));
  };

  const settingsSections = [
    {
      key: 'profile',
      title: 'Profile',
      content: (
        <div className="flex items-center gap-6">
          <img className="rounded-full h-20 w-20 border-2 border-emerald-500 shadow" src="/Designer.jpeg" alt="Profile" />
          <div>
            <div className="font-semibold text-lg mb-1">Yash Mehta</div>
            <div className="text-gray-400 text-sm mb-2">user@email.com</div>
            <button onClick={()=>{setShowLogin(true)}} className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-emerald-600 transition">Login</button>
          </div>
        </div>
      )
    },
    {
      key: 'data',
      title: 'Data Control',
      content: (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span>Download Data</span>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Download</button>
          </div>
          <div className="flex justify-between items-center">
            <span>Delete Account</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Delete</button>
          </div>
        </div>
      )
    },
    {
      key: 'look',
      title: 'Look & Feel',
      content: (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span>Sidebar Width</span>
            <input type="range" min="200" max="500" className="w-32 accent-emerald-500" />
          </div>
          <div className="flex justify-between items-center">
            <span>Font Size</span>
            <input type="range" min="12" max="24" className="w-32 accent-emerald-500" />
          </div>
        </div>
      )
    },
    {
      key: 'theme',
      title: 'Theme',
      content: (
        <div className="flex gap-3 flex-wrap">
          {['Dark', 'Light', 'System'].map(t => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-4 py-2 rounded-lg border transition
                ${theme === t ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-gray-800 text-white hover:bg-gray-700'}
              `}
            >
              {t}
            </button>
          ))}
        </div>
      )
    },
    {
      key: 'notifications',
      title: 'Notifications',
      content: (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span>Email Alerts</span>
            <Toggle checked={true} onChange={() => {}} />
          </div>
          <div className="flex justify-between items-center">
            <span>Push Notifications</span>
            <Toggle checked={false} onChange={() => {}} />
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.1,delay:.3}}  className="w-full h-fit overflow-hidden px-4 md:px-8 py-6 font-[gilroy] text-white transition-all duration-300">

      <div className="grid md:grid-cols-2 gap-6">
        {settingsSections.map(section => {
          const isOpen = openSection === section.key;

          return (
            <div
              key={section.key}
              className={`rounded-xl border border-gray-700/50 bg-[#1c1f26] px-6 py-5 shadow-md transition-all duration-500
                ${isOpen ? 'max-h-[600px]' : 'max-h-[65px]'}
                overflow-hidden md:max-h-none
              `}
            >
              {/* Section Header */}
              <div
                onClick={() => toggleSection(section.key)}
                className="flex items-center justify-between cursor-pointer md:cursor-default"
              >
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <IoIosArrowForward
                  className={`text-xl transform transition-transform md:hidden ${isOpen ? 'rotate-90' : ''}`}
                />
              </div>

              {/* Section Content */}
              <div
                className={`transition-all duration-300 ease-in-out mt-4
                  ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none h-0'}
                  md:opacity-100 md:pointer-events-auto md:h-auto md:translate-y-0
                `}
              >
                {section.content}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Setting;
