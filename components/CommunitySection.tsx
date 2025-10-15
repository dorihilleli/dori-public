
import React from 'react';
import Icon from './Icon';

const QuickLink: React.FC<{ icon: React.ReactNode; label: string; }> = ({ icon, label }) => (
    <a href="#" className="flex flex-col items-center justify-center text-center p-3 bg-rose-50/50 rounded-lg hover:bg-rose-100 transition">
        <div className="text-rose-600 mb-1">{icon}</div>
        <span className="text-xs font-semibold text-rose-800">{label}</span>
    </a>
);


const CommunitySection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-rose-800">קהילה. קריירה. השראה.</h2>
      <p className="text-slate-600 mb-4">נשים כמוך – צומחות, חולקות, מעצימות.</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <QuickLink icon={<Icon className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" /></Icon>} label="ההרצאה הבאה" />
        <QuickLink icon={<Icon className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" /></Icon>} label="מפגשים קרובים" />
        <QuickLink icon={<Icon className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></Icon>} label="דרושים" />
        <QuickLink icon={<Icon className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></Icon>} label="היכרויות" />
      </div>

      <div className="bg-rose-50 rounded-xl p-4">
          <h3 className="font-bold text-rose-900 mb-2">היום בקהילה 💬</h3>
          <p className="text-sm text-rose-800">
            <strong>מיכל כהן:</strong> "טיפ לניהול זמן שלמדתי על בשרי - אל תפחדי להגיד 'לא'. זה לא אנוכי, זה הכרחי. מה ה'לא' שהציל אתכן השבוע?"
          </p>
      </div>
    </section>
  );
};

export default CommunitySection;
