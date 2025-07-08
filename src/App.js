import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import InteractiveChat from './components/InteractiveChat';
import Talks from './components/Talks';
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <Navbar />
          <main>
            <section id="home">
              <Hero />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="talks">
              <Talks />
            </section>
            <section id="chat">
              <InteractiveChat />
            </section>
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
