import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, GitPullRequest, Bug, Book } from 'lucide-react';
import type { Player } from '../types/github';

interface PlayerCardProps {
  player: Player;
  position: 'left' | 'right';
}

export function PlayerCard({ player, position }: PlayerCardProps) {
  const statItems = [
    { icon: GitBranch, label: 'Commits', value: player.stats.commits },
    { icon: Star, label: 'Stars', value: player.stats.stars },
    { icon: GitPullRequest, label: 'PRs', value: player.stats.pullRequests },
    { icon: Bug, label: 'Issues', value: player.stats.issues },
    { icon: Book, label: 'Repos', value: player.stats.repositories }
  ];

  return (
    <motion.div
      initial={{ x: position === 'left' ? -100 : 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="relative"
    >
      {/* Player Frame */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-lg blur group-hover:blur-xl transition-all duration-300" />
        <div className="relative bg-gray-900 rounded-lg p-6 border border-purple-500/30">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full blur-xl opacity-50" />
            <img
              src={player.user.avatar_url}
              alt={player.user.login}
              className="w-32 h-32 rounded-full border-4 border-purple-500 mx-auto relative z-10"
            />
          </div>

          {/* Username */}
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            {player.user.login}
          </h3>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {statItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-gray-800/50 rounded-lg p-3 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-200">{label}</span>
                </div>
                <span className="text-xl font-bold text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}