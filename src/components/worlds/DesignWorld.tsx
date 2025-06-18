
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, Sparkles, Brush } from 'lucide-react';

interface DesignWorldProps {
  isActive: boolean;
}

const DesignWorld: React.FC<DesignWorldProps> = ({ isActive }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center world-design overflow-hidden">
      {/* Floating UI elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${10 + Math.floor(i / 4) * 25}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
              scale: isActive ? 1 : 0,
              opacity: isActive ? [0.7, 1, 0.7] : 0
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              {/* Mock UI cards */}
              <div className="w-16 h-12 bg-gradient-to-br from-tech-purple/30 to-purple-600/30 rounded-lg border border-tech-purple/50 backdrop-blur-sm">
                <div className="w-full h-2 bg-tech-purple/50 rounded-t-lg"></div>
                <div className="p-2 space-y-1">
                  <div className="w-8 h-1 bg-white/50 rounded"></div>
                  <div className="w-6 h-1 bg-white/30 rounded"></div>
                </div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-tech-purple/20 to-transparent animate-pulse"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Color palette floating elements */}
      <div className="absolute inset-0">
        {['#667eea', '#764ba2', '#f093fb', '#ff6b6b', '#4ecdc4', '#45b7d1'].map((color, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 rounded-full"
            style={{
              backgroundColor: color,
              left: `${20 + i * 12}%`,
              top: `${60 + (i % 2) * 15}%`,
              boxShadow: `0 0 20px ${color}40`
            }}
            animate={{
              y: [0, -20, 0],
              scale: isActive ? [1, 1.2, 1] : [0, 0, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Brush strokes animation */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              width: '100px',
              height: '4px',
              background: `linear-gradient(90deg, transparent, ${['#667eea', '#764ba2', '#f093fb'][i % 3]}, transparent)`,
              borderRadius: '2px'
            }}
            animate={{
              scaleX: isActive ? [0, 1, 0] : 0,
              opacity: isActive ? [0, 1, 0] : 0
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
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
          className="inline-block p-4 mb-6 bg-tech-purple/10 rounded-full border border-tech-purple/30"
          animate={{ 
            boxShadow: isActive ? '0 0 40px rgba(139, 92, 246, 0.5)' : '0 0 0px rgba(139, 92, 246, 0)' 
          }}
        >
          <Palette className="w-16 h-16 text-tech-purple" />
        </motion.div>

        <h2 className="text-6xl md:text-7xl font-['Orbitron'] font-bold mb-6 text-tech-purple neon-text">
          DESIGN STUDIO
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
          Unleash your creativity in a boundless digital canvas. Design interfaces, 
          create stunning visuals, and collaborate in real-time within our 
          immersive creative workspace.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Brush, title: "Digital Canvas", desc: "Paint with pixels" },
            { icon: Layers, title: "UI/UX Design", desc: "Craft experiences" },
            { icon: Sparkles, title: "Creative Tools", desc: "Professional suite" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="glass-morphism p-6 rounded-xl border border-tech-purple/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isActive ? 1 : 0.3, 
                y: isActive ? 0 : 30 
              }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
            >
              <feature.icon className="w-12 h-12 text-tech-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated design elements */}
      {isActive && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Geometric shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
            >
              <motion.div
                className={`w-8 h-8 ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-none' : 'rounded-lg'}`}
                style={{
                  backgroundColor: ['#667eea', '#764ba2', '#f093fb'][i % 3],
                  opacity: 0.6
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesignWorld;
