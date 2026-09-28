import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = { title: "Privacy" };
export default function PrivacyPage() { return <><SiteHeader /><PageIntro eyebrow="Utility" title="Privacy, handled plainly." copy="This page is a holding structure for the approved privacy notice and data handling details." /><section className="shell max-w-3xl py-24 md:py-36"><h2 className="section-title text-forest">Approval required before launch</h2><p className="mt-7 text-lg leading-8">The final notice should describe the information collected through the enquiry form, how it is used, where it is stored, retention periods, and how a person can contact Elite Investment about their data.</p></section><SiteFooter /></>; }
