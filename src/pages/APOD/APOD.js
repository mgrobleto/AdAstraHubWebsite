import React, { useState } from 'react';
import { getApodByDate } from '../../api/apod';
import { useQuery } from 'react-query'
import $ from 'jquery';
import {motion} from 'framer-motion';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Box from '@mui/material/Box';
import { DatePickerToolbar } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Loader from '../../components/Loader';
//import { saveAs } from 'file-saver';


const APOD = () => {

  const defaultValue = dayjs();
  const [dateValue, setDateValue] = useState(defaultValue);
  const selectedDate = dayjs(dateValue).format('YYYY-MM-DD');

  // useQuery works like useEffet so its not necessary to use it jjj

  const querykey = ['selectedImage', selectedDate];

  const {
    isLoading: loadingSelectedImage,
    isError,
    error,
    data,
  } = useQuery(
    {
      queryKey: querykey, 
      queryFn: () => getApodByDate(selectedDate), 
      //enabled: Boolean(dateSelected)
    }, 
  );

  if(loadingSelectedImage) return <Loader />;
  if(isError) return <span>Error: {error.message}</span>

  var day = dayjs(data.date).format('DD');
  var monthName = dayjs(data.date).format('MMMM');
  var year = dayjs(data.date).format('YYYY');
  var hdrUrl = "";

  if(data.media_type === 'image') {
    $('.image-container iframe').addClass('hidden');
    hdrUrl = data.hdurl;
  } 
  else if (data.media_type === 'video') {
    $('.image-container iframe').removeClass('hidden');
    $('#hdr-img').hide();
    $('.image-container #media-video').attr('src', data.url);
  }

  const CustomToolbar = (props) => {
    return (
      <Box
        // Pass the className to the root element to get correct layout
        className={props.className}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <DatePickerToolbar {...props} />
        <RocketLaunchIcon fontSize="large" sx={{ m: 5 }} />
      </Box>
    );
  }

 /*  const downloadApodImage = () => {
    saveAs(data.url, data.title);
  } */

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section className='image-container apod-image w-full h-auto md:min-h-screen sm:min-h-screen max-sm:min-h-screen lg:min-h-screen bg-center bg-cover' style={{backgroundImage: `url(${data.url})`}}>
        <div className='apod-header flex flex-col justify-between items-center sm:flex-row md:flex-col xl:flex-row xl:py-10'>
          <div className='header flex items-start mt-4 ml-40 p-10'>
              <span className='flex-1 text-white text-2xl w-1/2 tracking-widest text-center sm:text-4xl xl:text-4xl' style={{
                  textShadow: `2px 4px 3px rgba(0,0,0,0.3)`}}>
                  Foto Astronómica del Día
                  {/* Astronomy Picture of the Day */}
              </span>
          </div>
          <div className='aside-header flex flex-col items-center mx-10 sm:flex-row md:flex-col xl:flex-row'>
            <MobileDatePicker 
            maxDate={defaultValue}
            formatDensity="spacious"
            format='YYYY/MM/DD'
            defaultValue={dayjs()}
            value={dateValue}  
            onAccept={(newValue) => setDateValue(newValue)}
            slotProps={{ textField: { helperText: "Seleccione una fecha :)" } }}
            slots={{
              toolbar: CustomToolbar,
            }}
            sx={{ color: '#fff', p: 2, fontSize: 14, borderRadius: 8, margin: 5}}
            />
            <div className='current-date flex flex-col items-center mx-auto xl:mr-10 my-5 font-semibold drop-shadow-lg shadow-black' style={{textShadow: `2px 4px 3px rgba(0,0,0,0.3)`}}>
              <div className='current-month flex flex-row px-10 uppercase text-white text-3xl text-center sm:text-6xl md:text-6xl xl:text-right xl:w-1/2 tracking-wide drop-shadow-md shadow-black'>
                {day} {monthName}
              </div>
              <div className='current-year px-auto text-white text-3xl text-right tracking-wide drop-shadow-md shadow-black'>{year}</div>
            </div>
          </div>
        </div>
        <div className='card flex flex-col items-start w-auto mx-16 lg:mx-32 xl:max-w-5xl xl:ml-40'>
          <motion.div
              initial={{y: "100%"}}
              animate={{y: "0%"}}
              exit={{opacity: 1}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className='apod-info h-full w-auto lg:w-full p-10 mb-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl'>
                <span className='apod-title flex-1 text-white text-2xl w-1/2 tracking-widest text-center lg:text-5xl lg:text-left' style={{textShadow: `2px 4px 3px rgba(0,0,0,0.3)`}}>{data.title}</span>
                <iframe id='media-video' title='apod-video' className='hidden w-full max-h-[300px] lg::w-full xl:h-[20rem] left-0 top-0 my-5 rounded-lg'  frameBorder="0" allowFullScreen></iframe>
                <div className='flex items-start mt-4'>
                  <span className='image-explanation flex-1 text-white text-xs lg:text-lg xl:text-lg w-1/2 tracking-widest text-left'>{data.explanation}</span>
                </div>
                <div className='my-5'>
                  {/* <button id='hdr-img' onClick={downloadApodImage} className='my-5 rounded-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
                    Descargar
                  </button> */}
                  <a id="hdr-img" href={hdrUrl} target="" rel="external" title="Click here to see a higher quality image" className='my-5 rounded-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
                    Ver Imagen HDR
                  </a>
                </div>
              </div>
              <span className='image-credits flex-1 text-white text-xs lg:text-lg xl:text-lg w-1/2 tracking-widest text-left'>Credits: <span className='text-[#f287b1]'> <a href={"https://apod.nasa.gov/apod/astropix.html"} target="" rel="external" className='font-bold'> Original APOD Website </a> </span ></span>
          </motion.div>
        </div>
      </section>
    </LocalizationProvider>
    
  )
}

export default APOD
