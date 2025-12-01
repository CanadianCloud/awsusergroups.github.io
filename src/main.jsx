import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Function to hide loader and reveal app
const hideLoader = () => {
  const loader = document.getElementById("app-loader");
  const root = document.getElementById("root");
  
  // Add ready class to show the app
  root.classList.add("app-ready");
  
  // Hide and remove loader
  if (loader) {
    loader.classList.add("loader-hidden");
    // Remove loader from DOM after transition
    setTimeout(() => {
      loader.remove();
    }, 400);
  }
};

// Render the app
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hide loader after a small delay to ensure styles are applied
// Using requestAnimationFrame for better timing with browser rendering
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    hideLoader();
  });
});
