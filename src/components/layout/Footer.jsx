import React from "react";
import { AnimatedButton } from "../shared";
import awsGlobalLogo from "@/assets/aws-global-logo.png";

const FOOTER_LINKS = [
  { href: "#user-groups", label: "AWS User Groups" },
  { href: "#featured", label: "Featured AWS UG" },
  { href: "#build-genie", label: "Build Genie" },
  { href: "#insights", label: "Leaders Insights" }
];

export default function Footer() {
  return (
    <footer className="bg-aws-dark text-white pt-64 pb-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <img 
                src={awsGlobalLogo} 
                alt="AWS Global" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
          </div>

          {/* Helpful Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg mb-4 font-medium font-source">Helpful Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-white hover:underline hover:underline-offset-4 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Share Your AWS Tips */}
          <div className="text-center md:text-left">
            <h3 className="text-lg mb-3 font-medium font-source">Share Your AWS Tips</h3>
            <p className="text-gray-300 body-text mb-4 max-w-sm mx-auto md:mx-0">
              Submit your insights through the form below and help us keep the resource library growing and up-to-date.
            </p>
            <AnimatedButton 
              href="https://tally.so/r/pbee4b"
              variant="primary"
              external
              className="text-[16px]"
            >
              Submit Your Contribution
            </AnimatedButton>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs md:text-sm mt-6 mb-0">
            © {new Date().getFullYear()} AWS Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
