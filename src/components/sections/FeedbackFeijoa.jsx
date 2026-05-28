import React from "react";
import PromoSection from "./PromoSection";
import feedbackFeijoaLogo from "@/assets/feedback feijoa.png";

function FeijoaMark() {
  return (
    <img
      src={feedbackFeijoaLogo}
      alt="Feedback Feijoa logo"
      className="w-[160px] sm:w-[190px] md:w-[220px] lg:w-[250px] h-auto"
    />
  );
}

export default function FeedbackFeijoa() {
  return (
    <PromoSection
      title="Feedback Feijoa Event Feedback Tool"
      description="Want to know which talks landed and which didn’t? Feedback Feijoa makes it ridiculously easy to collect anonymous session feedback at meetups, conferences, and AWS Community Days. No account, no app, no friction, just fast attendee feedback, live event analytics, and clean reports you can share with speakers, sponsors, and organizers."
      ctaLabel="Use it for Free Here"
      ctaHref="https://www.feedbackfeijoa.com/"
      /* Match BuildGenie layout and title styles */
      media={<FeijoaMark />}
    />
  );
}