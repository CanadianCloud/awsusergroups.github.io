import awsday from '../../assets/partner_logos/awsday.png';
import cloudSummit from '../../assets/partner_logos/CloudSummitColour_Stacked.png';
import hackerRivals from '../../assets/partner_logos/Logo-Oct25-Black.png';
import cpca from '../../assets/partner_logos/CPCA_2025_LogoHorizontal_Short_Colour.png';

export default function Partners() {
  const partners = [
    { name: 'AWS Community Day', logo: awsday },
    { name: 'Cloud Summit', logo: cloudSummit },
    { name: 'Hacker Rivals', logo: hackerRivals },
    { name: 'CPCA', logo: cpca },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left side - Text */}
          <div className="flex-shrink-0 md:max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Partners
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We're proud to collaborate with organizations that help us grow and empower the AWS community.
            </p>
          </div>

          {/* Right side - Logos horizontal */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto max-h-14 md:max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




