import { CheckCircle2, Circle } from 'lucide-react';

export default function MonthlyView() {
  // Simulating the days of the week and month for our UI layout
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // A helper function to place the colored dots under specific days
  const getDots = (day) => {
    if (day === 2) return <div className="w-1 h-1 bg-orange-400 rounded-full mt-1"></div>;
    if (day === 3) return <div className="w-1 h-1 bg-teal-400 rounded-full mt-1"></div>;
    if (day === 10 || day === 11) return <div className="w-1 h-1 bg-blue-500 rounded-full mt-1"></div>;
    return <div className="w-1 h-1 mt-1"></div>; // Invisible placeholder to keep the grid aligned!
  };

  return (
    // Slide-in animation from the left
    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
      
      {/* --- CALENDAR HEADER --- */}
      <h2 className="text-center font-bold text-slate-800 mb-6">February</h2>

      {/* --- CALENDAR GRID --- */}
      <div className="mb-10">
        {/* Days of the Week Row */}
        <div className="grid grid-cols-7 mb-4">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-xs font-bold text-slate-400">{day}</div>
          ))}
        </div>
        
        {/* The Dates Grid */}
        <div className="grid grid-cols-7 gap-y-4">
          {days.map(day => (
             // Grouping the date and the dot together
            <div key={day} className="flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 rounded-lg py-1 transition-colors">
              <span className={`text-[13px] font-bold ${day === 10 ? 'text-blue-500' : 'text-slate-700'}`}>
                {/* padStart adds the leading zero: 1 becomes '01' */}
                {day.toString().padStart(2, '0')}
              </span>
              {getDots(day)}
            </div>
          ))}
        </div>
      </div>

      {/* --- THIS MONTH HIGHLIGHTS --- */}
      <div>
        <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">This month</h3>
        
        <div className="space-y-3">
          {/* A Completed Task */}
          <div className="flex items-center justify-between bg-white border border-slate-100 p-4 rounded-[1.25rem] shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-300" />
              <span className="font-bold text-[14px] text-slate-400 line-through">System Audit</span>
            </div>
            <span className="text-[11px] font-bold text-slate-400">2nd Feb • 12 pm</span>
          </div>

          {/* An Upcoming Task (Notice the blue left-border highlight!) */}
          <div className="flex items-center justify-between bg-white border border-slate-100 p-4 rounded-[1.25rem] shadow-sm border-l-4 border-l-blue-500">
            <div className="flex items-center gap-3">
              <Circle className="w-5 h-5 text-slate-200" />
              <span className="font-bold text-[14px] text-slate-800">Meet Lorence</span>
            </div>
            <span className="text-[11px] font-bold text-slate-500">3rd Feb • 12 pm</span>
          </div>
        </div>
      </div>

    </div>
  );
}