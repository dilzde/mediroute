import Link from "next/link";

const mockDoctors = [
  { id: "samuel-ochieng", name: "Dr. Samuel Ochieng", degrees: "MBChB, MMed (Cardiology)", specialty: "Cardiology", location: "Kenya Central Clinic, Main Branch" },
  { id: "amina-patel", name: "Dr. Amina Patel", degrees: "MBBS, MS (ENT)", specialty: "ENT Surgery", location: "Kenya Central Clinic, Main Branch", languages: "En, Sw" },
  { id: "david-miller", name: "Dr. David Miller", degrees: "MD, PhD (Neurology)", specialty: "Neurology", location: "Kenya Central Clinic, Main Branch" },
];

export default function FindADoctorPage() {
  return (
    <main className="flex-1 bg-[#f7f7f7]">
      
      {/* Dark Sub-header Tabs */}
      <div className="bg-white border-b border-gray-300 w-full">
        <div className="container mx-auto flex">
          <Link href="/find-a-doctor" className="w-full md:w-[250px] bg-black text-white py-6 px-6 flex flex-col items-center justify-center cursor-pointer">
             <span className="text-xl font-bold mb-2">+</span>
             <span className="text-[10px] font-bold uppercase tracking-widest">FIND DOCTOR</span>
          </Link>
          <div className="flex-1 flex justify-around">
            <Link href="/services" className="flex-1 border-r border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">SPECIALTIES</span>
            </Link>
            <Link href="/services" className="flex-1 border-r border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">PROCEDURES</span>
            </Link>
            <Link href="/services" className="flex-1 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">SERVICES</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row">
        
        {/* Sidebar Filter */}
        <aside className="w-full md:w-[250px] bg-[#fcfcfc] border-r border-gray-300 flex-shrink-0">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-3xl font-black tracking-tighter mb-2">Filter</h2>
            <p className="text-xs text-gray-600">Narrow your clinical specialist search.</p>
          </div>

          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-black">SEARCH BY NAME</h3>
              <div className="relative">
                <input type="text" placeholder="Dr. Name..." className="w-full h-10 px-3 border border-gray-300 focus:outline-none focus:border-black text-xs bg-[#fdfdfd]" />
              </div>
            </div>

            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-black">SPECIALTY</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-xs text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded-none text-black focus:ring-black" /> Cardiology
                </label>
                <label className="flex items-center gap-3 text-xs text-gray-900 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 border-gray-300 rounded-none bg-black text-black focus:ring-black" /> ENT (Otolaryngology)
                </label>
                <label className="flex items-center gap-3 text-xs text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded-none text-black focus:ring-black" /> Neurology
                </label>
                <label className="flex items-center gap-3 text-xs text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded-none text-black focus:ring-black" /> Orthopedics
                </label>
              </div>
            </div>



            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-black">CONSULTATION MODE</h3>
              <div className="flex border border-gray-300">
                <Link href="/find-a-doctor" className="flex-1 text-center bg-black text-white text-[10px] font-bold py-2 block">In-Person Only</Link>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-300">
            <Link href="/find-a-doctor" className="w-full text-center block bg-[#111] text-white py-3 text-[10px] font-bold tracking-widest hover:bg-black transition-colors">
              Apply Filters
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-[#f7f7f7]">
          
          <div className="p-8 pb-4 border-b border-gray-300 flex justify-between items-end">
            <div>
              <h1 className="text-5xl font-black tracking-tighter mb-2">Specialists</h1>
              <p className="text-xs text-gray-600">Showing 3 verified medical professionals</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-700 pb-1">
              SORT BY: <select className="bg-transparent border-none outline-none font-bold text-black"><option>Availability (Soonest)</option></select>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {mockDoctors.map((doc, i) => (
              <div key={doc.id} className={`bg-[#fdfdfd] border ${i === 1 ? 'border-black border-2 shadow-sm' : 'border-gray-200'} p-6 flex flex-col relative`}>
                
                {i === 1 && (
                  <div className="absolute top-4 right-4 w-4 h-4 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  </div>
                )}

                <div className="flex gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 flex-shrink-0 relative overflow-hidden border border-gray-300">
                     <img src={`https://images.unsplash.com/${i === 0 ? 'photo-1612349317150-e413f6a5b16d' : i === 1 ? 'photo-1559839734-2b71ea197ec2' : 'photo-1622253692010-333f2da6031d'}?q=80&w=200&auto=format&fit=crop`} alt={doc.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tighter leading-tight mb-1">{doc.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{doc.degrees}</p>
                    <span className="bg-[#eadd7b] text-black text-[9px] font-bold uppercase tracking-widest px-2 py-1 flex items-center gap-1 w-max">
                       <span className="text-[8px]">+</span> KMPDC ACTIVE
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-gray-500 mb-1">SPECIALTY</p>
                    <p className="text-xs font-bold text-black">{doc.specialty}</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-gray-500 mb-1">BRANCH</p>
                    <p className="text-xs font-bold text-black">{doc.location}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  {i === 1 ? (
                    <Link href="/book" className="w-full text-center block bg-black text-white text-[10px] font-bold uppercase py-3 border border-black hover:bg-gray-800 transition-colors">Book Now</Link>
                  ) : (
                    <Link href="/book" className="w-full block text-center bg-white text-black text-[10px] font-bold uppercase py-2.5 border border-black hover:bg-gray-50 transition-colors">
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
