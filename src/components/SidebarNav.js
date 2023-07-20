import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence} from 'framer-motion';

// styles
import '../styles/SideBarNav.css';

const SidebarNav = () => {

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
        y: 0,
        transition: {
          duration: 1.2
        },
      }
    };

    const links = [
      {
       href: '/AdAstraHubWebsite',
       title: '/ Inicio'
      },
      {
        href: '/AdAstraHubWebsite/posts',
        title: '/ Info'
      },
      {
       href: '/AdAstraHubWebsite/apod',
       title: '/ APOD'
      },
      {
       href: '/AdAstraHubWebsite/about',
       title: '/ Acerca de'
      }
    ];

  return (
   <AnimatePresence>
      <div className='sidebar-nav bottom-3'>
          <div className='sidebar-links'>
            <motion.div
              variants={pageVariants}
              initial="hidden"
              animate="show"
            >
              {links.map(({href, title}, index) => ( 
                <motion.div key={index} variants={item}>
                  <li key={index}>
                    <Link to={href}>
                      {title}
                    </Link>
                  </li>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </div>
   </AnimatePresence>
  )
}

export default SidebarNav

