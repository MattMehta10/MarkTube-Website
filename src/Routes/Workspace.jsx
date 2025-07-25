import React, { useContext, useState } from 'react';
import Overview from '../components/Overview';
import Library from '../components/Library';
import { MyContext } from '../Wrapper';
import Setting from './Setting';

const Workspace = () => {
  const {Libdata} = useContext(MyContext)
 // For example: 5-day learning streak
 const importantItems =[...(Libdata.important || [])]
 const watchNext =[...(Libdata.toWatch || [])]
  const [activeTab,setActiveTab] = useState('Overview')
  return (
    <div className="flex lg:flex-row flex-col h-full text-white font-[gilroy]">
      {/* Sidebar */}
      <aside className="lg:w-56 border-r flex-col border-gray-50/12 bg-transparent lg:p-6 py-2 px-6">
        <h2 className="lg:text-2xl text-xl lg:mb-8 mb-4 font-extrabold text-white tracking-wide">Workspace</h2>
          <div className='lg:flex-col flex gap-3'>
          {['Overview', 'Library', 'Settings'].map((tab) => (
            <button
            key={tab}
            className={`w-full lg:text-left lg:border-none border text-center py-2 lg:px-4 rounded-2xl border-gray-50/12 transition-all duration-200 font-bold tracking-wide
              ${activeTab === tab ? 'bg-gray-400/20 shadow-lg text-white' : 'hover:bg-white/40 hover:text-white'}
              `}
              onClick={() => setActiveTab(tab)}
              >
              {tab}
            </button>
          ))}
          </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 py-5 lg:px-10 px-4 bg-[#030712] rounded-l-3xl shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-extrabold lg:block hidden text-white tracking-wide drop-shadow-lg">{activeTab.toUpperCase()}</h2>
          <div className="lg:flex hidden items-center gap-2 text-sm text-white">
            <span className="font-bold">Backup status</span>
            <div className="w-4 h-4 border-2 border-gray-50/12 rounded-full bg-gradient-to-tr from-white to-white shadow" />
            <div className="w-4 h-4 border-2 border-gray-50/12 rounded-full bg-gradient-to-tr from-white to-white shadow" />
          </div>
        </div>

        {/* Only show Overview content here */}
        {activeTab === 'Overview' && (
          <Overview importantItems={importantItems} watchNext={watchNext}/>
        )}

        {/* Placeholder for other tabs */}
        {activeTab == 'Library' && (
          <Library/>
        )}
        {activeTab == 'Settings' && (
          <Setting/>
        )}
      </main>
    </div>
  );
};

export default Workspace;
