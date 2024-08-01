import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-yellow-200 py-12 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Find your next designer today</h2>
        <p className="text-gray-800 mb-8">
          The world’s leading brands use Dribbble to hire creative talent.
          Browse millions of top-rated portfolios to find your perfect creative match.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Get started now
          </button>
          <button className="border border-black text-black px-6 py-2 rounded-full">
            Learn about hiring
          </button>
        </div>
        <p className="text-gray-700">
          Are you a designer? <a href="#" className="text-blue-600">Join Dribbble</a>
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
