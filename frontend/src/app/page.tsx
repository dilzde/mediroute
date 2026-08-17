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
          
          {/* Sidebar */}
          <aside className="w-full md:w-72 flex-shrink-0 bg-slate-50 border-r border-slate-200 p-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-slate-500">SELECT LOCATION</h3>
            <ul className="space-y-3">
              <Link href="/find-a-doctor" className="block bg-teal-50 p-4 text-xs font-bold border border-teal-200 text-teal-900 rounded-xl flex justify-between items-center cursor-pointer shadow-sm">
                <span>Kenya Central Clinic, Main Branch</span>
                <span className="text-teal-600">✓</span>
              </Link>
            </ul>
          </aside>

          {/* Image Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 p-6 gap-6 bg-slate-100">
            
            <Link href="/services" className="flex flex-col group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1">
              <div className="h-56 w-full relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" alt="Laparoscopy & Surgery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex justify-between items-end flex-1">
                <h3 className="text-xl font-black tracking-tighter uppercase leading-none text-slate-800">LAPAROSCOPY<br />& SURGERY</h3>
                <span className="text-teal-600 font-bold bg-teal-50 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors">↗</span>
              </div>
            </Link>
            
            <Link href="/services" className="flex flex-col group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1">
              <div className="h-56 w-full relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="Accident & Emergency" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex justify-between items-end flex-1">
                <h3 className="text-xl font-black tracking-tighter uppercase leading-none text-slate-800">ACCIDENT &<br />EMERGENCY</h3>
                <span className="text-teal-600 font-bold bg-teal-50 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors">↗</span>
              </div>
            </Link>

            <Link href="/services" className="flex flex-col group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1">
              <div className="h-56 w-full relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=800&auto=format&fit=crop" alt="Pediatrics & Wellness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex justify-between items-end flex-1">
                <h3 className="text-xl font-black tracking-tighter uppercase leading-none text-slate-800">PEDIATRICS &<br />WELLNESS</h3>
                <span className="text-teal-600 font-bold bg-teal-50 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors">↗</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Advanced Medical Excellence Section */}
      <section className="bg-slate-900 text-white py-24 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start justify-between">
          <div className="max-w-2xl mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-white">Advanced Medical Excellence</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              We combine state-of-the-art medical technology with compassionate care to deliver unparalleled outcomes for our patients across all major specialties.
            </p>
            <Link href="/about" className="inline-block bg-teal-600 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-teal-500 transition-colors shadow-lg shadow-teal-600/20">
              Discover Our Facility
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
            <div>
              <span className="block text-5xl font-black tracking-tighter text-teal-400 mb-2">24/7</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Emergency Care</span>
            </div>
            <div>
              <span className="block text-5xl font-black tracking-tighter text-teal-400 mb-2">150+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Excellence */}
      <section className="py-24 px-4 md:px-8 container mx-auto bg-[#fcfcfc]">
        <h2 className="text-4xl font-black tracking-tighter uppercase mb-12">OUR CLINICAL EXCELLENCE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-300">
          
          <Link href="/services" className="p-8 border-b md:border-b-0 md:border-r border-gray-300 bg-white group cursor-pointer hover:bg-gray-50 transition-colors flex flex-col items-start relative overflow-hidden">
            <div className="w-full h-32 mb-6 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop" alt="Cardiology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">CARDIOLOGY</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-8">Advanced diagnostic and interventional heart care using state-of-the-art technology.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-auto group-hover:underline text-black">LEARN MORE →</span>
          </Link>

          <Link href="/services" className="p-8 border-b md:border-b-0 md:border-r border-gray-300 bg-white group cursor-pointer hover:bg-gray-50 transition-colors flex flex-col items-start relative overflow-hidden">
            <div className="w-full h-32 mb-6 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=400&auto=format&fit=crop" alt="Orthopedics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">ORTHOPEDICS</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-8">Comprehensive bone, joint, and spine surgery with accelerated rehabilitation protocols.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-auto group-hover:underline text-black">LEARN MORE →</span>
          </Link>

          <Link href="/services" className="p-8 border-b md:border-b-0 md:border-r border-gray-300 bg-white group cursor-pointer hover:bg-gray-50 transition-colors flex flex-col items-start relative overflow-hidden">
            <div className="w-full h-32 mb-6 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=400&auto=format&fit=crop" alt="Oncology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">ONCOLOGY</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-8">Multi-disciplinary cancer care, including chemotherapy, radiation, and surgical oncology.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-auto group-hover:underline text-black">LEARN MORE →</span>
          </Link>

          <Link href="/services" className="p-8 bg-white group cursor-pointer hover:bg-gray-50 transition-colors flex flex-col items-start relative overflow-hidden">
            <div className="w-full h-32 mb-6 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=400&auto=format&fit=crop" alt="Maternity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">MATERNITY</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-8">Premium maternity wings and specialized NICU for the safest delivery experience.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-auto group-hover:underline text-black">LEARN MORE →</span>
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

      {/* Meet Our Specialists (Carousel) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-800">MEET OUR SPECIALISTS</h2>
            <div className="flex gap-2">
               <Link href="/find-a-doctor" className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-slate-600 bg-transparent">←</Link>
               <Link href="/find-a-doctor" className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-slate-600 bg-transparent">→</Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="h-80 w-full relative overflow-hidden bg-slate-100">
                 <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" alt="Dr. Madaraka Ogoye" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-1 text-slate-800">DR. MADARAKA OGOYE</h3>
                <p className="text-xs text-teal-600 font-bold uppercase tracking-widest mb-4">Chief Surgeon</p>
                <div className="w-full h-px bg-slate-200 mb-4"></div>
                <Link href="/find-a-doctor" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-teal-600 transition-colors">View Profile →</Link>
              </div>
            </div>

            <div className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="h-80 w-full relative overflow-hidden bg-slate-100">
                 <img src="https://images.unsplash.com/photo-1594824436951-7f12bc4175de?q=80&w=800&auto=format&fit=crop" alt="Dr. Misheck Wanjiku" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-1 text-slate-800">DR. MISHECK WANJIKU</h3>
                <p className="text-xs text-teal-600 font-bold uppercase tracking-widest mb-4">Head of Cardiology</p>
                <div className="w-full h-px bg-slate-200 mb-4"></div>
                <Link href="/find-a-doctor" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-teal-600 transition-colors">View Profile →</Link>
              </div>
            </div>

            <div className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="h-80 w-full relative overflow-hidden bg-slate-100">
                 <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" alt="Dr. Sarah Jenkins" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-1 text-slate-800">DR. SARAH JENKINS</h3>
                <p className="text-xs text-teal-600 font-bold uppercase tracking-widest mb-4">Pediatric Specialist</p>
                <div className="w-full h-px bg-slate-200 mb-4"></div>
                <Link href="/find-a-doctor" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-teal-600 transition-colors">View Profile →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
