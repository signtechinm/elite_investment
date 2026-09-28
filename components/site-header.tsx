import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";

export function SiteHeader() {
  return <header className="relative z-50 border-b border-forest/10 bg-paper"><div className="shell flex h-20 items-center justify-between"><Link href="/"><Image src="/brand/lockup-primary.svg" alt="Elite Investment" width={177} height={43} priority /></Link><nav className="hidden items-center gap-7 text-sm text-slate md:flex"><Link className="transition-colors hover:text-jade" href="/about">About</Link><Link className="transition-colors hover:text-jade" href="/capabilities">Capabilities</Link><Link className="transition-colors hover:text-jade" href="/markets">Markets</Link><Link className="transition-colors hover:text-jade" href="/approach">Approach</Link><Link className="transition-colors hover:text-jade" href="/insights">Insights</Link><Link className="font-bold text-jade" href="/contact">Contact</Link></nav><div className="md:hidden"><MobileMenu /></div></div></header>;
}
