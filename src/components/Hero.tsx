'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [backgroundPosition, setBackgroundPosition] = useState<string>('center 0px');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.5;
      const yPos = -(scrollY * speed);
      setBackgroundPosition(`center ${yPos}px`);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="hero h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/ACOM-Guardian_Gorilla-AT-GATE-02.jpg')",
        backgroundPosition: backgroundPosition,
      }}
    >
      <div className="hero-content text-center z-20">
        <h1 className="text-6xl mb-5 text-white font-bold shadow-lg animate-fadeInUp">Guardian Gorilla</h1>
        <p className="text-xl mb-8 text-white shadow-md animate-fadeInUp">Protector of the ACOMUnity DAO</p>
        <a href="#about" className="cta-button inline-block py-3 px-6 bg-green-600 text-white font-bold rounded-lg transition-all hover:bg-green-700 hover:transform hover:translate-y-[-3px] shadow-md animate-fadeInUp">Discover My Mission</a>
      </div>
      <Image 
        src="/img/ACOM-Guardian_Gorilla-AT-GATE-05.jpg" 
        alt="Futuristic gorilla with digital armor and visor"
        className="floating-image absolute top-1/2 right-[-150px] transform translate-y-[-50%] w-72 h-auto animate-floatLeftRight"
        width={300}
        height={200}
      />
    </section>
  );
};

export default Hero;
