import { motion } from "framer-motion";

interface GradientBackgroundProps {
  variant?: "hero" | "section" | "cta";
}

export function GradientBackground({ variant = "section" }: GradientBackgroundProps) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        
        {/* Radial gradient accent */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--accent) / 0.15), transparent),
              radial-gradient(ellipse 60% 40% at 100% 50%, hsl(var(--accent) / 0.1), transparent),
              radial-gradient(ellipse 50% 30% at 0% 80%, hsl(var(--primary) / 0.08), transparent)
            `
          }}
        />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, hsl(var(--accent) / 0.12), transparent 40%),
              radial-gradient(circle at 70% 60%, hsl(var(--primary) / 0.08), transparent 40%)
            `
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    );
  }

  if (variant === "cta") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, hsl(var(--accent) / 0.15) 0%, transparent 50%),
              linear-gradient(225deg, hsl(var(--primary) / 0.1) 0%, transparent 50%),
              hsl(var(--tekhlym-teal-soft))
            `
          }}
        />
        <motion.div
          className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-accent/15 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
    </div>
  );
}
