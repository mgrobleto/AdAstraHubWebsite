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
            <span className='text-white text-3xl text-center sm:text-6xl lg:text-6xl  w-1/2 lg:text-left'>
                <Typewriter
                  options={{
                    strings: ['Welcome to Ad Astra Hub'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </span>
            <div className='text-section py-5'>
              <p className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black" text-2xl text-center sm:text-3xl lg:text-3xl w-full lg:w-1/2 lg:text-left'>Explore the cosmos with us</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    
  )
}

export default Home