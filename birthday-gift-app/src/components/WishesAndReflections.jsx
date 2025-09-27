import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Sparkles, Gift } from 'lucide-react';

const WishesSection = () => {
  const sampleWishes = [
    "May I continue to grow with grace and strength. 🍂",
    "Wishing for a year filled with more joy in small moments.",
    "May I always be brave enough to follow my heart. 🧡"
  ];

  return (
    <motion.div 
      className="w-full lg:w-1/2 p-4"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 glow-purple h-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">My Wishes</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-2/3 space-y-4">
            {sampleWishes.map((wish, index) => (
              <motion.div
                key={index}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-purple-100"
              >
                <p className="text-gray-700 italic">"{wish}"</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img class="rounded-lg shadow-lg object-cover w-full h-48 md:h-full" alt="A gentle fox in an autumn forest" src="https://images.unsplash.com/photo-1601237638897-86c7c32469c7" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ReflectionSectionInternal = () => {
  const sampleReflections = [
    "This year, I learned to embrace change like the seasons. I am proud of who I am becoming. 💜",
    "I am grateful for the strength I've discovered within myself.",
    "Reflecting on the past, I see a journey of resilience and hope."
  ];

  return (
    <motion.div 
      className="w-full lg:w-1/2 p-4"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 glow-purple h-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Edit className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">My Reflections</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img class="rounded-lg shadow-lg object-cover w-full h-48 md:h-full" alt="A majestic deer in a misty morning field" src="https://images.unsplash.com/photo-1566964159794-a69cfb93b4a9" />
          </motion.div>
          <div className="w-full md:w-2/3 space-y-4">
            {sampleReflections.map((reflection, index) => (
              <motion.div
                key={index}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-purple-100"
              >
                <p className="text-gray-700 italic">"{reflection}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WishesAndReflections = () => {
  return (
    <section id="wishes-reflections" className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
        <WishesSection />
        <ReflectionSectionInternal />
      </div>
    </section>
  );
};

export default WishesAndReflections;