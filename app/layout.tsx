import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://investelite.org"),
  title: { default: "Elite Investment", template: "%s — Elite Investment" },
  description: "A Türkiye-based trading and joint-venture house connecting markets with clarity and accountability.",
  icons: { icon: "/brand/favicon.ico" },
  openGraph: { type: "website", siteName: "Elite Investment", locale: "en_US" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body suppressHydrationWarning>{children}</body></html>;
}
