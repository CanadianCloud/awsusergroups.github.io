import React from "react";
import { AnimatedButton } from "../shared";
import buildGenieLogo from "@/assets/build-genie-logo.png";

export default function BuildGenie() {
  return (
    <section id="build" className="py-16 sm:py-24 md:py-32 bg-aws-gray">
      <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:justify-center">
          {/* Text content on the left */}
          <div className="space-y-6 text-center lg:text-left lg:max-w-lg">
            <h2 className="section-title leading-tight">
              Build Genie Cloud Solution
            </h2>
            <p className="body-text leading-relaxed">
              Meet your new cloud sidekick — the Build Genie, built by the Vancouver AWS community. Describe what you want to build in the cloud, and it instantly explains the architecture, the reasoning behind it, and generates Terraform code ready to deploy.
            </p>
            <div className="flex justify-center lg:justify-start pt-2">
              <AnimatedButton 
                href="https://partyrock.aws/u/Cloudaws/mt8_7y8ZO/Cloud-Solution-Build-Genie"
                variant="primary"
                external
              >
                Use It for Free Here
              </AnimatedButton>
            </div>
          </div>
          {/* Logo on the right */}
          <div className="flex justify-center">
            <img 
              src={buildGenieLogo} 
              alt="Build Genie Cloud Solution" 
              className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
