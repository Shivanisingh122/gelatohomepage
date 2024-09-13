import React from 'react';
import printOnDemandImage from '../images/print-on-demand-products.webp';

const Hero = () => {
  return (
    <section className="bg-blue-50 py-20 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:px-8"> {/* Added padding for horizontal margin */}
        {/* Left side: Text */}
        <div className="md:w-1/2 text-center md:text-left mx-auto md:mx-4"> {/* Added horizontal margin */}
          <h1 className="text-6xl font-bold mb-4">Print on demand for your ecommerce business</h1><br></br>
          <p className="text-2xl font-bold mb-8">Sign up for free and only pay for what you sell</p>
          <p className="text-xl mb-8">Turn your passion into profit with the world's largest print on demand network.</p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
            Get started for free
        </button>

        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 mx-auto md:mx-4"> {/* Added horizontal margin */}
          <img src={printOnDemandImage} alt="printOnDemandImage" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
