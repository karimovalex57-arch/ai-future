/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutAI } from './components/AboutAI.tsx';
import { AITools } from './components/AITools.tsx';
import { AIChatAssistant } from './components/AIChatAssistant.tsx';
import { Capabilities } from './components/Capabilities.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar onStartClick={() => scrollToSection('ai-yordamchi')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('ai-haqida')}
          onToolsClick={() => scrollToSection('ai-vositalari')}
          onChatClick={() => scrollToSection('ai-yordamchi')}
        />

        {/* 2. AI haqida Section */}
        <AboutAI />

        {/* 3. AI vositalari Section */}
        <AITools />

        {/* 4. Interaktiv AI yordamchi Section */}
        <AIChatAssistant />

        {/* 5. Imkoniyatlar Section */}
        <Capabilities />

        {/* 6. FAQ Section */}
        <FAQSection />

        {/* 7. Aloqa Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
