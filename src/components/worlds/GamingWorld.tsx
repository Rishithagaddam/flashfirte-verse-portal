
import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Zap, Target } from 'lucide-react';

interface GamingWorldProps {
  isActive: boolean;
}

const GamingWorld: React.FC<GamingWorldProps> = ({ isActive }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center world-gaming overflow-hidden">
      {/* Pixelated background grid */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-16 grid-rows-16 h-full w-full opacity-20">
          {[...Array(256)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-game-pink/20"
              style={{
                backgroundColor: Math.random() > 0.9 ? '#ff1493' : 'transparent'
              }}
              animate={{
                opacity: isActive ? [0.2, 0.8, 0.2] : 0,
                backgroundColor: [
                  'transparent',
                  Math.random() > 0.8 ? '#ff1493' : 'transparent',
                  'transparent'
                ]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating game elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i % 5) * 18}%`,
              top: `${15 + Math.floor(i / 5) * 35}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              scale: isActive ? 1 : 0
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              {/* Pixelated game icons */}
              <div className="w-16 h-16 bg-game-pink/20 rounded border border-game-pink/50 flex items-center justify-center backdrop-blur-sm pixelated">
                {i % 4 === 0 && <Gamepad2 className="w-8 h-8 text-game-pink" />}
                {i % 4 === 1 && <Trophy className="w-8 h-8 text-neon-green" />}
                {i % 4 === 2 && <Zap className="w-8 h-8 text-cyber-blue" />}
                {i % 4 === 3 && <Target className="w-8 h-8 text-iron-orange-400" />}
              </div>
              {/* Neon glow */}
              <div 
                className="absolute inset-0 rounded blur-md animate-pulse"
                style={{
                  backgroundColor: ['#ff1493', '#39ff14', '#00d4ff', '#f97316'][i % 4] + '20'
                }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Neon lines */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${i * 20}%`,
              top: '0%',
              width: '2px',
              height: '100%',
              background: `linear-gradient(to bottom, transparent, #ff1493, transparent)`
            }}
            animate={{
              opacity: isActive ? [0, 1, 0] : 0,
              scaleY: isActive ? [0, 1, 0] : 0
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block p-4 mb-6 bg-game-pink/10 rounded border border-game-pink/30"
          animate={{ 
            boxShadow: isActive ? '0 0 40px rgba(255, 20, 147, 0.5)' : '0 0 0px rgba(255, 20, 147, 0)' 
          }}
        >
          <Gamepad2 className="w-16 h-16 text-game-pink" />
        </motion.div>

        <h2 className="text-6xl md:text-7xl font-['Orbitron'] font-bold mb-6 text-game-pink neon-text pixelated">
          GAMING ARENA
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
          Enter the ultimate gaming dimension. Compete in esports tournaments, 
          develop games, and experience the future of interactive entertainment 
          in our neon-lit digital playground.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Gamepad2, title: "Esports Arena", desc: "Compete & conquer", color: 'game-pink' },
            { icon: Trophy, title: "Tournaments", desc: "Win epic prizes", color: 'neon-green' },
            { icon: Zap, title: "Game Dev", desc: "Build the future", color: 'cyber-blue' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="glass-morphism p-6 rounded border border-game-pink/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isActive ? 1 : 0.3, 
                y: isActive ? 0 : 30 
              }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 0 30px rgb(255 20 147 / 0.3)` 
              }}
            >
              <feature.icon className={`w-12 h-12 text-${feature.color} mx-auto mb-4`} />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Arcade-style effects */}
      {isActive && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Scanning lines */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #ff1493 2px, #ff1493 4px)'
            }}
            animate={{
              y: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Power-up animations */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: '50%',
                backgroundColor: ['#ff1493', '#39ff14', '#00d4ff'][i % 3],
                boxShadow: `0 0 20px ${['#ff1493', '#39ff14', '#00d4ff'][i % 3]}`
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [1, 0, 1],
                y: [0, -50, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GamingWorld;
