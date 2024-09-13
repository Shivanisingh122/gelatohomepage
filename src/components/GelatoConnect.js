import React from 'react';
import meetgelato from '../images/meetgelato.webp'; // Correct path if this image is used

const GelatoConnect = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side: Text and Button */}
          <div className="md:w-1/2 mb-8 md:mb-0 px-4 md:px-8">
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              Meet<br />
              GelatoConnect at<br />
              Printing United
            </h2>
            <p className="text-gray-600 mb-6">
              Meet us at Printing United from September 10-12 in Las Vegas. Book your
              meeting slot to discover the innovative ways GelatoConnect is transforming
              the landscape and driving success for businesses like yours.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300">
              Book a meeting
            </button>
          </div>

          {/* Right side: Image with Gradient and Logo */}
          <div className="md:w-1/2 relative px-4 md:px-8">
            <div className="bg-gradient-to-br from-purple-300 to-blue-300 rounded-lg p-6 shadow-lg">
              <img 
                src={meetgelato} // Use the correct image path
                alt="Printing United Expo"
                className="w-full rounded-lg"
              />
              <div className="text-white text-lg font-semibold mt-2">
                EXPO • Sept. 10-12, 2024 • Las Vegas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GelatoConnect;
