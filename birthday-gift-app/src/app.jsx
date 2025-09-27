import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import FallingLeaves from '@/components/FallingLeaves';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GiftSection from '@/components/GiftSection';
import WishesAndReflections from '@/components/WishesAndReflections';
import GratitudeSection from '@/components/GratitudeSection'; // Added this import
import MemoryGallery from '@/components/MemoryGallery';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>A Gift to Myself 🍂</title>
        <meta name="description" content="A personal and interactive self-gift for a special birthday, filled with reflections, gratitude, and memories." />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
        <FallingLeaves />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Header />
          <HeroSection />
          <GiftSection />
          <WishesAndReflections />
          <GratitudeSection />
          <MemoryGallery />
          <Footer />
        </motion.div>
        
        <Toaster />
      </div>
    </>
  );
}

export default App;