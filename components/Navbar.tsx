import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 py-5 fixed top-0 left-0 w-full z-10  ">
      <div className="container mx-auto flex justify-evenly items-center">
        

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="#hero" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#Experience" className="hover:text-gray-300">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" passHref className="hover:text-gray-300"> 
              Projects
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
