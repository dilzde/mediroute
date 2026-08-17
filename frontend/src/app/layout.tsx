import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hospital Digital Platform",
  description: "Quality healthcare, close to home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f7f7f7] text-black`}>
        
        {/* Top Emergency Bar */}
        <div className="bg-teal-600 text-white py-2 text-[10px] uppercase font-bold tracking-widest px-4 md:px-8 shadow-sm relative z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-white text-lg leading-none mt-1">*</span>
              <span>24/7 ACCIDENT & EMERGENCY, +254 700 000 000</span>
            </div>
            <div className="hidden md:block">
              Accreditation Marks
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 w-full bg-[#fdfdfd] border-b border-gray-200">
          <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
            <Link href="/" className="flex items-center leading-none mr-8">
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9]">
                KENYA CENTRAL<br />CLINIC
              </h1>
            </Link>
            
            <nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-[11px] font-bold text-black leading-tight">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/services" className="hover:underline">Our<br />Services</Link>
              <Link href="/find-a-doctor" className="hover:underline">Specialists</Link>
              <Link href="/about" className="hover:underline">Medical<br />Center</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
            
            <div className="flex items-center gap-6 ml-8">
              <Link href="/book" className="bg-teal-600 text-white px-8 py-3 text-[11px] font-bold uppercase transition-all rounded-full shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:shadow-xl hover:-translate-y-0.5 leading-tight text-center">
                Book<br />Appointment
              </Link>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-24">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            
            {/* Col 1 */}
            <div>
              <h3 className="text-2xl font-black tracking-tighter uppercase mb-4 leading-none text-white">KENYA CENTRAL<br />CLINIC</h3>
              <p className="text-[11px] leading-relaxed max-w-[200px]">
                Delivering world-class healthcare with clinical precision, advanced technology, and compassionate patient care in the heart of Nairobi.
              </p>
              <div className="flex gap-2 mt-6">
                 {/* Social Icons Placeholder */}
                 <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-colors cursor-pointer shadow-sm">in</div>
                 <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-colors cursor-pointer shadow-sm">tw</div>
              </div>
            </div>
            
            {/* Col 2 */}
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-6 border-b border-slate-700 pb-2 inline-block text-white">QUICK LINKS</h4>
              <ul className="space-y-3 text-[11px]">
                <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-teal-400 transition-colors">Clinical Services</Link></li>
                <li><Link href="/find-a-doctor" className="hover:text-teal-400 transition-colors">Find a Specialist</Link></li>
                <li><Link href="/book" className="hover:text-teal-400 transition-colors">Book Consultation</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-6 border-b border-slate-700 pb-2 inline-block text-white">PATIENT RESOURCES</h4>
              <ul className="space-y-3 text-[11px]">
                <li><Link href="/faqs" className="hover:text-teal-400 transition-colors">FAQs</Link></li>
                <li><Link href="/rights" className="hover:text-teal-400 transition-colors">Patient Rights & Responsibilities</Link></li>
                <li><Link href="/insurance" className="hover:text-teal-400 transition-colors">Insurance Information</Link></li>
                <li><Link href="/visitor" className="hover:text-teal-400 transition-colors">Visitor Guidelines</Link></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-6 border-b border-slate-700 pb-2 inline-block text-white">CONTACT INFO</h4>
              <ul className="space-y-4 text-[11px] mt-4">
                <li className="flex gap-3">
                  <span className="text-teal-500 font-bold uppercase tracking-widest text-[9px]">LOC</span>
                  <span>Upper Hill Medical District,<br />Nairobi Kenya</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-500 font-bold uppercase tracking-widest text-[9px]">TEL</span>
                  <span>+254 700 000 000</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-500 font-bold uppercase tracking-widest text-[9px]">EML</span>
                  <span>info@kenyacentralclinic.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="container mx-auto px-4 md:px-8 mt-16 pt-6 border-t border-slate-800 text-[9px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center text-slate-500">
            <p>© {new Date().getFullYear()} KENYA CENTRAL CLINIC. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
              <Link href="/terms" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">MEDICAL DISCLAIMER</Link>
            </div>
          </div>
          
          <div className="container mx-auto px-4 md:px-8 mt-6">
            <p className="text-[10px] text-slate-500 italic border border-slate-800 rounded-xl p-4 bg-slate-950/50">
              Medical Disclaimer: The information provided on this website is for general informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
