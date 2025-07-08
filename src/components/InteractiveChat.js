import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import './InteractiveChat.css';

const InteractiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);
  const { t, language } = useLanguage();

  const chatResponses = {
    'sobre': {
      keywords: {
        pt: ['sobre', 'quem é', 'quem sou', 'fale sobre você', 'me conta', 'você'],
        en: ['about', 'who is', 'who are you', 'tell me about', 'tell about', 'you'],
        es: ['sobre', 'quién es', 'quién eres', 'háblame de', 'cuéntame', 'tú']
      },
      response: t.chat.responses.about
    },
    'experiencia': {
      keywords: {
        pt: ['experiência', 'trabalho', 'estágio', 'profissional', 'carreira'],
        en: ['experience', 'work', 'internship', 'professional', 'career'],
        es: ['experiencia', 'trabajo', 'práctica', 'profesional', 'carrera']
      },
      response: t.chat.responses.experience
    },
    'habilidades': {
      keywords: {
        pt: ['habilidades', 'tecnologias', 'linguagens', 'programação', 'skills', 'sabe'],
        en: ['skills', 'technologies', 'languages', 'programming', 'know'],
        es: ['habilidades', 'tecnologías', 'lenguajes', 'programación', 'sabes']
      },
      response: t.chat.responses.skills
    },
    'projetos': {
      keywords: {
        pt: ['projetos', 'portfolio', 'trabalhos', 'desenvolveu', 'criou'],
        en: ['projects', 'portfolio', 'works', 'developed', 'created'],
        es: ['proyectos', 'portafolio', 'trabajos', 'desarrolló', 'creó']
      },
      response: t.chat.responses.projects
    },
    'educacao': {
      keywords: {
        pt: ['educação', 'formação', 'faculdade', 'curso', 'certificação', 'estudou'],
        en: ['education', 'degree', 'college', 'course', 'certification', 'studied'],
        es: ['educación', 'formación', 'universidad', 'curso', 'certificación', 'estudió']
      },
      response: t.chat.responses.education
    },
    'contato': {
      keywords: {
        pt: ['contato', 'email', 'redes sociais', 'linkedin', 'falar', 'conversar'],
        en: ['contact', 'email', 'social media', 'linkedin', 'talk', 'chat'],
        es: ['contacto', 'correo', 'redes sociales', 'linkedin', 'hablar', 'charlar']
      },
      response: t.chat.responses.contact
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: 'welcome',
        text: t.chat.welcome,
        isBot: true,
        options: Object.values(t.chat.options)
      }]);
    }
    scrollToBottom();
  }, [messages, t]);

  const findBestResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    for (const [topic, data] of Object.entries(chatResponses)) {
      if (data.keywords[language].some(keyword => lowercaseInput.includes(keyword))) {
        return data.response;
      }
    }
    
    return t.chat.responses.default;
  };

  const getRandomOptions = (exclude = '') => {
    const allOptions = Object.values(t.chat.options);
    const availableOptions = allOptions.filter(option => option !== exclude);
    const shuffled = availableOptions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const handleOptionClick = (option) => {
    const userMessage = {
      id: Date.now(),
      text: option,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(option);
      const botResponse = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        options: getRandomOptions(option)
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: userInput,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    setUserInput('');

    setTimeout(() => {
      const response = findBestResponse(userInput);
      const botResponse = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        options: getRandomOptions()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section className="chat-section">
      <motion.div
        className="chat-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="chat-header">
          <h2>{t.chat.title}</h2>
          <p>{t.chat.subtitle}</p>
        </div>

        <div className="messages-container">
          <AnimatePresence>
            {messages.map((message) => (
              <Message
                key={message.id}
                text={message.text}
                isBot={message.isBot}
                options={message.options}
                onOptionClick={handleOptionClick}
              />
            ))}
            {isTyping && <TypingIndicator />}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="chat-input-form">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={t.chat.inputPlaceholder}
            className="chat-input"
          />
          <button type="submit" className="chat-submit" aria-label="Enviar mensagem">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default InteractiveChat; 