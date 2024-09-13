import React from 'react';
import logo from '../images/logo.png';
import { ShoppingCart, User, Globe, Headphones } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-3 px-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo with Text */}
        <div className="flex items-center space-x-2 md:space-x-8">
          <a href="/" className="flex items-center text-2xl font-bold">
            <img src={logo} alt="Gelato" className="h-8" />
            <span className="ml-2 hidden md:inline">Gelato</span> {/* Added text next to logo */}
          </a>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-6 mt-2 md:mt-0">
          <a href="/contact" className="flex items-center text-gray-700 hover:text-black">
            <Headphones className="w-5 h-5 mr-2" />
            <span className="text-sm hidden md:inline">Contact us</span>
          </a>
          <div className="flex items-center text-gray-700 hover:text-black cursor-pointer">
            <Globe className="w-5 h-5 mr-2" />
            <span className="text-sm hidden md:inline">IN/INR</span>
          </div>
          <a href="/cart" className="text-gray-700 hover:text-black">
            <ShoppingCart className="w-5 h-5" />
          </a>
          <a href="/signin" className="text-gray-700 hover:text-black">
            <User className="w-5 h-5" />
          </a>
          <a href="/signup" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-300">
            Sign up for free
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
