import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-secondary text-black h-24 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Left Navigation - Hidden on Mobile */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-lg text-black font-normal hover:text-primary transition">
            Inicio
          </a>
        </nav>

        {/* Center Logo */}
        <div className="flex-grow text-center">
          {/* Use "CADESI" on mobile and full title on larger screens */}
          <a href="/" className="text-2xl font-serif font-normal text-black">
            <span className="block md:hidden">CADESI</span> {/* Shown on small screens */}
            <span className="hidden md:block">CADESI | Colectivo Café del Desierto</span> {/* Shown on medium and larger screens */}
          </a>
        </div>

        {/* Blog & Menu Button for Mobile */}
        <div className="flex items-center space-x-4">
          <a href="https://cafe-del-desierto.ghost.io/" className="hidden md:inline text-lg text-black font-normal hover:text-primary transition">
            Blog
          </a>
          <button onClick={toggleMenu} className="md:hidden text-black hover:text-primary transition focus:outline-none">
            {/* Hamburger Menu Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Shown when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-secondary w-full absolute top-24 left-0 shadow-lg z-10">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="/" className="text-lg text-black font-normal hover:text-primary transition" onClick={toggleMenu}>
              Inicio
            </a>
            <a href="https://cafe-del-desierto.ghost.io/" className="text-lg text-black font-normal hover:text-primary transition" onClick={toggleMenu}>
              Blog
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}