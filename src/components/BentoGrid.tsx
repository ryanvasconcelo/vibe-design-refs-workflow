"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const items = [
  {
    title: "Enterprise Readiness",
    description: "Scale your AI initiatives with confidence.",
    className: "md:col-span-2 md:row-span-2",
    color: "bg-forest/10",
  },
  {
    title: "Data Privacy",
    description: "Your data stays yours. Always.",
    className: "md:col-span-1 md:row-span-1",
    color: "bg-cyan-slate/10",
  },
  {
    title: "Global Scale",
    description: "Deployed across multiple regions.",
    className: "md:col-span-1 md:row-span-2",
    color: "bg-forest/5",
  },
  {
    title: "Custom Models",
    description: "Tailored to your specific domain.",
    className: "md:col-span-1 md:row-span-1",
    color: "bg-cyan-slate/5",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-forest tracking-tight mb-4">
          Engineered for <br /> Performance.
        </h2>
        <p className="text-lg text-cyan-slate font-body max-w-xl">
          We combine aesthetic excellence with technical precision to deliver 
          digital experiences that resonate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-black/5 p-8 flex flex-col justify-end transition-all hover:shadow-2xl hover:shadow-forest/5",
              item.className,
              item.color
            )}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-headline font-bold text-forest mb-2 group-hover:-translate-y-1 transition-transform">
                {item.title}
              </h3>
              <p className="text-sm text-cyan-slate font-body max-w-[200px]">
                {item.description}
              </p>
            </div>
            
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className="w-12 h-12 rounded-full border-2 border-forest" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
