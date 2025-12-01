import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroBanner from "./components/sections/HeroBanner";
import DiscoverSection from "./components/sections/DiscoverSection";
import FeaturedUserGroup from "./components/sections/FeaturedUserGroup";
import BuildGenie from "./components/sections/BuildGenie";
import FAQs from "./components/sections/FAQs";
import Resources from "./components/sections/Resources";
import InstagramFeed from "./components/sections/InstagramFeed";
import { ScrollToTop, ScrollingBanner } from "./components/shared";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <div className="relative">
        <Header />
        <HeroBanner />
      </div>
      <main className="flex-1">
        <ScrollingBanner />
        <DiscoverSection />
        <FeaturedUserGroup />
        <BuildGenie />
        <FAQs />
        <Resources />
        <InstagramFeed />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
