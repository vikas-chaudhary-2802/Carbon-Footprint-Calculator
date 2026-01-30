import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large gradient orb - top right */}
      <motion.div
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Medium gradient orb - left side */}
      <motion.div
        className="absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          y: [0, 30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute right-1/4 top-1/4 h-20 w-20 rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          y: [0, -20, 0],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute left-1/4 top-1/2 h-16 w-16 rounded-full border-2 border-primary/15 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 15, 0],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute right-1/3 bottom-1/3 h-12 w-12 rotate-45 border-2 border-accent/25 bg-gradient-to-br from-accent/15 to-transparent backdrop-blur-sm"
        animate={{ 
          rotate: [45, 135, 225, 315, 405],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Floating dots */}
      <motion.div
        className="absolute left-[15%] top-[20%] h-3 w-3 rounded-full bg-accent/40"
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[20%] top-[40%] h-2 w-2 rounded-full bg-primary/30"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute left-[40%] bottom-[25%] h-4 w-4 rounded-full bg-accent/30"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute right-[35%] bottom-[40%] h-2 w-2 rounded-full bg-primary/40"
        animate={{ x: [0, 10, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  );
}
