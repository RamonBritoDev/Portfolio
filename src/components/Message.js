import React from 'react';
import { motion } from 'framer-motion';
import './Message.css';

const Message = ({ text, isBot, options, onOptionClick }) => {
  const messageVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const optionsVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08
      }
    }
  };

  const optionVariants = {
    initial: { 
      opacity: 0,
      y: 10,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const getIcon = (text) => {
    if (text.includes('👨‍💻')) return '👨‍💻';
    if (text.includes('💼')) return '💼';
    if (text.includes('🚀')) return '🚀';
    if (text.includes('💡')) return '💡';
    if (text.includes('📚')) return '📚';
    if (text.includes('📱')) return '📱';
    return null;
  };

  const formatMessageContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (!line) return <br key={i} />;
      
      // Enhance bullet points
      if (line.startsWith('•')) {
        return (
          <p key={i} className="bullet-point">
            <span className="bullet">•</span>
            <span dangerouslySetInnerHTML={{ __html: line.substring(1) }} />
          </p>
        );
      }
      
      // Enhance links
      if (line.includes('http')) {
        const parts = line.split(/(https?:\/\/[^\s]+)/g);
        return (
          <p key={i}>
            {parts.map((part, j) => {
              if (part.match(/^https?:\/\//)) {
                return <a key={j} href={part} target="_blank" rel="noopener noreferrer">{part}</a>;
              }
              return <span key={j} dangerouslySetInnerHTML={{ __html: part }} />;
            })}
          </p>
        );
      }
      
      return <p key={i} dangerouslySetInnerHTML={{ __html: line }} />;
    });
  };

  return (
    <motion.div
      className={`message ${isBot ? 'bot' : 'user'}`}
      variants={messageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <div className="message-content">
        {formatMessageContent(text)}
      </div>
      
      {isBot && options && options.length > 0 && (
        <motion.div 
          className="message-options"
          variants={optionsVariants}
          initial="initial"
          animate="animate"
        >
          {options.map((option, index) => {
            const icon = getIcon(option);
            return (
              <motion.button
                key={index}
                onClick={() => onOptionClick(option)}
                variants={optionVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'var(--accent-color)',
                  color: 'white',
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {icon && <span className="option-icon">{icon}</span>}
                <span>{option.replace(icon, '').trim()}</span>
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Message;
