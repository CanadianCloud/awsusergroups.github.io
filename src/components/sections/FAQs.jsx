import React, { useState } from "react";
import { AnimatedButton, SectionHeading } from "../shared";

const FAQS_DATA = [
  {
    question: "How do you keep your user group active and growing throughout the year?",
    answer: "Consistency is key. Even if only two people show up to your first event, keep it regular — same time, same place. Try to hold it at least once a month. Always consider your audience's schedule: work hours, exam periods, family time, and holidays. Avoid long weekends and major holidays, especially around Thanksgiving or Christmas."
  },
  {
    question: "What's the best way to attract new members who actually stay engaged?",
    answer: "Focus on education and networking — not marketing. People can watch tutorials online, but they come to user groups for real-world stories, peer conversations, and community connection. Keep it authentic, not corporate."
  },
  {
    question: "How do you find and secure great speakers for your events?",
    answer: "It's a challenge, but doable. AWS Community Managers can often help, but give them a few months' notice. Also look at local tech events and see who's presenting relevant topics (like data, AI, or cloud). Reach out to them — many will speak for free if they're already traveling for another event. Persistence and framing the opportunity right go a long way."
  },
  {
    question: "What's your approach to sponsorships or partnerships for meetups?",
    answer: "Similar to finding speakers — start with AWS connections, but also research who's sponsoring other local tech events. The AWS Marketplace and partner ecosystem are full of great leads. Sponsors appreciate community-driven events, especially if you can show that funds go back into education or charity."
  },
  {
    question: "How do you make your events stand out from other tech meetups?",
    answer: "Be consistent and make it fun. Always think, \"If I were an attendee, why would I come?\" Most people are giving up personal time to be there, so it has to be worth it — interesting content, relaxed atmosphere, and a genuine sense of community."
  },
  {
    question: "What tools or platforms do you use to manage communication and logistics?",
    answer: "WhatsApp or Discord for volunteer communication. Confluence for shared knowledge (venues, sponsors, etc. — free for 10 users). Jira for large events like AWS Community Day (also free for small teams). Lu.ma, Meetup, and LinkedIn for event promotion and RSVPs. Sessionize for managing speaker submissions (if you can prove non-profit status)."
  },
  {
    question: "How do you motivate volunteers and avoid burnout?",
    answer: "Recognize two groups — pre/post-event volunteers and day-of volunteers. Day-of volunteers are easier to find (they want visibility), but pre/post volunteers are the backbone. Many will flake — don't take it personally. The reliable ones become lifelong friends and collaborators. Avoid burnout by not letting anyone overcommit. Empower them with ownership, but remember that only you have the full vision — so communicate it clearly and keep them excited."
  },
  {
    question: "How do you approach diversity and inclusion?",
    answer: "We focus on three guiding principles: Educate the community. Bring people together. Give back through charity. We also partner with a disability and diversity consultant (a free service in Canada) to review accessibility and inclusion. Our venues must have ramps and accessible facilities — inclusion starts with access."
  },
  {
    question: "How do you measure the success of your events?",
    answer: "Attendance and return rate. We usually see 50% returning attendees, which shows strong community health. We also send post-event surveys to collect feedback and ideas for improvement."
  },
  {
    question: "What are some low-cost ways to make meetups feel more professional or exciting?",
    answer: "Food always helps — even bottled water and cookies go a long way. Don't stress about catering if budgets are tight; people come for content and connection. Keep the event relaxed but organized. A \"too corporate\" feel can actually hurt networking."
  },
  {
    question: "How do you balance technical depth for beginners and advanced attendees?",
    answer: "Ideally, have two talks per event — one beginner-friendly and one advanced. If only one talk is possible, aim for a Level 200 session. Beginners will appreciate the challenge, and advanced users will still find value in seeing how others approach similar problems."
  },
  {
    question: "What are some creative ideas for making events memorable?",
    answer: null // Special rendering for this FAQ
  },
  {
    question: "What's your biggest lesson learned from running AWS events?",
    answer: "Live by the Amazon Leadership Principles — Attendee Obsession, Ownership, Bias for Action, Frugality, Earn Trust. These apply perfectly to community leadership too."
  }
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const renderCreativeIdeasAnswer = () => (
    <div className="body-text leading-relaxed">
      <p className="mb-3">
        Each December, we host a social meetup at a local pub and decorate the tables with pillow stuffing to look like clouds — simple, cheap, and fun.
      </p>
      <p className="mb-2">Past creative ideas include:</p>
      <ul className="list-disc pl-5 mb-3 space-y-1">
        <li>Escaping a straightjacket live on stage.</li>
        <li>Controlling a drone with AWS Workspaces.</li>
        <li>Running a race between AWS and Azure to boot VMs the fastest.</li>
      </ul>
      <p>
        You don't need to go that far, but do something memorable. People want good talks and good company — in a consistent, well-run, and safe space.
      </p>
    </div>
  );

  return (
    <div
      className={`rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-500 ease-in-out group ${
        isOpen ? 'bg-aws-orange shadow-lg scale-[1.02] backdrop-blur-sm' : 'bg-white hover:bg-aws-orange'
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-4 md:p-5 text-left transition-all duration-500 ease-in-out ${
          isOpen ? 'bg-aws-orange backdrop-blur-sm' : 'hover:bg-aws-orange'
        }`}
      >
        <span className="faq-question pr-4">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-aws-orange text-black rounded">
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2 rounded-b-lg transition-all duration-500 ease-in-out backdrop-blur-sm bg-aws-orange">
          {index === 11 ? (
            renderCreativeIdeasAnswer()
          ) : (
            <p className="body-text leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="insights" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="AWS User Group Leaders - Tips & Tricks"
          subtitle="Provided by AWS UG leaders around the world"
        />

        <div className="space-y-3 mb-8">
          {FAQS_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-20">
          <AnimatedButton
            href="https://tally.so/r/pbee4b"
            variant="link"
            external
          >
            Submit Your Tips and Tricks
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
