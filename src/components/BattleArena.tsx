import React from 'react';
import type { Player } from '../types/github';
import { PreBattleStage } from './PreBattleStage';
import { BattleLoadingScreen } from './BattleLoadingScreen';

interface BattleArenaProps {
  players: Player[];
  onBattleComplete: (winner: Player) => void;
}

export function BattleArena({ players, onBattleComplete }: BattleArenaProps) {
  const [battleState, setBattleState] = React.useState<'pre-battle' | 'fighting' | 'complete'>('pre-battle');
  
  const handleBattleStart = () => {
    setBattleState('fighting');
    setTimeout(() => {
      const winner = players.reduce((prev, current) => 
        prev.score > current.score ? prev : current
      );
      setBattleState('complete');
      onBattleComplete(winner);
    }, 3000);
  };

  if (battleState === 'fighting') {
    return <BattleLoadingScreen state="fighting" />;
  }

  if (battleState === 'pre-battle') {
    return <PreBattleStage players={players} onBattleStart={handleBattleStart} />;
  }

  return null;
}