import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-900/20 to-orange-900/20 backdrop-blur-sm py-12 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center mb-6"
          whileHover={{ scale: 1.1 }}
        >
          <Leaf className="w-8 h-8 text-orange-500 mr-2" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            A Gift to Myself
          </span>
          <Leaf className="w-8 h-8 text-purple-500 ml-2 transform scale-x-[-1]" />
        </motion.div>
        
        <p className="text-gray-600 mb-4 flex items-center justify-center">
          Crafted with <Heart className="w-4 h-4 text-red-500 mx-2" /> for my own special day
        </p>
        
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span>🍂 Fall {new Date().getFullYear()}</span>
          <span>•</span>
          <span>💜 Self-Love Journey</span>
          <span>•</span>
          <span>🎂 Birthday Reflection</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;