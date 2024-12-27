import React from 'react';
import { motion } from 'framer-motion';
import { Swords, Sparkles } from 'lucide-react';

interface BattleLoadingScreenProps {
  state: 'preparing' | 'fighting';
}

export function BattleLoadingScreen({ state }: BattleLoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <motion.div
          className="relative"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50" />
          <Swords className="w-32 h-32 text-yellow-400 relative z-10" />
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-16 h-16 text-purple-400" />
          </motion.div>
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
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500"
        >
          {state === 'fighting' ? 'BATTLE IN PROGRESS' : 'PREPARING FOR BATTLE'}
        </motion.h2>

        <div className="flex justify-center gap-2">
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}