
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import ModelMarket from './components/ModelMarket';
import AgentSandbox from './components/AgentSandbox';
import Advantages from './components/Advantages';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <FeatureCards />
        <ModelMarket />
        <AgentSandbox />
        <Advantages />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
