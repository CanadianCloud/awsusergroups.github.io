import React from "react";
import { ScrollingBanner, AnimatedButton } from "../shared";
import heroBg from "@/assets/hero-bg.jpg";
import worldMap from "@/assets/world-map.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col cursor-pointer">
      {/* Main content with background image */}
      <div className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-20 sm:py-32 md:py-40 lg:py-56 min-h-[500px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative w-full max-w-md z-10 text-center mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] text-white leading-[1.1] mb-1 hero-title">
            Empowering AWS
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-[1.1] mb-6 md:mb-8">
            <span className="text-white">User Groups </span>
            <span className="text-[#ff9900]">Worldwide</span>
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
              variant="outline"
              className="w-full justify-center"
            >
              Access Leader Resources
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Orange scrolling banner */}
      <ScrollingBanner />

      {/* Discover AWS User Groups Section */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-aws-gray">
        <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text content */}
              <div className="space-y-4">
                <h2 className="section-title text-2xl sm:text-3xl lg:text-[35px] leading-tight">
                  Discover AWS User Groups<br />
                  Around the World
                </h2>
                <AnimatedButton 
                  href="https://builder.aws.com/community/user-groups"
                  variant="primary"
                  external
                >
                  Explore AWS UG
                </AnimatedButton>
              </div>

              {/* World map */}
              <div className="relative">
                <div className="relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={worldMap} 
                    alt="World Map" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
