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
    <footer className="bg-[#1C1C1C] text-white py-20">
      <div className="container mx-auto my-20 px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-start">
            <img 
              src={awsugLogo} 
              alt="AWS UG Logo" 
              className="h-16 mb-5"
            />
            <div className="flex gap-2.5 flex-wrap">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src={social.icon} 
                    alt={social.alt} 
                    className="h-8 w-8 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Helpfu Links</h4>
            <ul className="space-y-2.5 text-white text-[15px]">
              <li>
                <a href="#" className="hover:text-aws-orange transition-colors">
                  Be a Vounteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aws-orange transition-colors">
                  Call For Speakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aws-orange transition-colors">
                  Become an Sponsor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aws-orange transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          {/* Discord CTA */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Join Our Discord Channel!</h4>
            <p className="text-white mb-5 leading-relaxed text-[15px]">
              Connect with fellow AWS enthusiasts, share ideas, learn from the community, and stay updated on upcoming events
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-aws-orange hover:bg-aws-orange-dark text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Discord Here
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}




