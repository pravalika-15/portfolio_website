import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div>
          <a href="/" className="text-white text-xl font-bold">
            Pravalika Attada
          </a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-300 hover:text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-300 hover:text-white">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
