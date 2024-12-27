import { Swords, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function GameTitle() {
  return (
    <>
      <div className="absolute top-8 right-10 flex gap-6 items-center sm:flex-col sm:items-center sm:top-4 sm:right-4 sm:gap-4">
        {/* Twitter Button */}
        <a
          href="https://x.com/tushxr05"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 rounded-full bg-blue-500 hover:bg-blue-700 transition-all duration-200 sm:w-full sm:justify-center"
        >
          <Twitter className="w-6 h-6 text-white" />
          <span className="text-white font-semibold text-sm sm:text-xs">Twitter</span>
        </a>

        {/* GitHub Star Button */}
        <a
          href="https://github.com/tusharn3115/github-battle-royal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 rounded-full bg-gray-800 hover:bg-gray-600 transition-all duration-200 sm:w-full sm:justify-center"
        >
          <Github className="w-6 h-6 text-white" />
          <span className="text-white font-semibold text-sm sm:text-xs">Give a Star</span>
        </a>
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12 relative sm:mb-8 sm:px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl" />
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-2 sm:flex-col sm:gap-2">
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Swords className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] sm:w-8 sm:h-8" />
            </motion.div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] sm:text-3xl">
              GitHub Battle
            </h1>
          </div>
          <p className="text-lg text-purple-200 tracking-wide sm:text-sm">
            PROVE YOUR WORTH IN THE ARENA
          </p>
        </div>
      </motion.div>
    </>
  );
}
