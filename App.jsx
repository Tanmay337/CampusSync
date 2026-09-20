import React from 'react';
import { Circle, CheckCircle2, Clock, CalendarDays, MoreHorizontal } from 'lucide-react';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');

  :root {
    --background: 201 100% 13%;
    --foreground: 0 0% 100%;
    --muted-foreground: 240 4% 66%;
    --primary: 0 0% 100%;
    --primary-foreground: 0 0% 4%;
    --secondary: 0 0% 10%;
    --muted: 0 0% 10%;
    --accent: 0 0% 10%;
    --border: 0 0% 18%;
    --input: 0 0% 18%;
    
    --font-display: 'Instrument Serif', serif;
    --font-body: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    font-family: var(--font-body);
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Utility mapping */
  .text-foreground { color: hsl(var(--foreground)); }
  .text-muted-foreground { color: hsl(var(--muted-foreground)); }
  .bg-background { background-color: hsl(var(--background)); }

  /* Updated Liquid Glass Effect */
  .liquid-glass {
    background: rgba(255, 255, 255, 0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 20px 40px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
  }

  /* Animations */
  @keyframes fade-rise {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-rise { animation: fade-rise 0.8s ease-out both; }
  .animate-fade-rise-delay { animation: fade-rise 0.8s ease-out 0.2s both; }
  .animate-fade-rise-delay-2 { animation: fade-rise 0.8s ease-out 0.4s both; }
  .animate-fade-rise-delay-3 { animation: fade-rise 0.8s ease-out 0.6s both; }
`;

export default function App() {
  const tasks = [
    { id: 1, title: 'Advanced Calculus Assignment', time: '10:00 AM', tag: 'Study', completed: true },
    { id: 2, title: 'Capstone Team Sync', time: '2:30 PM', tag: 'Meeting', completed: false },
    { id: 3, title: 'Review Literature for Thesis', time: '4:00 PM', tag: 'Research', completed: false },
    { id: 4, title: 'Submit Peer Evaluation', time: '11:59 PM', tag: 'Admin', completed: false },
  ];

  return (
    <>
      <style>{globalStyles}</style>
      
      <main className="relative overflow-hidden min-h-screen bg-background text-foreground flex flex-col">
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
        />

        {/* Overlay for slightly better readability if needed, kept very subtle */}
        <div className="absolute inset-0 bg-black/10 z-0 mix-blend-multiply" />

        {/* Navigation Bar */}
        <nav className="relative z-10 flex flex-row justify-between items-center px-6 lg:px-8 py-6 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div 
            className="text-3xl tracking-tight text-foreground cursor-pointer flex items-center gap-2" 
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <CalendarDays className="w-6 h-6 text-white/80" />
            CampusSync
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {['Dashboard', 'Tasks', 'Calendar', 'Teams'].map((item, index) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm transition-colors duration-300 hover:text-white ${
                    index === 0 ? 'text-foreground font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Nav CTA */}
          <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-all duration-300 hover:bg-white/5">
            Log In
          </button>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 flex-1 flex items-center px-6 pt-24 pb-32 lg:pt-32 lg:pb-40 w-full max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">
            
            {/* Left Column: Text Content */}
            <div className="flex flex-col text-left items-start">
              <h1 
                className="animate-fade-rise text-6xl sm:text-7xl lg:text-8xl leading-none tracking-[-2px] font-normal"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Where <em className="not-italic text-muted-foreground">chaos</em> meets{' '}
                <em className="not-italic text-muted-foreground">clarity.</em>
              </h1>
              
              <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-md lg:max-w-xl mt-8 leading-relaxed font-medium">
                We're designing tools for students, creators, and campus leaders. 
                Amid the academic chaos, we build digital spaces for sharp focus and organized work.
              </p>
              
              <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-10 py-4 text-base text-foreground mt-10 hover:scale-[1.03] hover:bg-white/5 cursor-pointer transition-all duration-300 flex items-center gap-3">
                Start Organizing
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </button>
            </div>

            {/* Right Column: Task Manager UI Mockup */}
            <div className="animate-fade-rise-delay-3 relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 perspective-1000">
              <div className="liquid-glass rounded-[2rem] p-6 sm:p-8 backdrop-blur-md transform transition-transform duration-700 hover:scale-[1.02]">
                
                {/* Mockup Header */}
                <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                  <div>
                    <h2 
                      className="text-3xl text-foreground"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      Today's Schedule
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">4 Tasks remaining</p>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-muted-foreground hover:text-white">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* Mockup Task List */}
                <div className="flex flex-col gap-3">
                  {tasks.map((task) => (
                    <div 
                      key={task.id}
                      className="group flex items-center gap-4 p-3.5 rounded-2xl hover:bg-white/10 transition-colors duration-300 cursor-default border border-transparent hover:border-white/5"
                    >
                      {/* Checkbox Icon */}
                      <button className={`shrink-0 transition-colors ${task.completed ? 'text-green-400' : 'text-muted-foreground group-hover:text-white'}`}>
                        {task.completed ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <Circle className="w-6 h-6" />
                        )}
                      </button>

                      {/* Task Info */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm sm:text-base truncate transition-colors ${task.completed ? 'text-muted-foreground line-through decoration-white/30' : 'text-white font-medium'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            {task.time}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground border border-white/10">
                            {task.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
              
              {/* Decorative glow behind the card */}
              <div className="absolute -inset-4 bg-white/5 rounded-[2.5rem] blur-2xl -z-10" />
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
