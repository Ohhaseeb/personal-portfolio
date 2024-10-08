'use client'
import { motion } from "framer-motion";
import React from 'react'
import haseeb from '@/public/images/haseeb.jpg'
import Image from 'next/image';

const Hero = () => {
  return (
    <div id="hero" className='pb-20 pt-36 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 container mx-auto'>
      <div className='lg:w-1/2 text-center lg:text-left pt-32'>
        <motion.h1 
        initial={{opacity: 0, y:50}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 0.8, delay: 0.2}}
        className='text-6xl font-bold mb-8'>Hi there! Im Haseeb
        </motion.h1>
        <motion.p
        initial={{opacity: 0, y:50}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 0.8, delay: 0.4}} 
        className='text-5xl '>Ready to fulfill your developing and analysis needs!
        </motion.p>
        {/* this below is the resume download button, the svg tag is the download icon contents*/}
        <a href="/resume.pdf" download>
        <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl border-2 w-1/2 border-black p-2 mt-12 rounded-md hover:border-white bg-gray-900 text-white flex items-center justify-center space-x-2"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        <span>Download Resume</span>
      </motion.button>
      </a>
      </div>
      <div className='lg:w-1/2'>
        <Image className='rounded-lg shadow-lg mx-12 '
          src={haseeb} 
          alt="Haseeb"              
          width={400}               
          height={400}             
        />
      </div>
    </div>
  )
}

export default Hero


