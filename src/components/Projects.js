import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t, language } = useLanguage();

  const projectsData = {
    pt: [
      {
        title: 'Portfolio Interativo',
        description: 'Portfolio profissional com interface de chat interativa multilíngue, design responsivo e moderno.',
        tags: ['React.js', 'Context API', 'UX/UI', 'Multilíngue'],
        link: '#',
        icon: '💻'
      },
      {
        title: 'IA Local para Atendimento',
        description: 'Sistema de atendimento via WhatsApp usando LLMs locais, com foco em segurança offline.',
        tags: ['Docker', 'Qwen', 'Waha API', 'WhatsApp'],
        link: '#',
        icon: '🤖'
      },
      {
        title: 'Robot Dog Apollo',
        description: 'Projeto de automação residencial segura com integração de sensores e controle inteligente.',
        tags: ['ESP32', 'IoT', 'Automação', 'Sensores'],
        link: '#',
        icon: '🐕'
      },
      {
        title: 'Gerador de Senhas',
        description: 'Ferramenta online para criação de senhas seguras, aleatórias e livres de padrões fracos.',
        tags: ['Segurança', 'Web', 'Criptografia'],
        link: 'https://linkd.in/dgWpkKaw',
        icon: '🔐'
      }
    ],
    en: [
      {
        title: 'Interactive Portfolio',
        description: 'Professional portfolio with multilingual interactive chat interface, responsive and modern design.',
        tags: ['React.js', 'Context API', 'UX/UI', 'Multilingual'],
        link: '#',
        icon: '💻'
      },
      {
        title: 'Local AI for Support',
        description: 'WhatsApp support system using local LLMs, focused on offline security.',
        tags: ['Docker', 'Qwen', 'Waha API', 'WhatsApp'],
        link: '#',
        icon: '🤖'
      },
      {
        title: 'Robot Dog Apollo',
        description: 'Secure home automation project with sensor integration and smart control.',
        tags: ['ESP32', 'IoT', 'Automation', 'Sensors'],
        link: '#',
        icon: '🐕'
      },
      {
        title: 'Password Generator',
        description: 'Online tool for creating secure, random passwords free from weak patterns.',
        tags: ['Security', 'Web', 'Cryptography'],
        link: 'https://linkd.in/dgWpkKaw',
        icon: '🔐'
      }
    ],
    es: [
      {
        title: 'Portfolio Interactivo',
        description: 'Portfolio profesional con interfaz de chat interactiva multilingüe, diseño responsivo y moderno.',
        tags: ['React.js', 'Context API', 'UX/UI', 'Multilingüe'],
        link: '#',
        icon: '💻'
      },
      {
        title: 'IA Local para Atención',
        description: 'Sistema de atención vía WhatsApp usando LLMs locales, con enfoque en seguridad offline.',
        tags: ['Docker', 'Qwen', 'Waha API', 'WhatsApp'],
        link: '#',
        icon: '🤖'
      },
      {
        title: 'Robot Dog Apollo',
        description: 'Proyecto de automatización residencial segura con integración de sensores y control inteligente.',
        tags: ['ESP32', 'IoT', 'Automatización', 'Sensores'],
        link: '#',
        icon: '🐕'
      },
      {
        title: 'Generador de Contraseñas',
        description: 'Herramienta online para crear contraseñas seguras, aleatorias y libres de patrones débiles.',
        tags: ['Seguridad', 'Web', 'Criptografía'],
        link: 'https://linkd.in/dgWpkKaw',
        icon: '🔐'
      }
    ]
  };

  const projects = projectsData[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>
            <span className="text-gradient">{t.projects.title.split(' ')[0]}</span>{' '}
            {t.projects.title.split(' ').slice(1).join(' ')}
          </h2>
          <p className="section-description">
            {t.projects.description}
          </p>
        </motion.div>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="button secondary project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.projects.viewProject}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 