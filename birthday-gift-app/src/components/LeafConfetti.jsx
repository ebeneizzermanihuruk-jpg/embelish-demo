import React from 'react';
import { motion } from 'framer-motion';

const LeafConfetti = () => {
  const leaves = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    duration: Math.random() * 2 + 2,
    delay: Math.random() * 1.5,
    size: Math.random() * 8 + 6,
    sway: Math.random() * 40 - 20,
  }));

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-20">
      {leaves.map(leaf => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
          initial={{ y: '-10vh', opacity: 0 }}
          animate={{
            y: '100vh',
            opacity: [1, 1, 0],
            x: [0, leaf.sway, -leaf.sway, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            ease: 'linear',
            x: {
              duration: leaf.duration / 2,
              repeat: Infinity,
              repeatType: 'mirror',
            },
          }}
        >
          <div 
            className="w-full h-full bg-orange-500"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              transform: 'scale(0.5) rotate(15deg)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LeafConfetti;