import { motion } from "framer-motion";

const ScrollIndicator = ({ className = "" }: { className?: string }) => (
  <motion.button
    onClick={() =>
      document
        .getElementById("experience")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`group flex flex-col items-center focus:outline-none ${className}`}
  >
    <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
      <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse" />
      <div className="relative w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
          className="text-blue-600 text-lg font-bold"
        >
          ↓
        </motion.div>
      </div>
    </div>
    <span className="mt-3 text-gray-600 text-sm group-hover:text-blue-600 transition-colors">
      Scroll to explore
    </span>
  </motion.button>
);


export default ScrollIndicator;
