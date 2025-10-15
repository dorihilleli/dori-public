import React from 'react';
import Icon from './Icon';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">בוקר טוב, ליה 🌸</h1>
          <p className="text-sm text-slate-500">יום רביעי, 24 ביולי | ☀️ 28°C</p>
        </div>
        <button className="p-2 rounded-full hover:bg-slate-100">
          <Icon className="w-6 h-6 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" />
          </Icon>
        </button>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="תגידי לי מה את צריכה היום..."
          className="w-full pl-4 pr-10 py-3 bg-slate-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Icon className="w-6 h-6 text-slate-500">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m12 0v-1.5a6 6 0 0 0-12 0v1.5" />
          </Icon>
        </div>
      </div>
    </header>
  );
};

export default Header;