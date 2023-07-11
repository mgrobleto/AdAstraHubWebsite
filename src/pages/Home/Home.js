import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col justify-start'>
        <div className='px-40 pt-80'>
          <motion.div
          initial={{y: "100%"}}
          animate={{y: "0%"}}
          exit={{opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <span className='text-white text-6xl w-1/2 text-left'>
                <Typewriter
                  options={{
                    strings: ['Bienvenidos a Ad Astra Hub'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </span>
            <div className='text-section py-5'>
              <p className='text-[#64ffda] text-3xl w-1/2 text-left'>Tu espacio para conocer de astronomía</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
    
  )
}

export default Home