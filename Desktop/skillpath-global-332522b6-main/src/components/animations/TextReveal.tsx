import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightClass?: string;
  highlight?: string;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  highlight,
  highlightClass = "text-accent",
}: TextRevealProps) {
  const parts = highlight ? text.split(highlight) : [text];

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {highlight ? (
        <>
          {parts[0]}
          <span className={highlightClass}>{highlight}</span>
          {parts[1]}
        </>
      ) : (
        text
      )}
    </motion.span>
  );
}
