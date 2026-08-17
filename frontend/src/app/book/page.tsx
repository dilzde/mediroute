"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Calendar, Clock, User, ArrowRight, Activity, CalendarDays } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { id: "consultation", name: "Consultations", category: "Outpatient" },
  { id: "laparoscopy", name: "Laparoscopy", category: "Surgery" },
  { id: "endoscopy", name: "Endoscopy", category: "Diagnostics" },
  { id: "colonoscopy", name: "Colonoscopy", category: "Diagnostics" },
  { id: "minor-theatre", name: "Minor Theatre", category: "Procedures" },
];

const TIME_SLOTS = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:30 AM", 
  "01:00 PM", "02:30 PM", "04:00 PM"
];

// Helper to generate the next 14 days
const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // Skip Sundays
    if (d.getDay() !== 0) {
      dates.push(d);
    }
  }
  return dates;
};

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [dates, setDates] = useState<Date[]>([]);
  
  // Form State
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  
  const [patientDetails, setPatientDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: ""
  });

  // Mock booked slots in state
  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({});
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setDates(generateDates());
    // Simulate some previously booked slots for realism
    const today = new Date();
    const mockBooked = {
      [today.toDateString()]: ["09:00 AM", "01:00 PM"]
    };
    setBookedSlots(mockBooked);
  }, []);

  const handleNextStep = () => {
    if (step === 1 && selectedService) setStep(2);
    if (step === 2 && selectedDate && selectedTime) setStep(3);
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mark slot as booked locally
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

  if (isSuccess) {
    return (
      <main className="flex-1 bg-slate-50 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl max-w-2xl w-full text-center border border-slate-100">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-4 text-slate-800">Booking Confirmed</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you, {patientDetails.firstName}! Your appointment for <strong className="text-slate-800">{SERVICES.find(s => s.id === selectedService)?.name}</strong> is scheduled for <strong className="text-slate-800">{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}</strong>. We will communicate with you shortly regarding your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setIsSuccess(false);
                setStep(1);
                setSelectedService("");
                setSelectedDate(null);
                setSelectedTime("");
                setPatientDetails({firstName: "", lastName: "", email: "", phone: "", notes: ""});
              }}
              className="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors"
            >
              Book Another
            </button>
            <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Return Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-slate-50 min-h-screen pb-24">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 pt-16 pb-12 px-4 shadow-sm">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-slate-800">Book Appointment</h1>
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-blue-600' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? 'bg-blue-100' : 'bg-slate-100'}`}>1</div>
              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Service</span>
            </div>
            <div className={`h-px w-8 md:w-16 ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
            
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-blue-600' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? 'bg-blue-100' : 'bg-slate-100'}`}>2</div>
              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Date & Time</span>
            </div>
            <div className={`h-px w-8 md:w-16 ${step >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
            
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-blue-600' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? 'bg-blue-100' : 'bg-slate-100'}`}>3</div>
              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Details</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Form Area */}
          <div className="flex-1 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-200">
            
            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black tracking-tighter uppercase mb-6 text-slate-800 flex items-center gap-3">
                  <Activity className="text-blue-600" /> Select a Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => { setSelectedService(service.id); setStep(2); }}
                      className={`p-6 rounded-2xl border-2 text-left transition-all ${
                        selectedService === service.id 
                          ? 'border-blue-600 bg-blue-50 shadow-md shadow-blue-600/10' 
                          : 'border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-2">{service.category}</p>
                      <h3 className="text-lg font-bold text-slate-800">{service.name}</h3>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black tracking-tighter uppercase text-slate-800 flex items-center gap-3">
                    <CalendarDays className="text-blue-600" /> Select Date
                  </h2>
                  <button onClick={() => setStep(1)} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-700">← Back</button>
                </div>
                
                {/* Horizontal Date Scroller */}
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                  {dates.map((date, idx) => {
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    return (
                      <button
                        key={idx}
                        onClick={() => { setSelectedDate(date); setSelectedTime(""); }}
                        className={`flex flex-col items-center justify-center min-w-[80px] h-24 rounded-2xl border-2 transition-all flex-shrink-0 ${
                          isSelected
                            ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                            : 'border-slate-100 bg-white hover:border-slate-300 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </span>
                        <span className="text-2xl font-black">{date.getDate()}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1">
                          {date.toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {selectedDate && (
                  <div className="mt-8 animate-in fade-in duration-300">
                    <h2 className="text-xl font-black tracking-tighter uppercase text-slate-800 mb-6 flex items-center gap-3">
                      <Clock className="text-blue-600" size={20} /> Available Times
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {TIME_SLOTS.map((time, idx) => {
                        const booked = isSlotBooked(selectedDate, time);
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={idx}
                            disabled={booked}
                            onClick={() => setSelectedTime(time)}
                            className={`p-4 rounded-xl border text-sm font-bold transition-all ${
                              booked 
                                ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-60' 
                                : isSelected
                                  ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20'
                                  : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                            }`}
                          >
                            {time}
                            {booked && <span className="block text-[8px] uppercase tracking-widest mt-1">Unavailable</span>}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                  <button 
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep(3)}
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PATIENT DETAILS */}
            {step === 3 && (
              <form onSubmit={handleBookAppointment} className="animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black tracking-tighter uppercase text-slate-800 flex items-center gap-3">
                    <User className="text-blue-600" /> Patient Details
                  </h2>
                  <button type="button" onClick={() => setStep(2)} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-700">← Back</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">First Name</label>
                    <input 
                      required
                      type="text" 
                      value={patientDetails.firstName}
                      onChange={e => setPatientDetails({...patientDetails, firstName: e.target.value})}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Last Name</label>
                    <input 
                      required
                      type="text" 
                      value={patientDetails.lastName}
                      onChange={e => setPatientDetails({...patientDetails, lastName: e.target.value})}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={patientDetails.email}
                      onChange={e => setPatientDetails({...patientDetails, email: e.target.value})}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={patientDetails.phone}
                      onChange={e => setPatientDetails({...patientDetails, phone: e.target.value})}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="+254 700 000000"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Additional Notes (Optional)</label>
                  <textarea 
                    rows={3}
                    value={patientDetails.notes}
                    onChange={e => setPatientDetails({...patientDetails, notes: e.target.value})}
                    className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Any specific symptoms or questions?"
                  ></textarea>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all disabled:opacity-70 flex items-center gap-3 shadow-xl shadow-blue-600/30 hover:-translate-y-1 w-full md:w-auto justify-center"
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
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 sticky top-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-4">Booking Summary</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Service</p>
                  <p className="text-sm font-bold text-slate-800">
                    {selectedService ? SERVICES.find(s => s.id === selectedService)?.name : "Not selected"}
                  </p>
                </div>
                
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Date</p>
                  <p className="text-sm font-bold text-slate-800">
                    {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : "Not selected"}
                  </p>
                </div>
                
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Time</p>
                  <p className="text-sm font-bold text-slate-800">
                    {selectedTime || "Not selected"}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-100">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-[10px] text-blue-800 leading-relaxed font-medium">
                      All appointments are subject to confirmation. Please arrive 15 minutes prior to your scheduled time.
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
