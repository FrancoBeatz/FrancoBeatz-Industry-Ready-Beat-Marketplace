
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'LISTEN & SELECT',
      description: 'Browse the store, listen to previews, and select the beats that match your project energy.'
    },
    {
      number: '02',
      title: 'CHOOSE LICENSE',
      description: 'Add to cart and select the licensing tier that fits your release goals and commercial needs.'
    },
    {
      number: '03',
      title: 'INSTANT DOWNLOAD',
      description: 'After secure checkout, receive an email with high-quality files and stems instantly.'
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-poppins">SIMPLE PROCESS</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From inspiration to final master. Getting professional industry sound has never been easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-8xl font-black text-white/5 absolute -top-10 -left-4 group-hover:text-purple-600/10 transition-colors duration-500">
                {step.number}
              </div>
              <div className="relative z-10 pt-10">
                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-[0.15em] font-poppins">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
