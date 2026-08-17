import { CheckCircle2, AlertCircle, Clock, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Mock data for the template based on slug
  const serviceName = params.slug.replace('-', ' ');
  const title = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);

  return (
    <main className="flex-1 bg-[#F7EFE5] min-h-screen pb-24">
      
      {/* Hero Section */}
      <div className="bg-[#1A3636] text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-50">Patient Guide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium mb-8">
              A comprehensive guide to your {title.toLowerCase()} procedure. Learn what to expect, how to prepare, and how we ensure your comfort every step of the way.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/book" className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-teal-400 transition-all shadow-lg hover:-translate-y-1">
                Book Procedure
              </Link>
            </div>
          </div>
          
          {/* Anatomical / Visual Graphic Placeholder */}
          <div className="hidden lg:block w-72 h-72 bg-white/5 rounded-full border border-white/10 flex items-center justify-center relative">
             <div className="absolute inset-4 rounded-full border-2 border-dashed border-white/20 animate-spin-slow"></div>
             <span className="text-white/30 font-bold text-sm uppercase tracking-widest text-center px-8">Advanced 2D<br/>Medical Vector</span>
          </div>
        </div>
      </div>

      {/* Main Content with Sticky Sidebar */}
      <div className="container mx-auto max-w-6xl px-4 -mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sticky Left Navigation Rail */}
          <div className="hidden lg:block w-72 shrink-0 sticky top-28 bg-white p-8 rounded-[2rem] shadow-xl border border-[#1A3636]/5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">In This Guide</h4>
            <ul className="space-y-4">
              <li>
                <a href="#what-is-it" className="flex items-center gap-3 text-[#1A3636] font-bold hover:text-teal-600 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div> What is it?
                </a>
              </li>
              <li>
                <a href="#preparation" className="flex items-center gap-3 text-[#1A3636]/50 font-medium hover:text-[#1A3636] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div> How to Prepare
                </a>
              </li>
              <li>
                <a href="#during-procedure" className="flex items-center gap-3 text-[#1A3636]/50 font-medium hover:text-[#1A3636] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div> During the Procedure
                </a>
              </li>
              <li>
                <a href="#recovery" className="flex items-center gap-3 text-[#1A3636]/50 font-medium hover:text-[#1A3636] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div> Recovery & Discharge
                </a>
              </li>
            </ul>
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <Link href="/book" className="flex items-center justify-between text-[#1A3636] font-bold text-sm group">
                Schedule Now
                <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-[#1A3636]/5 space-y-16">
            
            <section id="what-is-it" className="scroll-mt-32">
              <h2 className="text-3xl font-black tracking-tight text-[#1A3636] mb-6">What is {title}?</h2>
              <p className="text-lg text-[#1A3636]/70 leading-relaxed mb-6">
                This is a minimally invasive medical procedure used to diagnose or treat issues. We utilize state-of-the-art equipment to ensure maximum accuracy and patient comfort. Unlike traditional open procedures, this method significantly reduces recovery time and minimizes scarring.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 flex gap-4">
                <AlertCircle className="text-teal-600 shrink-0" />
                <p className="text-sm text-teal-900 font-medium leading-relaxed">
                  <strong>Did you know?</strong> Our facility performs hundreds of these procedures annually, boasting a complication rate well below the national average.
                </p>
              </div>
            </section>

            <section id="preparation" className="scroll-mt-32 border-t border-slate-100 pt-16">
              <h2 className="text-3xl font-black tracking-tight text-[#1A3636] mb-6">How to Prepare (Fasting Guidelines)</h2>
              <p className="text-lg text-[#1A3636]/70 leading-relaxed mb-8">
                Proper preparation is crucial for the safety and success of your procedure. Please adhere strictly to the following timeline:
              </p>
              
              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A3636] shrink-0 font-black shadow-sm">24h</div>
                  <div>
                    <h4 className="font-bold text-[#1A3636] mb-1">Dietary Changes</h4>
                    <p className="text-sm text-[#1A3636]/70">Begin a clear liquid diet. Avoid any solid foods, dairy, or red/purple colored liquids.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A3636] shrink-0 font-black shadow-sm">12h</div>
                  <div>
                    <h4 className="font-bold text-[#1A3636] mb-1">Medication Review</h4>
                    <p className="text-sm text-[#1A3636]/70">Stop taking blood thinners and certain supplements as directed during your pre-op consultation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 shrink-0 font-black shadow-sm">8h</div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Strict Fasting (Nil by Mouth)</h4>
                    <p className="text-sm text-amber-800">Do not eat or drink anything, including water. This is vital for your safety under anesthesia.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="during-procedure" className="scroll-mt-32 border-t border-slate-100 pt-16">
              <h2 className="text-3xl font-black tracking-tight text-[#1A3636] mb-6">What Happens During?</h2>
              <p className="text-lg text-[#1A3636]/70 leading-relaxed mb-8">
                Your comfort and safety are our top priorities. You will be cared for by a dedicated team including your lead consultant, an anesthetist, and specialized theatre nurses.
              </p>
              <ul className="space-y-4">
                {[
                  "You will be given a mild sedative or general anesthesia.",
                  "The consultant carefully guides the specialized instruments.",
                  "High-definition monitors display the area in real-time.",
                  "The procedure typically lasts between 30 to 60 minutes."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1A3636] font-medium">
                    <CheckCircle2 className="text-teal-500" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="recovery" className="scroll-mt-32 border-t border-slate-100 pt-16">
              <h2 className="text-3xl font-black tracking-tight text-[#1A3636] mb-6">Recovery & Discharge</h2>
              <div className="bg-[#1A3636] text-[#F7EFE5] rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock size={32} className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Same-Day Discharge</h3>
                    <p className="text-white/70 leading-relaxed mb-4">
                      Most patients rest in our recovery bay for 1-2 hours and go home the same day. You will need a responsible adult to drive you home due to the lingering effects of sedation.
                    </p>
                    <a href="tel:0700000000" className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-white transition-colors">
                      Questions about recovery? Call Triage Nurse <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
