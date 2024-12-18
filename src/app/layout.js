'use client';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import { Sora } from "next/font/google";
import { usePathname } from "next/navigation";

const sora = Sora({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  // Metadata for the layout (not exported)
  const metadata = {
    title: "CAMIO-PPF",
    description: "Generated by create next app",
  };

  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        {/* Setting the title and description within <head> */}
        <title>{metadata.title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${sora.className} antialiased overflow-x-hidden`}>
        <Providers>
          {/* Render Navbar and Footer only if not on /admin routes */}
          {!isAdminRoute && <Navbar />}
          {children}
          {!isAdminRoute && <Footer />}
        </Providers>
      </body>
    </html>
  );
}
