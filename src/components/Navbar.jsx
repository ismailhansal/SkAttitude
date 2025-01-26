import React, { useState } from 'react';
import { BiX, BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 bg-base-300/20 text-white py-6 px-16 w-full border-b flex justify-between items-center z-10'>
      {/* Logo */}
      <a href="/" className='text-xl font-medium transition-all duration-300 hover:text-[#c1abbc]'>
        <span className='text-[#9a778c] font-bold hover:text-[#c1abbc]'>S</span>
        <span className='text-[#c1abbc] hover:text-[#c1abbc] font-bold'>K</span>ttitude
      </a>

      {/* Menu Desktop */}
      <ul className='hidden md:flex gap-10'>
        <li className='font-semibold transition-all duration-300 hover:text-[#c1abbc] text-lg'><a href="">About us</a></li>
        <li className='font-semibold transition-all duration-300 hover:text-[#c1abbc] text-lg'><a href="">Services</a></li>
        <li className='font-semibold transition-all duration-300 hover:text-[#c1abbc] text-lg'><a href="">Contact</a></li>
      </ul>

      {/* Enquire Now Button (Desktop) */}
      <div className='hidden md:block bg-white text-black py-3 px-4 rounded-md font-semibold transition-all duration-300 hover:scale-105'>
        <a href="">Enquire Now</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className='md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <BiX className='text-3xl cursor-pointer' /> : <BiMenu className='text-3xl cursor-pointer' />}
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/50 ${isMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
        <div className={`fixed top-0 left-0 w-3/4 bg-black/70 h-full transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}>
          <ul className='flex flex-col items-center justify-center h-full gap-6'>
            <li className='font-semibold text-lg hover:text-[#c1abbc]'><a href="">About us</a></li>
            <li className='font-semibold text-lg hover:text-[#c1abbc]'><a href="">Services</a></li>
            <li className='font-semibold text-lg hover:text-[#c1abbc]'><a href="">Contact</a></li>
            <li className='font-semibold text-lg hover:text-[#c1abbc]'><a href="">Enquire Now</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
