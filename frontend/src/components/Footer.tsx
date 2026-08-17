"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Accessibility, PhoneCall } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // Hide on booking page
  if (pathname === "/book") return null;

  return (
    <footer className="bg-[#112233] text-[#F8F9FA] pt-20 pb-8 mt-auto rounded-t-[2.5rem]">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1: Brand & Trust */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-black tracking-tight mb-4 text-[#F8F9FA]">KENYA CENTRAL</h3>
          <p className="text-sm leading-relaxed text-[#F8F9FA]/70 mb-8 max-w-xs">
            Advanced keyhole surgery and diagnostic care, delivered with absolute precision.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-medium text-[#F8F9FA]/80">
              <ShieldCheck size={16} className="text-[#007A78]" /> Secure 256-bit Encryption
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#F8F9FA]/80">
              <Accessibility size={16} className="text-[#007A78]" /> WCAG 2.2 AA Compliant
            </div>
          </div>
        </div>
        
        {/* Col 2: Clinical */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-[#F8F9FA]/40 mb-6">Clinical Care</h4>
          <ul className="space-y-4 text-sm text-[#F8F9FA]/80 font-medium">
            <li><Link href="/find-a-doctor" className="hover:text-white transition-colors">Find a Doctor</Link></li>
            <li><Link href="/our-services" className="hover:text-white transition-colors">Conditions & Treatments</Link></li>
            <li><Link href="/locations" className="hover:text-white transition-colors">Locations & Hours</Link></li>
            <li><Link href="/book" className="hover:text-white transition-colors">Schedule Appointment</Link></li>
          </ul>
        </div>

        {/* Col 3: Patients */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-[#F8F9FA]/40 mb-6">Patients</h4>
          <ul className="space-y-4 text-sm text-[#F8F9FA]/80 font-medium">
            <li><Link href="/for-patients" className="hover:text-white transition-colors">Patient Portal</Link></li>
            <li><Link href="/billing" className="hover:text-white transition-colors">Billing & Insurance</Link></li>
            <li><Link href="/medical-records" className="hover:text-white transition-colors">Medical Records</Link></li>
            <li><Link href="/faqs" className="hover:text-white transition-colors">Help Center & FAQs</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Directions */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-[#F8F9FA]/40 mb-6">Contact & Emergency</h4>
          <ul className="space-y-4 text-sm text-[#F8F9FA]/80 font-medium mb-6">
            <li className="flex items-start gap-2">
              <PhoneCall size={16} className="text-[#007A78] shrink-0 mt-0.5" />
              <span>
                Post-Op Emergency: <br/>
                <a href="tel:0700000000" className="text-white hover:text-[#007A78] transition-colors">0700 000 000</a> (24/7)
              </span>
            </li>
            <li>General: info@kenyacentral.co.ke</li>
          </ul>
          
          {/* Maps Placeholder */}
          <div className="w-full h-24 bg-[#F8F9FA]/5 rounded-xl border border-[#F8F9FA]/10 flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-[#007A78]/20 group-hover:bg-[#007A78]/40 transition-colors z-10 flex items-center justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-white">View on Map</span>
            </div>
            {/* Abstract grid for map placeholder */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-4 md:px-8 border-t border-[#F8F9FA]/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-[#F8F9FA]/50 gap-6">
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
  );
}
