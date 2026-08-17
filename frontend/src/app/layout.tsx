import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { MessageCircle, ShieldCheck, Accessibility, ChevronDown, PhoneCall } from "lucide-react";

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
      <body className={`${inter.className} bg-[#F7EFE5] text-[#1A3636] min-h-screen flex flex-col`}>
        
        {/* Top Utility Bar */}
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

        {/* Main Navigation */}
        <header className="sticky top-0 z-50 w-full bg-[#F7EFE5]/90 backdrop-blur-md border-b border-[#1A3636]/10 shadow-sm">
          <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center leading-none flex-shrink-0">
              <h1 className="text-2xl font-black tracking-tight text-[#1A3636]">
                KENYA CENTRAL
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 text-[13px] font-bold text-[#1A3636]">
              {/* Mega Menu Items (CSS Hover driven) */}
              <div className="group relative py-8">
                <button className="flex items-center gap-1 hover:text-blue-700 transition-colors">
                  Conditions We Treat <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-2xl border border-[#1A3636]/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8 grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-[#1A3636]/50 mb-4 font-bold">Specialties</h4>
                    <ul className="space-y-3 text-[13px] font-medium">
                      <li><Link href="/services" className="hover:text-blue-600">Gastroenterology</Link></li>
                      <li><Link href="/services" className="hover:text-blue-600">General Surgery</Link></li>
                      <li><Link href="/services" className="hover:text-blue-600">Internal Medicine</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-[#1A3636]/50 mb-4 font-bold">Common Procedures</h4>
                    <ul className="space-y-3 text-[13px] font-medium">
                      <li><Link href="/services" className="hover:text-blue-600">Laparoscopy</Link></li>
                      <li><Link href="/services" className="hover:text-blue-600">Endoscopy & Colonoscopy</Link></li>
                      <li><Link href="/services" className="hover:text-blue-600">Minor Theatre Procedures</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link href="/find-a-doctor" className="hover:text-blue-700 transition-colors py-8">Find a Provider</Link>
              <Link href="/locations" className="hover:text-blue-700 transition-colors py-8">Locations & Virtual Care</Link>
              <Link href="/about" className="hover:text-blue-700 transition-colors py-8">Our Clinic</Link>
            </nav>
            
            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link href="/book" className="bg-[#1A3636] text-[#F7EFE5] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all hover:bg-blue-800 hover:shadow-lg shadow-md whitespace-nowrap">
                Book Care
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="bg-[#1A3636] text-[#F7EFE5] pt-20 pb-8 mt-auto rounded-t-[2.5rem]">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Col 1: Brand & Trust */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-black tracking-tight mb-4 text-white">KENYA CENTRAL</h3>
              <p className="text-sm leading-relaxed text-white/70 mb-8 max-w-xs">
                Next-generation healthcare blending clinical excellence with a radically empathetic patient experience.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                  <ShieldCheck size={16} className="text-green-400" /> Secure 256-bit Encryption
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                  <Accessibility size={16} className="text-blue-400" /> WCAG 2.2 AA Compliant
                </div>
              </div>
            </div>
            
            {/* Col 2: Clinical */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">Clinical Care</h4>
              <ul className="space-y-4 text-sm text-white/80 font-medium">
                <li><Link href="/find-a-doctor" className="hover:text-white transition-colors">Find a Doctor</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Conditions & Treatments</Link></li>
                <li><Link href="/locations" className="hover:text-white transition-colors">Locations & Hours</Link></li>
                <li><Link href="/book" className="hover:text-white transition-colors">Schedule Appointment</Link></li>
              </ul>
            </div>

            {/* Col 3: Patients */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">Patients</h4>
              <ul className="space-y-4 text-sm text-white/80 font-medium">
                <li><Link href="/patient-portal" className="hover:text-white transition-colors">Patient Portal</Link></li>
                <li><Link href="/billing" className="hover:text-white transition-colors">Billing & Insurance</Link></li>
                <li><Link href="/medical-records" className="hover:text-white transition-colors">Medical Records</Link></li>
                <li><Link href="/faqs" className="hover:text-white transition-colors">Help Center & FAQs</Link></li>
              </ul>
            </div>

            {/* Col 4: Corporate */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">Corporate</h4>
              <ul className="space-y-4 text-sm text-white/80 font-medium">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

          </div>

          <div className="container mx-auto px-4 md:px-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
            <p>© {new Date().getFullYear()} Kenya Central Clinic. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 font-medium">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Notice of Privacy Practices</Link>
            </div>
          </div>
        </footer>

        {/* Floating Chat Button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#1A3636] text-[#F7EFE5] rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(26,54,54,0.3)] transition-all z-50 group">
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        </button>

      </body>
    </html>
  );
}
