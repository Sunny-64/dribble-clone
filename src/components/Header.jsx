import React from 'react';
import { useState } from 'react';
import { FaMagnifyingGlass, FaBriefcase } from "react-icons/fa6";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false); 
  console.log(toggleMenu)
  return (
    <header className="py-4 px-6 flex justify-between items-center relative shadow-md">
      <div className="flex items-center gap-2">
      
        <div className='md:hidden flex flex-col gap-[5px]' onClick={() => setToggleMenu(!toggleMenu)}>
          <span className={`line w-[24px] h-[2px] rounded-full bg-black transition-all duration-500 ease-in-out origin-left ${toggleMenu && 'rotate-45'}`}></span>
          <span className={`line  h-[2px] rounded-full bg-black transition-all duration-500 ease-in-out ${toggleMenu ? 'w-0' : 'w-[24px]'}`}></span>
          <span className={`line  h-[2px] rounded-full bg-black transition-all duration-500 ease-in-out origin-left ${toggleMenu ? 'w-[24px]' : 'w-[16px]'} ${toggleMenu && '-rotate-45'}`}></span>
        </div>

        <p className='text-2xl origin-left -rotate-2 md:-rotate-0'>dribble</p>

        {/* Nav items */}
        <nav className={`flex flex-col absolute bg-white transition-all duration-500 ease-in ${toggleMenu ? '-left-6' : '-left-[200%]'} top-[73px] w-full h-screen py-4 px-6 gap-4 md:flex md:static md:flex-row md:h-full`}>
          <a href="#" className="hover:text-gray-300">Inspiration</a>
          <a href="#" className="hover:text-gray-300">Find Work</a>
          <a href="#" className="hover:text-gray-300">Learn Design</a>
          <a href="#" className="hover:text-gray-300">Go Pro</a>
          <a href="#" className="hover:text-gray-300">Hire Designer</a>
        </nav>
      </div>
      {/* Right side */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <input type="text" placeholder="Search" className="hidden lg:block bg-gray-200 px-4 py-2 rounded-md outline-none" />
          <FaMagnifyingGlass className='lg:absolute right-3 top-2 text-gray-500 cursor-pointer' size={22} /> 
        </div>

        <div>
        <FaBriefcase className='text-gray-500' size={22} />
        </div>
          <div className='h-10 w-10 rounded-full object-cover border-[1px] border-pink'></div>
        <button className="hidden lg:block bg-pink text-white px-4 py-2 rounded-md ">Upload</button>
      </div>
    </header>
  );
}

export default Header;
