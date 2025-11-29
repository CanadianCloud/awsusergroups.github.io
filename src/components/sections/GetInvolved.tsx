import volunteerIcon from '../../assets/icons/icons8-volunteer-100.png';
import microphoneIcon from '../../assets/icons/icons8-microphone-100 (1).png';
import starIcon from '../../assets/icons/icons8-star-100 (1).png';

export default function GetInvolved() {
  const cards = [
    {
      icon: volunteerIcon,
      title: 'Join Our Volunteers',
      description: 'Connect with the local community by lending a hand at our next event.',
    },
    {
      icon: microphoneIcon,
      title: 'Share Your Voice',
      description: 'We\'re looking for passionate speakers to inspire our AWS community.',
    },
    {
      icon: starIcon,
      title: 'Partner With Us',
      description: 'Your support goes directly toward food and drinks for 100 AWS innovators.',
    },
  ];

  return (
    <section id="get-involved" className="py-12 sm:py-16 md:py-20 bg-[#2b2b2b]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-600">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 sm:px-8 py-8 sm:py-12 md:py-8"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6"
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




