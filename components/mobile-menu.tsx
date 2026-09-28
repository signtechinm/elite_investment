"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [["About", "/about"], ["Capabilities", "/capabilities"], ["Markets", "/markets"], ["Approach", "/approach"], ["Contact", "/contact"]];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <>
    <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" className="relative z-50 flex h-11 w-11 items-center justify-center text-forest" onClick={() => setOpen(!open)}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
    <AnimatePresence>{open && <motion.div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile navigation" className="fixed inset-0 z-40 bg-forest text-paper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}><div className="shell flex h-full flex-col pt-28"><p className="eyebrow text-gold">Navigation</p><nav className="mt-10 flex flex-col gap-5">{links.map(([label, href], index) => <motion.div key={href} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.04 }}><Link className="font-serif text-4xl text-paper" href={href} onClick={() => setOpen(false)}>{label}</Link></motion.div>)}</nav><p className="mt-auto border-t border-paper/20 py-6 text-sm text-paper/50">Türkiye · Gulf · Africa · Europe</p></div></motion.div>}</AnimatePresence>
  </>;
}
