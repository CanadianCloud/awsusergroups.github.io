import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import FAQs from "./components/sections/FAQs";
import Resources from "./components/sections/Resources";
import InstagramFeed from "./components/sections/InstagramFeed";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <main className="flex-1">
        <div id="user-groups">
          <Features />
        </div>
        <div id="insights">
          <FAQs />
        </div>
        <div id="resources">
          <Resources />
        </div>
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
