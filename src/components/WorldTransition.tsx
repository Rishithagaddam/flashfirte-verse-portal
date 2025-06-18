
import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface WorldTransitionProps {
  isActive: boolean;
  worldIndex: number;
  scrollProgress: MotionValue<number>;
}

const WorldTransition: React.FC<WorldTransitionProps> = ({ isActive, worldIndex, scrollProgress }) => {
  const colors = [
    ['#1a1a2e', '#16213e', '#0f3460'], // Ideation
    ['#2d1b69', '#e94057', '#f27121'], // Speaking
    ['#667eea', '#764ba2', '#f093fb'], // Design
    ['#0c0c0c', '#1a0033', '#330066']  // Gaming
  ];

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `linear-gradient(135deg, ${colors[worldIndex][0]} 0%, ${colors[worldIndex][1]} 50%, ${colors[worldIndex][2]} 100%)`,
        opacity: isActive ? 1 : 0.3
      }}
      animate={{
        opacity: isActive ? 1 : 0.3,
        scale: isActive ? 1 : 0.95
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Portal rings */}
      {isActive && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-white/20 rounded-full"
              style={{
                width: `${(i + 1) * 100}px`,
                height: `${(i + 1) * 100}px`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}
        </div>
      )}

      {/* Energy particles */}
      {isActive && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: colors[worldIndex][1],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default WorldTransition;
