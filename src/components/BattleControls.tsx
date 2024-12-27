import React from 'react';

interface BattleControlsProps {
  onShowStats: () => void;
}

export function BattleControls({ onShowStats }: BattleControlsProps) {
  return (
    <div className="text-center">
      <button
        onClick={onShowStats}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition duration-200"
      >
        Show Battle Results
      </button>
    </div>
  );
}