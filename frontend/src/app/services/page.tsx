"use client";

import Link from "next/link";
import { useState } from "react";

const servicesData = {
  "Consultations": {
    title: "Consultations",
    department: "OUTPATIENT",
    image: "/images/consultations.jpg",
    description: "Expert medical consultations and personalized care plans tailored to your specific health needs.",
    quote: "Our primary goal is to understand your health concerns and provide clear, actionable medical advice.",
    benefits: [
      { title: "Expert Diagnosis", text: "Thorough clinical evaluations by experienced medical professionals." },
      { title: "Personalized Plans", text: "Customized treatment strategies for long-term health." },
      { title: "Follow-up Care", text: "Continuous monitoring and support for chronic conditions." }
    ]
  },
  "Laparoscopy": {
    title: "Laparoscopy",
    department: "SURGERY",
    image: "/images/laparoscopy.jpg",
    description: "Minimally invasive surgical procedures using advanced camera technology for precise diagnosis and treatment.",
    quote: "Laparoscopic surgery offers significantly faster recovery times and minimal scarring compared to traditional methods.",
    benefits: [
      { title: "Minimal Scarring", text: "Small incisions lead to better cosmetic outcomes and less post-operative pain." },
      { title: "Faster Recovery", text: "Return to your daily activities much sooner than with open surgery." },
      { title: "High Precision", text: "Advanced optics provide surgeons with a magnified, high-definition view." }
    ]
  },
  "Endoscopy": {
    title: "Endoscopy & Colonoscopy",
    department: "DIAGNOSTICS",
    image: "/images/endoscopy.jpg",
    description: "Advanced diagnostic imaging and therapeutic procedures of the digestive tract.",
    quote: "Early detection through endoscopic screening is the most effective way to prevent gastrointestinal diseases.",
    benefits: [
      { title: "Accurate Screening", text: "Gold-standard procedures for detecting ulcers, polyps, and early signs of cancer." },
      { title: "Therapeutic Intervention", text: "Simultaneous diagnosis and removal of polyps or treatment of bleeding." },
      { title: "Comfortable Experience", text: "Performed under conscious sedation to ensure maximum patient comfort." }
    ]
  },
  "Minor Theatre": {
    title: "Minor Theatre",
    department: "PROCEDURES",
    image: "/images/minor_theatre.jpg",
    description: "Fully equipped for minor surgical procedures, emergency wound care, and day-case treatments.",
    quote: "Our minor theatre provides a sterile, efficient environment for procedures that don't require full hospital admission.",
    benefits: [
      { title: "Day-Case Procedures", text: "Efficient treatments allowing you to return home the same day." },
      { title: "Wound Management", text: "Expert suturing and care for lacerations and minor trauma." },
      { title: "Excision & Biopsies", text: "Quick and painless removal of skin lesions and diagnostic biopsies." }
    ]
  }
};

type ServiceKey = keyof typeof servicesData;

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceKey>("Consultations");

  const service = servicesData[activeService];

  return (
    <main className="flex-1 bg-slate-50">
      
      {/* Dark Sub-header Tabs */}
      <div className="bg-white border-b border-slate-200 w-full shadow-sm relative z-20">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-[250px] bg-teal-600 text-white py-4 md:py-6 px-4 flex flex-col items-center justify-center">
             <span className="text-[10px] font-bold uppercase tracking-widest text-center">CLINICAL SERVICES</span>
          </div>
          <div className="flex-1 flex justify-around">
            <button onClick={() => setActiveService("Laparoscopy")} className="flex-1 border-r border-slate-200 flex flex-col items-center justify-center p-2 md:p-4 hover:bg-slate-50 cursor-pointer transition-colors text-slate-600 hover:text-teal-700">
               <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">LAPAROSCOPY</span>
            </button>
            <button onClick={() => setActiveService("Endoscopy")} className="flex-1 border-r border-slate-200 flex flex-col items-center justify-center p-2 md:p-4 hover:bg-slate-50 cursor-pointer transition-colors text-slate-600 hover:text-teal-700">
               <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">ENDOSCOPY</span>
            </button>
            <button onClick={() => setActiveService("Minor Theatre")} className="flex-1 flex flex-col items-center justify-center p-2 md:p-4 hover:bg-slate-50 cursor-pointer transition-colors text-slate-600 hover:text-teal-700">
               <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">THEATRE</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row min-h-[calc(100vh-100px)] pt-8 pb-16 px-4 md:px-0">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-[280px] flex-shrink-0 pr-8">
          <div className="p-4 mb-4">
            <h2 className="text-3xl font-black tracking-tighter mb-2 text-slate-800">Services</h2>
            <p className="text-xs text-slate-500">Comprehensive care across all major medical specialties.</p>
          </div>

          <div className="space-y-2">
            {(Object.keys(servicesData) as ServiceKey[]).map((key) => (
              <button 
                key={key}
                onClick={() => setActiveService(key)} 
                className={`w-full text-left block p-4 rounded-xl cursor-pointer group flex justify-between items-center transition-all ${
                  activeService === key ? "bg-teal-50 text-teal-800 shadow-sm border border-teal-100 font-bold" : "hover:bg-white text-slate-600 border border-transparent hover:border-slate-200"
                }`}
              >
                <span className="text-xs uppercase tracking-widest">{key}</span>
                <span className={`font-bold transition-transform ${activeService === key ? "text-teal-600 translate-x-1" : "text-slate-300"}`}>→</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative">
          
          <div className="h-[350px] w-full bg-slate-200 relative overflow-hidden animate-in fade-in duration-500" key={service.title + "-img"}>
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6 md:p-12">
               <span className="bg-teal-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 mb-2 md:mb-4 rounded-full w-max shadow-sm">{service.department}</span>
               <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none">{service.title}</h1>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 animate-in slide-in-from-bottom-4 fade-in duration-500" key={service.title + "-content"}>
            
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-3xl text-slate-700">
              {service.description}
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              
              <div>
                <h2 className="text-2xl font-black tracking-tighter mb-8 uppercase text-slate-800">Key Benefits & Features</h2>
                <div className="space-y-8">
                  
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-black flex-shrink-0 mt-1 shadow-sm">{i + 1}</div>
                      <div>
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-2 text-slate-800">{benefit.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{benefit.text}</p>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
              
              <div className="bg-teal-50 border border-teal-100 rounded-3xl p-6 md:p-12 flex flex-col justify-center shadow-inner relative overflow-hidden">
                <span className="text-6xl text-teal-200/50 absolute top-2 left-4 md:top-4 md:left-6 font-serif">"</span>
                <h3 className="text-lg md:text-xl font-medium tracking-tight leading-relaxed mb-6 md:mb-8 text-teal-900 relative z-10 italic">
                  {service.quote}
                </h3>
                <Link href="/book" className="mt-auto inline-block text-center bg-teal-600 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-teal-700 transition-colors self-start shadow-lg shadow-teal-600/20 hover:shadow-xl hover:-translate-y-0.5">
                  Consult with a Specialist
                </Link>
              </div>
              
            </div>

          </div>
          
        </div>

      </div>
    </main>
  );
}
