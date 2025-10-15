
import React from 'react';
import Header from './components/Header';
import PersonalLifeSection from './components/PersonalLifeSection';
import ShoppingSection from './components/ShoppingSection';
import HighTechZonePlusSection from './components/HighTechZonePlusSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen text-slate-800">
      <Header />
      <main className="p-4 pb-28 space-y-6">
        <PersonalLifeSection />
        <ShoppingSection />
        <HighTechZonePlusSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
