import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollHighlightText({ text }) {
  const containerRef = useRef(null);
  const words = text.split(' ');

  // Track scroll position of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "start 25%"] // Highlight as it scrolls through the middle of viewport
  });

  return (
    <div ref={containerRef} className="w-full">
      <p className="flex flex-wrap gap-x-3 gap-y-4 max-w-4xl text-xl md:text-3xl font-medium leading-relaxed font-sans select-none">
        {words.map((word, index) => {
          // Calculate start and end scroll progress for this specific word
          const totalWords = words.length;
          const rangeStart = index / totalWords;
          const rangeEnd = (index + 1) / totalWords;

          // Map scrollYProgress to opacity
          const opacity = useTransform(
            scrollYProgress, 
            [rangeStart, rangeEnd], 
            [0.2, 1]
          );

          // Map scrollYProgress to text color slightly (from dim gray to pure white)
          const color = useTransform(
            scrollYProgress,
            [rangeStart, rangeEnd],
            ["rgba(255,255,255,0.2)", "rgba(255,255,255,1)"]
          );

          return (
            <motion.span
              key={index}
              style={{ opacity, color }}
              className="font-bold tracking-wide"
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}
