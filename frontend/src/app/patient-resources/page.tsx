export default function PatientResourcesPage() {
  return (
    <main className="flex-1 py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Patient Resources</h1>
        
        <div className="space-y-12">
          {/* Insurance */}
          <section className="bg-gray-50 p-8 rounded-2xl border">
            <h2 className="text-2xl font-bold mb-6">Insurance & Payment Info</h2>
            <p className="text-gray-700 mb-6">
              We accept a wide variety of corporate insurance covers, private health insurance, and the national health insurance fund (SHA/NHIF).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border text-center font-semibold text-gray-800 shadow-sm">SHA / NHIF</div>
              <div className="bg-white p-4 rounded-lg border text-center font-semibold text-gray-800 shadow-sm">Jubilee Insurance</div>
              <div className="bg-white p-4 rounded-lg border text-center font-semibold text-gray-800 shadow-sm">Britam</div>
              <div className="bg-white p-4 rounded-lg border text-center font-semibold text-gray-800 shadow-sm">AAR Insurance</div>
              <div className="bg-white p-4 rounded-lg border text-center font-semibold text-gray-800 shadow-sm">UAP Old Mutual</div>
              <div className="bg-white p-4 rounded-lg border text-center font-semibold text-gray-800 shadow-sm">Self-Pay / M-Pesa / Card</div>
            </div>
          </section>

          {/* Forms */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Downloadable Forms</h2>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <span className="font-medium text-gray-900">Pre-Admission Form</span>
                </div>
                <span className="text-blue-600 text-sm font-medium">Download PDF ↓</span>
              </a>
              <a href="#" className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <span className="font-medium text-gray-900">Medical Records Request</span>
                </div>
                <span className="text-blue-600 text-sm font-medium">Download PDF ↓</span>
              </a>
              <a href="#" className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <span className="font-medium text-gray-900">Pre-Op Instructions (Surgical Patients)</span>
                </div>
                <span className="text-blue-600 text-sm font-medium">Download PDF ↓</span>
              </a>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
