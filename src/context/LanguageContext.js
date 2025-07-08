import React, { createContext, useState, useContext } from 'react';

const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      education: 'Educação',
      experience: 'Experiência',
      chat: 'Vamos Conversar',
      talks: 'Palestras'
    },
    hero: {
      title: 'Ramon Brito',
      role: 'Desenvolvedor & Especialista em Cibersegurança',
      description: 'Estudante de Engenharia de Software, Diretor de Educação na LaSEC e desenvolvedor com foco em cibersegurança e IA. Comprometido em tornar a tecnologia mais acessível e segura através da educação e inovação.',
      buttons: {
        projects: 'Ver Projetos',
        chat: 'Fale Comigo'
      }
    },
    projects: {
      title: 'Projetos em Destaque',
      description: 'Conheça alguns dos meus principais projetos em cibersegurança e educação.',
      viewProject: 'Ver Projeto'
    },
    chat: {
      title: 'Vamos Conversar! 👋',
      subtitle: 'Escolha um tópico ou me faça uma pergunta',
      inputPlaceholder: 'Digite sua mensagem aqui...',
      welcome: 'Oi! Que bom ter você por aqui! 😊\nComo posso ajudar hoje?',
      options: {
        about: '👨‍💻 Quem é você?',
        experience: '💼 Conte sobre sua experiência',
        projects: '🚀 Quais são seus projetos?',
        skills: '💡 Quais suas habilidades?',
        education: '📚 Qual sua formação?',
        contact: '📱 Como posso te contatar?'
      },
      responses: {
        about: '🎯 Prazer em conhecer você! Sou Ramon Brito, 24 anos, estudante de Engenharia de Software e apaixonado por tecnologia:\n\n• Diretor de Educação na LaSEC (Liga Acadêmica de Cibersegurança)\n• Desenvolvedor com foco em cibersegurança e IA\n• Palestrante e Educador em Tecnologia\n• Comprometido com educação tecnológica acessível e segura\n\nQuer saber mais sobre alguma área específica?',
        experience: '💼 Que legal seu interesse! Aqui está minha experiência profissional:\n\n• Estagiário de TI - CRECI-CE (2024 - Atual)\n  - Suporte técnico (chamados N1)\n  - Manutenção e otimização de infraestrutura\n  - Participação em projetos de desenvolvimento\n\n• Estagiário Técnico - SEINF (2021)\n  - Análise de projetos de obras públicas\n  - Criação de relatórios técnicos\n\n• Diretor de Educação - LaSEC\n  - Criação de conteúdos educacionais\n  - Organização de eventos de segurança\n  - Formação de novos profissionais\n\nQuer saber mais detalhes sobre alguma dessas experiências?',
        projects: '🚀 Ótima pergunta! Aqui estão meus principais projetos:\n\n• Portfolio Interativo\n  - Interface de chat multilíngue\n  - Design responsivo e moderno\n  - React.js e Context API\n\n• IA Local para Atendimento\n  - Integração com WhatsApp\n  - LLMs locais e Docker\n  - Segurança offline\n\n• Robot Dog Apollo\n  - Integração de sensores\n  - Automação residencial segura\n  - ESP32 e HLK-LD2410B\n\n• Gerador de Senhas Seguras\n  - Ferramenta online\n  - Senhas aleatórias e seguras\n\nGostaria de conhecer mais sobre algum desses projetos?',
        skills: '💻 Que bom que perguntou! Aqui estão minhas principais habilidades:\n\n• Linguagens & Frameworks\n  - Python, Java, JavaScript, C++\n  - Node.js, Flask, React.js\n\n• DevOps & Infraestrutura\n  - Git, Docker, REST APIs\n  - Linux (Arch, Ubuntu)\n  - SQL e CLI\n\n• Cibersegurança\n  - LLMs locais\n  - Desafios CTF\n  - Firewall em Python\n\n• Soft Skills\n  - Didática\n  - Liderança de equipe\n  - Resolução de problemas\n\nQuer saber mais sobre alguma dessas tecnologias?',
        education: '📚 Que bom seu interesse! Aqui está minha formação:\n\n• Graduação em Engenharia de Software\n  - Centro Universitário Ateneu\n  - 4º Semestre (2024-2027)\n\n• Ensino Médio Técnico\n  - EEEP Juarez Távora\n  - Concluído em 2021\n\n• Certificações\n  - ITIL Introduction (2024)\n\n• Eventos e Palestras\n  - Universo UniAteneu\n  - Competição CTF - LaSEC\n  - Inclusão Digital no Lar Três Irmãs\n\nGostaria de saber mais sobre alguma área específica?',
        contact: '📱 Fico feliz com seu interesse! Aqui estão as melhores formas de me contatar:\n\n• Telefone\n  - (85) 99253-9800\n\n• Email\n  - ramonbritodev@gmail.com\n\n• LinkedIn\n  - linkedin.com/in/ramon-brito-439975279\n\n• Instagram da LaSEC\n  - @cybersecoficial\n\nFicarei muito feliz em conversar sobre projetos, parcerias ou responder suas dúvidas! 😊',
        default: 'Hmm, não entendi muito bem. 🤔\nQue tal me perguntar sobre:\n• Minha experiência profissional\n• Projetos que desenvolvi\n• Habilidades técnicas\n• Formação acadêmica\n• Como entrar em contato\n\nOu escolha uma das opções abaixo! 👇'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      education: 'Education',
      experience: 'Experience',
      chat: "Let's Talk",
      talks: 'Talks'
    },
    hero: {
      title: 'Ramon Brito',
      role: 'Developer & Cybersecurity Specialist',
      description: 'Software Engineering student, Education Director at LaSEC, and developer focused on cybersecurity and AI. Committed to making technology more accessible and secure through education and innovation.',
      buttons: {
        projects: 'View Projects',
        chat: 'Chat with Me'
      }
    },
    projects: {
      title: 'Featured Projects',
      description: 'Explore some of my main projects in cybersecurity and education.',
      viewProject: 'View Project'
    },
    chat: {
      title: "Let's Chat! 👋",
      subtitle: 'Choose a topic or ask me anything',
      inputPlaceholder: 'Type your message here...',
      welcome: "Hi! Great to have you here! 😊\nHow can I help you today?",
      options: {
        about: '👨‍💻 Who are you?',
        experience: '💼 Tell me about your experience',
        projects: '🚀 What are your projects?',
        skills: '💡 What are your skills?',
        education: '📚 What\'s your education?',
        contact: '📱 How can I contact you?'
      },
      responses: {
        about: "🎯 Nice to meet you! I'm Ramon Brito, 24 years old, Software Engineering student and passionate about technology:\n\n• Education Director at LaSEC (Academic League of Cybersecurity)\n• Developer focused on cybersecurity and AI\n• Technology Speaker and Educator\n• Committed to accessible and secure tech education\n\nWould you like to know more about any specific area?",
        experience: "💼 Great interest! Here's my professional experience:\n\n• IT Intern - CRECI-CE (2024 - Present)\n  - Technical support (N1 tickets)\n  - Infrastructure maintenance and optimization\n  - Development project participation\n\n• Technical Intern - SEINF (2021)\n  - Public works project analysis\n  - Technical report creation\n\n• Education Director - LaSEC\n  - Educational content creation\n  - Security event organization\n  - Training new professionals\n\nWould you like to know more details about any of these experiences?",
        projects: "🚀 Great question! Here are my main projects:\n\n• Interactive Portfolio\n  - Multilingual chat interface\n  - Modern responsive design\n  - React.js and Context API\n\n• Local AI for Support\n  - WhatsApp integration\n  - Local LLMs and Docker\n  - Offline security\n\n• Robot Dog Apollo\n  - Sensor integration\n  - Secure home automation\n  - ESP32 and HLK-LD2410B\n\n• Secure Password Generator\n  - Online tool\n  - Random and secure passwords\n\nWould you like to learn more about any of these projects?",
        skills: "💻 I'm glad you asked! Here are my main skills:\n\n• Languages & Frameworks\n  - Python, Java, JavaScript, C++\n  - Node.js, Flask, React.js\n\n• DevOps & Infrastructure\n  - Git, Docker, REST APIs\n  - Linux (Arch, Ubuntu)\n  - SQL and CLI\n\n• Cybersecurity\n  - Local LLMs\n  - CTF challenges\n  - Python firewall\n\n• Soft Skills\n  - Teaching\n  - Team leadership\n  - Problem solving\n\nWould you like to know more about any of these technologies?",
        education: "📚 Thanks for asking! Here's my education:\n\n• Software Engineering Degree\n  - Centro Universitário Ateneu\n  - 4th Semester (2024-2027)\n\n• Technical High School\n  - EEEP Juarez Távora\n  - Completed in 2021\n\n• Certifications\n  - ITIL Introduction (2024)\n\n• Events and Talks\n  - Universo UniAteneu\n  - CTF Competition - LaSEC\n  - Digital Inclusion at Lar Três Irmãs\n\nWould you like to know more about any specific area?",
        contact: "📱 I'm happy you're interested! Here are the best ways to reach me:\n\n• Phone\n  - +55 (85) 99253-9800\n\n• Email\n  - ramonbritodev@gmail.com\n\n• LinkedIn\n  - linkedin.com/in/ramon-brito-439975279\n\n• LaSEC Instagram\n  - @cybersecoficial\n\nI'll be very happy to discuss projects, partnerships or answer your questions! 😊",
        default: "Hmm, I didn't quite get that. 🤔\nHow about asking me about:\n• My professional experience\n• Projects I've developed\n• Technical skills\n• Academic background\n• How to get in touch\n\nOr choose one of the options below! 👇"
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      education: 'Educación',
      experience: 'Experiencia',
      chat: 'Hablemos',
      talks: 'Charlas'
    },
    hero: {
      title: 'Ramon Brito',
      role: 'Desarrollador y Especialista en Ciberseguridad',
      description: 'Estudiante de Ingeniería de Software, Director de Educación en LaSEC y desarrollador enfocado en ciberseguridad e IA. Comprometido en hacer la tecnología más accesible y segura a través de la educación y la innovación.',
      buttons: {
        projects: 'Ver Proyectos',
        chat: 'Habla Conmigo'
      }
    },
    projects: {
      title: 'Proyectos Destacados',
      description: 'Conoce algunos de mis principales proyectos en ciberseguridad y educación.',
      viewProject: 'Ver Proyecto'
    },
    chat: {
      title: '¡Hablemos! 👋',
      subtitle: 'Elige un tema o hazme una pregunta',
      inputPlaceholder: 'Escribe tu mensaje aquí...',
      welcome: '¡Hola! ¡Me alegro de tenerte aquí! 😊\n¿Cómo puedo ayudarte hoy?',
      options: {
        about: '👨‍💻 ¿Quién eres?',
        experience: '💼 Cuéntame sobre tu experiencia',
        projects: '🚀 ¿Cuáles son tus proyectos?',
        skills: '💡 ¿Cuáles son tus habilidades?',
        education: '📚 ¿Cuál es tu formación?',
        contact: '📱 ¿Cómo puedo contactarte?'
      },
      responses: {
        about: '🎯 ¡Encantado de conocerte! Soy Ramon Brito, 24 años, estudiante de Ingeniería de Software y apasionado por la tecnología:\n\n• Director de Educación en LaSEC (Liga Académica de Ciberseguridad)\n• Desarrollador enfocado en ciberseguridad e IA\n• Ponente y Educador en Tecnología\n• Comprometido con la educación tecnológica accesible y segura\n\n¿Te gustaría saber más sobre algún área específica?',
        experience: '💼 ¡Qué bueno tu interés! Aquí está mi experiencia profesional:\n\n• Pasante de TI - CRECI-CE (2024 - Presente)\n  - Soporte técnico (tickets N1)\n  - Mantenimiento y optimización de infraestructura\n  - Participación en proyectos de desarrollo\n\n• Pasante Técnico - SEINF (2021)\n  - Análisis de proyectos de obras públicas\n  - Creación de informes técnicos\n\n• Director de Educación - LaSEC\n  - Creación de contenidos educativos\n  - Organización de eventos de seguridad\n  - Formación de nuevos profesionales\n\n¿Te gustaría saber más detalles sobre alguna de estas experiencias?',
        projects: '🚀 ¡Excelente pregunta! Aquí están mis principales proyectos:\n\n• Portfolio Interactivo\n  - Interfaz de chat multilingüe\n  - Diseño responsivo y moderno\n  - React.js y Context API\n\n• IA Local para Atención\n  - Integración con WhatsApp\n  - LLMs locales y Docker\n  - Seguridad offline\n\n• Robot Dog Apollo\n  - Integración de sensores\n  - Automatización residencial segura\n  - ESP32 y HLK-LD2410B\n\n• Generador de Contraseñas Seguras\n  - Herramienta online\n  - Contraseñas aleatorias y seguras\n\n¿Te gustaría conocer más sobre alguno de estos proyectos?',
        skills: '💻 ¡Me alegro que preguntes! Aquí están mis principales habilidades:\n\n• Lenguajes y Frameworks\n  - Python, Java, JavaScript, C++\n  - Node.js, Flask, React.js\n\n• DevOps e Infraestructura\n  - Git, Docker, REST APIs\n  - Linux (Arch, Ubuntu)\n  - SQL y CLI\n\n• Ciberseguridad\n  - LLMs locales\n  - Desafíos CTF\n  - Firewall en Python\n\n• Habilidades Blandas\n  - Didáctica\n  - Liderazgo de equipo\n  - Resolución de problemas\n\n¿Te gustaría saber más sobre alguna de estas tecnologías?',
        education: '📚 ¡Gracias por preguntar! Aquí está mi formación:\n\n• Grado en Ingeniería de Software\n  - Centro Universitário Ateneu\n  - 4º Semestre (2024-2027)\n\n• Escuela Secundaria Técnica\n  - EEEP Juarez Távora\n  - Completado en 2021\n\n• Certificaciones\n  - ITIL Introduction (2024)\n\n• Eventos y Charlas\n  - Universo UniAteneu\n  - Competencia CTF - LaSEC\n  - Inclusión Digital en Lar Três Irmãs\n\n¿Te gustaría saber más sobre algún área específica?',
        contact: '📱 ¡Me alegro que estés interesado! Aquí están las mejores formas de contactarme:\n\n• Teléfono\n  - +55 (85) 99253-9800\n\n• Email\n  - ramonbritodev@gmail.com\n\n• LinkedIn\n  - linkedin.com/in/ramon-brito-439975279\n\n• Instagram de LaSEC\n  - @cybersecoficial\n\n¡Estaré encantado de hablar sobre proyectos, colaboraciones o responder tus preguntas! 😊',
        default: 'Hmm, no entendí muy bien. 🤔\n¿Qué tal si me preguntas sobre:\n• Mi experiencia profesional\n• Proyectos que he desarrollado\n• Habilidades técnicas\n• Formación académica\n• Cómo contactarme\n\n¡O elige una de las opciones abajo! 👇'
      }
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 