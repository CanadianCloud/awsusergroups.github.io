import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: AccordionItem[];
  image: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>({
    events: null,
    about: null,
    involved: null,
  });

  const toggleItem = (section: string, index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  const faqData: { [key: string]: FAQSection } = {
    events: {
      title: 'Events',
      image: '/src/assets/gallery/AWSDay24-050.jpg',
      items: [
        {
          question: 'When and where do you meet?',
          answer: 'We typically meet once a month at various locations in Vancouver. Check our upcoming events section for the next meetup details. Most events are held at tech company offices or co-working spaces in downtown Vancouver.',
        },
        {
          question: 'How do I RSVP?',
          answer: 'You can RSVP through our Meetup.com page or LinkedIn events. Simply click on the event you want to attend and follow the registration instructions. We recommend RSVPing early as spots fill up quickly!',
        },
        {
          question: 'Are events free?',
          answer: 'Yes! All our regular meetups are completely free to attend. Our annual AWS Community Day may have a small registration fee to cover venue and catering costs, but we keep it as affordable as possible.',
        },
        {
          question: 'Is food or drink provided?',
          answer: 'Yes, we typically provide pizza, snacks, and beverages at our events thanks to our generous sponsors. Please let us know if you have any dietary restrictions when you RSVP.',
        },
        {
          question: 'Are recordings or slides shared after events?',
          answer: 'Yes, we try to record all presentations and share them on our YouTube channel. Speakers are also encouraged to share their slides, which we post on our community page within a week after the event.',
        },
        {
          question: "What's the difference between regular meetups and the big annual events?",
          answer: 'Regular meetups are informal monthly gatherings with 1-2 talks and networking. Our annual AWS Community Day is a full-day conference with multiple tracks, keynote speakers, workshops, and hundreds of attendees from across the region.',
        },
      ],
    },
    about: {
      title: 'About the Group',
      image: '/src/assets/gallery/AWSDay24-092.jpg',
      items: [
        {
          question: 'When did the group start?',
          answer: 'The AWS User Group Vancouver held its first event ever in 2014, with monthly events until covid when we had to pivot to do monthly online events and twitch commentary on AWS events like re:invent. Then once covid restrictions ended we resurfaced to start doing in-person events again and started doing the annual AWS Community Day.',
        },
        {
          question: 'Are you a business?',
          answer: 'No, we are a volunteer-run community group. The AWS User Group Vancouver is part of the global AWS Community network and is organized by passionate volunteers who love AWS and want to share knowledge with the local tech community.',
        },
        {
          question: 'What is the goal of the group?',
          answer: 'Our mission is to connect AWS users in Vancouver, share knowledge and best practices, provide learning opportunities, and build a supportive community. We aim to help everyone from beginners to experts grow their AWS skills and network.',
        },
        {
          question: 'Do you have a Code of Conduct?',
          answer: 'Yes, we are committed to providing a welcoming and inclusive environment for all attendees. Our Code of Conduct is based on the AWS Community Code of Conduct and ensures respectful, harassment-free experiences for everyone. You can find it on our website.',
        },
      ],
    },
    involved: {
      title: 'Get Involved',
      image: '/src/assets/gallery/AWSDay24-119.jpg',
      items: [
        {
          question: 'How can I volunteer?',
          answer: 'We always welcome volunteers! You can help with event setup, registration, social media, photography, or organizing. Just reach out to us through our contact form or speak with an organizer at any event. No prior experience necessary!',
        },
        {
          question: 'What is involved in volunteering?',
          answer: 'Volunteering can include tasks like greeting attendees, helping with AV setup, managing registration, posting on social media, taking photos, or helping with venue logistics. Most volunteer roles take 1-2 hours and you still get to enjoy the event!',
        },
        {
          question: 'How can I give a talk?',
          answer: "We'd love to hear from you! Submit a talk proposal through our website or contact the organizers directly. Topics can range from beginner tutorials to advanced deep-dives, case studies, or project showcases. We welcome speakers of all experience levels.",
        },
        {
          question: 'How can my company sponsor?',
          answer: 'Sponsorship opportunities are available for individual events and our annual AWS Community Day. Sponsors can provide venue space, food and beverages, or financial support. Contact us for our sponsorship package details and benefits.',
        },
      ],
    },
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Got questions? We've grouped the most common ones below to help you get the most out of our community events.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-20">
          {Object.entries(faqData).map(([key, section], sectionIndex) => (
            <div
              key={key}
              className={`grid gap-10 items-start ${
                sectionIndex === 1 
                  ? 'md:grid-cols-[1fr_2fr]' 
                  : 'md:grid-cols-[2fr_1fr]'
              }`}
            >
              {/* Accordion Section */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <div className="space-y-3">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg overflow-hidden transition-all ${
                        openItems[key] === index
                          ? 'bg-orange-400 border-orange-400'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(key, index)}
                        className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${
                          openItems[key] === index
                            ? 'text-gray-900'
                            : 'text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-medium pr-4">{item.question}</span>
                        <svg
                          className={`w-5 h-5 flex-shrink-0 transition-transform ${
                            openItems[key] === index ? 'rotate-180' : ''
                          }`}
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
                      </button>
                      {openItems[key] === index && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-900 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className={sectionIndex === 1 ? 'order-first' : ''}>
                <div 
                  className="relative w-full aspect-[3/4] max-h-[500px] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ backgroundImage: `url(${section.image})` }}
                >
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




