
import React from 'react';
import Icon from './Icon';

const HighTechZonePlusSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-indigo-800">כל ההטבות בהייטקזון + פלוס</h2>
      <p className="text-slate-600 mb-6">שירותים, הנחות, ותוכן ייעודי לנשים בהייטק.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Advisor */}
        <div className="bg-indigo-50 rounded-xl p-4 flex items-center gap-4">
          <div className="bg-indigo-500 text-white p-3 rounded-full">
            <Icon className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.25 3h9m-9.75 0a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75V15.75m12-3.375a3.375 3.375 0 0 0-6.75 0m8.25-8.25a3.375 3.375 0 0 0-6.75 0" />
            </Icon>
          </div>
          <div>
            <h3 className="font-bold text-indigo-900">היועצת האישית שלי 💬</h3>
            <p className="text-sm text-indigo-700">צ'אט אישי להתאמת מוצרים</p>
          </div>
        </div>

        {/* What's new */}
        <div className="bg-indigo-50 rounded-xl p-4">
          <h3 className="font-bold text-indigo-900 mb-2">מה חדש בשבילך היום?</h3>
          <p className="text-sm text-indigo-700 cursor-pointer hover:underline">
            אירוע נטוורקינג: נשים מובילות ב-AI
          </p>
        </div>

        {/* Night Feed */}
        <div className="col-span-1 md:col-span-2 bg-slate-800 text-white rounded-xl p-4">
          <h3 className="font-bold mb-2">🌙 פיד הלילה שלך</h3>
          <div className="flex items-center gap-4">
             <img src="https://picsum.photos/id/102/100/100" className="w-16 h-16 rounded-lg object-cover"/>
             <div>
                <p className="font-semibold">סט מצעי כותנה מפנקים</p>
                <p className="text-sm text-slate-300">מושלם לסופ"ש רגוע</p>
             </div>
          </div>
        </div>
        
        {/* Family User Widget */}
        <div className="col-span-1 md:col-span-2 bg-green-50 rounded-xl p-4 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-green-900">בקשה חדשה מדניאל</h3>
            <p className="text-sm text-green-800">"אמא, אפשר לקנות שובר ל-Roblox?"</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition">✔️ לאשר</button>
            <button className="bg-slate-200 text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-300 transition">X</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HighTechZonePlusSection;
