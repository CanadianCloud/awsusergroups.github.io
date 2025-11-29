export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      date: 'Oct 25, 2025',
      title: 'AWS Community Day 2025',
      location: 'BCIT Downtown Campus',
      address: 'Room 794 - 555 Seymour Street · Vancouver, bc',
      highlight: 'LAST YEAR SOLD OUT BEFORE THE DAY OF THE EVENT',
      ticketInfo: 'TICKETS ARE STILL AVALIABLE AT WWW.AWSDAY.CA',
      description: 'Join us for the 2nd annual AWS Community Day Canada — a full day celebration of learning...',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      buttonText: 'Save Your Spot +',
    },
    {
      id: 2,
      date: 'Oct 25, 2025',
      title: "Hackathon of the Year! (Like you've never seen, spectator sport!)",
      location: 'BCIT Downtown Campus',
      address: 'Room 794 - 555 Seymour Street · Vancouver, bc',
      highlight: 'GET YOUR TICKETS AT WWW.HACKERRIVALS.COM',
      ticketInfo: '## Hacker Rivals at AWS Day',
      description: 'Get ready for a world-first experience — the debut of Hacker Rivals, the eSports-style...',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      buttonText: 'Save Your Spot +',
    },
  ];

  return (
    <section id="events" className="py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Upcoming Events
          </h2>
          <p className="text-base sm:text-lg text-gray-700 px-4">
            Check out the upcoming events and get involved — your participation makes a difference!
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-6 sm:space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row p-4 sm:p-6 gap-4 sm:gap-6">
                {/* Event Image */}
                <div className="h-[180px] sm:h-[193px] md:w-80 flex-shrink-0">
                  <div className="h-full bg-gray-800 rounded-2xl overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                    {event.date}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {event.title}
                  </h3>

                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-start text-gray-600 mb-2">
                      <svg
                        className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-sm sm:text-base">{event.location}</div>
                        <div className="text-xs sm:text-sm">{event.address}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4 space-y-2">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {event.highlight}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">
                        {event.ticketInfo}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <button className="bg-aws-orange hover:bg-aws-orange-dark text-black font-semibold px-5 sm:px-6 py-3 rounded-full transition-all active:scale-95 inline-flex items-center text-sm sm:text-base min-h-[44px]">
                    {event.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


