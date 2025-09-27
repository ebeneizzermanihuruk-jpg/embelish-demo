import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send, MessageCircle, Sparkles } from 'lucide-react';

const WishesSection = () => {
  const [wish, setWish] = useState('');
  const { toast } = useToast();

  const handleSubmitWish = (e) => {
    e.preventDefault();
    if (wish.trim()) {
      toast({
        title: "🌟 Wish Sent!",
        description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });
      setWish('');
    }
  };

  const sampleWishes = [
    "May your autumn days be filled with warmth and joy! 🍂",
    "Wishing you a year as beautiful as fall colors! 🧡",
    "Happy Birthday! May every season bring you happiness! 💜"
  ];

  return (
    <section id="wishes" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Birthday Wishes</h2>
          </div>
          <p className="text-gray-600 text-lg">Share your warm autumn wishes</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 glow-purple mb-8"
        >
          <form onSubmit={handleSubmitWish} className="space-y-4">
            <textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="Write your heartfelt birthday wish here... 🍂💜"
              className="w-full p-4 rounded-xl border border-purple-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none h-32"
            />
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white py-3 rounded-xl sparkle"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Birthday Wish
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
            Recent Wishes
          </h3>
          
          {sampleWishes.map((sampleWish, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-purple-100"
            >
              <p className="text-gray-700 italic">"{sampleWish}"</p>
              <p className="text-purple-600 text-sm mt-2">- Anonymous Friend</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;