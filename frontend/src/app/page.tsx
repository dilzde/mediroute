import Link from "next/link";
import { Search, MapPin, Video, Stethoscope, ArrowRight, Play, AudioWaveform as Waveform, Activity, CalendarDays, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. The Hero Section (Zero Clutter) */}
      <section className="bg-[#F8F9FA] py-20 lg:py-32 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column (Text) */}
          <div className="flex-1 text-left">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-[#112233] leading-[1.1] mb-8">
              Advanced keyhole surgery and diagnostic care, delivered with absolute precision.
            </h1>
            <p className="text-xl text-[#112233]/70 font-medium max-w-2xl">
              Specialized consultation, endoscopy, and laparoscopy hospital in Nairobi.
            </p>
          </div>
          
          {/* Right Column (Visual) */}
          <div className="flex-1 w-full relative">
            <div className="w-full aspect-[4/3] bg-[#E6ECE9] rounded-[16px] overflow-hidden shadow-2xl relative flex items-center justify-center">
               <span className="text-[#112233]/30 font-bold uppercase tracking-widest text-sm">Consultant Photograph Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 6-Card Service Grid */}
      <section className="bg-[#E6ECE9] py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                icon: <Stethoscope size={20} />,
                title: "Specialist Consultations",
                desc: "In-person & Telehealth consultations for complex gastroenterology needs.",
                link: "/services/consultations"
              },
              {
                icon: <Activity size={20} />,
                title: "Laparoscopy & Keyhole",
                desc: "Advanced minimally invasive surgery for gallbladder and hernia repair.",
                link: "/services/laparoscopy"
              },
              {
                icon: <Search size={20} />,
                title: "Endoscopy & Colonoscopy",
                desc: "Safe, sedated diagnostic screenings with immediate reporting.",
                link: "/services/endoscopy"
              },
              {
                icon: <Activity size={20} />,
                title: "Minor Theatre Procedures",
                desc: "Swift outpatient procedures including lipomas, biopsies, and wound care.",
                link: "/services/minor-theatre"
              },
              {
                icon: <CalendarDays size={20} />,
                title: "Online Booking Hub",
                desc: "Direct access to our consultant calendar to manage your appointments.",
                link: "/book"
              },
              {
                icon: <ShieldCheck size={20} />,
                title: "Insurance & Partners",
                desc: "Seamless billing with NHIF/SHIF, Jubilee, APA, GA, and more.",
                link: "/insurance"
              }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="bg-[#FFFFFF] p-10 rounded-[16px] hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl group flex flex-col h-full">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#007A78] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#112233] mb-4">{service.title}</h3>
                <p className="text-[#112233]/70 font-medium leading-relaxed flex-1">
                  {service.desc}
                </p>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* 3. Quick-Triage & Booking Banner */}
      <section className="bg-[#112233] py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2">
              Need to schedule a procedure or general consultation?
            </h2>
          </div>
          <div className="shrink-0">
            <Link href="/book" className="inline-block bg-[#007A78] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-teal-600 transition-colors hover:shadow-[0_0_30px_rgba(0,122,120,0.5)]">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
