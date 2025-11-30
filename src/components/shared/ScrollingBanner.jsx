import React from "react";

const BANNER_ITEMS = [
  "Lead Globally",
  "Connect Communities",
  "Grow Together",
  "Cloud Innovation",
  "Share Knowledge"
];

export default function ScrollingBanner() {
  const renderItems = () => (
    <div className="scrolling-banner-item">
      {BANNER_ITEMS.map((text, index) => (
        <React.Fragment key={index}>
          <span className="scrolling-banner-icon">✱</span>
          <span className="scrolling-banner-text">{text}</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="scrolling-banner">
      <div className="flex animate-scroll">
        {/* Render twice for seamless infinite loop */}
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
}
