"use client";

import Link from "next/link";
import { useState } from "react";

const servicesData = {
  "Cardiology": {
    title: "Cardiology",
    department: "DEPARTMENT",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    description: "Advanced diagnostic and interventional heart care using state-of-the-art technology. Our cardiology department is dedicated to the prevention, diagnosis, and treatment of cardiovascular diseases.",
    quote: "We provide comprehensive cardiac care, from routine checkups to complex interventional procedures, ensuring your heart is in the best hands.",
    benefits: [
      { title: "Expert Cardiologists", text: "Our team includes some of the region's most renowned cardiac specialists and surgeons." },
      { title: "Advanced Diagnostics", text: "Equipped with the latest in echocardiography, stress testing, and cardiac catheterization." },
      { title: "Cardiac Rehabilitation", text: "Personalized recovery programs designed to safely strengthen your heart post-procedure." }
    ]
  },
  "General Surgery": {
    title: "General Surgery",
    department: "DEPARTMENT",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    description: "Precision, compassion, and advanced techniques for every surgical journey. Our surgical department is equipped with state-of-the-art technology to perform both minimally invasive and complex traditional open surgeries.",
    quote: "General Surgery involves a wide range of procedures to treat various conditions. Our experienced surgical team performs both minor and major operations using the latest techniques to ensure optimal outcomes and a speedy recovery.",
    benefits: [
      { title: "Experienced Surgeons", text: "Our surgeons are highly skilled and experienced in performing a variety of procedures, ensuring safe and effective treatment with optimal outcomes." },
      { title: "Minimal Invasive Techniques", text: "We use the latest laparoscopic and robotic-assisted techniques, significantly reducing recovery time, scarring, and post-operative discomfort." },
      { title: "Personalized Care", text: "Each patient receives a customized care plan tailored to their unique physiological needs, ensuring the best possible surgical experience and aftercare." }
    ]
  },
  "Oncology": {
    title: "Oncology",
    department: "DEPARTMENT",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
    description: "Multi-disciplinary cancer care, including chemotherapy, radiation, and surgical oncology. We stand by our patients at every stage of their journey.",
    quote: "Fighting cancer requires a dedicated, unified approach. Our multidisciplinary tumor board ensures every patient benefits from a collaborative treatment strategy.",
    benefits: [
      { title: "Comprehensive Treatment", text: "Access to advanced chemotherapy, targeted therapies, and precision radiation oncology." },
      { title: "Supportive Care", text: "Holistic support including nutritional counseling, pain management, and psychological support." },
      { title: "Clinical Trials", text: "Providing eligible patients access to groundbreaking new therapies and clinical research." }
    ]
  },
  "Orthopedics": {
    title: "Orthopedics",
    department: "DEPARTMENT",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1200&auto=format&fit=crop",
    description: "Comprehensive bone, joint, and spine surgery with accelerated rehabilitation protocols to get you moving pain-free.",
    quote: "From sports injuries to complex joint replacements, our orthopedic specialists are committed to restoring your mobility and improving your quality of life.",
    benefits: [
      { title: "Joint Replacement", text: "State-of-the-art knee, hip, and shoulder replacement surgeries with high success rates." },
      { title: "Sports Medicine", text: "Specialized care for athletes, focusing on arthroscopic repairs and rapid recovery." },
      { title: "Spine Surgery", text: "Advanced treatments for spinal disorders, ranging from minimally invasive fusions to disc replacements." }
    ]
  },
  "Maternity": {
    title: "Maternity",
    department: "DEPARTMENT",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    description: "Premium maternity wings and specialized NICU for the safest delivery experience for both mother and child.",
    quote: "Bringing a new life into the world is a profound journey. Our maternity team provides safe, compassionate, and expert care for you and your newborn.",
    benefits: [
      { title: "Luxury Maternity Suites", text: "Comfortable, private rooms designed to provide a serene environment for your recovery and bonding." },
      { title: "Level III NICU", text: "A fully equipped Neonatal Intensive Care Unit ready to support premature or critically ill newborns." },
      { title: "Expert Obstetricians", text: "24/7 access to highly experienced obstetricians, midwives, and lactation consultants." }
    ]
  }
};

type ServiceKey = keyof typeof servicesData;

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceKey>("General Surgery");

  const service = servicesData[activeService];

  return (
    <main className="flex-1 bg-slate-50">
      
      {/* Dark Sub-header Tabs */}
      <div className="bg-white border-b border-slate-200 w-full shadow-sm relative z-20">
        <div className="container mx-auto flex">
          <div className="w-full md:w-[250px] bg-teal-600 text-white py-6 px-6 flex flex-col items-center justify-center">
             <span className="text-[10px] font-bold uppercase tracking-widest">CLINICAL SERVICES</span>
          </div>
          <div className="flex-1 flex justify-around">
            <button onClick={() => setActiveService("General Surgery")} className="flex-1 border-r border-slate-200 flex flex-col items-center justify-center p-4 hover:bg-slate-50 cursor-pointer transition-colors text-slate-600 hover:text-teal-700">
               <span className="text-[10px] font-bold uppercase tracking-widest">DIAGNOSTICS</span>
            </button>
            <button onClick={() => setActiveService("General Surgery")} className="flex-1 border-r border-slate-200 flex flex-col items-center justify-center p-4 hover:bg-slate-50 cursor-pointer transition-colors text-slate-600 hover:text-teal-700">
               <span className="text-[10px] font-bold uppercase tracking-widest">SURGERY</span>
            </button>
            <button onClick={() => setActiveService("Maternity")} className="flex-1 flex flex-col items-center justify-center p-4 hover:bg-slate-50 cursor-pointer transition-colors text-slate-600 hover:text-teal-700">
               <span className="text-[10px] font-bold uppercase tracking-widest">MATERNITY</span>
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
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8 md:p-12">
               <span className="bg-teal-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 mb-4 rounded-full w-max shadow-sm">{service.department}</span>
               <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none">{service.title}</h1>
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
              
              <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 md:p-12 flex flex-col justify-center shadow-inner relative overflow-hidden">
                <span className="text-6xl text-teal-200/50 absolute top-4 left-6 font-serif">"</span>
                <h3 className="text-xl font-medium tracking-tight leading-relaxed mb-8 text-teal-900 relative z-10 italic">
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
