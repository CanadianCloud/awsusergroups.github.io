import React from "react";
import { ScrollingBanner, AnimatedButton, SectionHeading } from "../shared";

const RESOURCES_DATA = [
  {
    title: ["AWS Community", "Day"],
    description: "A complete guide to organizing and hosting an AWS Community Day event.",
    link: "https://aws.amazon.com/events/community-day/"
  },
  {
    title: ["Sponsor Outreach", "Email Template"],
    description: "A professional email template for reaching out to potential event sponsors.",
    link: "https://aws.amazon.com/events/sponsorship/"
  },
  {
    title: ["Sponsorship Deck", "Outline"],
    description: "An outline to help you create a compelling sponsorship proposal.",
    link: "https://aws.amazon.com/partners/marketing/sponsorships/"
  },
  {
    title: ["Code of Conduct", "Template"],
    description: "Set clear behavior expectations with this code of conduct template.",
    link: "https://aws.amazon.com/codeofconduct/"
  },
  {
    title: ["Volunteer Onboarding", "Form"],
    description: "A simple form to onboard and prepare your event volunteers.",
    link: "https://core-docs.s3.amazonaws.com/documents/asset/uploaded_file/194610/Volunteer_Application_Instructions_Web_Version.pdf"
  },
  {
    title: ["Submit Your", "Resources"],
    description: "Share your event resources and photos with the community (remember to watermark).",
    link: ""
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
        {resource.link ? (
          <AnimatedButton 
            href={resource.link}
            variant="link" 
            className="mt-3 bg-transparent"
            external
          >
            Learn More
          </AnimatedButton>
        ) : (
          <AnimatedButton variant="link" className="mt-3 bg-transparent">
            Learn More
          </AnimatedButton>
        )}
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      {/* Scrolling banner above title */}
      <ScrollingBanner />
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mt-24">
          {/* Scroll anchor wraps the heading */}
          <div id="resources">
            <SectionHeading
              title="Resources for Leaders"
              subtitle="These resources are here to help community leaders plan and run successful events"
              className="mt-12"
            />
          </div>
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
