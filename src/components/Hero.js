import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <section className="hero section">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1>
              <span className="text-gradient">{t.hero.title}</span>
              <br />
              {t.hero.role}
            </h1>
            <p className="hero-description">
              {t.hero.description}
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="button">
                {t.hero.buttons.projects}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#chat" className="button secondary">
                {t.hero.buttons.chat}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="image-container">
              <div className="blob-effect"></div>
              <img
                src={isDarkMode ? '/profile-dark.png' : '/profile-light.png'}
                alt={t.hero.title}
                className="profile-image"
              />
            </div>
            <div className="tech-stack">
              <motion.span
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Python
              </motion.span>
              <motion.span
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Java
              </motion.span>
              <motion.span
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                C++
              </motion.span>
              <motion.span
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                JavaScript
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 