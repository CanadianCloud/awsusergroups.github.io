import React, { useState, useEffect } from "react";
import awsGlobalLogo from "@/assets/aws-global-logo.png";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#user-groups", label: "AWS User Groups" },
  { href: "#featured", label: "Featured AWS UG" },
  { href: "#build", label: "Build Genie" },
  { href: "#insights", label: "Leaders Insights" },
  { href: "#resources", label: "Resources for Leaders" }
];

function NavLink({ href, label, onClick, isMobile = false, isActive = false }) {
  const baseClasses = "transition-all duration-200 hover:text-aws-orange";
  const activeClasses = isActive ? "text-aws-orange" : "text-white";
  const desktopClasses = !isMobile ? "text-sm font-medium tracking-wide whitespace-nowrap px-1 pb-1" : "";
  const mobileClasses = isMobile ? "py-3 text-lg" : "";
  const underlineClasses = isActive && !isMobile ? "border-b-2 border-aws-orange" : "border-b-2 border-transparent";

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };
  
  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`${baseClasses} ${activeClasses} ${desktopClasses} ${mobileClasses} ${underlineClasses}`}
    >
      {label}
    </a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to detect active section
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(link => link.href.replace('#', ''));
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header

      // If at the very top, set Home as active
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      // Find which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Run on mount

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] pt-4 sm:pt-6 font-source transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="w-full flex items-center justify-between h-14 sm:h-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <a 
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center shrink-0 cursor-pointer"
        >
          <img 
            src={awsGlobalLogo} 
            alt="AWS Global" 
            className="h-10 sm:h-14 w-auto"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-12">
          {NAV_LINKS.map((link) => (
            <NavLink 
              key={link.href} 
              href={link.href} 
              label={link.label}
              isActive={activeSection === link.href.replace('#', '')}
            />
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 px-4 py-6 body-text">
            {NAV_LINKS.map((link) => (
              <NavLink 
                key={link.href} 
                href={link.href} 
                label={link.label}
                onClick={closeMenu}
                isMobile
                isActive={activeSection === link.href.replace('#', '')}
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
