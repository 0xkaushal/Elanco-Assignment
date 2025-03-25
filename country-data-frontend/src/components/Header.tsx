import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the mobile menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex flex-wrap items-center justify-between w-full bg-white py-7 shrink-0">
      {/* Logo */}
      <div>
        <Link href={`/`}>
          <img
            className="h-24"
            src="https://imgs.search.brave.com/ewULy2Q3mjYBPf8EEXzhP3exuLyVpd2vAQuyRpV3GMs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE2MzQ4NjU4L2Mv/MTczNi8xNzM2LzIy/NS8wL2lsLzYzZjlh/NC8xMzY2ODEyOTQ4/L2lsXzYwMHg2MDAu/MTM2NjgxMjk0OF9l/ZHAwLmpwZw"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navbar Links (Hidden on Mobile, Visible on Medium screens and up) */}
      <div className="hidden md:flex items-center justify-between gap-12 text-black">
        <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900" href='/countries/region/Asia'>Asia</Link>
        <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900" href='/countries/region/Americas'>Americas</Link>
        <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900" href='/countries/region/Europe'>Europe</Link>
        <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900" href='/countries/region/Oceania'>Oceania</Link>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <button
        className="md:hidden flex items-center p-2 text-black"
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu (Shows when isOpen is true) */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white py-4`}
      >
        <div className="flex flex-col items-center">
          <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 py-2" href='/countries/region/Asia'>Asia</Link>
          <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 py-2" href='/countries/region/Americas'>Americas</Link>
          <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 py-2" href='/countries/region/Europe'>Europe</Link>
          <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 py-2" href='/countries/region/Oceania'>Oceania</Link>
        </div>
      </div>
    </div>
  );
}
