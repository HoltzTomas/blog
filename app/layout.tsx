import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Analytics } from "./analytics";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tomas Holtz's blog",
  description:
    "Tomas Holtz is a 21yo software developer from Argentina. He has worked building the frontend of the Fintechs Belo App and Suku World",
  openGraph: {
    title: "Tomas Holtzg's blog",
    description:
      "Tomas Holtz is a 21yo software developer from Argentina. He has worked building the frontend of the Fintechs Belo App and Suku World",
    url: "https://tomasholtz.com",
    siteName: "Tomas Holtzg's blog",
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
      <body className={`${inter.className} flex flex-col items-center bg-background min-h-screen`}>
        <Header />
        <main className="max-w-8xl flex flex-col  p-6 pt-3 md:pt-6 min-h-[85vh]">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
