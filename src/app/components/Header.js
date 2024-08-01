"use client"; 

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-stone-100 flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <nav className="flex space-x-4 relative">
          <div className="relative">
            <button
              className="text-gray-700 hover:text-black focus:outline-none"
              onClick={toggleDropdown}
            >
              Find designers
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4">
                <Link href="#" className="block text-gray-700 hover:text-black">
                  Designer search
                  <p className="text-sm text-gray-500">Quickly find your next designer</p>
                </Link>
                <Link href="#" className="block text-gray-700 hover:text-black mt-2">
                  Post a job
                  <p className="text-sm text-gray-500">The #1 job board for design talent</p>
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className="text-gray-700 hover:text-black">Inspiration</Link>
          <Link href="#" className="text-gray-700 hover:text-black">Jobs</Link>
          <Link href="#" className="text-gray-700 hover:text-black">Go Pro</Link>
        </nav>
      </div>
      <div className="text-center flex-grow">
        <h1 className="text-lg font-bold">Dribbble</h1>
      </div>
      <div className="flex items-center space-x-4 ">
        <input type="text" placeholder="Search..." className="border rounded p-1 rounded-full" />
        <Link href="#" className="text-gray-700 hover:text-black rounded-full">Log in</Link>
        <button className="bg-black text-white px-4 py-2 rounded rounded-full">Sign up</button>
      </div>
    </header>
  );
};

export default Header;