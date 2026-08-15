import Link from "next/link";

// Using an async component for Next.js 14 dynamic routes if needed, but since it's mock, we'll keep it simple
export default function DoctorProfilePage({ params }: { params: { slug: string } }) {
  // In a real app, fetch doctor by params.slug
  const doctorName = "Dr. " + params.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  return (
    <main className="flex-1 bg-white">
      {/* Profile Header */}
      <div className="bg-blue-900 text-white pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-full flex-shrink-0 border-4 border-white shadow-lg relative -mb-16 md:-mb-24 z-10 overflow-hidden">
             <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-500 text-5xl font-bold">
                {doctorName.charAt(4)}
             </div>
          </div>
          <div className="flex-1 text-center md:text-left pt-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{doctorName}</h1>
            <p className="text-xl text-blue-200 mb-2">Specialist Consultant</p>
            <p className="text-sm text-blue-300">KMPDC Reg: 12345 • 10+ Years Experience</p>
          </div>
          <div className="flex-shrink-0 pt-4">
            <Link href="/book" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors inline-block">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 py-24 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About {doctorName}</h2>
              <div className="prose text-gray-700">
                <p>
                  {doctorName} is a highly experienced specialist dedicated to providing compassionate, evidence-based care. With over a decade of clinical experience in both public and private sectors in Kenya, they bring a wealth of knowledge to complex cases.
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Qualifications</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>MBChB, University of Nairobi</li>
                <li>MMed, Aga Khan University</li>
                <li>Fellowship in advanced clinical procedures</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Conditions Treated</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Hypertension</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Diabetes Management</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Chronic Care</span>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border">
              <h3 className="font-bold mb-4">Consultation Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Available At</p>
                  <p className="text-gray-900">Nairobi Main Branch</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 font-medium">Consultation Types</p>
                  <p className="text-gray-900">In-Person, Video, Phone</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 font-medium">Languages</p>
                  <p className="text-gray-900">English, Kiswahili</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
               <h3 className="font-bold text-blue-900 mb-2">Next Available</h3>
               <p className="text-blue-800 font-medium mb-4">Tomorrow, 10:00 AM</p>
               <Link href="/book" className="block w-full text-center bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                  Secure this slot
               </Link>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
