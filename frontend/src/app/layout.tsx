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

            {/* Col 4: Contact & Directions */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">Contact & Emergency</h4>
              <ul className="space-y-4 text-sm text-white/80 font-medium mb-6">
                <li className="flex items-start gap-2">
                  <PhoneCall size={16} className="text-red-400 shrink-0 mt-0.5" />
                  <span>
                    Post-Op Emergency: <br/>
                    <a href="tel:0700000000" className="text-white hover:text-red-300">0700 000 000</a> (24/7)
                  </span>
                </li>
                <li>General: info@kenyacentral.co.ke</li>
              </ul>
              
              {/* Maps Placeholder */}
              <div className="w-full h-24 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[#1A3636]/50 group-hover:bg-[#1A3636]/20 transition-colors z-10 flex items-center justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-white">View on Map</span>
                </div>
                {/* Abstract grid for map placeholder */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
              </div>
            </div>

          </div>

          <div className="container mx-auto px-4 md:px-8 border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-white/50 gap-6">
            <div>
              <p className="mb-2">© {new Date().getFullYear()} Kenya Central Clinic. All rights reserved.</p>
              <p className="opacity-70">KMPDC Facility License No: <span className="font-mono text-white/90">KMPDC/2026/00142</span></p>
            </div>
            
            <div className="flex gap-6 font-medium">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Notice of Privacy Practices</Link>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Action */}
        <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 px-6 py-4 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(22,163,74,0.3)] transition-all z-50 group gap-3 font-bold text-sm tracking-wide">
          <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
          Book via WhatsApp
        </a>

      </body>
    </html>
  );
}
