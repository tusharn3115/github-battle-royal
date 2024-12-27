import React from 'react';
import { motion } from 'framer-motion';
import { Swords } from 'lucide-react';

export function BattleLoading() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-6"
        >
          <Swords className="w-16 h-16 text-purple-500" />
        </motion.div>
        <motion.h2
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-2xl font-bold text-white"
        >
          Preparing for Battle...
        </motion.h2>
        <p className="text-gray-400 mt-2">Gathering GitHub stats</p>
      </div>
    </motion.div>
  );
}