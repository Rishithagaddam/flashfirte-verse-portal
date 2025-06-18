
import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Volume2, Users, Star } from 'lucide-react';

interface SpeakingWorldProps {
  isActive: boolean;
}

const SpeakingWorld: React.FC<SpeakingWorldProps> = ({ isActive }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center world-speaking overflow-hidden">
      {/* Stage lights */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              left: `${(i % 3) * 35 + 10}%`,
              top: `${Math.floor(i / 3) * 30 + 10}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#f97316' : '#e94057'}40 0%, transparent 70%)`
            }}
            animate={{
              scale: isActive ? [1, 1.2, 1] : [0, 0, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating microphones */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + (i % 2) * 30}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              scale: isActive ? 1 : 0
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <div className="w-20 h-20 bg-iron-orange-500/20 rounded-full border border-iron-orange-500/50 flex items-center justify-center backdrop-blur-sm">
                <Mic className="w-10 h-10 text-iron-orange-400" />
              </div>
              {/* Sound waves */}
              <div className="absolute inset-0">
                {[...Array(3)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute inset-0 rounded-full border border-iron-orange-400/30"
                    animate={{
                      scale: [1, 2.5, 1],
                      opacity: [0.7, 0, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: j * 0.6,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
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
          className="inline-block p-4 mb-6 bg-iron-orange-500/10 rounded-full border border-iron-orange-500/30"
          animate={{ 
            boxShadow: isActive ? '0 0 40px rgba(249, 115, 22, 0.5)' : '0 0 0px rgba(249, 115, 22, 0)' 
          }}
        >
          <Volume2 className="w-16 h-16 text-iron-orange-400" />
        </motion.div>

        <h2 className="text-6xl md:text-7xl font-['Orbitron'] font-bold mb-6 text-iron-orange-400 neon-text">
          SPEAKING STAGE
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
          Command the spotlight and amplify your voice. From keynote speeches to 
          interactive presentations, master the art of communication in our 
          immersive speaking arena.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Mic, title: "Keynote Talks", desc: "Share your vision" },
            { icon: Users, title: "Panel Discussions", desc: "Engage in dialogue" },
            { icon: Star, title: "Pitch Perfect", desc: "Present your ideas" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="glass-morphism p-6 rounded-xl border border-iron-orange-500/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isActive ? 1 : 0.3, 
                y: isActive ? 0 : 30 
              }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249, 115, 22, 0.3)' }}
            >
              <feature.icon className="w-12 h-12 text-iron-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Spotlight beam effect */}
      {isActive && (
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0.1) 50%, transparent 100%)'
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
};

export default SpeakingWorld;
