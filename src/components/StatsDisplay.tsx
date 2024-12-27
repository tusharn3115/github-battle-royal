import React from 'react';
import { Trophy } from 'lucide-react';
import type { BattleStats } from '../types/github';

interface StatsDisplayProps {
  stats: BattleStats;
  title: string;
  showTrophy?: boolean;
}

export function StatsDisplay({ stats, title, showTrophy = false }: StatsDisplayProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        {showTrophy && <Trophy className="w-6 h-6 text-yellow-400" />}
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <StatItem label="Commits" value={stats.commits} />
        <StatItem label="Stars" value={stats.stars} />
        <StatItem label="Pull Requests" value={stats.pullRequests} />
        <StatItem label="Issues" value={stats.issues} />
        <StatItem label="Repositories" value={stats.repositories} />
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-gray-700 rounded-lg p-3">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-lg font-bold text-white">{value.toLocaleString()}</div>
    </div>
  );
}