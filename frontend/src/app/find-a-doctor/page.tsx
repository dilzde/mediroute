import Link from "next/link";

const mockDoctors = [
  { id: "samuel-ochieng", name: "Dr. Samuel Ochieng", degrees: "MBChB, MMed (Surgery)", specialty: "Laparoscopy", location: "Kenya Central Clinic, Main Branch" },
  { id: "amina-patel", name: "Dr. Amina Patel", degrees: "MBBS, MS (Gastroenterology)", specialty: "Endoscopy", location: "Kenya Central Clinic, Main Branch", languages: "En, Sw" },
  { id: "david-miller", name: "Dr. David Miller", degrees: "MD (General Practice)", specialty: "Consultations", location: "Kenya Central Clinic, Main Branch" },
];

export default function FindADoctorPage() {
  return (
    <main className="flex-1 bg-slate-50">
      
      {/* Dark Sub-header Tabs */}
      <div className="bg-white border-b border-slate-200 w-full shadow-sm relative z-10">
        <div className="container mx-auto flex">
          <Link href="/find-a-doctor" className="w-full md:w-[280px] bg-teal-600 text-white py-6 px-6 flex flex-col items-center justify-center cursor-pointer">
             <span className="text-xl font-bold mb-2">+</span>
             <span className="text-[10px] font-bold uppercase tracking-widest">FIND DOCTOR</span>
          </Link>
          <div className="flex-1 flex justify-around">
            <Link href="/services" className="flex-1 border-r border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 text-slate-600 hover:text-teal-700 transition-colors">
               <span className="text-[10px] font-bold uppercase tracking-widest">SPECIALTIES</span>
            </Link>
            <Link href="/services" className="flex-1 border-r border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 text-slate-600 hover:text-teal-700 transition-colors">
               <span className="text-[10px] font-bold uppercase tracking-widest">PROCEDURES</span>
            </Link>
            <Link href="/services" className="flex-1 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 text-slate-600 hover:text-teal-700 transition-colors">
               <span className="text-[10px] font-bold uppercase tracking-widest">SERVICES</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row pt-8 pb-16 px-4 md:px-0 gap-8">
        
        {/* Sidebar Filter */}
        <aside className="w-full md:w-[280px] bg-white border border-slate-200 rounded-2xl flex-shrink-0 shadow-sm overflow-hidden h-max">
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <h2 className="text-2xl font-black tracking-tighter mb-2 text-slate-800">Filter</h2>
            <p className="text-xs text-slate-500">Narrow your clinical specialist search.</p>
          </div>

          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-slate-800">SEARCH BY NAME</h3>
              <div className="relative">
                <input type="text" placeholder="Dr. Name..." className="w-full h-10 px-4 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-xs bg-slate-50" />
              </div>
            </div>

            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-slate-800">SPECIALTY</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-xs text-slate-600 cursor-pointer hover:text-teal-700 transition-colors">
                  <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-teal-600 focus:ring-teal-500" /> Laparoscopy
                </label>
                <label className="flex items-center gap-3 text-xs text-slate-900 font-medium cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 border-slate-300 rounded text-teal-600 focus:ring-teal-500" /> Endoscopy
                </label>
                <label className="flex items-center gap-3 text-xs text-slate-600 cursor-pointer hover:text-teal-700 transition-colors">
                  <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-teal-600 focus:ring-teal-500" /> Minor Theatre
                </label>
                <label className="flex items-center gap-3 text-xs text-slate-600 cursor-pointer hover:text-teal-700 transition-colors">
                  <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-teal-600 focus:ring-teal-500" /> Consultations
                </label>
              </div>
            </div>



            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-slate-800">CONSULTATION MODE</h3>
              <div className="flex border border-slate-200 rounded-lg overflow-hidden">
                <Link href="/find-a-doctor" className="flex-1 text-center bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-[10px] font-bold py-2.5 block">In-Person Only</Link>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-slate-200 bg-slate-50">
            <Link href="/find-a-doctor" className="w-full text-center block bg-teal-600 text-white py-3 rounded-full text-[10px] font-bold tracking-widest hover:bg-teal-700 transition-colors shadow-sm">
              Apply Filters
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          
          <div className="p-8 pb-6 border-b border-slate-100 flex justify-between items-end bg-slate-50/50">
            <div>
              <h1 className="text-4xl font-black tracking-tighter mb-2 text-slate-800">Specialists</h1>
              <p className="text-xs text-slate-500">Showing 3 verified medical professionals</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 pb-1">
              SORT BY: <select className="bg-transparent border-none outline-none font-bold text-teal-700 cursor-pointer"><option>Availability (Soonest)</option></select>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {mockDoctors.map((doc, i) => (
              <div key={doc.id} className={`bg-white rounded-2xl border ${i === 1 ? 'ring-2 ring-teal-500 ring-offset-2 border-transparent shadow-md' : 'border-slate-200 shadow-sm'} p-6 flex flex-col relative transition-shadow hover:shadow-md`}>
                
                {i === 1 && (
                  <div className="absolute top-4 right-4 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 mb-6 items-start sm:items-center">
                  <div className="w-20 h-20 rounded-full bg-slate-100 flex-shrink-0 relative overflow-hidden border-2 border-white shadow-md">
                     <img src={`https://images.unsplash.com/${i === 0 ? 'photo-1612349317150-e413f6a5b16d' : i === 1 ? 'photo-1559839734-2b71ea197ec2' : 'photo-1622253692010-333f2da6031d'}?q=80&w=200&auto=format&fit=crop`} alt={doc.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tighter leading-tight mb-1 text-slate-800">{doc.name}</h3>
                    <p className="text-xs text-slate-500 mb-3">{doc.degrees}</p>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1 w-max shadow-sm">
                       <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> KMPDC ACTIVE
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-1">SPECIALTY</p>
                    <p className="text-xs font-bold text-slate-700">{doc.specialty}</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-1">BRANCH</p>
                    <p className="text-xs font-bold text-slate-700">{doc.location}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  {i === 1 ? (
                    <Link href="/book" className="w-full text-center block bg-teal-600 text-white rounded-full text-[10px] font-bold uppercase py-3 border border-transparent hover:bg-teal-700 transition-colors shadow-sm">Book Now</Link>
                  ) : (
                    <Link href="/book" className="w-full block text-center bg-white text-slate-700 rounded-full text-[10px] font-bold uppercase py-2.5 border border-slate-300 hover:bg-slate-50 transition-colors">
                      View Profile & Book
                    </Link>
                  )}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}
