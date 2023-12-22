import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "House of Geeks, IIIT Ranchi",
  description: "Official Website of House of Geeks, Technical Society of IIIT Ranchi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col text-white bg-primary-bg">
          <div className="h-16">
            <Navbar />
          </div>
          <div className="flex-1 sm:px-8 lg:px-14">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
