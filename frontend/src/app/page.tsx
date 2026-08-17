import Link from "next/link";
import { Search, MapPin, Video, Stethoscope, ArrowRight, Play, AudioWaveform as Waveform, Activity, CalendarDays, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. The Hero Zone: Condition-led & Minimalist */}
      <section className="relative pt-32 pb-40 px-4 md:px-8 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Abstract Background Shapes for softness */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1A3636]/5 blur-3xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#1A3636]/5 blur-3xl"></div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1A3636] max-w-4xl mb-6 leading-[1.1]">
          World-class care, <br className="hidden md:block" /> centered around you.
        </h1>
        <p className="text-lg md:text-xl text-[#1A3636]/70 max-w-2xl mb-12 font-medium">
          Search for conditions, find top-rated specialists, or get immediate care online.
        </p>

        {/* Central Search Bar (Glassmorphism) */}
        <div className="w-full max-w-3xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-teal-100 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-full p-2 pl-6">
            <Search className="text-[#1A3636]/40" size={24} />
            <input 
              type="text" 
              placeholder="Search symptoms, conditions, doctors, or treatments..." 
              className="w-full bg-transparent border-none outline-none px-4 py-4 text-[#1A3636] placeholder:text-[#1A3636]/40 text-lg font-medium"
            />
            <button className="bg-[#1A3636] text-[#F7EFE5] px-8 py-4 rounded-full font-bold transition-all hover:bg-blue-800 flex-shrink-0">
              Find Care
            </button>
          </div>
        </div>

        {/* Quick Links below search */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm font-medium text-[#1A3636]/60">
          <span>Popular:</span>
          <Link href="/services" className="hover:text-[#1A3636] underline underline-offset-4 decoration-[#1A3636]/20 transition-colors">Stomach Pain</Link>
          <Link href="/services" className="hover:text-[#1A3636] underline underline-offset-4 decoration-[#1A3636]/20 transition-colors">Colonoscopy</Link>
          <Link href="/services" className="hover:text-[#1A3636] underline underline-offset-4 decoration-[#1A3636]/20 transition-colors">Endoscopy</Link>
        </div>
      </section>

      {/* 2. Sub-Sections & Value Props (Grid Cards) */}
      <section className="py-24 px-4 md:px-8 bg-white rounded-t-[3rem] -mt-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tile 1 */}
            <Link href="/services/consultations" className="group bg-[#F7EFE5]/50 p-8 rounded-3xl border border-[#1A3636]/5 hover:bg-[#F7EFE5] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1A3636] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1A3636] mb-3">Specialist Consultations</h3>
              <p className="text-[#1A3636]/70 font-medium leading-relaxed mb-8 flex-1">
                In-person & Telehealth consultations for complex gastroenterology and general surgery needs.
              </p>
              <div className="flex items-center text-[#1A3636] font-bold text-sm">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Tile 2 */}
            <Link href="/services/laparoscopy" className="group bg-[#1A3636] p-8 rounded-3xl hover:bg-blue-900 shadow-xl transition-all duration-300 flex flex-col h-full text-[#F7EFE5]">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Laparoscopy & Keyhole</h3>
              <p className="text-white/70 font-medium leading-relaxed mb-8 flex-1">
                Advanced minimally invasive surgery for gallbladder, appendix, and hernia repair.
              </p>
              <div className="flex items-center font-bold text-sm text-white">
                View Procedures <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Tile 3 */}
            <Link href="/services/endoscopy" className="group bg-[#F7EFE5]/50 p-8 rounded-3xl border border-[#1A3636]/5 hover:bg-[#F7EFE5] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1A3636] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1A3636] mb-3">Endoscopy & Colonoscopy</h3>
              <p className="text-[#1A3636]/70 font-medium leading-relaxed mb-8 flex-1">
                Diagnostic and screening procedures for digestive health, performed with maximum comfort.
              </p>
              <div className="flex items-center text-[#1A3636] font-bold text-sm">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Tile 4 */}
            <Link href="/services/minor-theatre" className="group bg-[#F7EFE5]/50 p-8 rounded-3xl border border-[#1A3636]/5 hover:bg-[#F7EFE5] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1A3636] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1A3636] mb-3">Minor Theatre</h3>
              <p className="text-[#1A3636]/70 font-medium leading-relaxed mb-8 flex-1">
                Safe, swift outpatient procedures including lipomas, biopsies, and advanced wound care.
              </p>
              <div className="flex items-center text-[#1A3636] font-bold text-sm">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Tile 5 */}
            <Link href="/book" className="group bg-blue-600 p-8 rounded-3xl hover:bg-blue-700 shadow-xl transition-all duration-300 flex flex-col h-full text-white">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <CalendarDays size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Online Booking Hub</h3>
              <p className="text-white/80 font-medium leading-relaxed mb-8 flex-1">
                Direct access to our consultant calendar. Book, reschedule, and manage your appointments instantly.
              </p>
              <div className="flex items-center font-bold text-sm text-white">
                Schedule Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Tile 6 */}
            <Link href="/insurance" className="group bg-[#F7EFE5]/50 p-8 rounded-3xl border border-[#1A3636]/5 hover:bg-[#F7EFE5] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1A3636] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1A3636] mb-3">Insurance & Partners</h3>
              <p className="text-[#1A3636]/70 font-medium leading-relaxed mb-8 flex-1">
                We partner with NHIF/SHIF, Jubilee, APA, GA, and more to ensure seamless billing.
              </p>
              <div className="flex items-center text-[#1A3636] font-bold text-sm">
                View Accepted Plans <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 3. Trust Markers: Horizontally Scrolling Video Success Stories */}
      <section className="py-24 bg-[#1A3636] text-[#F7EFE5] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Real patients. <br className="hidden md:block"/>Real recovery stories.</h2>
          <p className="text-white/70 text-lg max-w-xl font-medium">
            Hear directly from the people who have experienced our life-changing care.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide">
          
          {/* Video Card 1 */}
          <div className="snap-center shrink-0 w-[85vw] md:w-[600px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
            <div className="h-64 md:h-80 relative bg-[#0f2121] flex items-center justify-center">
              {/* Fake Video Thumbnail Area */}
              <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-blue-900 to-emerald-900 mix-blend-overlay"></div>
              
              {/* Play Button & Audio Wave */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1A3636] transition-all">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
                <div className="flex gap-1 items-end h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                   <div className="w-1 bg-white h-4 rounded-full animate-pulse delay-75"></div>
                   <div className="w-1 bg-white h-8 rounded-full animate-pulse delay-150"></div>
                   <div className="w-1 bg-white h-5 rounded-full animate-pulse delay-300"></div>
                   <div className="w-1 bg-white h-7 rounded-full animate-pulse delay-200"></div>
                   <div className="w-1 bg-white h-3 rounded-full animate-pulse delay-100"></div>
                </div>
              </div>
            </div>
            <div className="p-8 backdrop-blur-xl bg-white/5">
              <h4 className="text-xl font-bold mb-2">"The endoscopy was entirely painless and professional."</h4>
              <p className="text-sm text-white/60 font-medium">Sarah M. • Endoscopy Patient</p>
            </div>
          </div>

          {/* Video Card 2 */}
          <div className="snap-center shrink-0 w-[85vw] md:w-[600px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
            <div className="h-64 md:h-80 relative bg-[#0f2121] flex items-center justify-center">
              <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-teal-900 to-[#1A3636] mix-blend-overlay"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1A3636] transition-all">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
                <div className="flex gap-1 items-end h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                   <div className="w-1 bg-white h-5 rounded-full animate-pulse delay-100"></div>
                   <div className="w-1 bg-white h-4 rounded-full animate-pulse delay-300"></div>
                   <div className="w-1 bg-white h-8 rounded-full animate-pulse delay-75"></div>
                   <div className="w-1 bg-white h-3 rounded-full animate-pulse delay-200"></div>
                   <div className="w-1 bg-white h-6 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
            <div className="p-8 backdrop-blur-xl bg-white/5">
              <h4 className="text-xl font-bold mb-2">"Dr. Ogoye explained my laparoscopy clearly and calmed my nerves."</h4>
              <p className="text-sm text-white/60 font-medium">David K. • Laparoscopy Patient</p>
            </div>
          </div>

          {/* Video Card 3 */}
          <div className="snap-center shrink-0 w-[85vw] md:w-[600px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
            <div className="h-64 md:h-80 relative bg-[#0f2121] flex items-center justify-center">
              <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-[#1A3636] to-emerald-900 mix-blend-overlay"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1A3636] transition-all">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
                <div className="flex gap-1 items-end h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                   <div className="w-1 bg-white h-7 rounded-full animate-pulse delay-300"></div>
                   <div className="w-1 bg-white h-3 rounded-full animate-pulse delay-150"></div>
                   <div className="w-1 bg-white h-6 rounded-full animate-pulse delay-200"></div>
                   <div className="w-1 bg-white h-8 rounded-full animate-pulse delay-75"></div>
                   <div className="w-1 bg-white h-4 rounded-full animate-pulse delay-100"></div>
                </div>
              </div>
            </div>
            <div className="p-8 backdrop-blur-xl bg-white/5">
              <h4 className="text-xl font-bold mb-2">"I was in and out of the minor theatre swiftly with great care."</h4>
              <p className="text-sm text-white/60 font-medium">Grace W. • Minor Surgery Patient</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
