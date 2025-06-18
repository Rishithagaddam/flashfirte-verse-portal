
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentWorld: number;
}

const Header: React.FC<HeaderProps> = ({ currentWorld }) => {
  const worlds = ['Ideation', 'Speaking', 'Design', 'Gaming'];
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-iron-orange-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-iron-orange-400 to-iron-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xl font-['Orbitron']">FF</span>
          </div>
          <div>
            <h1 className="text-2xl font-['Orbitron'] font-bold text-white">FlashFirte</h1>
            <p className="text-sm text-iron-orange-400">One Event. Many Realities.</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {worlds.map((world, index) => (
            <motion.a
              key={world}
              href={`#world-${index}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                currentWorld === index 
                  ? 'text-iron-orange-400 neon-text' 
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {world}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button className="cyberpunk-button hidden sm:block">
          <span>Register</span>
        </Button>

        {/* Mobile menu indicator */}
        <div className="md:hidden">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-iron-orange-500"></div>
            <div className="w-full h-0.5 bg-iron-orange-500"></div>
            <div className="w-full h-0.5 bg-iron-orange-500"></div>
          </div>
        </div>
      </div>

      {/* World indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-iron-orange-500 to-transparent">
        <motion.div
          className="h-full bg-iron-orange-400 rounded-full"
          style={{ 
            width: `${((currentWorld + 1) / worlds.length) * 100}%`,
            boxShadow: '0 0 20px rgba(249, 115, 22, 0.8)'
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.header>
  );
};

export default Header;
