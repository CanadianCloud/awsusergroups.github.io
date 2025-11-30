import React from "react";
import { ScrollingBanner, AnimatedButton, SectionHeading } from "../shared";

const RESOURCES_DATA = [
  {
    title: ["AWS Community", "Day"],
    description: "A complete guide to organizing and hosting an AWS Community Day event."
  },
  {
    title: ["Sponsor Outreach", "Email Template"],
    description: "A professional email template for reaching out to potential event sponsors."
  },
  {
    title: ["Sponsorship Deck", "Outline"],
    description: "An outline to help you create a compelling sponsorship proposal."
  },
  {
    title: ["Code of Conduct", "Template"],
    description: "Set clear behavior expectations with this code of conduct template."
  },
  {
    title: ["Volunteer Onboarding", "Form"],
    description: "A simple form to onboard and prepare your event volunteers."
  },
  {
    title: ["Submit Your", "Resources"],
    description: "Share your event resources and photos with the community (remember to watermark)."
  }
];

function ResourceCard({ resource }) {
  return (
    <div className="resource-card cursor-pointer">
      <div>
        <h3 className="section-subtitle text-[18px] mb-3 pt-24">
          {resource.title[0]}<br />{resource.title[1]}
        </h3>
        <p className="body-text leading-relaxed">
          {resource.description}
        </p>
      </div>
      <div className="flex justify-start">
        <AnimatedButton variant="link" className="mt-3 bg-transparent">
          Learn More
        </AnimatedButton>
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="py-12 sm:py-16 md:py-20 bg-gray-50 cursor-pointer">
      {/* Scrolling banner above title */}
      <ScrollingBanner />
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mt-24">
          <SectionHeading
            title="Resources for Leaders"
            subtitle="These resources are here to help community leaders plan and run successful events"
            className="mt-12"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {RESOURCES_DATA.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton variant="link">
            Share Your UG Resources with Leaders
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
