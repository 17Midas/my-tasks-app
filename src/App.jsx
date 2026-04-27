import { useState } from 'react';
import { List, Clock, Bell, User, Plus } from 'lucide-react';
import DailyView from './components/DailyView';
import MonthlyView from './components/MonthlyView';

function App() {
  // This state will control whether we show the Calendar (Monthly) or the Tasks (Daily)
  const [activeTab, setActiveTab] = useState('Daily');

  return (
    // 1. THE PRESENTATION BACKGROUND (The split Yellow/Blue canvas)
    <div className="min-h-screen bg-gradient-to-b from-[#fad54c] from-50% to-[#4b84f3] to-50% flex items-center justify-center p-6 font-sans">
      
      {/* 2. THE APP CONTAINER (The white phone screen) */}
      <div className="w-full max-w-[400px] h-[800px] bg-white rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col">
        
        {/* --- HEADER SECTION --- */}
        <div className="px-8 pt-10 pb-6 flex flex-col items-center">
          {/* Logo */}
          <h1 className="text-2xl font-black text-slate-900 tracking-tighter mb-6">
            TTD
          </h1>

          {/* The Pill Toggle Switch */}
          <div className="w-full bg-slate-50 border border-slate-100 rounded-full p-1 flex shadow-sm">
            <button 
              onClick={() => setActiveTab('Monthly')}
              className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'Monthly' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setActiveTab('Daily')}
              className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'Daily' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Daily
            </button>
          </div>
        </div>

        {/* --- DYNAMIC CONTENT AREA --- */}
        {/* This is where our Calendar or Task list will go based on the toggle */}
        <div className="flex-1 overflow-y-auto px-8 pb-32">
          {activeTab === 'Monthly' ? (
            <MonthlyView/>
          ) : (
            <DailyView/>
          )}
        </div>

        {/* --- BOTTOM NAVIGATION & FLOATING ACTION BUTTON --- */}
        <div className="absolute bottom-0 left-0 w-full">
          
          {/* The Big Floating Plus Button */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <button className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgb(59,130,246,0.5)] hover:bg-blue-600 transition-colors">
              <Plus className="w-8 h-8" />
            </button>
          </div>

          {/* The Bottom Nav Bar with fade gradient */}
          <div className="h-24 bg-gradient-to-t from-white via-white to-white/80 backdrop-blur-sm flex items-end justify-between px-8 pb-6 text-slate-300 relative z-10">
            <button className="p-2 hover:text-slate-500 transition-colors"><List className="w-6 h-6" /></button>
            <button className="p-2 hover:text-slate-500 transition-colors mr-8"><Clock className="w-6 h-6" /></button>
            <button className="p-2 hover:text-slate-500 transition-colors ml-8"><Bell className="w-6 h-6" /></button>
            <button className="p-2 hover:text-slate-500 transition-colors"><User className="w-6 h-6" /></button>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default App;