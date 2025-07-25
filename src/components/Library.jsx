import React, { useState, useMemo, useContext } from 'react';
import LibCard from './LibCard'; // Make sure this exists
import { GoSortAsc, GoSortDesc } from 'react-icons/go';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { MyContext } from '../Wrapper';

const Library = () => {
  // Flatten all videos into one array
  const {Libdata} = useContext(MyContext)
  const allVideos = [
    ...(Libdata.toWatch || []),
    ...(Libdata.important || []),
    ...(Libdata.watched || [])
  ];

  const [vidType, setVidType] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Filter and sort videos
  const filtered = useMemo(() => {
    let arr = vidType ? allVideos.filter(v => v.type === vidType) : allVideos;
    arr = arr.sort((a, b) =>
      sortOrder === 'asc' ? a.addedAt - b.addedAt : b.addedAt - a.addedAt
    );
    return arr;
  }, [vidType, sortOrder, allVideos]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className='lg:p-6 flex flex-col items-center'>
      <div className='w-full'>
        <h1 className='font-extrabold text-2xl'>All Videos</h1>

        <div className='options mt-4 flex justify-between items-center'>
          <div className='flex gap-3 lg:flex-wrap'>
            {['toWatch', 'important', 'watched', ''].map(type => (
              <button
                key={type}
                onClick={() => { setVidType(type); setCurrentPage(1); }}
                className={`h-8 lg:px-4 px-2 text-sm rounded-md border border-gray-500 transition ${vidType === type ? 'opacity-50 bg-gray-700' : 'hover:bg-gray-800'}`}
              >
                {type === '' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <button onClick={() => setSortOrder(p => p === 'asc' ? 'desc' : 'asc')} className='h-8 w-10 text-xl lg:translate-y-0 -translate-y-11.5 flex items-center justify-center border border-gray-500 rounded-md hover:bg-gray-800'>
            {sortOrder === 'asc' ? <GoSortAsc /> : <GoSortDesc />}
          </button>
        </div>

        <hr className='my-5 w-full text-gray-400/20' />

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-1 gap-3 lg:min-h-[50vh] w-full'>
          {paginated.length ? (
            paginated.map(v => (
              <a
                key={v._id}
                href={`https://www.youtube.com/watch?v=${v.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className='block'
              >
                <LibCard data={v} size={100} type={v.type} />
              </a>
            ))
          ) : (
            <p className='text-gray-400 col-span-full'>No videos found.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-3 h-5 items-center gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-1.5 py-1.5 rounded-full bg-transparent hover:bg-gray-600 disabled:opacity-40">
              <MdOutlineKeyboardDoubleArrowLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
              .reduce((acc, val, i, arr) => {
                if (i > 0 && val - arr[i - 1] > 1) acc.push('...');
                acc.push(val);
                return acc;
              }, [])
              .map((page, i) =>
                page === '...' ? (
                  <span key={i} className='px-2 text-gray-400'>...</span>
                ) : (
                  <button key={page} onClick={() => setCurrentPage(page)} className={`px-2 py-0.4 rounded ${currentPage === page ? 'bg-white text-black font-bold' : 'bg-gray-800 hover:bg-gray-600 text-white'}`}>
                    {page}
                  </button>
                )
              )}

            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-1.5 py-1.5 rounded-full bg-transparent hover:bg-gray-600 disabled:opacity-40">
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;