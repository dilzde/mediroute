import Link from "next/link";

export default function BookingPage() {
  return (
    <main className="flex-1 bg-[#fcfcfc] min-h-screen">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-300 py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Appointments</h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Kenya Central Clinic coordinates all patient appointments directly through our specialized clinics and outpatient centres to ensure you receive the most appropriate and timely care. Please contact the relevant department below to schedule your visit.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl py-16 px-4 md:px-8 space-y-12">
        
        {/* Outpatient Centres */}
        <section className="bg-white border border-gray-300 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2">Outpatient Centres</h2>
            <p className="text-xs text-gray-600 mb-8 max-w-2xl">
              For general outpatient services, consultations, and routine checks, please contact the specific branch you wish to visit directly.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="border border-gray-200 p-6 bg-[#fdfdfd] hover:border-black transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Kenya Central Clinic, Main Branch</h3>
                <p className="text-[10px] text-gray-500 mb-4 uppercase">General Outpatient</p>
                <a href="tel:+254703073000" className="text-lg font-black tracking-tight text-black hover:underline block mb-1">+254 703 073 000</a>
                <a href="tel:+254719155496" className="text-lg font-black tracking-tight text-black hover:underline">+254 719 155 496</a>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Clinics */}
        <section className="bg-white border border-gray-300 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#fcfcfc] rounded-bl-[100px] -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2">Specialized Clinics</h2>
            <p className="text-xs text-gray-600 mb-8 max-w-2xl">
              Consultations with our specialists (Cardiology, Neurology, Oncology, etc.) operate strictly on an appointment basis. A doctor's referral may be required for certain specialists.
            </p>

            <div className="border border-gray-200 p-6 bg-[#fdfdfd] flex flex-col md:flex-row items-center justify-between gap-6 hover:border-black transition-colors">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Specialist Booking Desk</h3>
                <p className="text-[10px] text-gray-500 uppercase">Mon-Fri: 8:00 AM - 5:00 PM</p>
              </div>
              <a href="tel:+254703073000" className="bg-black text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-md text-center">
                Call +254 703 073 000
              </a>
            </div>
          </div>
        </section>

        {/* Maternity Services */}
        <section className="bg-[#fcfcfc] border border-gray-300 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#eadd7b] opacity-20 rounded-bl-[100px] -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2">Maternity Bookings</h2>
            <p className="text-xs text-gray-600 mb-8 max-w-2xl">
              Maternity bookings require a specific process to ensure a seamless delivery experience. Please follow the steps below carefully.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Obtain a Booking Form</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">You must obtain a physical maternity booking form directly from your attending obstetrician.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Present to Bookings Office</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Present the completed form to the main hospital Admissions & Bookings desk.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Deposit & Timeline</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">A required deposit must be paid at the time of booking. Maternity bookings should ideally be made <strong className="font-bold text-black">at least two months before</strong> your expected delivery date.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
