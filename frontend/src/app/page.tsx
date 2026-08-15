import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#f7f7f7] pt-24 pb-16 text-center border-b border-gray-200">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase max-w-4xl mx-auto leading-[0.95] mb-12">
          GETTING MEDICAL<br />SERVICES HAS<br />NEVER BEEN EASIER
        </h1>
      </section>

      {/* Grid Section */}
      <section className="border-b border-gray-300">
        <div className="flex flex-col md:flex-row">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0 bg-[#f7f7f7] border-r border-gray-300 p-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6">SELECT LOCATION</h3>
            <ul className="space-y-3">
              <Link href="/find-a-doctor" className="block bg-[#eadd7b] p-3 text-xs font-bold border border-gray-300 flex justify-between items-center cursor-pointer">
                <span>Kenya Central Clinic, Main Branch</span>
                <span>✓</span>
              </Link>
            </ul>
          </aside>

          {/* 3 Image Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
            
            <Link href="/services" className="border-r border-gray-300 flex flex-col group cursor-pointer">
              <div className="h-64 bg-gray-200 w-full relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" alt="Laparoscopy & Surgery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="bg-white p-8 flex justify-between items-end border-b border-gray-300 md:border-b-0 flex-1">
                <h3 className="text-2xl font-black tracking-tighter uppercase leading-none group-hover:underline">LAPAROSCOPY<br />& SURGERY</h3>
                <span className="text-xl font-bold">↗</span>
              </div>
            </Link>
            
            <Link href="/services" className="border-r border-gray-300 flex flex-col group cursor-pointer">
              <div className="h-64 bg-gray-200 w-full relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="Accident & Emergency" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="bg-[#fcfcfc] p-8 flex justify-between items-end border-b border-gray-300 md:border-b-0 flex-1">
                <h3 className="text-2xl font-black tracking-tighter uppercase leading-none group-hover:underline">ACCIDENT &<br />EMERGENCY</h3>
                <span className="text-xl font-bold">↗</span>
              </div>
            </Link>

            <Link href="/services" className="flex flex-col group cursor-pointer">
              <div className="h-64 bg-gray-200 w-full relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=800&auto=format&fit=crop" alt="Pediatrics & Wellness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="bg-[#fcfcfc] p-8 flex justify-between items-end flex-1">
                <h3 className="text-2xl font-black tracking-tighter uppercase leading-none group-hover:underline">PEDIATRICS &<br />WELLNESS</h3>
                <span className="text-xl font-bold">↗</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="border-b border-gray-300 grid grid-cols-2 md:grid-cols-4 bg-[#fcfcfc]">
        <div className="p-8 text-center border-r border-b md:border-b-0 border-gray-300 flex flex-col items-center justify-center">
          <span className="text-4xl font-black tracking-tighter mb-2">+150</span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">SPECIALIST DOCTORS</span>
        </div>
        <div className="p-8 text-center border-r border-b md:border-b-0 border-gray-300 flex flex-col items-center justify-center">
          <span className="text-4xl font-black tracking-tighter mb-2">99.4%</span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">LAPAROSCOPY PRECISION</span>
        </div>
        <div className="p-8 text-center border-r border-gray-300 flex flex-col items-center justify-center">
          <span className="text-4xl font-black tracking-tighter mb-2">24/7</span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">TRAUMA RESPONSE</span>
        </div>
        <div className="p-8 text-center bg-[#eadd7b] border-gray-300 flex flex-col items-center justify-center">
          <span className="text-2xl font-black tracking-tighter mb-2">SHA/NHIF</span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-gray-700">ACCREDITED FACILITY</span>
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
      <section className="py-24 px-4 md:px-8 container mx-auto bg-[#fcfcfc]">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black tracking-tighter uppercase">MEET OUR SPECIALISTS</h2>
          <div className="flex gap-2">
             <Link href="/find-a-doctor" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-black">←</Link>
             <Link href="/find-a-doctor" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-black">→</Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="border border-gray-300 bg-white cursor-pointer group flex flex-col">
            <div className="h-72 bg-gray-200 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop" alt="Dr. Madaraka Ogoye" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-black tracking-tighter leading-tight mb-1 group-hover:underline">DR. MADARAKA OGOYE</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">GENERAL SURGEON (MBCHB, MMED)</p>
              <p className="text-[11px] text-gray-600 leading-relaxed mb-6">Renowned for pioneering minimally invasive laparoscopic surgery, reducing recovery times and improving patient outcomes in Kenya.</p>
              <Link href="/book" className="mt-auto block w-full bg-black text-white text-[10px] font-bold uppercase tracking-widest text-center py-3 hover:bg-gray-800 transition-colors">Book Appointment</Link>
            </div>
          </div>
          
          <div className="border border-gray-300 bg-white cursor-pointer group flex flex-col">
            <div className="h-72 bg-gray-200 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop" alt="Dr. Misheck Wanjiku" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-black tracking-tighter leading-tight mb-1 group-hover:underline">DR. MISHECK WANJIKU</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">PEDIATRICIAN (MBCHB, MMED)</p>
              <p className="text-[11px] text-gray-600 leading-relaxed mb-6">Dedicated specialist in early childhood development and pediatric critical care, providing compassionate care to families.</p>
              <Link href="/book" className="mt-auto block w-full bg-black text-white text-[10px] font-bold uppercase tracking-widest text-center py-3 hover:bg-gray-800 transition-colors">Book Appointment</Link>
            </div>
          </div>

          <div className="border border-gray-300 bg-white cursor-pointer group flex flex-col">
            <div className="h-72 bg-gray-200 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop" alt="Dr. David Miller" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-black tracking-tighter leading-tight mb-1 group-hover:underline">DR. DAVID MILLER</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">NEUROLOGIST (MD, PHD)</p>
              <p className="text-[11px] text-gray-600 leading-relaxed mb-6">Renowned researcher and clinician focusing on degenerative neurological conditions and stroke recovery.</p>
              <Link href="/book" className="mt-auto block w-full bg-black text-white text-[10px] font-bold uppercase tracking-widest text-center py-3 hover:bg-gray-800 transition-colors">Book Appointment</Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
