import React from "react";

/**
 * SectionHeading - Consistent section title component
 * 
 * @param {string} title - Main heading text
 * @param {string} subtitle - Optional subtitle text
 * @param {boolean} centered - Center align text (default: true)
 * @param {string} className - Additional CSS classes
 */
export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  className = "" 
}) {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="body-text mt-3">{subtitle}</p>
      )}
    </div>
  );
}
