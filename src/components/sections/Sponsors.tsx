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

  const renderRow = (sponsors: typeof row1) => (
    <div className="flex justify-center gap-4 md:gap-6 mb-4 md:mb-6">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow w-[140px] md:w-[160px]"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="h-auto max-h-10 md:max-h-12 w-full object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section id="sponsors" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sponsors
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Thank you to all our past sponsors for your support.
          </p>
        </div>

        {/* Sponsors in 3 rows */}
        <div>
          {renderRow(row1)}
          {renderRow(row2)}
          {renderRow(row3)}
        </div>
      </div>
    </section>
  );
}




