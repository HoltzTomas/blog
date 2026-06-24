import { Inter, Space_Grotesk } from "next/font/google"
import { Navbar } from "./components/Navbar"
import { CustomCursor } from "./components/CustomCursor"
import { Analytics } from "./analytics"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Tomas Holtz",
  description:
    "Tomas Holtz is a 22yo software developer from Argentina. He has worked building the frontend of the Fintechs Belo App and Suku World",
  openGraph: {
    title: "Tomas Holtz",
    description:
      "Tomas Holtz is a 22yo software developer from Argentina. He has worked building the frontend of the Fintechs Belo App and Suku World",
    url: "https://tomasholtz.com",
    siteName: "Tomas Holtz",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tomasholtz_",
    creator: "@tomasholtz_",
  },
  metadataBase: new URL("https://tomasholtz.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <CustomCursor />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
