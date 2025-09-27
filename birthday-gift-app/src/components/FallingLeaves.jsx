import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const createLeaf = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 5,
      size: Math.random() * 10 + 15,
      delay: Math.random() * 2,
    });

    const initialLeaves = Array.from({ length: 15 }, createLeaf);
    setLeaves(initialLeaves);

    const interval = setInterval(() => {
      setLeaves(prev => {
        const newLeaves = [...prev];
        if (newLeaves.length < 20) {
          newLeaves.push(createLeaf());
        }
        return newLeaves.slice(-20);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
          initial={{ y: -100, rotate: 0, opacity: 1 }}
          animate={{ 
            y: window.innerHeight + 100, 
            rotate: 360,
            opacity: 0,
            x: [0, 30, -30, 0]
          }}
          transition={{
            duration: leaf.animationDuration,
            delay: leaf.delay,
            ease: "linear",
            x: {
              duration: leaf.animationDuration / 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 rounded-full transform rotate-45 opacity-80" 
               style={{
                 clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                 filter: Math.random() > 0.7 ? 'hue-rotate(240deg)' : 'none'
               }} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FallingLeaves;