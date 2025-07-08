import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import './Message.css';

const questions = {
  initial: {
    text: 'Olá! Sou o Ramon. Bem-vindo ao meu portfólio interativo. Explore as opções abaixo para me conhecer melhor.',
    options: ['Sobre mim', 'Habilidades', 'Experiência', 'Projetos', 'Educação', 'Contato'],
  },
  'Sobre mim': {
    text: 'Sou um desenvolvedor e especialista em cibersegurança, apaixonado por tecnologia e educação. Atualmente sou Diretor de Educação na LaSEC, onde combino minhas habilidades técnicas com minha paixão por ensinar.',
    options: ['Habilidades', 'Experiência', 'Projetos', 'Educação', 'Contato'],
  },
  'Habilidades': {
    text: '• <strong>Linguagens:</strong> Java, Python, C++, JavaScript<br/>• <strong>Frameworks:</strong> Node.js, Flask<br/>• <strong>Ferramentas:</strong> Git, SQL, REST APIs, Docker<br/>• <strong>Ambientes:</strong> Linux, Docker<br/>• <strong>Outros:</strong> Ferramentas open source, cibersegurança, automação, fluxos de desenvolvimento ágeis<br/>• <strong>Idiomas:</strong> Inglês',
    options: ['Sobre mim', 'Experiência', 'Projetos', 'Educação', 'Contato'],
  },
  'Experiência': {
    text: '<strong>Estagiário de TI</strong> (Jun 2025 - atual)<br/>• Atendimento de chamados N1 e suporte técnico<br/>• Análise de infraestrutura e desenvolvimento de soluções<br/><br/><strong>Diretor de Educação - LaSEC</strong> (2024 - atual)<br/>• Criação de materiais didáticos e cursos em cibersegurança<br/>• Coordenação de workshops e palestras<br/><br/><strong>Suporte Técnico Autônomo</strong> (2021 - atual)<br/>• Manutenção de computadores e celulares<br/>• Instalação de sistemas e softwares<br/><br/><strong>Estagiário - SEINF</strong> (Fev 2021 - Set 2021)<br/>• Análise de projetos de infraestrutura<br/>• Criação de relatórios técnicos',
    options: ['Habilidades', 'Projetos', 'Educação', 'Contato'],
  },
  'Projetos': {
    text: '<strong>Liga Acadêmica de Cibersegurança (LaSEC)</strong><br/>• Diretor de Ensino e criador de conteúdo<br/>• Desenvolvimento de materiais didáticos e cursos<br/>• Organização de workshops e palestras<br/><br/><strong>Eventos e Atividades</strong><br/>• Palestrante na FortalSec Unifor<br/>• Participação em hackathons e workshops<br/>• Coordenação de projetos educacionais<br/><br/>Saiba mais: <a href="https://instagram.com/cybersecoficial" target="_blank">@cybersecoficial</a>',
    options: ['Sobre mim', 'Habilidades', 'Experiência', 'Educação'],
  },
  'Educação': {
    text: '• <strong>Engenharia de Software</strong> - Em andamento<br/>• <strong>Introdução ITIL</strong> - Centro Universitário Ateneu (2024)<br/>• <strong>Certificações e Cursos</strong> em cibersegurança e desenvolvimento<br/>• <strong>Participação ativa</strong> em eventos e workshops tecnológicos',
    options: ['Sobre mim', 'Habilidades', 'Experiência', 'Projetos'],
  },
  'Contato': {
    text: 'Vamos nos conectar! Você pode me encontrar em:<br/>• <strong>Email:</strong> <a href="mailto:ramonbritodev@gmail.com">ramonbritodev@gmail.com</a><br/>• <strong>Instagram:</strong> <a href="https://instagram.com/cybersecoficial" target="_blank">@cybersecoficial</a><br/>• <strong>LinkedIn:</strong> <a href="#" target="_blank">/in/ramonbrito</a>',
    options: ['Sobre mim', 'Habilidades', 'Experiência', 'Projetos'],
  },
};

function ChatContainer() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: questions.initial.text },
  ]);
  const [currentOptions, setCurrentOptions] = useState(questions.initial.options);
  const [isTyping, setIsTyping] = useState(false);
  const messageListRef = useRef(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    const userMessage = { from: 'user', text: option };
    setMessages(prev => [...prev, userMessage]);
    setCurrentOptions([]);
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = { from: 'bot', text: questions[option].text };
      setMessages(prev => [...prev, botMessage]);
      setCurrentOptions(questions[option].options);
      setIsTyping(false);
    }, 1500); // Simula o tempo de digitação
  };

  return (
    <div className="chat-container">
      <div className="message-list" ref={messageListRef}>
        <AnimatePresence>
          {messages.map((msg, index) => (
            <Message key={index} msg={msg} />
          ))}
        </AnimatePresence>
        {isTyping && <TypingIndicator />}
      </div>
      <div className="options-container">
        <AnimatePresence>
          {currentOptions.map((option, index) => (
            <motion.button 
              key={option} 
              className="option-button"
              onClick={() => handleOptionClick(option)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {option}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ChatContainer;