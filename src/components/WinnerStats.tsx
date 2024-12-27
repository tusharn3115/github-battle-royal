import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Trophy, Crown, Download, X } from "lucide-react";
import html2canvas from "html2canvas";
import type { Player } from "../types/github";
import { StatDisplay } from "./StatDisplay";

interface WinnerStatsProps {
  winner: Player;
  players: Player[];
  onClose: () => void;
}

export function WinnerStats({ winner, players, onClose }: WinnerStatsProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const opponent = players.find((p) => p.user.login !== winner.user.login);

  const downloadAsImage = async () => {
    if (!cardRef.current) return;
  
    const downloadButton = cardRef.current.querySelector(
      ".download-button"
    ) as HTMLElement;
    if (downloadButton) downloadButton.style.display = "none";
  
    try {
      // Wait for fonts and images
      await document.fonts.ready;
      const images = cardRef.current.getElementsByTagName("img");
      await Promise.all(
        [...images].map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              })
        )
      );
  
      // Temporarily simplify styles for accurate rendering
      const heading = cardRef.current.querySelector("h2") as HTMLElement;
      if (heading) {
        heading.style.background = "none";
        heading.style.color = "#FACC15"; // Set a static yellow color
      }
  
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#1A202C", // Ensure a solid background
        scale: 2,
        useCORS: true,
        logging: false,
      });
  
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `github-battle-winner-${winner.user.login}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      // Restore original styles and download button visibility
      if (downloadButton) downloadButton.style.display = "";
      const heading = cardRef.current.querySelector("h2") as HTMLElement;
      if (heading) heading.style.background = "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm flex items-center justify-center z-50 p-8 overflow-y-auto"
    >
      <div
        ref={cardRef}
        className="relative max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986')] bg-cover bg-center opacity-5" />

        {/* Content */}
        <div className="relative p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Victory Banner */}
          <div className="text-center mb-8">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <Crown className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] mx-auto mb-4" />
            </motion.div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 mb-2">
              LEGENDARY WIN
            </h2>
            <p className="text-purple-200 text-xl">
              {winner.user.login} Emerges Victorious!
            </p>
          </div>

          {/* Winner and Opponent Card Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Winner Section */}
            <div className="relative p-6 rounded-lg mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-lg opacity-10" />
              <div className="relative flex items-center gap-6">
                <img
                  src={winner.user.avatar_url}
                  alt={winner.user.login}
                  className="w-24 h-24 rounded-full border-4 border-yellow-400"
                  crossOrigin="anonymous"
                />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {winner.user.login}
                  </h3>
                  <p className="text-purple-200">
                    Total Score: {winner.score.toLocaleString()}
                  </p>
                  {/* Add any winner-specific state here */}
                </div>
                <Trophy className="w-12 h-12 text-yellow-400 ml-auto" />
              </div>
            </div>

            {/* Opponent Section */}
            {opponent && (
              <div className="relative p-6 rounded-lg mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-lg opacity-10" />
                <div className="relative flex items-center justify-between gap-6">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {opponent.user.login}
                    </h3>
                    <p className="text-purple-200">
                      Total Score: {opponent.score.toLocaleString()}
                    </p>
                    {/* Add any opponent-specific state here */}
                  </div>
                  <img
                    src={opponent.user.avatar_url}
                    alt={opponent.user.login}
                    className="w-24 h-24 rounded-full border-4 border-yellow-400"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Stats Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StatDisplay
              stats={winner.stats}
              title="Champion Stats"
              showTrophy
            />
            {opponent && (
              <StatDisplay stats={opponent.stats} title="Opponent Stats" />
            )}
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <motion.button
              onClick={downloadAsImage}
              className="relative group download-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative px-6 py-3 bg-gray-900 rounded-lg border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-yellow-400" />
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-400">
                    Download Victory Card
                  </span>
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
