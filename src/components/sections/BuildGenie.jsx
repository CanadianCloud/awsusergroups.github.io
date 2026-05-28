import React from "react";
import PromoSection from "./PromoSection";
import buildGenieLogo from "@/assets/build-genie-logo.png";

export default function BuildGenie() {
  return (
    <PromoSection
      id="build"
      title="Build Genie Cloud Solution"
      description="Meet your new cloud sidekick — the Build Genie, built by the Vancouver AWS community. Describe what you want to build in the cloud, and it instantly explains the architecture, the reasoning behind it, and generates Terraform code ready to deploy."
      ctaLabel="Use it for Free Here"
      ctaHref="https://partyrock.aws/u/Cloudaws/mt8_7y8ZO/Cloud-Solution-Build-Genie"
      media={
        <img
          src={buildGenieLogo}
          alt="Build Genie Cloud Solution"
          className="w-[160px] sm:w-[190px] md:w-[220px] lg:w-[250px] h-auto"
        />
      }
    />
  );
}
