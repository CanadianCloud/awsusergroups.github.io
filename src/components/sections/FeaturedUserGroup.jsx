import React from "react";
import { AnimatedButton } from "../shared";
import communityDay from "@/assets/community-day.jpg";
import networkingEvent from "@/assets/networking-event.jpg";

export default function FeaturedUserGroup() {
  return (
    <section id="featured" className="py-16 sm:py-24 md:py-32">
      <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="rounded-3xl p-0">
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
                href="https://awscanada.ca/"
                variant="primary"
                external
                className="mt-6"
              >
                Explore Community
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
