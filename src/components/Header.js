import React, { useState } from 'react';
import { ShoppingCart, User, Globe, ChevronRight, X, Menu } from 'lucide-react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sidebarItems = [
    { label: 'Products', href: '/products' },
    { label: 'Start selling', href: '/start-selling' },
    { label: 'Tools and apps', href: '/tools-and-apps' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pro sellers', href: '/pro-sellers' },
    { label: 'GelatoConnect', href: '/gelato-connect' },
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between py-3 px-4 container mx-auto">
        <a href="/" className="text-2xl font-bold">Gelato</a>
        <nav className="flex items-center space-x-6">
          <a href="/contact" className="text-gray-700 hover:text-black">Contact us</a>
          <div className="flex items-center text-gray-700 hover:text-black cursor-pointer">
            <Globe className="w-5 h-5 mr-2" />
            <span>IN/INR</span>
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
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between py-3 px-4">
        <button onClick={toggleSidebar} className="text-gray-700">
          <Menu className="w-6 h-6" />
        </button>
        <a href="/" className="text-2xl font-bold">Gelato</a>
        <a href="/cart" className="text-gray-700">
          <ShoppingCart className="w-5 h-5" />
        </a>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <span>IN/INR</span>
            </div>
            <button onClick={toggleSidebar} className="text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4">
            <a href="/signup" className="block w-full bg-black text-white text-center py-2 rounded-full text-sm font-medium mb-4">
              Sign up for free
            </a>
            <a href="/signin" className="block w-full border border-gray-300 text-center py-2 rounded-full text-sm font-medium mb-4">
              Sign in
            </a>
          </div>
          <nav>
            {sidebarItems.map((item, index) => (
              <a key={index} href={item.href} className="flex items-center justify-between p-4 border-t text-gray-700 hover:bg-gray-100">
                {item.label}
                <ChevronRight className="w-5 h-5" />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;