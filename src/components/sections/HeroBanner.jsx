import React from "react";
import { AnimatedButton } from "../shared";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroBanner() {
  const handleResourcesClick = (e) => {
    e.preventDefault();
    document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-20 sm:py-32 md:py-40 lg:py-56 min-h-125">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative w-full max-w-md z-10 text-center mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-white leading-tight mb-1 hero-title mt-8 sm:mt-0">
          Empowering AWS
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl leading-tight mb-6 md:mb-8">
          <span className="text-white">User Groups </span>
          <span className="text-aws-orange">Worldwide</span>
        </h1>
        <p className="text-white mb-6 md:mb-8">
          Tools, guidance, and community support for leaders everywhere.
        </p>
        <div className="flex flex-col gap-3 w-full mb-10">
          <AnimatedButton 
            href="https://builder.aws.com/community/user-groups"
            variant="primary"
            external
            className="w-full justify-center"
          >
            Discover AWS User Groups
          </AnimatedButton>
          <AnimatedButton 
            href="#resources"
            variant="outline"
            className="w-full justify-center"
            onClick={handleResourcesClick}
          >
            Access Leader Resources
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
