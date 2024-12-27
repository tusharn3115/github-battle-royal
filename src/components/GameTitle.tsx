import { Swords, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function GameTitle() {
  return (
    <>
      <div className="absolute top-8 right-10 flex gap-6 items-center">
        {/* Twitter Button */}
        <a
          href="https://x.com/tushxr05"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 rounded-full bg-blue-500 hover:bg-blue-700 transition-all duration-200"
        >
          <Twitter className="w-8 h-8 text-white" />
          <span className="text-white font-semibold text-lg">Twitter</span>
        </a>

        {/* GitHub Star Button */}
        <a
          href="https://github.com/yourrepo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 rounded-full bg-gray-800 hover:bg-gray-600 transition-all duration-200"
        >
          <Github className="w-8 h-8 text-white" />
          <span className="text-white font-semibold text-lg">GIve a Star</span>
        </a>
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl" />
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-4">
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
              <Swords className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
            </motion.div>
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              GitHub Battle
            </h1>
          </div>
          <p className="text-xl text-purple-200 tracking-wide">
            PROVE YOUR WORTH IN THE ARENA
          </p>
        </div>
      </motion.div>
    </>
  );
}
