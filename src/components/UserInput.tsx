import React from 'react';
import { Search } from 'lucide-react';

interface UserInputProps {
  onSubmit: (usernames: string[]) => void;
}

export function UserInput({ onSubmit }: UserInputProps) {
  const [usernames, setUsernames] = React.useState(['', '']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernames.every(username => username.trim())) {
      onSubmit(usernames);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-white mb-8">
          Enter the Battle Arena!
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {usernames.map((username, index) => (
            <div key={index} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  const newUsernames = [...usernames];
                  newUsernames[index] = e.target.value;
                  setUsernames(newUsernames);
                }}
                placeholder="GitHub username"
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-200"
          disabled={!usernames.every(username => username.trim())}
        >
          Enter the Battle Arena
        </button>
      </div>
    </form>
  );
}