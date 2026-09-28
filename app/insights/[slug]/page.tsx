import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { insights } from "@/lib/insights";

export function generateStaticParams() { return insights.map((item) => ({ slug: item.slug })); }

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = insights.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <><SiteHeader /><PageIntro eyebrow={`${item.category} · ${item.date}`} title={item.title} copy={item.excerpt} /><article className="shell py-24 md:py-36"><div className="grid gap-14 md:grid-cols-[0.45fr_1fr]"><div className="text-sm text-slate/60">{item.readingTime}</div><div className="max-w-2xl space-y-7 text-lg leading-9"><p>Cross-border work becomes difficult when the important parts stay implied. The brief sounds clear until the first specification changes, the decision-maker is not in the room, or two sides use the same word for different obligations.</p><p>A useful first conversation puts the situation into a shape that can be checked. What needs to move? Who has authority? Which date matters? Where does the risk sit if the next step takes longer than expected?</p><h2 className="pt-8 font-serif text-3xl leading-tight text-forest">Clarity is not a formality.</h2><p>It is a way of showing respect to the people who will carry the work. It gives a manufacturer, buyer, or partner a fair view of what is being asked before they commit their time and reputation.</p><p>That is the standard we bring to an introduction. The point is not to create urgency. It is to create enough shared understanding for the right next step to be taken.</p></div></div></article><SiteFooter /></>;
}
