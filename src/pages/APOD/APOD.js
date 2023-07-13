import React, { useEffect } from 'react';
import { getAllImages, getApod } from '../../api/apod';
import { useQuery } from 'react-query'
import $ from 'jquery';
import {motion} from 'framer-motion';
import moment from 'moment';


const APOD = () => {

  // useQuery works like useEffet so its not necessary to use it jjj
  const { isLoading, error, data} = useQuery(
    'apod',
    getApod
  );

  if (isLoading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  var apodDate = moment(data.date);
  var day = apodDate.format('DD');
  var monthName = apodDate.format('MMMM');
  var year = apodDate.format('YYYY');

  if(data.media_type === 'image') {
    $('.image-container iframe').addClass('hidden');
    $('#hdr-img').attr('href', data.hdurl).show();
  } else if (data.media_type === 'video') {
    $('.image-container iframe').attr('src', data.url);
    $('.image-container iframe').removeClass('hidden');
  }

  return (
    <section className='image-container w-full h-full bg-center bg-cover' style={{backgroundImage: `url(${data.url})`}}>
      <iframe className='hidden absolute w-full h-full left-0 top-0 translate-y--1/2 border-none' src="" allowFullScreen></iframe>

      <div className='apod-header flex justify-between items-center flex-row mx-auto py-20'>
        <div className='header flex items-start mt-4 mx-40'>
            <span className='flex-1 text-white text-3xl w-1/2 tracking-widest text-left' style={{
                textShadow: `2px 4px 3px rgba(0,0,0,0.3)`}}>
                Astronomy Picture of the Day
            </span>
        </div>
        <div className='date flex flex-col mx-32 font-semibold drop-shadow-lg shadow-black' style={{textShadow: `2px 4px 3px rgba(0,0,0,0.3)`}}>
          <div className='current-month flex flex-row px-10 uppercase text-white text-6xl w-1/2 text-right tracking-wide drop-shadow-md shadow-black'>
            {day} {monthName}
          </div>
          <div className='current-year px-10 text-white text-3xl w-1/2 text-right tracking-wide drop-shadow-md shadow-black'>{year}</div>
        </div>
      </div>

      <div className='card flex flex-col items-start max-w-[800px] mx-40 mb-40'>
        <motion.div
          initial={{y: "100%"}}
          animate={{y: "0%"}}
          exit={{opacity: 1}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className='apod-info h-full w-full p-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl'>
            <span className='apod-title flex-1 text-white text-5xl w-1/2 tracking-widest text-left' style={{textShadow: `2px 4px 3px rgba(0,0,0,0.3)`}}>{data.title}</span>
            <div className='flex items-start mt-4'>
              <span className='image-explanation flex-1 text-white text-1xl w-1/2 tracking-widest text-left'>{data.explanation}</span>
            </div>
            <div className='my-5'>
              <a id="hdr-img" href="#" target="_blank" rel="external" title="Click here to see a higher quality image" className='my-5 rounded-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
                HDR Image
              </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default APOD
