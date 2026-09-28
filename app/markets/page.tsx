import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = { title: "Markets" };

const markets = [['01','Türkiye','Manufacturing depth, supplier context, and production-side relationships.'],['02','Gulf','Procurement discipline, decision pathways, and long-term partnership expectations.'],['03','Africa','Market-specific operating realities and the importance of dependable local alignment.'],['04','Europe','Structured counterparties, documentation, and cross-border continuity.']];
export default function MarketsPage() { return <><SiteHeader /><PageIntro eyebrow="Where we work" title="One corridor. Several commercial cultures." copy="The work sits between Turkish production and the procurement, investment and partnership realities of the Gulf, Africa and Europe." /><section className="shell py-24 md:py-36"><div className="grid gap-5 md:grid-cols-2">{markets.map(([n,t,c]) => <article className="min-h-64 bg-mist p-8 md:p-10" key={n}><span className="eyebrow text-jade">{n}</span><h2 className="mt-14 font-serif text-3xl text-forest">{t}</h2><p className="mt-4 max-w-sm leading-7">{c}</p></article>)}</div><p className="mt-14 max-w-2xl text-lg leading-8 text-slate/80">Every corridor has its own law, timing, language and risk profile. We begin by understanding the specific one in front of us.</p></section><SiteFooter /></>; }
