import React from 'react';
import { ShoppingCart, User, Globe, Headphones } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-3xl font-bold">
            <img src="logo.png" alt="Gelato" className="h-8" />
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <a href="/contact" className="flex items-center text-gray-700 hover:text-black">
            <Headphones className="w-5 h-5 mr-2" />
            <span className="text-sm">Contact us</span>
          </a>
          <div className="flex items-center text-gray-700 hover:text-black cursor-pointer">
            <Globe className="w-5 h-5 mr-2" />
            <span className="text-sm">IN/INR</span>
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