// Import sponsor logos
import docker from '../../assets/past_sponsors_logos/Docker-Logo-2013-2015.png';
import datadog from '../../assets/past_sponsors_logos/Datadog_logo.svg.png';
import hp from '../../assets/past_sponsors_logos/HP-Logo.png';
import hootsuite from '../../assets/past_sponsors_logos/Hootsuite-Logo.png';
import vmware from '../../assets/past_sponsors_logos/VMware-Logo.png';
import sophos from '../../assets/past_sponsors_logos/Sophos_logo.png';
import netapp from '../../assets/past_sponsors_logos/NetApp-Emblem.png';
import suse from '../../assets/past_sponsors_logos/suse_logo.png';
import elastic from '../../assets/past_sponsors_logos/elastic.png';
import trendMicro from '../../assets/past_sponsors_logos/trend-micro-logo.png';
import ronin from '../../assets/past_sponsors_logos/ronin.png';
import paloAlto from '../../assets/past_sponsors_logos/PaloAltoNetworks_2020_Logo.svg.png';
import sumoLogic from '../../assets/past_sponsors_logos/sumologic.png';
import commvault from '../../assets/past_sponsors_logos/commvault.png';
import fortinet from '../../assets/past_sponsors_logos/fortinet.png';
import robson from '../../assets/past_sponsors_logos/RobsonINC-R-150x150.png';
import veeam from '../../assets/past_sponsors_logos/Veeam-Logo.jpg';
import hashicorp from '../../assets/past_sponsors_logos/hashicorp.png';
import couchbase from '../../assets/past_sponsors_logos/couchbase5916.jpg';

export default function Sponsors() {
  // Row 1 - 6 sponsors
  const row1 = [
    { name: 'Docker', logo: docker },
    { name: 'Datadog', logo: datadog },
    { name: 'HP', logo: hp },
    { name: 'Hootsuite', logo: hootsuite },
    { name: 'VMware', logo: vmware },
    { name: 'Sophos', logo: sophos },
  ];

  // Row 2 - 7 sponsors (larger row)
  const row2 = [
    { name: 'NetApp', logo: netapp },
    { name: 'SUSE', logo: suse },
    { name: 'Elastic', logo: elastic },
    { name: 'Trend Micro', logo: trendMicro },
    { name: 'Ronin', logo: ronin },
    { name: 'Palo Alto', logo: paloAlto },
    { name: 'Sumo Logic', logo: sumoLogic },
  ];

  // Row 3 - 6 sponsors
  const row3 = [
    { name: 'Commvault', logo: commvault },
    { name: 'Fortinet', logo: fortinet },
    { name: 'Robson Inc', logo: robson },
    { name: 'Veeam', logo: veeam },
    { name: 'HashiCorp', logo: hashicorp },
    { name: 'Couchbase', logo: couchbase },
  ];

  const allSponsors = [...row1, ...row2, ...row3];

  return (
    <section id="sponsors" className="py-12 sm:py-16 md:py-20 bg-gray-100 overflow-visible lg:overflow-x-visible">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl lg:overflow-visible">
        {/* Header */}
        <div className="mb-8 sm:mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Sponsors
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            Thank you to all our past sponsors for your support.
          </p>
        </div>

        {/* Sponsors Grid - Mobile & Tablet (hidden on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:hidden">
          {allSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-5 bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-shadow min-h-[90px] sm:min-h-[100px]"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-auto max-h-8 sm:max-h-10 md:max-h-12 w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Desktop Layout - 3 Rows (hidden on mobile/tablet) */}
        <div className="hidden lg:block space-y-5">
          {/* Container for Rows 1 and 3 - Constrained width */}
          <div className="max-w-7xl mx-auto">
            {/* Row 1 - 6 sponsors */}
            <div className="grid grid-cols-6 gap-5">
              {row1.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-6 py-5 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow min-h-[100px]"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-auto max-h-12 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - 7 sponsors (largest row with 5% overflow on both sides) */}
          {/* Wrapper to break out of container padding and allow overflow */}
          <div className="relative -mx-6">
            <div className="max-w-7xl mx-auto relative">
              <div className="w-[110%] left-1/2 -translate-x-1/2 relative grid grid-cols-7 gap-5">
                {row2.map((sponsor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center px-6 py-5 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow min-h-[100px]"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-auto max-h-12 w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Container for Rows 1 and 3 - Constrained width */}
          <div className="max-w-7xl mx-auto">
            {/* Row 3 - 6 sponsors */}
            <div className="grid grid-cols-6 gap-5">
              {row3.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-6 py-5 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow min-h-[100px]"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-auto max-h-12 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




