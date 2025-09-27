import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.p
      className='text-xl md:text-2xl text-white max-w-2xl mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Hello there! I'm <span className='font-semibold text-purple-300'>Takizaki kazuki</span>, the one right?.
      kinda tired, but finished my own birthday project.
      <br>
      </br>
    </motion.p>
  );
};

export default WelcomeMessage;