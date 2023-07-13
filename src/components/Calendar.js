import React, {useEffect} from 'react';
import { getAllImages, getApod } from '../api/apod';
import { useQuery } from 'react-query';
import moment from 'moment/moment';
import $ from 'jquery';


const Calendar = (props) => {

    // useQuery works like useEffet so its not necessary to use it
    const { isLoading, error, data} = useQuery(
       'apod',
       getApod
    );

    const {loadingImages, allImageserror, allImagesData} = useQuery(
        'data',
        getAllImages
    )

    if (isLoading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let state = {
        month: moment().month() + 1,
        year: moment().year()
    }

    const day = [];
    const weekdays = [];

    for (let i = 0; i < 35; i++) {
        day.push(<div className='day flex-[1_1_14.28%] bg-center bg-cover overflow-hidden text-white text-2xl w-1/2 text-left p-[10px] border-white border border-opacity-100' key={i}>Imagen</div>)
    }

    daysOfWeek.forEach((day, index) => {
        weekdays.push(<div className='weekday flex-[1_1_14.28%] text-white text-3xl w-1/2 text-left p-[5px]' key={index}>{day}</div>);
    })

    const fetchMainImage = () => {
        let apodData = data;
    
        if(apodData.media_type === 'image') {
            $('.main-image iframe').addClass('hidden');
            return apodData.url;
        } else if (apodData.media_type === 'video') {
            $('.main-image iframe').removeClass('hidden');
            return apodData.url;
        }
    
        console.log(apodData);
    }
    
    const fetchAllImages = () => {
        let $el;
        const promises = $('.day').map(
            (index) => {
                $el = $(this);
                let date = `${state.year}-${state.month}-${$el.text()}`;

                if(!$el.text().trim()){
                    return false;
                }

                if(moment().unix() - moment(date, 'YYYY-MM-DD').unix() < 0) {
                    return false;
                }

                return getAllImages(date);
            }
        ).get();

        Promise.all(promises.map(reflect)).then(
            (results) => {
                state.results = results;
                $('.day').each((index) => {
                    if (!results[index]) {
                      return;
                    }
                    if (results[index].media_type === 'image') {
                      //$(this).attr('style', `background-image: url(${results[index].url}`);
                      return results[index].url;
                    } else if (results[index].media_type === 'video') {
                      console.log(results[index].url);
                      return `url('https://img.youtube.com/vi/${results[index].url.split('/')[4].split('?')[0]}/0.jpg'`
                      /* $(this).attr(
                        'style',
                        `background-image: url('https://img.youtube.com/vi/${
                          results[index].url.split('/')[4].split('?')[0]
                        }/0.jpg'`
                      ); */
                    }
                });
            }
        )
    }

    function reflect(promise) {
        if (!promise) {
          return null;
        }
        return promise.then(
          function(response) {
            return response.data;
      
            // if response.data.media_type === video? => get thumbnail
          },
          function(e) {
            return;
          }
        );
    }

    const updateMonth = (date) => {
        return $('.current-month').text(
          //used to be     moment(`${state.year}-${state.month}-1`, 'YYYY-M-D').format('MMM')
          moment(`${state.year}-${state.month}`, 'YYYY-M-D').format('MMM')
        );
      }
      
    const nextMonth = (date) => {
        state.month++;
        buildCalendar();
    }
      
    const prevMonth = (date) =>{
        state.month--;
        buildCalendar();
      }
      
    const updateYear = (date) => {
        if (date) {
          return $('.current-year').text(moment(date).format('YYYY'));
        }
        return $('.current-year').text(moment().format('YYYY'));
    }

    const buildCalendar = () => {
        //const year = state.year;

        const firstOfMonth = moment(
          `${state.year}-${state.month}-1`,
          'YYYY-M-D'
        ).day();

        let calendar = [];
        
        for (let i = 0; i < daysInMonth[state.month - 1] + firstOfMonth; i++) {
          if (i < firstOfMonth) {
            calendar.push('');
          } else {
            calendar.push(i - firstOfMonth + 1);
          }
        }
        
        if (state.month >= 12) {
          $('.forward-btn').hide();
        } else {
          $('.forward-btn').show();
        }
        if (state.month <= 1) {
          $('.back-btn').hide();
        } else {
          $('.back-btn').show();
        }

        const calendarHtml = calendar.map((day) => {
          return `<div class="day">${day}</div>`;
        });

        while (calendarHtml.length % 7 !== 0) {
          calendarHtml.push('<div class="day"> </div>');
        }

        $('.week').html(calendarHtml);
        fetchAllImages();
        updateMonth();
        updateYear();
    }
      

  return (
    <>
      <main className='flex flex-col justify-center h-screen pt-9'>
        <div className='header flex items-start mt-4 ml-[5.5rem]'>
            <span className='flex-1 text-white text-3xl w-1/2 tracking-wide text-left'>
                Astronomy Picture of the Day
            </span>
        </div>

        <button type="button" className="back-btn mb-0 rounded-full absolute left-[215px] my-auto focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
        </button>

        <button type="button" className="forward-btn mb-0 absolute right-[215px] my-auto rounded-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        </button>

        <section className='calendar min-w-[320px] max-w-[90%] w-full h-full flex flex-col mt-5 mb-10 mx-auto shadow-lg shadow-indigo-500/20'>
            <div className="main-image flex-1 relative bg-center bg-cover overflow-hidden opacity-90" style={{backgroundImage: `url(${fetchMainImage()})`}}>
                <iframe className='hidden absolute w-full h-full left-0 top-0 translate-y--1/2 border-none' src="" allowFullScreen></iframe>
                <div className='date flex flex-col items-end font-semibold'>
                    <div className='current-month px-10 uppercase text-white text-6xl w-1/2 text-right tracking-wide drop-shadow-md shadow-black'>July</div>
                    <div className='current-year px-10 text-white text-3xl w-1/2 text-right tracking-wide drop-shadow-md shadow-black'>2023</div>
                </div>
            </div>
            <div className='current-dates flex-1 relative'>
                <div className='month flex flex-col h-[50vh]'>
                    <div className='days-of-week flex min-h-[2.5rem] flex-1 border-white'>
                        {weekdays}
                    </div>
                    <div className='week flex flex-wrap flex-[9]'>
                        {day}
                    </div>
                </div>
            </div>
        </section>
        <div className='overlay hidden'>
            <div className='modal'>
                <div className='modal-image'></div>
                <div className='modal-description'></div>
            </div>
        </div>
      </main>
    </>
  )
}

export default Calendar
