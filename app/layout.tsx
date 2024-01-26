import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tomas Holtz's blog",
  description:
    "Tomas Holtz is a 20yo software developer from Argentina. He has worked building the frontend of the Fintechs Belo App and Suku World",
  openGraph: {
    title: "Tomas Holtzg's blog",
    description:
      "Tomas Holtz is a 20yo software developer from Argentina. He has worked building the frontend of the Fintechs Belo App and Suku World",
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
      <body className={`${inter.className} bg-background max-w-8xl min-h-screen`}>
        <Header />
        {children}
      </body>
      <Footer/> 
    </html>
  );
}
