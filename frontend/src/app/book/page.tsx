"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight, UserCircle, Calendar, CreditCard, ChevronLeft } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { id: "consultation", name: "Specialist Consultation" },
  { id: "laparoscopy", name: "Laparoscopy & Keyhole Surgery" },
  { id: "endoscopy", name: "Endoscopy & Colonoscopy" },
  { id: "minor-theatre", name: "Minor Theatre Procedure" },
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
      <main className="flex-1 bg-[#F8F9FA] min-h-screen flex items-center justify-center p-4">
        <div className="bg-[#FFFFFF] p-10 md:p-16 rounded-[16px] shadow-lg max-w-xl w-full text-center border border-[#E6ECE9]">
          <div className="w-20 h-20 bg-[#007A78]/10 text-[#007A78] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-4 text-[#112233]">Booking Confirmed</h1>
          <p className="text-[#112233]/70 mb-10 leading-relaxed text-lg">
            Thank you, <strong className="text-[#112233]">{patientDetails.firstName}</strong>. Your appointment for <strong className="text-[#112233]">{SERVICES.find(s => s.id === selectedService)?.name}</strong> is scheduled for <strong className="text-[#112233]">{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}</strong>.
          </p>
          <Link href="/" className="inline-block bg-[#007A78] text-[#FFFFFF] px-10 py-4 rounded-full font-bold transition-colors hover:bg-teal-700">
            Return to Homepage
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-[#F8F9FA] min-h-screen">
      
      {/* Minimalist Top Nav for Booking only */}
      <div className="w-full bg-[#FFFFFF] border-b border-[#E6ECE9] py-4 px-6 sticky top-0 z-50 flex items-center justify-between">
        <Link href="/" className="text-[#112233] font-bold flex items-center gap-2 hover:text-[#007A78] transition-colors">
          <ChevronLeft size={20} /> Back to main site
        </Link>
        <div className="font-black text-[#112233] tracking-tight">KENYA CENTRAL</div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="bg-[#FFFFFF] p-8 md:p-12 rounded-[16px] shadow-sm border border-[#E6ECE9]">
          
          <div className="mb-10">
            <h1 className="text-3xl font-black tracking-tight text-[#112233]">Schedule your visit</h1>
            <p className="text-[#112233]/60 mt-2 font-medium">Please complete the steps below to secure your appointment.</p>
          </div>
            
          {/* STEP 1: SERVICE & CONSULTANT */}
          {step === 1 && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-xl font-bold text-[#112233] mb-6 border-b border-[#E6ECE9] pb-4">1. Select Service & Provider</h2>
              
              <div className="mb-8">
                <label className="block text-sm font-bold text-[#112233] mb-3">What type of service do you need?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-[12px] border text-left transition-all ${
                        selectedService === service.id 
                          ? 'border-[#007A78] bg-[#007A78]/5' 
                          : 'border-[#E6ECE9] bg-[#FFFFFF] hover:border-[#007A78]/30 hover:bg-[#F8F9FA]'
                      }`}
                    >
                      <h3 className={`font-bold ${selectedService === service.id ? 'text-[#007A78]' : 'text-[#112233]'}`}>{service.name}</h3>
                    </button>
                  ))}
                </div>
              </div>

              {selectedService && (
                <div className="mb-8 animate-in fade-in duration-300">
                  <label className="block text-sm font-bold text-[#112233] mb-3">Choose your consultant</label>
                  <div className="grid grid-cols-1 gap-3">
                    {CONSULTANTS.map((consultant) => (
                      <button
                        key={consultant.id}
                        onClick={() => setSelectedConsultant(consultant.id)}
                        className={`p-4 rounded-[12px] border text-left transition-all flex items-center gap-4 ${
                          selectedConsultant === consultant.id 
                            ? 'border-[#007A78] bg-[#007A78]/5' 
                            : 'border-[#E6ECE9] bg-[#FFFFFF] hover:border-[#007A78]/30 hover:bg-[#F8F9FA]'
                        }`}
                      >
                        <UserCircle size={40} className={selectedConsultant === consultant.id ? "text-[#007A78]" : "text-[#112233]/20"} />
                        <div>
                          <h3 className={`font-bold ${selectedConsultant === consultant.id ? 'text-[#007A78]' : 'text-[#112233]'}`}>{consultant.name}</h3>
                          <p className="text-xs text-[#112233]/60">{consultant.title}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end pt-6">
                <button 
                  disabled={!selectedService || !selectedConsultant}
                  onClick={() => setStep(2)}
                  className="bg-[#007A78] text-[#FFFFFF] px-8 py-3 rounded-full font-bold disabled:opacity-30 flex items-center gap-2 hover:bg-teal-700 transition-colors"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-[#E6ECE9] pb-4 mb-6">
                <h2 className="text-xl font-bold text-[#112233]">2. Date & Time</h2>
                <button onClick={() => setStep(1)} className="text-sm font-bold text-[#007A78]">Edit Service</button>
              </div>
              
              {/* Square Date Buttons */}
              <label className="block text-sm font-bold text-[#112233] mb-3">Select a date</label>
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                {dates.map((date, idx) => {
                  const isSelected = selectedDate?.toDateString() === date.toDateString();
                  return (
                    <button
                      key={idx}
                      onClick={() => { setSelectedDate(date); setSelectedTime(""); }}
                      className={`flex flex-col items-center justify-center min-w-[80px] h-[80px] rounded-[12px] border transition-all flex-shrink-0 ${
                        isSelected
                          ? 'border-[#007A78] bg-[#007A78] text-[#FFFFFF]'
                          : 'border-[#E6ECE9] bg-[#FFFFFF] hover:border-[#007A78]/30 hover:bg-[#F8F9FA] text-[#112233]'
                      }`}
                    >
                      <span className="text-xs font-bold uppercase mb-1 opacity-80">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </span>
                      <span className="text-2xl font-black">{date.getDate()}</span>
                    </button>
                  )
                })}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="mt-8 animate-in fade-in duration-300">
                  <label className="block text-sm font-bold text-[#112233] mb-3">Select a time</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {TIME_SLOTS.map((time, idx) => {
                      const booked = isSlotBooked(selectedDate, time);
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={idx}
                          disabled={booked}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 rounded-[8px] text-sm font-bold transition-all border ${
                            booked 
                              ? 'bg-[#F8F9FA] border-[#E6ECE9] text-[#112233]/20 cursor-not-allowed' 
                              : isSelected
                                ? 'bg-[#007A78] border-[#007A78] text-[#FFFFFF]'
                                : 'bg-[#FFFFFF] border-[#E6ECE9] text-[#112233] hover:border-[#007A78]'
                          }`}
                        >
                          {time}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-10">
                <button onClick={() => setStep(1)} className="text-[#112233]/60 font-bold hover:text-[#112233]">Back</button>
                <button 
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(3)}
                  className="bg-[#007A78] text-[#FFFFFF] px-8 py-3 rounded-full font-bold disabled:opacity-30 flex items-center gap-2 hover:bg-teal-700 transition-colors"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DETAILS */}
          {step === 3 && (
            <form onSubmit={handleBookAppointment} className="animate-in fade-in duration-300">
               <div className="flex items-center justify-between border-b border-[#E6ECE9] pb-4 mb-6">
                <h2 className="text-xl font-bold text-[#112233]">3. Patient Details & Payment</h2>
                <button type="button" onClick={() => setStep(2)} className="text-sm font-bold text-[#007A78]">Edit Date/Time</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-bold text-[#112233] mb-2">First Name</label>
                  <input required type="text" value={patientDetails.firstName} onChange={e => setPatientDetails({...patientDetails, firstName: e.target.value})} className="w-full p-3 rounded-[8px] border border-[#E6ECE9] bg-[#F8F9FA] focus:bg-[#FFFFFF] focus:border-[#007A78] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#112233] mb-2">Last Name</label>
                  <input required type="text" value={patientDetails.lastName} onChange={e => setPatientDetails({...patientDetails, lastName: e.target.value})} className="w-full p-3 rounded-[8px] border border-[#E6ECE9] bg-[#F8F9FA] focus:bg-[#FFFFFF] focus:border-[#007A78] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#112233] mb-2">Phone</label>
                  <input required type="tel" value={patientDetails.phone} onChange={e => setPatientDetails({...patientDetails, phone: e.target.value})} className="w-full p-3 rounded-[8px] border border-[#E6ECE9] bg-[#F8F9FA] focus:bg-[#FFFFFF] focus:border-[#007A78] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#112233] mb-2">Email</label>
                  <input required type="email" value={patientDetails.email} onChange={e => setPatientDetails({...patientDetails, email: e.target.value})} className="w-full p-3 rounded-[8px] border border-[#E6ECE9] bg-[#F8F9FA] focus:bg-[#FFFFFF] focus:border-[#007A78] outline-none transition-colors" />
                </div>
              </div>

              <div className="mb-8 border-t border-[#E6ECE9] pt-8">
                <label className="block text-sm font-bold text-[#112233] mb-3 flex items-center gap-2"><CreditCard size={18}/> Payment / Coverage</label>
                <select 
                  required
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  className="w-full p-4 rounded-[8px] border border-[#E6ECE9] bg-[#F8F9FA] focus:bg-[#FFFFFF] focus:border-[#007A78] outline-none transition-colors font-medium text-[#112233]"
                >
                  <option value="" disabled>Select Payment Method</option>
                  {INSURANCE_PROVIDERS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div className="flex justify-between pt-10">
                <button type="button" onClick={() => setStep(2)} className="text-[#112233]/60 font-bold hover:text-[#112233]">Back</button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#007A78] text-[#FFFFFF] px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors min-w-[200px]"
                >
                  {isSubmitting ? (
                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </main>
  );
}
