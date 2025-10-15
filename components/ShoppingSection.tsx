import React from 'react';

const logos = [
  'https://logo.clearbit.com/terminalx.com',
  'https://logo.clearbit.com/iherb.com',
  'https://logo.clearbit.com/hm.com',
  'https://logo.clearbit.com/asos.com',
  'https://logo.clearbit.com/next.co.uk',
  'https://logo.clearbit.com/zara.com',
  'https://logo.clearbit.com/castro.com',
  'https://logo.clearbit.com/amazon.com'
];

const ShoppingSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-amber-800">Smart Shop – כל השופינג בעולם במקום אחד 🛍️</h2>
      <p className="text-slate-600 mb-4">כל המותגים שאת אוהבת, מרוכזים וזמינים.</p>

      <div className="flex overflow-x-auto space-x-6 space-x-reverse pb-4 mb-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-24 h-16 bg-white border border-slate-200 rounded-lg flex items-center justify-center p-2">
            <img src={logo} alt={`logo-${index}`} className="max-h-12 max-w-full object-contain" />
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-tr from-amber-100 to-rose-100 rounded-xl p-4 flex items-center gap-4 mb-6">
        <div className="bg-rose-500 text-white rounded-lg p-4 text-center">
            <span className="text-2xl font-bold block">25%</span>
            <span className="text-xs">הנחה</span>
        </div>
        <div>
          <h3 className="font-bold text-rose-800">המבצע החם של היום 🔥</h3>
          <p className="text-sm text-rose-700">כל מוצרי הטיפוח של Kiehl's בהנחה מיוחדת!</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between border-t border-slate-200 pt-4">
        <div className="flex gap-2 sm:gap-4 text-center text-sm font-semibold text-slate-700">
           <a href="#" className="hover:text-amber-600 transition">🏠 לבית</a>
           <a href="#" className="hover:text-amber-600 transition">👧 לילדים</a>
           <a href="#" className="hover:text-amber-600 transition">💅 לעצמי</a>
           <a href="#" className="hover:text-amber-600 transition">🧘 בריאות</a>
        </div>
         <a href="#" className="text-amber-700 font-bold hover:underline">הסל שלי &larr;</a>
      </div>

    </section>
  );
};

export default ShoppingSection;