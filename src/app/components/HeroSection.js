import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-stone-100 text-center py-12 bg-white">
      <div className="mb-8">
        <button className="bg-pink-400 hover:bg-pink-400 text-white px-6 py-2 rounded-full transition-colors duration-300 animate-colorChange">
          Over 3 million ready-to-work creatives!
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">The world&apos;s destination for design</h1>
      <p className="text-gray-600 mb-8">
        Get inspired by the work of millions of top-tiered designers &amp; agencies around the world.
      </p>
      <button className="bg-black text-white px-4 py-2 rounded rounded-full">Get Started</button>
    </section>
  );
};

export default HeroSection;
