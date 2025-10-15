import React from 'react';
import Icon from './Icon';

const PersonalLifeSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-sky-100/50 rounded-full -translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
      <div className="relative z-10">
        <h2 className="text-xl font-bold text-sky-800">היומן שלך, מערכת ההפעלה שלך.</h2>
        <p className="text-slate-600 mb-4">משימות, תזכורות ובוסט של סדר ליום שלך.</p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg">
            <span className="font-semibold text-sky-700">10:00</span>
            <div className="w-px h-6 bg-sky-200"></div>
            <p className="flex-1">פגישת צוות שבועית</p>
            <input type="checkbox" className="h-5 w-5 text-sky-600 rounded border-gray-300 focus:ring-sky-500" />
          </div>
          <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg">
            <span className="font-semibold text-sky-700">14:30</span>
            <div className="w-px h-6 bg-sky-200"></div>
            <p className="flex-1">לאסוף את יאיר מהחוג</p>
             <input type="checkbox" className="h-5 w-5 text-sky-600 rounded border-gray-300 focus:ring-sky-500" />
          </div>
           <div className="flex items-center gap-3 p-3 bg-sky-50/50 border border-dashed border-sky-300 rounded-lg text-sky-600">
            <span className="font-semibold">17:00</span>
            <div className="w-px h-6 bg-sky-200"></div>
            <p className="flex-1">זמן פנוי - בא לך להתאמן?</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-2 mt-6">
          <button className="flex items-center justify-center w-12 h-12 bg-sky-600 text-white rounded-full shadow-md hover:bg-sky-700 transition">
             <Icon className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
             </Icon>
          </button>
          <button className="flex-1 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
            דברי עם העוזרת שלך
          </button>
        </div>
         <p className="text-center text-sm text-slate-500 mt-4 cursor-pointer hover:text-sky-600">איך עוד אפשר לעזור לך היום?</p>
      </div>
    </section>
  );
};

export default PersonalLifeSection;