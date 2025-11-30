import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import FeaturedUserGroup from "./components/sections/FeaturedUserGroup";
import BuildGenie from "./components/sections/BuildGenie";
import FAQs from "./components/sections/FAQs";
import Resources from "./components/sections/Resources";
import InstagramFeed from "./components/sections/InstagramFeed";
import { ScrollToTop } from "./components/shared";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <main className="flex-1">
        <FeaturedUserGroup />
        <BuildGenie />
        <div id="insights">
          <FAQs />
        </div>
        <div id="resources">
          <Resources />
        </div>
        <InstagramFeed />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
