import React from 'react';
import gelatoConnectImage from '../images/gelato-connect.gif';

const ProducerSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto md:px-8"> {/* Added padding for horizontal margin */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left side (Image) */}
          <img src={gelatoConnectImage} alt="GelatoConnect interface" className="w-full md:w-1/2 rounded-lg shadow-lg mx-auto md:mx-4" /> {/* Added horizontal margin */}

          {/* Right side (Text) */}
          <div className="w-full md:w-1/2 p-6 space-y-6 mx-auto md:mx-4"> {/* Added horizontal margin */}
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-4">For print producers</h2>
              <h3 className="text-2xl font-semibold mb-4">GelatoConnect</h3>
              <p className="text-xl mb-8">
                Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry.
              </p>
            </div>
            <div className="text-center mt-12">
              <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProducerSection;
