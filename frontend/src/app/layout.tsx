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
        <div className="bg-[#1A3636] text-white py-1.5 px-4 md:px-8 text-[11px] font-medium tracking-wide flex justify-between items-center">
          <div className="flex items-center gap-4 opacity-90">
            <span className="flex items-center gap-1"><PhoneCall size={12} /> 24/7 Triage: +254 700 000 000</span>
          </div>
          <div className="hidden md:flex items-center gap-4 opacity-80">
            <Link href="/patient-portal" className="hover:text-[#F7EFE5] transition-colors">Patient Portal Login</Link>
            <span className="w-px h-3 bg-white/20"></span>
            <Link href="/careers" className="hover:text-[#F7EFE5] transition-colors">Careers</Link>
          </div>
        </div>

        {/* Floating WhatsApp Action - Always visible */}
        <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#007A78] text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,122,120,0.3)] transition-all z-50 group">
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        </a>

      </body>
    </html>
  );
}
