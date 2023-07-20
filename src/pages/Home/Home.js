import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <div className='w-full h-full flex flex-col justify-start'>
        <div className='px-10 py-20 lg:pt-80 xl:pt-80 sm:px-40 lg:px-40'>
          <motion.div
          initial={{y: "100%"}}
          animate={{y: "0%"}}
          exit={{opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <span className='text-white text-3xl sm:text-6xl lg:text-6xl w-1/2 text-left'>
                <Typewriter
                  options={{
                    strings: ['Bienvenidos a Ad Astra Hub'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </span>
            <div className='text-section py-5'>
              <p className='text-[#f287b1] text-2xl sm:text-3xl lg:text-3xl w-full lg:w-1/2 text-left'>Tu espacio para conocer de astronomía</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    
  )
}

export default Home