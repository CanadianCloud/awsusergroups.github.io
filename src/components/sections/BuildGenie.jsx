import React from "react";
import { AnimatedButton } from "../shared";
import buildGenieLogo from "@/assets/build-genie-logo.png";

export default function BuildGenie() {
  return (
    <section id="build" className="py-16 sm:py-24 md:py-32 bg-aws-gray">
      <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
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
    </section>
  );
}
