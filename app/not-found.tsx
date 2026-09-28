import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() { return <main className="flex min-h-screen items-center bg-forest text-paper"><div className="shell"><p className="eyebrow text-gold">404 · Not found</p><h1 className="display-title mt-7 max-w-2xl">The page is not in this corridor.</h1><p className="mt-7 max-w-lg text-lg leading-8 text-paper/70">The address may have changed. Start again from the main house.</p><Link className="mt-9 inline-flex items-center border-b border-paper pb-1 text-sm font-bold" href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Return home</Link></div></main>; }
