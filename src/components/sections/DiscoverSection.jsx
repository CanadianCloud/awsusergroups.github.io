import React from "react";
import { AnimatedButton, WorldMap } from "../shared";

export default function DiscoverSection() {
  return (
    <div id="user-groups" className="relative py-12 sm:py-16 md:py-20 w-full -scroll-mt-16 sm:-scroll-mt-20 lg:-scroll-mt-24">
      <div className="bg-white w-full px-6 sm:px-10 md:px-14 lg:px-20 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
          {/* Text content */}
          <div className="space-y-6 text-center lg:text-left lg:flex-shrink-0 lg:max-w-sm">
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
          <div className="relative w-full max-w-2xl lg:flex-1">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
              <WorldMap className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
