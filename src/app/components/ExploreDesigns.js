import React from 'react';
import Image from 'next/image';  

const ExploreDesigns = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl text-center mb-6">Explore Inspiring Designs</h2>
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/image5.jpg"
          alt="Design 1"
          width={1920}
          height={1080}
          className="object-cover mb-4"
        />
        <button className="text-black border border-black rounded p-1 rounded-full">
          Browse more inspiration
        </button>
      </div>
    </section>
  );
};

export default ExploreDesigns;
