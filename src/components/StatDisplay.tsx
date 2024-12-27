import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GitBranch, Star, GitPullRequest, Bug, Book } from 'lucide-react';
import type { BattleStats } from '../types/github';

interface StatDisplayProps {
  stats: BattleStats;
  title: string;
  showTrophy?: boolean;
}

export function StatDisplay({ stats, title, showTrophy = false }: StatDisplayProps) {
  const statItems = [
    { icon: GitBranch, label: 'Commits', value: stats.commits },
    { icon: Star, label: 'Stars', value: stats.stars },
    { icon: GitPullRequest, label: 'PRs', value: stats.pullRequests },
    { icon: Bug, label: 'Issues', value: stats.issues },
    { icon: Book, label: 'Repos', value: stats.repositories }
  ];

  return (
    <div className="relative p-6 rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          {showTrophy && (
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Trophy className="w-6 h-6 text-yellow-400" />
            </motion.div>
          )}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {statItems.map(({ icon: Icon, label, value }) => (
            <div 
              key={label}
              className="bg-gray-800/50 rounded-lg p-3 border border-purple-500/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-200">{label}</span>
              </div>
              <span className="text-xl font-bold text-white">
                {value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}