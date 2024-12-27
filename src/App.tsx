import React from 'react';
import { GameTitle } from './components/GameTitle';
import { UserInput } from './components/UserInput';
import { BattleArena } from './components/BattleArena';
import { WinnerStats } from './components/WinnerStats';
import { BattleLoading } from './components/BattleLoading';
import { fetchUserData, fetchUserStats } from './services/github';
import type { Player } from './types/github';

export default function App() {
  const [players, setPlayers] = React.useState<Player[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [battleComplete, setBattleComplete] = React.useState(false);
  const [winner, setWinner] = React.useState<Player | null>(null);
  const [showWinnerStats, setShowWinnerStats] = React.useState(false);

  const handleUserSubmit = async (usernames: string[]) => {
    setLoading(true);
    setError(null);
    try {
      const playerPromises = usernames.map(async (username) => {
        const user = await fetchUserData(username);
        const stats = await fetchUserStats(username);
        const score = Object.values(stats).reduce((a, b) => a + b, 0);
        return { user, stats, score };
      });

      const newPlayers = await Promise.all(playerPromises);
      setPlayers(newPlayers);
    } catch (err) {
      setError('Error fetching user data. Please check the usernames and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBattleComplete = (winner: Player) => {
    setBattleComplete(true);
    setWinner(winner);
    setShowWinnerStats(true);
  };

  const handleReset = () => {
    setPlayers([]);
    setBattleComplete(false);
    setError(null);
    setWinner(null);
    setShowWinnerStats(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <GameTitle />

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg mb-8 text-center">
            {error}
          </div>
        )}

        {loading ? (
          <BattleLoading />
        ) : players.length === 0 ? (
          <UserInput onSubmit={handleUserSubmit} />
        ) : (
          <div className="space-y-8">
            <BattleArena 
              players={players}
              onBattleComplete={handleBattleComplete}
            />
            
            {showWinnerStats && winner && (
              <WinnerStats 
                winner={winner} 
                players={players} 
                onClose={() => setShowWinnerStats(false)} 
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}