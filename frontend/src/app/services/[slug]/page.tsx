import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Mock data for the template based on slug
  const serviceName = params.slug.replace('-', ' ');
  const title = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);

  return (
    <main className="flex-1 bg-[#F8F9FA] min-h-screen pb-24">
      
      {/* Minimal Header for Inner Pages */}
      <div className="bg-[#FFFFFF] border-b border-[#E6ECE9] py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <Link href="/" className="text-[#007A78] text-sm font-bold flex items-center gap-2 mb-4 hover:underline">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#112233]">{title}</h1>
          <p className="text-lg text-[#112233]/70 font-medium mt-4 max-w-2xl">
            Everything you need to know about your procedure. Read through the steps below to properly prepare and ensure a smooth recovery.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sticky Left Navigation Rail (1/3) */}
          <div className="hidden lg:block w-72 shrink-0 sticky top-28 bg-[#F8F9FA] p-8 rounded-[16px] border border-[#E6ECE9]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#112233]/50 mb-6">Patient Journey</h4>
            <ul className="space-y-4">
              <li>
                <a href="#what-is-it" className="flex items-center gap-3 text-[#007A78] font-bold">
                  Overview
                </a>
              </li>
              <li>
                <a href="#preparation" className="flex items-center gap-3 text-[#112233]/60 font-medium hover:text-[#112233] transition-colors">
                  Preparation Guidelines
                </a>
              </li>
              <li>
                <a href="#during-procedure" className="flex items-center gap-3 text-[#112233]/60 font-medium hover:text-[#112233] transition-colors">
                  The Procedure
                </a>
              </li>
              <li>
                <a href="#recovery" className="flex items-center gap-3 text-[#112233]/60 font-medium hover:text-[#112233] transition-colors">
                  Post-Op Care
                </a>
              </li>
            </ul>
            
            <div className="mt-10 pt-8 border-t border-[#E6ECE9]">
              <Link href="/book" className="w-full inline-flex items-center justify-center gap-2 bg-[#007A78] text-white py-3 px-4 rounded-[8px] font-bold text-sm hover:bg-teal-700 transition-colors">
                Book Procedure <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Content Area (2/3) */}
          <div className="flex-1 bg-[#FFFFFF] p-8 md:p-12 rounded-[16px] border border-[#E6ECE9] space-y-16 shadow-sm">
            
            <section id="what-is-it" className="scroll-mt-32">
              <h2 className="text-3xl font-black tracking-tight text-[#112233] mb-6">Overview</h2>
              <p className="text-lg text-[#112233] leading-relaxed mb-6 font-medium">
                This is a highly precise, minimally invasive medical procedure used to diagnose or treat issues. We utilize state-of-the-art equipment to ensure maximum accuracy and patient comfort. Unlike traditional open procedures, this method significantly reduces recovery time and minimizes scarring.
              </p>
            </section>

            <section id="preparation" className="scroll-mt-32 border-t border-[#E6ECE9] pt-12">
              <h2 className="text-3xl font-black tracking-tight text-[#112233] mb-6">Preparation Guidelines</h2>
              <p className="text-lg text-[#112233]/80 leading-relaxed mb-8">
                Proper preparation is crucial for the safety and success of your procedure. Please read the instructions below carefully.
              </p>
              
              {/* Important Medical Warning Callout */}
              <div className="bg-[#E6ECE9] border-l-4 border-[#007A78] p-6 rounded-r-[8px] mb-8 flex gap-4">
                <AlertTriangle className="text-[#007A78] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#112233] text-lg mb-1">Strict Fasting Required</h4>
                  <p className="text-[#112233]/80 font-medium">
                    Do not eat or drink anything (including water, gum, or mints) <strong>8 hours before</strong> your procedure. Failure to follow this will result in the immediate cancellation of your surgery for your safety.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#112233] mb-1">24 Hours Before</h4>
                  <p className="text-[#112233]/70">Begin a clear liquid diet. Avoid any solid foods, dairy, or red/purple colored liquids.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#112233] mb-1">Medication Review</h4>
                  <p className="text-[#112233]/70">Stop taking blood thinners and certain supplements exactly as directed by your consultant during your pre-op visit.</p>
                </div>
              </div>
            </section>

            <section id="during-procedure" className="scroll-mt-32 border-t border-[#E6ECE9] pt-12">
              <h2 className="text-3xl font-black tracking-tight text-[#112233] mb-6">The Procedure</h2>
              <p className="text-lg text-[#112233]/80 leading-relaxed mb-8">
                Your comfort and safety are our top priorities. You will be cared for by a dedicated team including your lead consultant, an anesthetist, and specialized theatre nurses.
              </p>
              <ul className="space-y-4">
                {[
                  "You will be given a mild sedative or general anesthesia.",
                  "The consultant carefully guides the specialized instruments.",
                  "High-definition monitors display the area in real-time.",
                  "The procedure typically lasts between 30 to 60 minutes."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#112233] font-medium">
                    <CheckCircle2 className="text-[#007A78] shrink-0" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="recovery" className="scroll-mt-32 border-t border-[#E6ECE9] pt-12">
              <h2 className="text-3xl font-black tracking-tight text-[#112233] mb-6">Post-Op Care & Discharge</h2>
              <p className="text-lg text-[#112233]/80 leading-relaxed mb-6">
                Most patients rest in our recovery bay for 1-2 hours and go home the same day. You will need a responsible adult to drive you home due to the lingering effects of sedation.
              </p>
              <div className="bg-[#F8F9FA] p-6 rounded-[8px] border border-[#E6ECE9]">
                <h4 className="font-bold text-[#112233] mb-2">When to call the Emergency Line:</h4>
                <ul className="list-disc list-inside space-y-2 text-[#112233]/70">
                  <li>Severe, unmanageable pain</li>
                  <li>Fever above 38.5°C</li>
                  <li>Excessive bleeding or swelling</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-[#E6ECE9]">
                   <span className="font-bold text-[#112233]">Post-Op Triage Line:</span> <a href="tel:0700000000" className="text-[#007A78] font-bold ml-2">0700 000 000</a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
