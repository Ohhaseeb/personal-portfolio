import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className='pb-20 pt-16 flex flex-col items-center lg:items-start lg:space-x-10 container mx-auto'>
      <div className='text-center w-full'>
        <h1 className='text-center text-6xl font-bold mb-6'>Want To Get In Touch?</h1>
        <div className='border rounded-lg inline-block bg-slate-800 text-white'>
          <div className='flex flex-row items-center p-4'>  
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="h-6 w-6 mr-4 ml-2"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <a href="mailto:haseebsayed960@gmail.com" className='text-xl underline hover:text-gray-300'>
              haseebsayed960@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
