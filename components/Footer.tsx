import React from 'react';
import Icon from './Icon';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => {
    const textColor = active ? 'text-sky-600' : 'text-slate-500';
    return (
        <button className={`flex flex-col items-center gap-1 ${textColor} hover:text-sky-500 transition`}>
            {icon}
            <span className="text-xs font-bold">{label}</span>
        </button>
    );
}

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200 shadow-t-lg z-20">
      <div className="relative flex justify-around items-center h-20 px-4">
        <NavItem 
          icon={<Icon className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /></Icon>} 
          label="בית" 
          active 
        />
        <NavItem 
          icon={<Icon className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" /></Icon>} 
          label="יומן" 
        />
        <NavItem 
          icon={<Icon className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m12 0v-1.5a6 6 0 0 0-12 0v1.5" /></Icon>} 
          label="עוזרת" 
        />
        <NavItem 
          icon={<Icon className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.082 2.72a3 3 0 0 0-4.682-2.72M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 15a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /></Icon>} 
          label="קהילה" 
        />
         <div className="absolute -top-8 right-5">
            <button className="w-16 h-16 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-105 transition-transform">
                 <Icon className="w-8 h-8">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.53-0.477A4.5 4.5 0 0 0 18 13.5V12c0-4.556-4.03-8.25-9-8.25S3 7.444 3 12c0 1.103.224 2.154.635 3.143a4.5 4.5 0 0 0 1.965-2.031" />
                 </Icon>
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;