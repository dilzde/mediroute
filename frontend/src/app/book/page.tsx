"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, CalendarDays, Clock, User, ArrowRight, Activity, Upload, Building2, UserCircle } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { id: "consultation", name: "Specialist Consultation", category: "Outpatient" },
  { id: "laparoscopy", name: "Laparoscopy & Keyhole Surgery", category: "Surgery" },
  { id: "endoscopy", name: "Endoscopy & Colonoscopy", category: "Diagnostics" },
  { id: "minor-theatre", name: "Minor Theatre Procedure", category: "Procedures" },
];

const CONSULTANTS = [
  { id: "dr-madaraka", name: "Dr. Madaraka Ogoye", title: "Chief Consultant Surgeon", badges: ["KMPDC Board Certified", "Speaks Swahili & English"] }
];

const TIME_SLOTS = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:30 AM", 
  "01:00 PM", "02:30 PM", "04:00 PM"
];

const INSURANCE_PROVIDERS = [
  "Cash / M-Pesa",
  "NHIF / SHIF",
  "Jubilee Insurance",
  "UAP Old Mutual",
  "AAR Insurance",
  "Britam",
  "Madison Insurance",
];

// Helper to generate the next 14 days
const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) dates.push(d);
  }
  return dates;
};

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [dates, setDates] = useState<Date[]>([]);
  
  // Form State
  const [selectedService, setSelectedService] = useState("");
  const [selectedConsultant, setSelectedConsultant] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [insurance, setInsurance] = useState("");
  
  const [patientDetails, setPatientDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: ""
  });

  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setDates(generateDates());
    const today = new Date();
    setBookedSlots({
      [today.toDateString()]: ["09:00 AM", "01:00 PM"]
    });
  }, []);

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      if (selectedDate) {
        const dateStr = selectedDate.toDateString();
        setBookedSlots(prev => ({
          ...prev,
          [dateStr]: [...(prev[dateStr] || []), selectedTime]
        }));
      }
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const isSlotBooked = (date: Date, time: string) => {
    const dateStr = date.toDateString();
    return bookedSlots[dateStr]?.includes(time);
  };

  // SUCCESS SCREEN
  if (isSuccess) {
    return (
      <main className="flex-1 bg-[#F7EFE5] min-h-screen flex items-center justify-center py-20 px-4">
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl max-w-2xl w-full text-center border border-[#1A3636]/5">
          <div className="w-24 h-24 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-black tracking-tight mb-4 text-[#1A3636]">Booking Confirmed</h1>
          <p className="text-[#1A3636]/70 mb-8 leading-relaxed text-lg">
            Thank you, <strong className="text-[#1A3636]">{patientDetails.firstName}</strong>. Your appointment for <strong className="text-[#1A3636]">{SERVICES.find(s => s.id === selectedService)?.name}</strong> is scheduled for <strong className="text-[#1A3636]">{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}</strong>. We've sent a confirmation to your email.
          </p>
          <Link href="/" className="inline-block bg-[#1A3636] text-[#F7EFE5] px-10 py-4 rounded-full font-bold uppercase tracking-wide text-xs hover:bg-teal-900 transition-all shadow-lg shadow-[#1A3636]/20 hover:-translate-y-1">
            Return to Homepage
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-[#F7EFE5] min-h-screen pb-24">
      
      {/* Header */}
      <div className="bg-white border-b border-[#1A3636]/10 pt-16 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-[#1A3636]">Schedule Care</h1>
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {[
              { num: 1, label: "Service" },
              { num: 2, label: "Consultant" },
              { num: 3, label: "Date & Time" },
              { num: 4, label: "Triage" },
              { num: 5, label: "Details" }
            ].map((s, i) => (
              <div key={s.num} className="flex items-center gap-2 shrink-0">
                <div className={`flex items-center gap-2 ${step >= s.num ? 'text-[#1A3636]' : 'text-[#1A3636]/30'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${step >= s.num ? 'bg-[#1A3636] text-white' : 'bg-slate-100'}`}>{s.num}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{s.label}</span>
                </div>
                {i < 4 && <div className={`h-px w-4 md:w-8 ml-2 transition-colors ${step > s.num ? 'bg-[#1A3636]' : 'bg-slate-200'}`}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Form Area */}
          <div className="flex-1 bg-white p-6 md:p-12 rounded-[2.5rem] shadow-xl shadow-[#1A3636]/5 border border-[#1A3636]/5">
            
            {/* STEP 1: SERVICE */}
            {step === 1 && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-2xl font-black tracking-tight mb-8 text-[#1A3636] flex items-center gap-3">
                  <Activity className="text-teal-600" /> What do you need help with?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => { setSelectedService(service.id); setStep(2); }}
                      className={`p-6 rounded-3xl border-2 text-left transition-all duration-300 ${
                        selectedService === service.id 
                          ? 'border-[#1A3636] bg-[#1A3636] text-white shadow-lg' 
                          : 'border-slate-100 bg-white hover:border-[#1A3636]/20 hover:bg-[#F7EFE5]/30'
                      }`}
                    >
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${selectedService === service.id ? 'text-white/70' : 'text-teal-700'}`}>{service.category}</p>
                      <h3 className={`text-lg font-bold ${selectedService === service.id ? 'text-white' : 'text-[#1A3636]'}`}>{service.name}</h3>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: CONSULTANT */}
            {step === 2 && (
              <div className="animate-in fade-in duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black tracking-tight text-[#1A3636] flex items-center gap-3">
                    <UserCircle className="text-teal-600" /> Choose Consultant
                  </h2>
                  <button onClick={() => setStep(1)} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#1A3636]">← Back</button>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {CONSULTANTS.map((consultant) => (
                    <button
                      key={consultant.id}
                      onClick={() => { setSelectedConsultant(consultant.id); setStep(3); }}
                      className={`p-6 rounded-3xl border-2 text-left transition-all duration-300 flex items-center gap-6 ${
                        selectedConsultant === consultant.id 
                          ? 'border-[#1A3636] bg-[#1A3636] text-white shadow-lg' 
                          : 'border-slate-100 bg-white hover:border-[#1A3636]/20 hover:bg-[#F7EFE5]/30'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                         {/* Placeholder for consultant photo */}
                         <div className="w-full h-full bg-slate-300"></div>
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-1 ${selectedConsultant === consultant.id ? 'text-white' : 'text-[#1A3636]'}`}>{consultant.name}</h3>
                        <p className={`text-sm mb-3 ${selectedConsultant === consultant.id ? 'text-white/70' : 'text-[#1A3636]/70'}`}>{consultant.title}</p>
                        <div className="flex flex-wrap gap-2">
                          {consultant.badges.map(badge => (
                            <span key={badge} className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${selectedConsultant === consultant.id ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-700'}`}>
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <div className="animate-in fade-in duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black tracking-tight text-[#1A3636] flex items-center gap-3">
                    <CalendarDays className="text-teal-600" /> When works for you?
                  </h2>
                  <button onClick={() => setStep(2)} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#1A3636]">← Back</button>
                </div>
                
                {/* Horizontal Date Pills */}
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                  {dates.map((date, idx) => {
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    return (
                      <button
                        key={idx}
                        onClick={() => { setSelectedDate(date); setSelectedTime(""); }}
                        className={`flex flex-col items-center justify-center min-w-[90px] h-28 rounded-full border-2 transition-all flex-shrink-0 ${
                          isSelected
                            ? 'border-teal-500 bg-teal-500 text-white shadow-xl shadow-teal-500/20'
                            : 'border-slate-100 bg-white hover:border-teal-200 text-[#1A3636] hover:bg-teal-50'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </span>
                        <span className="text-3xl font-black tracking-tighter">{date.getDate()}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1">
                          {date.toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* Time Pills */}
                {selectedDate && (
                  <div className="mt-10 animate-in fade-in duration-300">
                    <h2 className="text-lg font-black tracking-tight text-[#1A3636] mb-6 flex items-center gap-3">
                      <Clock className="text-teal-600" size={18} /> Select a Time
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {TIME_SLOTS.map((time, idx) => {
                        const booked = isSlotBooked(selectedDate, time);
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={idx}
                            disabled={booked}
                            onClick={() => setSelectedTime(time)}
                            className={`px-6 py-4 rounded-full text-sm font-bold transition-all ${
                              booked 
                                ? 'bg-slate-50 border border-slate-100 text-slate-300 cursor-not-allowed' 
                                : isSelected
                                  ? 'bg-teal-500 border border-teal-500 text-white shadow-lg shadow-teal-500/30 -translate-y-0.5'
                                  : 'bg-white border border-slate-200 text-[#1A3636] hover:border-teal-500 hover:text-teal-700'
                            }`}
                          >
                            {time}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
                  <button 
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep(4)}
                    className="bg-[#1A3636] text-[#F7EFE5] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-teal-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-3 shadow-lg shadow-[#1A3636]/20"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: INSURANCE & TRIAGE */}
            {step === 4 && (
              <div className="animate-in fade-in duration-500">
                 <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black tracking-tight text-[#1A3636] flex items-center gap-3">
                    <Building2 className="text-teal-600" /> Triage & Payment
                  </h2>
                  <button onClick={() => setStep(3)} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#1A3636]">← Back</button>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-[#1A3636] mb-3">Select your payment method or insurance provider</label>
                    <select 
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      className="w-full p-5 rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-slate-50 focus:bg-white text-[#1A3636] font-medium"
                    >
                      <option value="" disabled>Choose provider or payment type...</option>
                      {INSURANCE_PROVIDERS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1A3636] mb-3">Upload Referral Letters or Lab Results (Optional)</label>
                    <div className="border-2 border-dashed border-slate-200 rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-teal-500 transition-colors cursor-pointer group">
                      <div className="w-16 h-16 bg-slate-100 group-hover:bg-teal-50 rounded-full flex items-center justify-center mb-4 transition-colors">
                        <Upload className="text-slate-400 group-hover:text-teal-500" />
                      </div>
                      <p className="font-bold text-[#1A3636] mb-1">Drag and drop your documents here</p>
                      <p className="text-xs text-slate-400">or click to browse from your device</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
                  <button 
                    disabled={!insurance}
                    onClick={() => setStep(5)}
                    className="bg-[#1A3636] text-[#F7EFE5] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-teal-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-3 shadow-lg shadow-[#1A3636]/20"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: PATIENT DETAILS */}
            {step === 5 && (
              <form onSubmit={handleBookAppointment} className="animate-in fade-in duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black tracking-tight text-[#1A3636] flex items-center gap-3">
                    <User className="text-teal-600" /> About You
                  </h2>
                  <button type="button" onClick={() => setStep(4)} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#1A3636]">← Back</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">First Name</label>
                    <input 
                      required
                      type="text" 
                      value={patientDetails.firstName}
                      onChange={e => setPatientDetails({...patientDetails, firstName: e.target.value})}
                      className="w-full p-4 rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-slate-50 focus:bg-white text-[#1A3636] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Last Name</label>
                    <input 
                      required
                      type="text" 
                      value={patientDetails.lastName}
                      onChange={e => setPatientDetails({...patientDetails, lastName: e.target.value})}
                      className="w-full p-4 rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-slate-50 focus:bg-white text-[#1A3636] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={patientDetails.email}
                      onChange={e => setPatientDetails({...patientDetails, email: e.target.value})}
                      className="w-full p-4 rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-slate-50 focus:bg-white text-[#1A3636] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={patientDetails.phone}
                      onChange={e => setPatientDetails({...patientDetails, phone: e.target.value})}
                      className="w-full p-4 rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-slate-50 focus:bg-white text-[#1A3636] font-medium"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Reason for visit (Optional)</label>
                  <textarea 
                    rows={3}
                    value={patientDetails.notes}
                    onChange={e => setPatientDetails({...patientDetails, notes: e.target.value})}
                    className="w-full p-4 rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-slate-50 focus:bg-white text-[#1A3636] font-medium"
                  ></textarea>
                </div>

                <div className="pt-8 border-t border-slate-100 flex justify-end">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-teal-500 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-teal-600 transition-all disabled:opacity-70 flex items-center gap-3 shadow-xl shadow-teal-500/30 hover:-translate-y-1 w-full md:w-auto justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">Confirm Booking <CheckCircle2 size={16} /></span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="w-full lg:w-[340px] flex-shrink-0">
            <div className="bg-[#1A3636] text-[#F7EFE5] p-8 rounded-[2.5rem] shadow-xl sticky top-28">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-8 pb-4 border-b border-white/10">Visit Summary</h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400 mb-1">Service Type</p>
                  <p className="text-lg font-bold text-white">
                    {selectedService ? SERVICES.find(s => s.id === selectedService)?.name : "—"}
                  </p>
                </div>

                {selectedConsultant && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400 mb-1">Consultant</p>
                    <p className="text-sm font-bold text-white">
                      {CONSULTANTS.find(c => c.id === selectedConsultant)?.name}
                    </p>
                  </div>
                )}
                
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400 mb-1">Date & Time</p>
                  <p className="text-sm font-bold text-white">
                    {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : "—"}
                    {selectedTime && <span className="block text-white/70 mt-1">{selectedTime}</span>}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400 mb-1">Coverage / Payment</p>
                  <p className="text-sm font-bold text-white/80">
                    {insurance || "—"}
                  </p>
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                    <p className="text-xs text-white/70 leading-relaxed font-medium">
                      Payment or copays will be collected securely at the time of your visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
