import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import { Parallax } from "@/components/motion";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-forest text-paper">
        <Parallax className="absolute inset-[-5%]" distance={14}><Image className="h-full w-full object-cover opacity-65" src="/images/istanbul-bridge-hero.png" alt="Istanbul bridge over the Bosphorus at blue hour" fill priority sizes="100vw" /></Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/75 to-forest/25" />
        <div className="relative z-10 shell flex min-h-[calc(100vh-80px)] flex-col py-8 md:py-12">
          <header className="flex items-center justify-between border-b border-paper/20 pb-6">
            <div className="font-serif text-lg tracking-[0.08em]">ELITE<span className="text-gold">▪</span> INVESTMENT</div>
            <Link className="text-sm text-paper/70 transition-colors hover:text-paper" href="/about">Explore the house <ArrowUpRight className="ml-1 inline h-4 w-4" /></Link>
          </header>
          <div className="flex flex-1 items-center py-24">
            <Reveal><div className="max-w-3xl"><p className="eyebrow mb-8 text-gold">Trade · Joint ventures · Türkiye</p><h1 className="display-title text-balance">The confidence to make the next contract.</h1><p className="mt-8 max-w-xl text-lg leading-8 text-paper/70">Elite Investment connects Turkish manufacturing with buyers and partners across the Gulf, Africa and Europe.</p><div className="mt-10 flex flex-wrap gap-4"><Link className="inline-flex items-center bg-paper px-5 py-3 text-sm font-bold text-forest transition-transform hover:-translate-y-0.5" href="/contact">Discuss an opportunity <ArrowUpRight className="ml-2 h-4 w-4" /></Link><Link className="inline-flex items-center border border-paper/30 px-5 py-3 text-sm text-paper transition-colors hover:border-paper" href="/approach">How we work</Link></div></div></Reveal>
          </div>
          <div className="flex justify-between border-t border-paper/20 pt-5 text-xs uppercase tracking-[0.14em] text-paper/50"><span>Türkiye · Gulf · Africa · Europe</span><span>01 / 08</span></div>
        </div>
      </section>
      <section className="shell grid gap-10 py-28 md:grid-cols-[0.8fr_1.2fr] md:py-40"><Reveal><p className="eyebrow text-jade">The house</p></Reveal><Reveal delay={0.08}><div><h2 className="section-title max-w-2xl text-forest">Between people who have never met.</h2><p className="mt-7 max-w-xl text-lg leading-8">A manufacturer in Bursa. A buyer in Abu Dhabi. A partner assembling a venture neither side could build alone. Elite makes the commercial distance legible, then stays close to the commitments that follow.</p><Link className="mt-8 inline-flex border-b border-jade pb-1 text-sm font-bold text-jade" href="/about">Read about Elite <ArrowUpRight className="ml-2 h-4 w-4" /></Link></div></Reveal></section>
      <section className="relative h-[420px] overflow-hidden bg-forest md:h-[560px]"><Parallax className="absolute inset-[-6%]" distance={18}><Image className="h-full w-full object-cover opacity-70" src="/images/threshold-hero.png" alt="Stone threshold and timber doorway in quiet morning light" fill sizes="100vw" /></Parallax><div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/30 to-transparent" /><div className="shell relative flex h-full items-center"><div><p className="eyebrow text-gold">The next step</p><h2 className="section-title mt-5 max-w-xl text-paper">Start with the situation as it is.</h2><Link className="mt-8 inline-flex border-b border-paper pb-1 text-sm font-bold text-paper" href="/contact">Make an enquiry <ArrowUpRight className="ml-2 h-4 w-4" /></Link></div></div></section>
      <SiteFooter />
    </main>
  );
}
