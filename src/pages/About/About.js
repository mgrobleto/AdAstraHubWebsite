import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='w-full h-auto md:min-h-screen sm:min-h-screen max-sm:min-h-auto lg:min-h-screen flex flex-col justify-start'>
      <div className='px-10 py-20 lg:pt-80 sm:px-40 lg:px-40'>
        <motion.div
          initial={{y: "100%"}}
          animate={{y: "0%"}}
          exit={{opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className='text-white text-3xl text-center lg:text-5xl lg:w-1/2 lg:text-left'>
            Ad Astra Hub | Espacio Astronómico
          </span>
          <div className='text-section py-5'>
            <p className='text-[#f287b1] text-1xl sm:text-1xl lg:text-1xl w-full lg:w-1/2 text-left'>
              Built and designed by <b> Gabriela Robleto</b>.
              <a href={"https://github.com/mgrobleto"} target="" rel="external"> <GitHubIcon sx={{ fontSize:30}}/> </a> 
            </p>
            <div className='text-[#f287b1] text-1xl sm:text-1xl lg:text-1xl w-full lg:w-1/2 text-left'>All rights reserved. ©</div>
            <div className='text-[#f287b1] text-1xl sm:text-1xl lg:text-1xl w-full lg:w-1/2 text-left'>
              Powered by <a href={"https://apod.nasa.gov/apod/astropix.html"} target="" rel="external" className='font-bold'> Original APOD Website </a> by <a href={"https://api.nasa.gov/"} target="" rel="external" className='font-bold'> NASA API </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
