
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cpu, Zap, Brain } from 'lucide-react';

interface IdeationWorldProps {
  isActive: boolean;
}

const IdeationWorld: React.FC<IdeationWorldProps> = ({ isActive }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center world-ideation overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-cyber-blue/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 0.3 : 0 }}
              transition={{ delay: i * 0.01, duration: 0.5 }}
            />
          ))}
        </div>
      </div>

      {/* Floating holograms */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: isActive ? [1, 1.1, 1] : [0, 0, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-cyber-blue/20 rounded-lg border border-cyber-blue/50 flex items-center justify-center backdrop-blur-sm">
                {i % 4 === 0 && <Lightbulb className="w-8 h-8 text-cyber-blue" />}
                {i % 4 === 1 && <Cpu className="w-8 h-8 text-cyber-blue" />}
                {i % 4 === 2 && <Zap className="w-8 h-8 text-cyber-blue" />}
                {i % 4 === 3 && <Brain className="w-8 h-8 text-cyber-blue" />}
              </div>
              {/* Hologram effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyber-blue/10 to-transparent animate-pulse"></div>
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
          className="inline-block p-4 mb-6 bg-cyber-blue/10 rounded-full border border-cyber-blue/30"
          animate={{ 
            boxShadow: isActive ? '0 0 40px rgba(0, 212, 255, 0.5)' : '0 0 0px rgba(0, 212, 255, 0)' 
          }}
        >
          <Brain className="w-16 h-16 text-cyber-blue" />
        </motion.div>

        <h2 className="text-6xl md:text-7xl font-['Orbitron'] font-bold mb-6 text-cyber-blue neon-text">
          IDEATION LAB
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
          Where innovation meets artificial intelligence. Collaborate with AI holograms, 
          brainstorm in virtual spaces, and bring your wildest ideas to life in our 
          cutting-edge tech laboratory.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Lightbulb, title: "AI Brainstorming", desc: "Collaborate with AI" },
            { icon: Cpu, title: "Tech Prototyping", desc: "Build and test rapidly" },
            { icon: Zap, title: "Innovation Hub", desc: "Connect with innovators" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="glass-morphism p-6 rounded-xl border border-cyber-blue/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isActive ? 1 : 0.3, 
                y: isActive ? 0 : 30 
              }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
            >
              <feature.icon className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Matrix rain effect */}
      {isActive && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyber-blue/30 font-mono text-sm matrix-char"
              style={{
                left: `${i * 5}%`,
                top: '-10%'
              }}
              animate={{
                y: ['0vh', '110vh']
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
            >
              {Math.random().toString(36).substring(7)}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IdeationWorld;
