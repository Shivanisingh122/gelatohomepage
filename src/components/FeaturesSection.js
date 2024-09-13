import React from 'react';
const FeaturesSection = () => {
    const features = [
      { title: "World's largest print-on-demand network", description: "140+ print partners in 32 countries. Gelato is a truly global service." },
      { title: "Sell globally, produce locally", description: "Your products are produced close to your customers, wherever they are." },
      { title: "100% free editing tools", description: "Create your custom products using our suite of free tools." },
    ];
  
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why choose Gelato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection ;
