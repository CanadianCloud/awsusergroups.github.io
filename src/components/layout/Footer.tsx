import awsugLogo from '../../assets/logo_aws_ug.png';
import discordIcon from '../../assets/social_media/discord.png';
import linkedinIcon from '../../assets/social_media/linkedin.png';
import meetupIcon from '../../assets/social_media/meetup.png';
import youtubeIcon from '../../assets/social_media/youtube.png';
import instagramIcon from '../../assets/social_media/instagram.png';
import cloudIcon from '../../assets/social_media/cloud.png';
import awsdayIcon from '../../assets/social_media/awsday.png';

export default function Footer() {
  const socialMediaLinks = [
    { icon: discordIcon, href: '#', alt: 'Discord' },
    { icon: instagramIcon, href: '#', alt: 'Instagram' },
    { icon: meetupIcon, href: '#', alt: 'Meetup' },
    { icon: youtubeIcon, href: '#', alt: 'YouTube' },
    { icon: linkedinIcon, href: '#', alt: 'LinkedIn' },
    { icon: awsdayIcon, href: '#', alt: 'AWS Day' },
    { icon: cloudIcon, href: '#', alt: 'Cloud Summit' },
  ];

  return (
    <footer className="bg-[#1C1C1C] text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto my-8 sm:my-12 md:my-20 px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 items-start">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-start">
            <img 
              src={awsugLogo} 
              alt="AWS UG Logo" 
              className="h-12 sm:h-14 md:h-16 mb-4 sm:mb-5"
            />
            <div className="flex gap-2.5 flex-wrap">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label={social.alt}
                >
                  <img 
                    src={social.icon} 
                    alt={social.alt} 
                    className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Helpfu Links</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-white text-sm sm:text-[15px]">
              <li>
                <a href="#" className="hover:text-aws-orange transition-colors inline-block py-1 active:text-aws-orange-dark">
                  Be a Vounteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aws-orange transition-colors inline-block py-1 active:text-aws-orange-dark">
                  Call For Speakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aws-orange transition-colors inline-block py-1 active:text-aws-orange-dark">
                  Become an Sponsor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aws-orange transition-colors inline-block py-1 active:text-aws-orange-dark">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          {/* Discord CTA */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Join Our Discord Channel!</h4>
            <p className="text-white mb-4 sm:mb-5 leading-relaxed text-sm sm:text-[15px]">
              Connect with fellow AWS enthusiasts, share ideas, learn from the community, and stay updated on upcoming events
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-aws-orange hover:bg-aws-orange-dark text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base min-h-[48px]"
            >
              Join Discord Here
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}




