import React from 'react'
import blackHolePostImage from '../../assets/posts/blackHoles.png'
import blueSkyPost from '../../assets/posts/Sky.png'
import galaxiesPost from '../../assets/posts/Galaxies.png'
import { motion } from 'framer-motion';

const Posts = () => {
  const pageVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      } 
    },
  };
  
  const item = {
    hidden: { 
      opacity: 0,
      y: 30 
    },
    show: { 
      opacity: 1 ,
      /* position: 'fixed', */
      y: 0,
      transition: {
        duration: 1.2
        },
      }
    };

  return (
    <section id='Posts' className='w-full h-auto md:min-h-screen sm:min-h-screen max-sm:min-h-auto lg:min-h-screen flex justify-center items-center'>
       <motion.div 
        variants={pageVariants}
        initial="hidden"
        animate="show">
            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5 mx-10">
              <motion.div 
              variants={item} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 10 }}
              >
                <a href='https://www.instagram.com/p/CSajCM6M6b3/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='>
                  <img className="h-auto max-w-[200px] xl:max-w-[350px] rounded-lg shadow hover:shadow-lg" src={blackHolePostImage} alt=""></img>
                </a>
              </motion.div>
              <motion.div 
              variants={item} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 10 }}
              >
                <a href='https://www.instagram.com/p/CYjdn5DLz5R/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='>
                  <img className="h-auto max-w-[200px] xl:max-w-[350px] rounded-lg shadow hover:shadow-lg" src={blueSkyPost} alt=""></img>
                </a>
              </motion.div>
              <motion.div 
              variants={item} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 10 }}
              >
                <a href='https://www.instagram.com/p/CYuOM_wle9-/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='>
                  <img className="h-auto max-w-[200px] xl:max-w-[350px] rounded-lg shadow hover:shadow-lg" src={galaxiesPost} alt=""></img>
                </a>
              </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Posts
