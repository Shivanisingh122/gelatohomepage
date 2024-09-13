import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

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

const Navigation = () => {
  const navItems = [
    { title: 'Products', items: ['Bestsellers', 'Mens clothing', 'Womens clothing', 'Kids & baby clothing', 'Wall art', 'Calendars', 'Cards', 'Photo books', 'Hats', 'Phone cases'] },
    { title: 'Start selling', items: ['Print on deman', 'Setup your business', 'Sell customer products'] },
    { title: 'Tools and apps', items: ['Print on deman', 'Setup your business', 'Sell customer products'] },
    { title: 'Pricing', items: ['Print on deman', 'Setup your business', 'Sell customer products'] },
    { title: 'Resources', items: ['Print on deman', 'Setup your business', 'Sell customer products'] },
    { title: 'Pro sellers', items: ['Print on deman', 'Setup your business', 'Sell customer products'] },
    { title: 'GelatoConnect', items: ['Print on deman', 'Setup your business', 'Sell customer products'] },
  ];

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

export default Navigation;