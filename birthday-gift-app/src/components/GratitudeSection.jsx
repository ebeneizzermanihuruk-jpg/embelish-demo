import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const GratitudeSection = () => {
  const people = [
    { name: "Mom & Dad", color: "text-purple-500" },
    { name: "My Best Friends", color: "text-orange-500" },
    { name: "My Mentor", color: "text-amber-500" },
    { name: "My Siblings", color: "text-red-500" },
    { name: "My Partner", color: "text-purple-600" },
    { name: "And most importantly, Me", color: "text-orange-600" },
  ];

  return (
    <section id="gratitude" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">A Heartfelt Thanks To</h2>
          </div>
          <p className="text-gray-600 text-lg">The amazing souls who colored my world.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {people.map((person, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 150 }}
              className="bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-200 glow-purple"
            >
              <span className={`text-lg font-semibold ${person.color}`}>{person.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GratitudeSection;