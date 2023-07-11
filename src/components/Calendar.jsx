import React from 'react';

const Calendar = () => {
    
    const daysOfWeek = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]

    const day = [];
    const weekdays = [];

    for (let i = 0; i < 35; i++) {
        day.push(<div className='day flex-[1_1_14.28%] bg-center bg-cover overflow-hidden text-white text-2xl w-1/2 text-left p-[10px] border-white border border-opacity-100' key={i}>Imagen</div>)
    }

    daysOfWeek.forEach((day, index) => {
        weekdays.push(<div className='weekday flex-[1_1_14.28%] text-white text-3xl w-1/2 text-left p-[5px]' key={index}>{day}</div>);
    })

  return (
    <>
      <main className='flex flex-col justify-center w-[100%] h-screen py-9'>
        <div className='header flex items-start mt-4'>
            <span className='flex-1 text-white text-3xl w-1/2 tracking-wide text-left'>
                Astronomy Picture of the Day
            </span>
        </div>

        <button type="button" class="back-btn mb-0 rounded-full absolute left-[215px] my-auto focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
        </button>

        <button type="button" class="forward-btn mb-0 absolute right-[215px] my-auto rounded-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        </button>

        <section className='calendar w-full h-screen flex flex-col mt-5 mb-10 mx-auto shadow-lg shadow-indigo-500/20'>
            <div className="main-image bg-example flex-1 bg-center bg-cover overflow-hidden h-full opacity-90">
                <iframe className='hidden relative' width="960" height="540" src="https://www.youtube.com/embed/x_UaOhvLUYA" frameBorder={0} allowFullScreen></iframe>
                <div className='date flex flex-col items-end font-semibold'>
                    <div className='current-month px-10 uppercase text-white text-6xl w-1/2 text-right tracking-wide drop-shadow-md shadow-black'>July</div>
                    <div className='current-year px-10 text-white text-3xl w-1/2 text-right tracking-wide drop-shadow-md shadow-black'>2023</div>
                </div>
            </div>
            <div className='current-dates flex-1 relative'>
                <div className='month flex flex-col h-[47vh]'>
                    <div className='days-of-week flex min-h-[35px] flex-1 border-white'>
                        {weekdays}
                    </div>
                    <div className='week flex flex-wrap flex-auto'>
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
