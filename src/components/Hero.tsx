"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-6">
      <motion.div 
        style={{ y, opacity }}
        className="max-w-6xl w-full text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-[12vw] lg:text-[10vw] font-headline font-bold text-forest tracking-tighter leading-[0.9] mb-8"
        >
          OWN YOUR <br /> VIBE.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-xl md:text-2xl text-cyan-slate max-w-2xl mx-auto font-body font-light"
        >
          Your creative legacy. Your digital identity. <br className="hidden md:block" /> 
          Elevated by high-end design engineering.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-forest text-white rounded-full font-mono text-sm uppercase tracking-widest hover:scale-105 transition-transform">
            Start Building
          </button>
          <button className="w-full sm:w-auto px-8 py-4 border border-forest/20 text-forest rounded-full font-mono text-sm uppercase tracking-widest hover:bg-forest/5 transition-colors">
            View Showreel
          </button>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-20 bg-gradient-to-b from-forest/30 to-transparent"
        />
      </div>
    </section>
  );
}
