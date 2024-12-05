import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto space-y-12">
        <h2 className="text-5xl font-bold text-center text-white">
          About Us
        </h2>
        
        <div className="space-y-8">
          <p className="text-2xl text-gray-300 leading-relaxed font-light text-center">
            Our goal is to create the most innovative, interactive, and fun-to-play experiences on the Roblox platform.
          </p>

          <p className="text-2xl text-gray-300 leading-relaxed font-light text-center">
            Join us on this exciting adventure as we explore uncharted territories, push the limits of creativity, and redefine the gaming experience on Roblox.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
