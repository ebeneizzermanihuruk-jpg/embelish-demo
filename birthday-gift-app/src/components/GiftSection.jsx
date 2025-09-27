import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { PlayCircle, Gift } from 'lucide-react';
import LeafConfetti from '@/components/LeafConfetti';
import { useRef } from 'react';

const GiftSection = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const handleLinkClick = (type) => {
    toast({
      title: `🎁 Opening ${type}!`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="gift" className="py-20 px-6 bg-white/10 backdrop-blur-sm relative" ref={ref}>
      {isInView && <LeafConfetti />}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">My Birthday Video Gift</h2>
          </div>
          <p className="text-gray-600 text-lg">A special video message from myself, to myself.</p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="card-hover w-full md:w-1/2"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-purple-200 glow-purple flex flex-col items-center justify-center h-full">
              <PlayCircle className="w-16 h-16 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Video Message</h3>
              <p className="text-gray-600 mb-6">A visual reminder of my journey and dreams, a subtle way of saying Happy Birthday to myself.</p>
              <Button 
                onClick={() => handleLinkClick('Video')}
                className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white py-3 rounded-xl sparkle"
              >
                Watch Video
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;