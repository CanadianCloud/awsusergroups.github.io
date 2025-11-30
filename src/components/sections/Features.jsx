import React from "react";
import { AnimatedButton } from "../shared";
import communityDay from "@/assets/community-day.jpg";
import networkingEvent from "@/assets/networking-event.jpg";
import buildGenieLogo from "@/assets/build-genie-logo.png";

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 bg-white cursor-pointer">
      <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Featured section */}
        <div id="featured" className="rounded-3xl p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Images on the left */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* First image - Community Day */}
              <div className="flex-1">
                <div className="bg-gray-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] relative">
                  <img 
                    src={communityDay} 
                    alt="Community Day Event" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Second image - Networking */}
              <div className="flex-1">
                <div className="bg-gray-300 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] relative">
                  <img 
                    src={networkingEvent} 
                    alt="Networking Event" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Text content on the right */}
            <div className="bg-aws-gray rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20">
              <h2 className="section-title text-2xl sm:text-3xl lg:text-[35px] leading-tight">
                Featured AWS Usergroup
              </h2>
              <h3 className="section-subtitle text-xl sm:text-2xl lg:text-[30px]">
                AWS UG Vancouver
              </h3>
              <p className="body-text leading-relaxed max-w-[800px] line-clamp-4">
                AWS User Group Vancouver brings together cloud enthusiasts, developers, and tech professionals in the Vancouver area to learn, share, and collaborate on all things AWS. With monthly meetups, workshops, and networking events, the community provides a space for members of all skill levels to explore AWS services, exchange ideas, and grow their cloud expertise.
              </p>
              <AnimatedButton 
                href="https://awsusergroups.com"
                variant="primary"
                external
                className="mt-6"
              >
                Explore Community
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Build Genie Cloud Solution Section */}
        <div id="build" className="bg-aws-gray w-full py-20 sm:py-28 md:py-32 mx-0">
          <div className="w-full">
            <div className="w-full p-6 sm:p-10 md:p-14 lg:p-16 my-9 sm:my-12 md:my-15 lg:my-18">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
                {/* Text content on the left */}
                <div className="space-y-6">
                  <h2 className="section-title leading-tight">
                    Build Genie Cloud Solution
                  </h2>
                  <p className="body-text leading-relaxed max-w-[800px]">
                    Meet your new cloud sidekick — the Build Genie, built by the Vancouver AWS community. Describe what you want to build in the cloud, and it instantly explains the architecture, the reasoning behind it, and generates Terraform code ready to deploy.
                  </p>
                  <AnimatedButton 
                    href="https://partyrock.aws/u/Cloudaws/mt8_7y8ZO/Cloud-Solution-Build-Genie"
                    variant="primary"
                    external
                  >
                    Use It for Free Here
                  </AnimatedButton>
                </div>
                {/* Logo on the right */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-[180px] md:max-w-[200px] lg:max-w-[220px] ml-0 lg:ml-4">
                    <img 
                      src={buildGenieLogo} 
                      alt="Build Genie Cloud Solution" 
                      className="w-full h-auto mx-auto lg:mx-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
