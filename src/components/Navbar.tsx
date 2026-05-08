"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, ArrowRight } from "@phosphor-icons/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  {
    title: "Products",
    items: [
      { name: "North", desc: "Enterprise AI Platform" },
      { name: "Compass", desc: "Intelligent Search" },
      { name: "Command", desc: "Generative Models" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { name: "Technology", desc: "Build faster" },
      { name: "Finance", desc: "Smart banking" },
      { name: "Healthcare", desc: "Patient insights" },
    ],
  },
  { title: "Research", href: "/research" },
  { title: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-10 border-b border-black/5 backdrop-blur-md bg-background/80">
      <div className="flex items-center gap-10">
        <a href="/" className="text-2xl font-headline font-bold text-forest tracking-tighter">
          VIBE
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="relative group"
              onMouseEnter={() => link.items && setActiveMenu(link.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {link.href ? (
                <a
                  href={link.href}
                  className="text-sm font-body font-medium hover:text-forest transition-colors"
                >
                  {link.title}
                </a>
              ) : (
                <button className="flex items-center gap-1 text-sm font-body font-medium group-hover:text-forest transition-colors">
                  {link.title}
                  <CaretDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
              )}

              <AnimatePresence>
                {activeMenu === link.title && link.items && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[400px]"
                  >
                    <div className="bg-white border border-black/5 rounded-2xl shadow-xl p-6 grid grid-cols-1 gap-4">
                      {link.items.map((item, idx) => (
                        <motion.a
                          key={item.name}
                          href="#"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="group/item flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors"
                        >
                          <div>
                            <p className="font-headline font-medium text-forest group-hover/item:translate-x-1 transition-transform">
                              {item.name}
                            </p>
                            <p className="text-xs text-cyan-slate">{item.desc}</p>
                          </div>
                          <ArrowRight size={16} className="text-forest opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="hidden sm:block text-sm font-body font-medium hover:text-forest transition-colors">
          Sign In
        </a>
        <button className="px-5 py-2.5 bg-forest text-white rounded-full font-mono text-xs uppercase tracking-wider hover:bg-forest/90 transition-all active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
}
