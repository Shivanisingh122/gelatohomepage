import React, { useState } from 'react';
import { ShoppingCart, User, Globe, ChevronRight, X, Menu, ChevronDown } from 'lucide-react';

const NavItem = ({ title, items, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 text-left text-gray-700 hover:bg-gray-100"
        >
          <span>{title}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
        {isOpen && items && (
          <div className="bg-gray-50 py-2">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-black"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && items && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navigation = ({ isMobile = false }) => {
  const navItems = [
    { title: 'Products', items: ['Bestsellers', 'Mens clothing', 'Womens clothing', 'Kids & baby clothing', 'Wall art', 'Calendars', 'Cards', 'Photo books', 'Hats', 'Phone cases'] },
    { title: 'Start selling', items: ['Print on demand', 'Setup your business', 'Sell customer products'] },
    { title: 'Tools and apps', items: ['Print on demand', 'Setup your business', 'Sell customer products'] },
    { title: 'Pricing', items: ['Print on demand', 'Setup your business', 'Sell customer products'] },
    { title: 'Resources', items: ['Print on demand', 'Setup your business', 'Sell customer products'] },
    { title: 'Pro sellers', items: ['Print on demand', 'Setup your business', 'Sell customer products'] },
    { title: 'GelatoConnect', items: ['Print on demand', 'Setup your business', 'Sell customer products'] },
  ];

  if (isMobile) {
    return (
      <nav className="border-t border-gray-200">
        {navItems.map((item, index) => (
          <NavItem key={index} title={item.title} items={item.items} isMobile={true} />
        ))}
      </nav>
    );
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 py-3">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavItem title={item.title} items={item.items} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header className="bg-white shadow-sm">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between py-3 px-4 container mx-auto">
          <a href="/" className="text-2xl font-bold">Gelato</a>
          <div className="flex items-center space-x-6">
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
          </div>
        </div>
        <Navigation />
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
          <Navigation isMobile={true} />
        </div>
      )}
    </header>
  );
};

export default Header;