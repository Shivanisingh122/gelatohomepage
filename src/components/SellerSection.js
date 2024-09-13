import React from 'react';
import heroimage from '../images/heroimage.gif';


const SellerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto md:px-8"> {/* Added padding for horizontal margin */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left side: Text */}
          <div className="md:w-1/2 text-center md:text-left md:pr-8 mx-auto md:mx-4"> {/* Added horizontal margin */}
            <h2 className="text-xl mb-4">For print on demand sellers</h2>
            <p className="text-6xl mb-4">Accelerate business growth with innovative design tools and apps</p>
            <p className="text-xl mb-4">See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p>
            <div className="text-center mt-12">
              <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
                Learn more
              </button>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 mx-auto md:mx-4"> {/* Added horizontal margin */}
            <img src={heroimage} alt="Print on demand products" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
