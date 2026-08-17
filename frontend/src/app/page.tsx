import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase max-w-4xl mx-auto leading-[0.95] mb-12 text-slate-800">
          GETTING MEDICAL<br />SERVICES HAS<br />NEVER BEEN EASIER
        </h1>
      </section>

      {/* Grid Section */}
      <section className="border-t border-slate-200">
        <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-t-3xl overflow-hidden shadow-xl -mt-8 relative z-10">
          
          {/* Sidebar removed to admin */}

          {/* Image Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 p-6 gap-6 bg-slate-100">
            
            <Link href="/services" className="flex flex-col group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1">
              <div className="h-56 w-full relative overflow-hidden bg-slate-50">
                 <img src="/images/laparoscopy.jpg" alt="Laparoscopy & Surgery" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4" />
              </div>
              <div className="p-6 flex justify-between items-end flex-1">
                <h3 className="text-xl font-black tracking-tighter uppercase leading-none text-slate-800">LAPAROSCOPY<br />& SURGERY</h3>
                <span className="text-blue-600 font-bold bg-blue-50 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">↗</span>
              </div>
            </Link>
            
            <Link href="/services" className="flex flex-col group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1">
              <div className="h-56 w-full relative overflow-hidden bg-slate-50">
                 <img src="/images/endoscopy.jpg" alt="Endoscopy & Colonoscopy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4" />
              </div>
              <div className="p-6 flex justify-between items-end flex-1">
                <h3 className="text-xl font-black tracking-tighter uppercase leading-none text-slate-800">ENDOSCOPY &<br />COLONOSCOPY</h3>
                <span className="text-blue-600 font-bold bg-blue-50 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">↗</span>
              </div>
            </Link>

            <Link href="/services" className="flex flex-col group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1">
              <div className="h-56 w-full relative overflow-hidden bg-slate-50">
                 <img src="/images/minor_theatre.jpg" alt="Minor Theatre" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4" />
              </div>
              <div className="p-6 flex justify-between items-end flex-1">
                <h3 className="text-xl font-black tracking-tighter uppercase leading-none text-slate-800">MINOR<br />THEATRE</h3>
                <span className="text-blue-600 font-bold bg-blue-50 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">↗</span>
              </div>
            </Link>

          </div>
        </div>
      </section>



      {/* Clinical Excellence */}
      <section className="py-24 px-4 md:px-8 container mx-auto bg-slate-50">
        <h2 className="text-4xl font-black tracking-tighter uppercase mb-12 text-slate-800">OUR CLINICAL EXCELLENCE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <Link href="/services" className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 group cursor-pointer transition-all hover:-translate-y-1 flex flex-col items-start relative overflow-hidden">
            <div className="w-full h-40 mb-6 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center p-2">
              <img src="/images/laparoscopy.jpg" alt="Laparoscopy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-800">LAPAROSCOPY</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-8">Minimally invasive surgical procedures using advanced camera technology for precise diagnosis.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-auto text-blue-600 group-hover:text-blue-700 transition-colors">LEARN MORE →</span>
          </Link>

          <Link href="/services" className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 group cursor-pointer transition-all hover:-translate-y-1 flex flex-col items-start relative overflow-hidden">
            <div className="w-full h-40 mb-6 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center p-2">
              <img src="/images/endoscopy.jpg" alt="Endoscopy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-800">ENDOSCOPY</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-8">Advanced diagnostic imaging and therapeutic procedures of the digestive tract.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-auto text-blue-600 group-hover:text-blue-700 transition-colors">LEARN MORE →</span>
          </Link>

          <Link href="/services" className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 group cursor-pointer transition-all hover:-translate-y-1 flex flex-col items-start relative overflow-hidden">
            <div className="w-full h-40 mb-6 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center p-2">
              <img src="/images/minor_theatre.jpg" alt="Minor Theatre" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-800">MINOR THEATRE</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-8">Fully equipped for minor surgical procedures, emergency wound care, and day-case treatments.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-auto text-blue-600 group-hover:text-blue-700 transition-colors">LEARN MORE →</span>
          </Link>

          <Link href="/services" className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 group cursor-pointer transition-all hover:-translate-y-1 flex flex-col items-start relative overflow-hidden">
            <div className="w-full h-40 mb-6 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center p-2">
              <img src="/images/consultations.jpg" alt="Consultations" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-800">CONSULTATIONS</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-8">Expert medical consultations and personalized care plans tailored to your health needs.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-auto text-blue-600 group-hover:text-blue-700 transition-colors">LEARN MORE →</span>
          </Link>

        </div>
      </section>

      {/* Insurance & Partnerships */}
      <section className="py-24 px-4 md:px-8 border-t border-b border-gray-300 bg-[#fcfcfc] text-center">
        <h2 className="text-3xl font-black tracking-tighter uppercase mb-12">INSURANCE & PARTNERSHIPS</h2>
        <div className="flex flex-wrap justify-center gap-12 text-sm font-bold uppercase tracking-widest text-gray-800">
           <span>SHA/NHIF</span>
           <span>JUBILEE</span>
           <span>AAR</span>
           <span>BRITAM</span>
           <span>CIC INSURANCE</span>
        </div>
      </section>

      {/* Quote Block */}
      <section className="bg-black text-white py-32 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-4xl text-gray-600 font-serif block mb-8">"</span>
          <p className="text-3xl md:text-4xl font-medium leading-tight mb-12">
            "The surgical team at Kenya Central Clinic provided world-class care during my laparoscopy. The facilities are pristine, and the recovery protocol was exceptional."
          </p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">JAMES M. — POST-SURGERY PATIENT</p>
        </div>
      </section>

    </main>
  );
}
