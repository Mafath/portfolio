import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <div>
{/* <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-[#1e2333] px-10 py-6 text-sm tracking-wide flex items-center justify-between"> */}
{/* <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-md border-b border-[#1e2333] px-10 py-6 text-sm tracking-wide flex items-center justify-between text-gray-300"> */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-10 py-6 text-sm tracking-wide flex items-center justify-between border-b border-[#1e2333] transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-30 backdrop-blur-md text-gray-300' : 'bg-transparent text-gray-200'
      }`}>

        {/* Empty Left Spacer (to push links right) */}
        <div className="w-[150px]"></div>

        {/* Centered Nav Links (now visually right-shifted) */}
        <div className="flex justify-center flex-grow pr-16">
          <ul className="flex space-x-8 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            {/* <li><a href="#service" className="hover:text-white">About me</a></li> */}
            <li><a href="#about" className="hover:text-white">About me</a></li>
            <li><a href="#blog" className="hover:text-white">Projects</a></li>
            <li><a href="#pages" className="hover:text-white">Blog</a></li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Hire Me Button */}
        <div>
          <button className="bg-transparent border border-gray-500 hover:bg-white hover:text-black px-6 py-2 rounded-full text-sm transition duration-300">
            Hire Me <span className="ml-1">››</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
