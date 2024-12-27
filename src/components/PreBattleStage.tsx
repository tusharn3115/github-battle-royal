import type { Player } from '../types/github';
import { PlayerCard } from './PlayerCard';
import { BattleButton } from './BattleButton';

interface PreBattleStageProps {
  players: Player[];
  onBattleStart: () => void;
}

export function PreBattleStage({ players, onBattleStart }: PreBattleStageProps) {
  return (
    <div className="w-full min-h-[600px] relative p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <PlayerCard player={players[0]} position="left" />
          <PlayerCard player={players[1]} position="right" />
        </div>

        <div className="flex justify-center">
          <BattleButton onClick={onBattleStart} />
        </div>
      </div>
    </div>
  );
}