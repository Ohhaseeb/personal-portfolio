import React from 'react'
import nextjs from '@/public/images/nextjs-icon.png'
import tailwind from '@/public/images/tailwind.png'
import python from '@/public/images/python.png'
import SQL from '@/public/images/SQL.jpg'
import Image from 'next/image';

const Tools = () => {
  return (
    <div className='pb-18 pt-18 grid grid-cols-4 lg:items-start lg:space-x-2 container mx-auto'>
        <div className='flex justify-center items-center p-2 border border-gray-500 rounded-lg shadow-lg'>
        <Image className='rounded-lg'
          src={nextjs} 
          alt="next.js"              
          width={150}               
          height={150}             
        />
        </div>
        <div className='flex justify-center items-center p-2 border border-gray-500 rounded-lg shadow-lg'>
        <Image className='rounded-lg'
          src={tailwind} 
          alt="tailwind"              
          width={150}               
          height={150}             
        />
        </div>
        <div className='flex justify-center items-center p-2 border border-gray-500 rounded-lg shadow-lg'>
        <Image className='rounded-lg'
          src={python} 
          alt="python"              
          width={150}               
          height={150}             
        />
        </div>
        <div className='flex justify-center items-center p-2 border border-gray-500 rounded-lg shadow-lg'>
        <Image className='rounded-lg'
          src={SQL} 
          alt="SQL"              
          width={150}               
          height={150}             
        />
        </div>
    </div>
  )
}

export default Tools