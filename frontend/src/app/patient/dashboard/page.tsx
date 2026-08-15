import Link from "next/link";

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Patient Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Patient Portal</h2>
        </div>
        <nav className="p-4 space-y-2">
          <Link href="/patient/dashboard" className="block px-4 py-2 text-sm text-blue-700 bg-blue-50 rounded-md font-medium">
            Dashboard
          </Link>
          <Link href="/patient/appointments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            My Appointments
          </Link>
          <Link href="/patient/records" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Medical Records
          </Link>
          <Link href="/patient/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Profile & Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome back, John</h1>
          <div className="flex items-center gap-4">
            <Link href="/book" className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800">
              New Appointment
            </Link>
          </div>
        </header>
        
        <div className="p-8 max-w-5xl mx-auto space-y-8">
          
          {/* Upcoming Appointment Alert */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold uppercase tracking-wide mb-2">Upcoming</span>
              <h3 className="text-lg font-bold text-blue-900">Phone Consultation with Dr. Jane Doe</h3>
              <p className="text-blue-700">Tomorrow at 10:00 AM (EAT)</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                Reschedule
              </button>
              {/* Native tel: link for phone consultation */}
              <a href="tel:+254700000000" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm flex items-center gap-2">
                📞 Call Now
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Recent History */}
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Recent Visits</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-semibold text-gray-900">General Checkup</p>
                    <p className="text-sm text-gray-500">Oct 12, 2023 • In-person</p>
                  </div>
                  <Link href="/patient/appointments/1" className="text-blue-600 text-sm font-medium hover:underline">View details</Link>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">Lab Tests</p>
                    <p className="text-sm text-gray-500">Oct 10, 2023 • Walk-in</p>
                  </div>
                  <Link href="/patient/records" className="text-blue-600 text-sm font-medium hover:underline">View results</Link>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/patient/records/prescriptions" className="p-4 border rounded-lg text-center hover:bg-gray-50 transition-colors">
                  <span className="block text-2xl mb-2">💊</span>
                  <span className="font-medium text-sm text-gray-700">Refill Prescription</span>
                </Link>
                <Link href="/patient/records/lab-results" className="p-4 border rounded-lg text-center hover:bg-gray-50 transition-colors">
                  <span className="block text-2xl mb-2">🔬</span>
                  <span className="font-medium text-sm text-gray-700">Lab Results</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
