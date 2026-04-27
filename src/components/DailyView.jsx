import { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, Circle, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

export default function DailyView() {
  // 1. The State (Our database for Phase 1)
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Call Siti', time: '12 pm', completed: true },
    { id: 2, text: 'Review Pendings', time: '1 pm', completed: false },
    { id: 3, text: 'Dispatch KNH', time: '3 pm', completed: false },
    { id: 4, text: 'Updtate Temperature Logs', time: '4 pm', completed: false },
    { id: 5, text: 'Clock out', time: '5 pm', completed: false },
  ]);

  // 2. The Logic: Toggle a task between complete/incomplete
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // 3. The Logic: Delete a task permanently
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    // We add a subtle slide-in animation to make it feel premium
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* --- DATE HEADER --- */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          {/* Automatically formats today's date like "4th March 2018" */}
          {format(new Date(), 'do MMMM yyyy')}
        </h2>
        <button className="p-3 bg-white border border-slate-100 rounded-2xl shadow-sm text-slate-400 hover:text-blue-500 transition-colors">
          <CalendarIcon className="w-5 h-5" />
        </button>
      </div>

      {/* --- TASK LIST --- */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div 
            key={task.id}
            // "group" lets us trigger the delete button on hover!
            className="group relative flex items-center justify-between bg-white border border-slate-100 p-5 rounded-[1.25rem] shadow-sm hover:shadow-md transition-all"
          >
            
            {/* Left Side: Checkbox and Text */}
            <div className="flex items-center gap-4 cursor-pointer flex-1" onClick={() => toggleTask(task.id)}>
              {task.completed ? (
                // The teal green checkmark from the design
                <CheckCircle2 className="w-6 h-6 text-teal-400 fill-teal-50" />
              ) : (
                <Circle className="w-6 h-6 text-slate-200" />
              )}
              
              <span className={`font-bold text-[15px] transition-all duration-300 ${
                task.completed ? 'text-slate-400 line-through' : 'text-slate-800'
              }`}>
                {task.text}
              </span>
            </div>

            {/* Right Side: Time & Delete Button */}
            <div className="flex items-center gap-4">
              <span className={`text-xs font-bold transition-colors ${task.completed ? 'text-slate-300' : 'text-slate-500'}`}>
                {task.time}
              </span>
              
              {/* The red delete button (Hidden by default, appears on hover) */}
              <button 
                onClick={() => deleteTask(task.id)}
                className="opacity-0 group-hover:opacity-100 w-8 h-8 flex items-center justify-center bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all absolute right-4"
                title="Delete Task"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}