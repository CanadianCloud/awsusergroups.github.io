import React from "react";

export default function Testimonials() {
  const resources = [
    {
      title: "AWS Community Day",
      description: "A complete guide to organizing and hosting an AWS Community Day event."
    },
    {
      title: "Sponsor Outreach Email Template",
      description: "A professional email template for reaching out to potential event sponsors."
    },
    {
      title: "Sponsorship Deck Outline",
      description: "An outline to help you create a compelling sponsorship proposal."
    },
    {
      title: "Code of Conduct Template",
      description: "Set clear behavior expectations with this code of conduct template."
    },
    {
      title: "Volunteer Onboarding Form",
      description: "A simple form to onboard and prepare your event volunteers."
    },
    {
      title: "Submit Your Resources",
      description: "Share your event resources and photos with the community (remember to watermark)."
    }
  ];

  return (
    <section id="resources" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Resources for Leaders
          </h2>
          <p className="text-[17px]">
            These resources are here to help community leaders plan and run successful events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[200px]">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 group cursor-pointer flex flex-col justify-between min-h-[320px] ${
                resource.highlighted 
                  ? 'bg-[#ff9900]' 
                  : 'bg-white hover:bg-[#ff9900]'
              }`}
            >
              <div>
                <h3 className="text-[18px] font-bold mb-3 text-black pt-[200px]">
                  {resource.title}
                </h3>
                <p className="text-[17px] text-black leading-relaxed">
                  {resource.description}
                </p>
              </div>
              <button className={`w-full px-6 py-2.5 text-black text-[17px] font-medium rounded-full border-2 transition-all duration-300 mt-6 ${
                resource.highlighted
                  ? 'bg-transparent border-black'
                  : 'bg-[#ff9900] border-transparent group-hover:border-black'
              }`} style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-[-100px]">
          <button className="inline-block px-6 py-3 text-gray-900 font-semibold border-b-2 border-gray-900" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            Share Your UG Resources with Leaders →
          </button>
        </div>
      </div>
    </section>
  );
}
