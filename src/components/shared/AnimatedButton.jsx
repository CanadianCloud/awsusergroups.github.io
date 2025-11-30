import React, { useState } from "react";

/**
 * AnimatedButton - Reusable button component with arrow hover animation
 * 
 * @param {string} href - Link URL (renders as <a> if provided, otherwise <button>)
 * @param {string} variant - Button style: 'primary' | 'outline' | 'link'
 * @param {boolean} external - Opens link in new tab if true
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Button content
 */
export default function AnimatedButton({ 
  href, 
  children, 
  variant = "primary", 
  external = false,
  className = "",
  onClick
}) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
    link: "btn-link"
  };

  const Component = href ? "a" : "button";
  
  const linkProps = href ? {
    href,
    ...(external && { target: "_blank", rel: "noopener noreferrer" })
  } : {};

  return (
    <Component
      className={`${variants[variant]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...linkProps}
    >
      <span>{children}</span>
      <span 
        className={`arrow-animate ${isHovered ? "arrow-visible" : "arrow-hidden"}`}
      >
        →
      </span>
      {variant === "link" && (
        <span 
          className="underline-animate"
          style={{ width: isHovered ? "100%" : "calc(100% - 28px)" }}
        />
      )}
    </Component>
  );
}
