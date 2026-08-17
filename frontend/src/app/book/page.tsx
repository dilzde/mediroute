import Link from "next/link";

export default function BookingPage() {
  return (
    <main className="flex-1 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-16 px-4 md:px-8 shadow-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-slate-800">Appointments</h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Kenya Central Clinic coordinates all patient appointments directly through our specialized clinics and outpatient centres to ensure you receive the most appropriate and timely care. Please contact the relevant department below to schedule your visit.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl py-16 px-4 md:px-8 space-y-12">
        
        {/* Outpatient Centres */}
        {/* Outpatient Centres */}
        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2 text-slate-800">Outpatient Centres</h2>
            <p className="text-xs text-slate-500 mb-8 max-w-2xl">
              For general outpatient services, consultations, and routine checks, please contact the specific branch you wish to visit directly.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50 hover:border-teal-300 transition-colors shadow-sm hover:shadow-md">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-1 text-slate-800">Kenya Central Clinic, Main Branch</h3>
                <p className="text-[10px] text-teal-600 font-bold mb-4 uppercase tracking-widest">General Outpatient</p>
                <a href="tel:+254703073000" className="text-lg font-black tracking-tight text-slate-800 hover:text-teal-600 transition-colors block mb-1">+254 703 073 000</a>
                <a href="tel:+254719155496" className="text-lg font-black tracking-tight text-slate-800 hover:text-teal-600 transition-colors">+254 719 155 496</a>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Clinics */}
        {/* Specialized Clinics */}
        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60 -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2 text-slate-800">Specialized Clinics & Theatre</h2>
            <p className="text-xs text-slate-500 mb-8 max-w-2xl">
              Consultations for specialized procedures (Laparoscopy, Endoscopy, Minor Theatre, etc.) operate strictly on an appointment basis. A prior consultation may be required.
            </p>

            <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-teal-300 transition-colors shadow-sm hover:shadow-md">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-1 text-slate-800">Specialist Booking Desk</h3>
                <p className="text-[10px] text-teal-600 font-bold uppercase tracking-widest">Mon-Fri: 8:00 AM - 5:00 PM</p>
              </div>
              <a href="tel:+254703073000" className="bg-teal-600 text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 text-center hover:-translate-y-0.5">
                Call +254 703 073 000
              </a>
            </div>
          </div>
        </section>

        {/* General Consultations */}
        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-rose-50 rounded-full blur-3xl opacity-60 -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2 text-slate-800">General Consultations</h2>
            <p className="text-xs text-slate-500 mb-8 max-w-2xl">
              Booking a general medical consultation is straightforward. Please follow the steps below to ensure a seamless experience.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-black flex-shrink-0 mt-0.5 shadow-sm">1</div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-1 text-slate-800">Select a Service</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Determine whether you need a general consultation or a specific procedure assessment.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-black flex-shrink-0 mt-0.5 shadow-sm">2</div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-1 text-slate-800">Contact Bookings Office</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Call our direct line to schedule an appointment with the respective specialist.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-black flex-shrink-0 mt-0.5 shadow-sm">3</div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-1 text-slate-800">Attend Consultation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Please arrive <strong className="font-bold text-teal-700">at least 15 minutes before</strong> your scheduled time for triage and registration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
