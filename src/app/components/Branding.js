import React from 'react';
import Image from 'next/image';  

const Branding = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="overflow-x-hidden">
        <div className="flex space-x-4 px-4 justify-center animate-scroll">
          {[...Array(3)].map((_, index) => (
            <Image
              key={index}
              src="/image6.jpg"
              alt={`Designer ${index + 1}`}
              width={1000}
              height={200}
              className="flex-shrink-0"
            />
          ))}
          {[...Array(3)].map((_, index) => (
            <Image
              key={`duplicate-${index}`}
              src="/image6.jpg"
              alt={`Designer Duplicate ${index + 1}`}
              width={1000}
              height={200}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branding;
