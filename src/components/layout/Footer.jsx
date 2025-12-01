import React from "react";
import { AnimatedButton } from "../shared";
import awsGlobalLogo from "@/assets/aws-global-logo.png";

const FOOTER_LINKS = [
  { href: "#user-groups", label: "AWS User Groups" },
  { href: "#featured", label: "Featured AWS UG" },
  { href: "#build", label: "Build Genie" },
  { href: "#insights", label: "Leaders Insights" }
];

// Reusable Footer Section Heading
function FooterHeading({ children }) {
  return (
    <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl font-bold font-source">
      {children}
    </h2>
  );
}

// Reusable Footer Link Item
function FooterLink({ href, label }) {
  return (
    <li>
      <a 
        href={href} 
        className="text-white hover:underline hover:underline-offset-4 transition-all inline-block py-1 sm:py-0"
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-aws-dark text-white pt-32 sm:pt-48 lg:pt-64 pb-16 sm:pb-20 lg:pb-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <img 
                src={awsGlobalLogo} 
                alt="AWS Global" 
                className="h-12 sm:h-16 lg:h-20 w-auto"
              />
            </div>
          </div>

          {/* Helpful Links */}
          <div className="text-center sm:text-left">
            <FooterHeading>Helpful Links</FooterHeading>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1 sm:gap-y-2 text-sm sm:text-base">
              {FOOTER_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>

          {/* Share Your AWS Tips */}
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <FooterHeading>Share Your AWS Tips</FooterHeading>
            <p className="text-white text-sm sm:text-base mb-4 max-w-sm mx-auto sm:mx-0">
              Submit your insights through the form below and help us keep the resource library growing and up-to-date.
            </p>
            <div className="flex justify-center sm:justify-start">
              <AnimatedButton 
                href="https://tally.so/r/pbee4b"
                variant="primary"
                external
                className="text-sm sm:text-[16px] w-full sm:w-auto justify-center sm:justify-start"
              >
                Submit Your Contribution
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-4 sm:pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6 mb-0">
            © {new Date().getFullYear()} AWS Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
