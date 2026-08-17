import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenya Central Clinic | Next-Generation Healthcare",
  description: "World-class healthcare with clinical precision and compassionate patient care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8F9FA] text-[#112233] min-h-screen flex flex-col`}>
        
        <Navigation />

        {/* Main Content */}
        {children}

        <Footer />

        {/* Floating WhatsApp Action - Always visible */}
        <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#007A78] text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,122,120,0.3)] transition-all z-50 group">
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        </a>

      </body>
    </html>
  );
}
