import React from "react";
import { ScrollingBanner, AnimatedButton, WorldMap } from "../shared";
import heroBg from "@/assets/hero-bg.jpg";

// Hero Banner Content Component
function HeroBanner() {
  const handleResourcesClick = (e) => {
    e.preventDefault();
    document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-20 sm:py-32 md:py-40 lg:py-56 min-h-125">
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
        <p className="body-text text-white mb-6 md:mb-8">
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
    </div>
  );
}

// Discover AWS User Groups Section Component
function DiscoverSection() {
  return (
    <div id="user-groups" className="relative py-12 sm:py-16 md:py-20 bg-aws-gray w-full">
      <div className="bg-white rounded-3xl mx-4 sm:mx-6 p-6 sm:p-10 md:p-14 lg:p-20">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text content */}
          <div className="space-y-4 text-center lg:text-left lg:w-1/3">
            <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Discover AWS User Groups
              <br />
              Around the World
            </h2>
            <div className="flex justify-center lg:justify-start">
              <AnimatedButton 
                href="https://builder.aws.com/community/user-groups"
                variant="primary"
                external
              >
                Explore AWS UG
              </AnimatedButton>
            </div>
          </div>

          {/* World map */}
          <div className="relative w-full lg:w-2/3">
            <div className="relative overflow-hidden flex items-center justify-center rounded-lg min-h-80 sm:min-h-96 lg:min-h-125">
              <WorldMap className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col w-full">
      <HeroBanner />
      <ScrollingBanner />
      <DiscoverSection />
    </section>
  );
}
