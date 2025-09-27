import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Gift, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const { toast } = useToast();

  const handleCelebrate = () => {
    document.getElementById('gift').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-block p-6 bg-white/20 backdrop-blur-sm rounded-full glow-purple">
            <Gift className="w-16 h-16 text-purple-600" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold dancing-script text-glow mb-6"
        >
          <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">
            A Gift to Myself
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          Celebrating my journey, my growth, and my being in this beautiful season of life 🍂
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button 
            onClick={handleCelebrate}
            className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-3 text-lg rounded-full sparkle"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Unwrap My Gift
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;