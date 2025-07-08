import React from 'react';
import { motion } from 'framer-motion';
import './TypingIndicator.css';

const TypingIndicator = () => {
  return (
    <div className="typing-indicator">
      <motion.span
        className="dot"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
      <motion.span
        className="dot"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
      />
      <motion.span
        className="dot"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );
};

export default TypingIndicator;
