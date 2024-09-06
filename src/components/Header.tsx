import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#1A1A1A] py-4 fixed w-full z-50">
      <nav>
        <ul className="flex justify-around list-none m-0 p-0">
          <li><a href="#home" className="text-white font-bold hover:text-green-500 transition-colors">Home</a></li>
          <li><a href="#about" className="text-white font-bold hover:text-green-500 transition-colors">About</a></li>
          <li><a href="#security" className="text-white font-bold hover:text-green-500 transition-colors">Security</a></li>
          <li><a href="#resources" className="text-white font-bold hover:text-green-500 transition-colors">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
