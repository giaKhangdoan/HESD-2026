import React from 'react';
import './App.css';
import Hero from './components/Hero';
import WhyHarness from './components/WhyHarness';
import AtAGlance from './components/AtAGlance';
import Concept from './components/Concept';
import Principles from './components/Principles';
import Projects from './components/Projects';
import Resources from './components/Resources';
import About from './components/About';

function App() {
  return (
    <div className="App bg-[#f9fafb] text-[#0a1b33] font-sans overflow-hidden">
      <main className="max-w-[1400px] mx-auto w-full flex flex-col gap-12">
        <Hero />
        <WhyHarness />
        <AtAGlance />
        <Concept />
        <Principles />
        <Projects />
        <Resources />
        <About />
      </main>
      
      <footer className="w-full text-center py-12 text-slate-500 text-sm mt-20 border-t border-slate-200/50">
        <p>© 2026 HESD Program. AI-Native Software Engineering.</p>
      </footer>
    </div>
  );
}

export default App;
