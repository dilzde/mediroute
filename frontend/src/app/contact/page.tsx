export default function ContactPage() {
  return (
    <main className="flex-1 bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Branch Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Our Branches</h2>
            
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-blue-900">Nairobi Main Branch</h3>
                <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">24/7 A&E</span>
              </div>
              <p className="text-gray-600 mb-4">123 Health Avenue, Nairobi</p>
              <div className="space-y-2 text-sm">
                <p><strong>Main Line:</strong> +254 700 000 000</p>
                <p><strong>Emergency:</strong> +254 711 111 111</p>
                <p><strong>Email:</strong> nairobi@hospitalcare.co.ke</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Westlands Clinic</h3>
              <p className="text-gray-600 mb-4">456 Corporate Towers, Westlands, Nairobi</p>
              <div className="space-y-2 text-sm">
                <p><strong>Main Line:</strong> +254 722 222 222</p>
                <p><strong>Hours:</strong> Mon - Sat, 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-xl border shadow-sm h-fit">
            <h2 className="text-2xl font-bold mb-6">Send an Inquiry</h2>
            <p className="text-sm text-gray-500 mb-6">For medical emergencies, please call the emergency line. Do not use this form.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input type="text" className="w-full border rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input type="text" className="w-full border rounded-md px-3 py-2" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="tel" className="w-full border rounded-md px-3 py-2" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Department</label>
                <select className="w-full border rounded-md px-3 py-2 bg-white">
                  <option>General Inquiry</option>
                  <option>Billing & Insurance</option>
                  <option>Patient Records</option>
                  <option>Feedback</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea className="w-full border rounded-md px-3 py-2" rows={4}></textarea>
              </div>
              
              <button type="button" className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
