import { Inter, Space_Grotesk } from "next/font/google";

import { Analytics } from "./analytics";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InteractiveShell } from "./components/InteractiveShell";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Tomas Holtz",
  description:
    "Tomas Holtz is a software builder from Argentina writing about code, products, side projects, and the strange path of making ideas real.",
  openGraph: {
    title: "Tomas Holtz",
    description:
      "Tomas Holtz is a software builder from Argentina writing about code, products, side projects, and the strange path of making ideas real.",
    url: "https://tomasholtz.com",
    siteName: "Tomas Holtz",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tomasholtz_",
    creator: "@tomasholtz_",
  },
  metadataBase: new URL("https://tomasholtz.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <div className="site-root">
          <Header />
          <InteractiveShell />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
