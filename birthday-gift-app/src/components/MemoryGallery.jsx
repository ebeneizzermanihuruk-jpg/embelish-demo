import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Heart, Camera, Star } from 'lucide-react';

const MemoryGallery = () => {
  const { toast } = useToast();

  const handleMemoryClick = (memory) => {
    toast({
      title: `💜 ${memory}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const memories = [
    { title: "Autumn Picnic", icon: Heart, image: "https://images.unsplash.com/photo-1506202687253-52e1b29d3527" },
    { title: "Cozy Moments", icon: Camera, image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb" },
    { title: "Special Celebrations", icon: Star, image: "https://images.unsplash.com/photo-1513151233558-d860c5398176" },
    { title: "Fall Adventures", icon: Heart, image: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891" },
    { title: "Sweet Memories", icon: Camera, image: "https://images.unsplash.com/photo-1570473431267-4c3b3a55df88" },
    { title: "Magical Times", icon: Star, image: "https://images.unsplash.com/photo-1539093391288-f5395c635a33" }
  ];

  return (
    <section id="memories" className="py-20 px-6 bg-white/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Memory Lane</h2>
          <p className="text-gray-600 text-lg">Cherished moments from this beautiful journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => {
            const IconComponent = memory.icon;
            return (
              <motion.div
                key={memory.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover cursor-pointer"
                onClick={() => handleMemoryClick(memory.title)}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-200">
                  <div className="aspect-square relative">
                    <img 
                      className="w-full h-full object-cover" 
                      alt={`${memory.title} autumn memory`}
                     src={memory.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <IconComponent className="w-6 h-6 mb-2" />
                      <h3 className="text-lg font-semibold">{memory.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;