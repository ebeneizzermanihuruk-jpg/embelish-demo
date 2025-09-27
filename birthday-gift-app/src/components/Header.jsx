import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Heart, Star } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 p-6"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Cake className="w-8 h-8 text-purple-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Autumn Birthday
          </span>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          <motion.a 
            href="#memories" 
            className="text-gray-700 hover:text-purple-600 transition-colors flex items-center space-x-1"
            whileHover={{ scale: 1.1 }}
          >
            <Heart className="w-4 h-4" />
            <span>Memories</span>
          </motion.a>
          <motion.a 
            href="#wishes" 
            className="text-gray-700 hover:text-purple-600 transition-colors flex items-center space-x-1"
            whileHover={{ scale: 1.1 }}
          >
            <Star className="w-4 h-4" />
            <span>Wishes</span>
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;