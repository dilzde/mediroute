import Link from "next/link";

export default function EmergencyPage() {
  return (
    <main className="flex-1 bg-red-50 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
          <div className="bg-red-600 p-8 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Medical Emergency?</h1>
            <p className="text-lg text-red-100 mb-8">Our Accident & Emergency department is open 24/7.</p>
            
            <a 
              href="tel:+254711111111" 
              className="inline-block bg-white text-red-600 text-2xl font-bold py-4 px-12 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              Call +254 711 111 111
            </a>
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">When to visit the ER</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Seek emergency care for:
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Chest pain or pressure</li>
                  <li>Difficulty breathing</li>
                  <li>Severe bleeding</li>
                  <li>Sudden weakness or numbness</li>
                  <li>Major trauma or accidents</li>
                  <li>Loss of consciousness</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                  <span>ℹ️</span> Book a regular appointment for:
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Common colds and flu</li>
                  <li>Minor cuts and scrapes</li>
                  <li>Routine health checkups</li>
                  <li>Prescription refills</li>
                  <li>Minor sprains</li>
                </ul>
                <div className="mt-4">
                  <Link href="/book" className="text-blue-600 font-medium hover:underline">
                    Book an appointment →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t">
              <h2 className="text-xl font-bold mb-4">Directions to A&E</h2>
              <p className="text-gray-600 mb-4">Nairobi Main Branch - 123 Health Avenue</p>
              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center border">
                <span className="text-gray-500">[ Google Maps Embed Placeholder ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
