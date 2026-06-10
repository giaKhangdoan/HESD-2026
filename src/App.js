import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Principles from './components/Principles';
import Projects from './components/Projects';
import Resources from './components/Resources';
import About from './components/About';
import FloatingNavbar from './components/FloatingNavbar';

function App() {
  return (
    <Router>
      <div className="App bg-[#f9fafb] text-[#0a1b33] font-sans overflow-hidden min-h-screen relative pb-32">
        <FloatingNavbar />
        
        <main className="max-w-[1400px] mx-auto w-full flex flex-col gap-12">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/concepts" element={<Concept />} />
            <Route path="/principles" element={<Principles />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <footer className="w-full text-center py-12 text-slate-500 text-sm mt-20 border-t border-slate-200/50">
          <p>© 2026 HESD Program. AI-Native Software Engineering.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
