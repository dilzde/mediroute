"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  // Hide on booking page
  if (pathname === "/book") return null;

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#E6ECE9]">
      <div className="container mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#112233] text-white rounded-xl flex items-center justify-center font-bold text-xl group-hover:bg-[#007A78] transition-colors">
              K
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#112233] leading-none">KENYA CENTRAL</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#112233]/50">Hospital</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/services" className="text-sm font-bold text-[#112233] hover:text-[#007A78] transition-colors">Our Services</Link>
            <Link href="/about" className="text-sm font-bold text-[#112233] hover:text-[#007A78] transition-colors">Find a Doctor</Link>
            <Link href="/patient" className="text-sm font-bold text-[#112233] hover:text-[#007A78] transition-colors">For Patients</Link>
            <Link href="/about" className="text-sm font-bold text-[#112233] hover:text-[#007A78] transition-colors">About Us</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link 
              href="/book" 
              className="bg-[#007A78] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
}
