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
        <div className="bg-[#ffebeb] text-black py-1.5 text-[10px] uppercase font-bold tracking-widest px-4 md:px-8 border-b border-gray-200">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-red-600 text-lg leading-none mt-1">*</span>
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
              <Link href="/book" className="bg-black text-white px-8 py-3 text-[11px] font-bold uppercase transition-colors hover:bg-gray-800 leading-tight text-center">
                Book<br />Appointment
              </Link>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-[#e5e5e5] text-black pt-16 pb-8 mt-24 border-t border-gray-300">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            
            {/* Col 1 */}
            <div>
              <h3 className="text-2xl font-black tracking-tighter uppercase mb-4 leading-none">KENYA CENTRAL<br />CLINIC</h3>
              <p className="text-[11px] leading-relaxed text-gray-700 max-w-[200px]">
                Delivering world-class healthcare with clinical precision, advanced technology, and compassionate patient care in the heart of Nairobi.
              </p>
              <div className="flex gap-2 mt-6">
                 {/* Social Icons Placeholder */}
                 <div className="w-8 h-8 border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors cursor-pointer">in</div>
                 <div className="w-8 h-8 border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors cursor-pointer">tw</div>
              </div>
            </div>
            
            {/* Col 2 */}
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-6 border-b border-gray-300 pb-2 inline-block">QUICK LINKS</h4>
              <ul className="space-y-3 text-[11px] text-gray-700">
                <li><Link href="/" className="hover:underline hover:text-black transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:underline hover:text-black transition-colors">Clinical Services</Link></li>
                <li><Link href="/find-a-doctor" className="hover:underline hover:text-black transition-colors">Find a Specialist</Link></li>
                <li><Link href="/book" className="hover:underline hover:text-black transition-colors">Book Consultation</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-6 border-b border-gray-300 pb-2 inline-block">PATIENT RESOURCES</h4>
              <ul className="space-y-3 text-[11px] text-gray-700">
                <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
                <li><Link href="/rights" className="hover:underline">Patient Rights & Responsibilities</Link></li>
                <li><Link href="/insurance" className="hover:underline">Insurance Information</Link></li>
                <li><Link href="/visitor" className="hover:underline">Visitor Guidelines</Link></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-6 border-b border-gray-300 pb-2 inline-block">CONTACT INFO</h4>
              <ul className="space-y-4 text-[11px] text-gray-700 mt-4">
                <li className="flex gap-3">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">LOC</span>
                  <span>Upper Hill Medical District,<br />Nairobi Kenya</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">TEL</span>
                  <span>+254 700 000 000</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">EML</span>
                  <span>info@kenyacentralclinic.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="container mx-auto px-4 md:px-8 mt-16 pt-6 border-t border-gray-300 text-[9px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center text-gray-500">
            <p>© {new Date().getFullYear()} KENYA CENTRAL CLINIC. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-black">PRIVACY POLICY</Link>
              <Link href="/terms" className="hover:text-black">TERMS OF SERVICE</Link>
              <Link href="/disclaimer" className="hover:text-black">MEDICAL DISCLAIMER</Link>
            </div>
          </div>
          
          <div className="container mx-auto px-4 md:px-8 mt-6">
            <p className="text-[10px] text-gray-500 italic border border-gray-300 p-4">
              Medical Disclaimer: The information provided on this website is for general informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
