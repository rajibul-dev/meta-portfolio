import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
// import Provider from "./provider";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { SITE_URL } from "./_lib/seo";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,

  title: {
    default: "Raji ラジ — Rajibul Islam",
    template: "%s — Raji ラジ",
  },

  description:
    "Rajibul Islam's personal corner of the internet — software engineering, singing, learning, experiments, writing, and everything in between.",

  authors: [{ name: "Rajibul Islam" }],
  creator: "Rajibul Islam",
  publisher: "Rajibul Islam",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "Raji ラジ",
    title: "Raji ラジ - Rajibul Islam",
    description:
      "Rajibul Islam's personal corner of the internet — software engineering, singing, learning, experiments, writing, and everything in between.",
    locale: "en_IN",
    images: [
      {
        url: "/images/rajibul-islam.jpg",
        alt: "Rajibul Islam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raji ラジ — Rajibul Islam",
    description:
      "Rajibul Islam's personal corner of the internet — software engineering, singing, learning, experiments, writing, and everything in between.",
    images: ["/images/rajibul-islam.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${jetbrains_mono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="grid min-h-screen grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr] bg-sand-50 text-sand-900 selection:bg-sand-200 [grid-template-area:'header'_'main'_'footer']"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="mt-(--header-height) flex min-h-0 flex-col">
          <div className="flex flex-1 flex-col">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
