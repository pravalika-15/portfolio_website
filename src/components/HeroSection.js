import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Hello, I'm Pravalika Attada
        </h1>
        <p className="text-xl lg:text-2xl mb-8">A passionate Developer</p>
        <a
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"
          href="https://github.com/pravalika-15"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
