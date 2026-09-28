import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = { title: "Terms" };
export default function TermsPage() { return <><SiteHeader /><PageIntro eyebrow="Utility" title="Terms for using this site." copy="This page is a holding structure for the approved terms, jurisdiction, and website-use details." /><section className="shell max-w-3xl py-24 md:py-36"><h2 className="section-title text-forest">Approval required before launch</h2><p className="mt-7 text-lg leading-8">The final terms should be supplied and approved by the registered entity before publication. No legal terms are being invented in this development version.</p></section><SiteFooter /></>; }
