import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import LearningExperience from './sections/LearningExperience';
import Contact from './sections/Contact';
import { useLenis } from './hooks/useLenis';

function App() {
  const [isDark, setIsDark] = useState(true);
  useLenis();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen transition-colors duration-500">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningExperience />
        <Contact />
      </main>

      <footer className="py-20 border-t border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
            Portfolio.
          </div>
          <div className="flex justify-center gap-8 mb-8 text-secondary font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} Arafat. Built with React, GSAP, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
