"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Parallax } from "@/components/motion";

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="relative isolate overflow-hidden bg-forest py-28 text-paper md:py-36"><Parallax className="absolute inset-[-5%] -z-20" distance={12}><Image className="h-full w-full object-cover opacity-55" src="/images/istanbul-inner-hero.png" alt="Istanbul architectural shoreline in daylight" fill sizes="100vw" /></Parallax><div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/45" /><div className="shell"><motion.p className="eyebrow text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{eyebrow}</motion.p><motion.h1 className="display-title mt-7 max-w-4xl text-balance" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>{title}</motion.h1><motion.p className="mt-8 max-w-2xl text-lg leading-8 text-paper/70" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }}>{copy}</motion.p></div></section>;
}

export function PageLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="mt-8 inline-flex border-b border-jade pb-1 text-sm font-bold text-jade" href={href}>{children}<ArrowUpRight className="ml-2 h-4 w-4" /></Link>;
}
