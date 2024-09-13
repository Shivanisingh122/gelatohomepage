import React from 'react';
import abstractDesignImage from '../images/abstract-design.webp';

const FeatureItem = ({ title, description }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-black-600 flex items-center">
      <span className="mr-2">▷</span> {title}
    </h3>
    <p className="ml-6 text-gray-600">{description}</p>
  </div>
);

const WhyChooseGelato = () => {
  const features = [
    {
      title: "World's largest print-on-demand network",
      description: "140+ print partners in 32 countries. Gelato is a truly global service."
    },
    {
      title: "Sell globally, produce locally",
      description: "Your products are produced close to your customers, wherever they are."
    },
    {
      title: "100% free editing tools",
      description: "Create your custom products using our suite of free tools."
    },
    {
      title: "60+ logistics partners",
      description: "Our global network of logistics partners ensures your products are delivered fast."
    },
    {
      title: "High-quality products",
      description: "We partner with the world's leading brands to ensure the best quality products."
    },
    {
      title: "Endless creativity with Shutterstock Images",
      description: "Access millions of images and graphics to create unique products you can sell in your store."
    },
    {
      title: "1-click integration to the leading ecommerce platforms",
      description: "Connect your store to Gelato using our integrations with Shopify, Etsy and more."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why choose Gelato</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side: Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src={abstractDesignImage} 
              alt="Abstract Design" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Right side: Text */}
          <div className="md:w-1/2 md:pl-8">
            {features.map((feature, index) => (
              <FeatureItem key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGelato;
