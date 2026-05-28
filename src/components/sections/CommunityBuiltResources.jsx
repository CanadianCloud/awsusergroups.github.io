import React from "react";
import { SectionHeading } from "../shared";
import BuildGenie from "./BuildGenie";
import FeedbackFeijoa from "./FeedbackFeijoa";

export default function CommunityBuiltResources() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Community Built Resources"
          subtitle="Community-created tools and resources designed to help builders, organizers, and AWS enthusiasts learn, connect, and grow together."
        />

        <div className="space-y-20 mt-10">
          <BuildGenie />
          <FeedbackFeijoa />
        </div>
      </div>
    </section>
  );
}