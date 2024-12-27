import React from 'react';
import { motion } from 'framer-motion';
import { Swords } from 'lucide-react';

interface BattleButtonProps {
  onClick: () => void;
}

export function BattleButton({ onClick }: BattleButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative px-8 py-4 bg-gray-900 rounded-lg border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Swords className="w-8 h-8 text-yellow-400" />
          </motion.div>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500">
            BEGIN BATTLE
          </span>
        </div>
      </div>
    </motion.button>
  );
}