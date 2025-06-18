
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ParticleSystem from '@/components/ParticleSystem';
import WorldTransition from '@/components/WorldTransition';
import Header from '@/components/Header';
import IdeationWorld from '@/components/worlds/IdeationWorld';
import SpeakingWorld from '@/components/worlds/SpeakingWorld';
import DesignWorld from '@/components/worlds/DesignWorld';
import GamingWorld from '@/components/worlds/GamingWorld';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const [currentWorld, setCurrentWorld] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to world index
  const worldProgress = useTransform(scrollYProgress, [0, 1], [0, 3]);

  useEffect(() => {
    const unsubscribe = worldProgress.onChange((latest) => {
      setCurrentWorld(Math.round(latest));
    });
    return unsubscribe;
  }, [worldProgress]);

  const worlds = [
    { name: 'Ideation Lab', component: IdeationWorld, color: 'cyber-blue' },
    { name: 'Speaking Stage', component: SpeakingWorld, color: 'iron-orange-500' },
    { name: 'Design Studio', component: DesignWorld, color: 'tech-purple' },
    { name: 'Gaming Arena', component: GamingWorld, color: 'game-pink' }
  ];

  return (
    <div ref={containerRef} className="relative">
      <Header currentWorld={currentWorld} />
      <ParticleSystem />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-iron-orange-500/20 via-transparent to-black"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-iron-orange-400 rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            {/* Logo */}
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <img 
                src="/lovable-uploads/5093018b-abe9-4b16-812c-efeae660ab8c.png" 
                alt="FlashForte Logo" 
                className="w-full h-full object-contain animate-pulse-glow"
              />
            </div>

            <h1 className="text-8xl md:text-9xl font-['Orbitron'] font-black mb-4 relative">
              <span className="bg-gradient-to-r from-iron-orange-400 via-iron-orange-500 to-iron-orange-600 bg-clip-text text-transparent neon-text">
                FLASH
              </span>
              <span className="text-white neon-text">FORTE</span>
            </h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-iron-orange-300 mb-8 font-light tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              One Event. Many Realities.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Button className="cyberpunk-button text-lg px-12 py-6">
                <span>Enter the Multiverse</span>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-8 h-8 text-iron-orange-500" />
        </motion.div>
      </section>

      {/* World Sections */}
      {worlds.map((world, index) => {
        const WorldComponent = world.component;
        return (
          <section key={index} className="min-h-screen relative">
            <WorldTransition 
              isActive={currentWorld === index}
              worldIndex={index}
              scrollProgress={scrollYProgress}
            />
            <WorldComponent isActive={currentWorld === index} />
          </section>
        );
      })}

      {/* Final CTA Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-t from-black via-iron-orange-900/20 to-black relative overflow-hidden">
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <motion.h2 
            className="text-6xl md:text-7xl font-['Orbitron'] font-bold mb-8 bg-gradient-to-r from-iron-orange-400 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Ready to Create?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Join FlashForte and explore limitless possibilities across multiple digital dimensions. 
            Whether you're here to innovate, speak, design, or game - your reality awaits.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Button variant="outline" className="border-iron-orange-500/50 text-iron-orange-400 hover:bg-iron-orange-500/10 text-xl px-12 py-8">
              View Schedule
            </Button>
          </motion.div>
        </div>

        {/* Background portal effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-96 h-96 border-2 border-iron-orange-500 rounded-full animate-portal"></div>
          <div className="absolute w-80 h-80 border border-iron-orange-400 rounded-full animate-portal" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-64 h-64 border border-iron-orange-300 rounded-full animate-portal" style={{ animationDelay: '4s' }}></div>
        </div>
      </section>
    </div>
  );
};

export default Index;
