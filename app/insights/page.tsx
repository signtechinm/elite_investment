import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/motion";
import { insights } from "@/lib/insights";

export const metadata = { title: "Insights" };

export default function InsightsPage() { return <><SiteHeader /><PageIntro eyebrow="Insights" title="Notes from the corridor." copy="Practical observations on cross-border trade, working relationships, and the decisions that make a transaction hold together." /><section className="shell py-24 md:py-36"><div className="grid gap-5 md:grid-cols-3">{insights.map((item, index) => <Reveal key={item.slug} delay={index * 0.08}><Link className="group flex h-full flex-col bg-mist p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8" href={`/insights/${item.slug}`}><div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-jade"><span>{item.category}</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><h2 className="mt-16 font-serif text-2xl leading-tight text-forest">{item.title}</h2><p className="mt-4 leading-7 text-slate/80">{item.excerpt}</p><div className="mt-auto pt-8 text-xs text-slate/60">{item.date} · {item.readingTime}</div></Link></Reveal>)}</div></section><SiteFooter /></>; }
