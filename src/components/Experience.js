import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { language } = useLanguage();

  const experienceData = {
    pt: [
      {
        title: 'Estagiário de TI',
        company: 'Conselho Regional de Corretores de Imóveis 15ª Região - Ceará',
        period: 'Jun 2025 - Presente',
        description: [
          'Atendimento de chamados N1 e suporte técnico',
          'Análise de infraestrutura e desenvolvimento de soluções',
        ],
      },
      {
        title: 'Diretor de Educação',
        company: 'LaSEC',
        period: '2024 - Presente',
        description: [
          'Criação de materiais didáticos e cursos em cibersegurança',
          'Coordenação de workshops e palestras',
          'Desenvolvimento de conteúdo educacional',
        ],
      },
      {
        title: 'Suporte Técnico Autônomo',
        company: 'Freelancer',
        period: '2021 - Presente',
        description: [
          'Manutenção de computadores e celulares',
          'Instalação de sistemas e softwares',
          'Venda de produtos importados',
        ],
      },
      {
        title: 'Estagiário',
        company: 'SEINF (Secretaria de Infraestrutura)',
        period: 'Fev 2021 - Set 2021',
        description: [
          'Análise e aferição de projetos de infraestrutura',
          'Criação de relatórios técnicos utilizando Word e Excel',
        ],
      },
    ],
    en: [
      {
        title: 'IT Intern',
        company: 'Regional Council of Real Estate Brokers 15th Region - Ceará',
        period: 'Jun 2025 - Present',
        description: [
          'N1 ticket handling and technical support',
          'Infrastructure analysis and solution development',
        ],
      },
      {
        title: 'Education Director',
        company: 'LaSEC',
        period: '2024 - Present',
        description: [
          'Creation of educational materials and cybersecurity courses',
          'Workshop and lecture coordination',
          'Educational content development',
        ],
      },
      {
        title: 'Freelance Technical Support',
        company: 'Freelancer',
        period: '2021 - Present',
        description: [
          'Computer and mobile device maintenance',
          'System and software installation',
          'Imported products sales',
        ],
      },
      {
        title: 'Intern',
        company: 'SEINF (Infrastructure Department)',
        period: 'Feb 2021 - Sep 2021',
        description: [
          'Infrastructure project analysis and measurement',
          'Technical report creation using Word and Excel',
        ],
      },
    ],
    es: [
      {
        title: 'Pasante de TI',
        company: 'Consejo Regional de Corredores Inmobiliarios 15ª Región - Ceará',
        period: 'Jun 2025 - Presente',
        description: [
          'Atención de tickets N1 y soporte técnico',
          'Análisis de infraestructura y desarrollo de soluciones',
        ],
      },
      {
        title: 'Director de Educación',
        company: 'LaSEC',
        period: '2024 - Presente',
        description: [
          'Creación de materiales didácticos y cursos de ciberseguridad',
          'Coordinación de talleres y conferencias',
          'Desarrollo de contenido educativo',
        ],
      },
      {
        title: 'Soporte Técnico Freelance',
        company: 'Freelancer',
        period: '2021 - Presente',
        description: [
          'Mantenimiento de computadoras y dispositivos móviles',
          'Instalación de sistemas y software',
          'Venta de productos importados',
        ],
      },
      {
        title: 'Pasante',
        company: 'SEINF (Secretaría de Infraestructura)',
        period: 'Feb 2021 - Sep 2021',
        description: [
          'Análisis y medición de proyectos de infraestructura',
          'Creación de informes técnicos usando Word y Excel',
        ],
      },
    ],
  };

  const experiences = experienceData[language];
  const titles = {
    pt: 'Experiência Profissional',
    en: 'Professional Experience',
    es: 'Experiencia Profesional'
  };

  return (
    <section id="experience" className="experience-section">
      <h2>{titles[language]}</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 