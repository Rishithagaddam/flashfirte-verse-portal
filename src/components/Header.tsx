
import React from 'react';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  currentWorld: number;
}

const Header: React.FC<HeaderProps> = ({ currentWorld }) => {
  const worlds = ['Ideation', 'Speaking', 'Design', 'Gaming'];
  
  const subEvents = [
    { name: 'Ideathon', path: '/ideathon', description: 'Innovation Lab' },
    { name: 'SpeakHON', path: '/speakhon', description: 'Speaking Arena' },
    { name: 'GANEThon', path: '/ganethon', description: 'Gaming Arena' },
    { name: 'DESAignathon', path: '/desaignathon', description: 'Design Studio' },
  ];
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-iron-orange-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-3 py-1.5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1.5">
          <div className="w-6 h-6 flex items-center justify-center">
            <img 
              src="/lovable-uploads/5093018b-abe9-4b16-812c-efeae660ab8c.png" 
              alt="FlashForte Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-sm font-['Exo_2'] font-bold text-white">FlashForte</h1>
            <p className="text-xs text-iron-orange-400">One Event. Many Realities.</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {worlds.map((world, index) => (
            <motion.a
              key={world}
              href={`#world-${index}`}
              className={`text-xs font-medium font-['Exo_2'] transition-colors duration-300 ${
                currentWorld === index 
                  ? 'text-iron-orange-400 neon-text' 
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {world}
            </motion.a>
          ))}
          
          {/* Sub-events Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-400 hover:text-white bg-transparent text-xs font-['Exo_2']">
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-72">
                    {subEvents.map((event) => (
                      <a
                        key={event.name}
                        href={event.path}
                        className="block p-2 rounded-lg hover:bg-iron-orange-500/10 transition-colors"
                      >
                        <h4 className="text-white font-medium mb-1 font-['Exo_2'] text-sm">{event.name}</h4>
                        <p className="text-gray-400 text-xs font-['Exo_2']">{event.description}</p>
                      </a>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile menu indicator */}
        <div className="md:hidden">
          <div className="w-4 h-4 flex flex-col justify-center space-y-0.5">
            <div className="w-full h-0.5 bg-iron-orange-500"></div>
            <div className="w-full h-0.5 bg-iron-orange-500"></div>
            <div className="w-full h-0.5 bg-iron-orange-500"></div>
          </div>
        </div>
      </div>

      {/* World indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-iron-orange-500 to-transparent">
        <motion.div
          className="h-full bg-iron-orange-400 rounded-full"
          style={{ 
            width: `${((currentWorld + 1) / worlds.length) * 100}%`,
            boxShadow: '0 0 8px rgba(249, 115, 22, 0.8)'
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.header>
  );
};

export default Header;
