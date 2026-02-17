import type { Metadata } from "next";
import "../index.css";
import "@/styles/globals.css";
import "@/styles/semantic.css";
import "@/styles/components.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { HeaderWrapper } from "@/components/HeaderWrapper";
import { Footer } from "@/components/Footer";
import { Poppins, Open_Sans, Baloo_2 } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-open-sans",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: "La grande classe - Petite enfance",
  description: "Actualitées et dossiers de la petite enfance",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${openSans.variable} ${baloo.variable}`}>
      <body className="app-body">
        <SmoothScroll>
          <div className="page">
            <HeaderWrapper />
            <main>{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
