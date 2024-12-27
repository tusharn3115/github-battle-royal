import React from 'react';
import { Swords } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-4">
        <Swords className="w-12 h-12 text-purple-500" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          GitHub Battle Royale
        </h1>
      </div>
      <p className="text-gray-400">
        Battle with your friends using GitHub stats!
      </p>
    </header>
  );
}