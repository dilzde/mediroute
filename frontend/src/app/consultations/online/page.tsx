import Link from "next/link";

export default function TelehealthPage() {
  return (
    <main className="flex-1">
      <div className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Online Consultations</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Speak to a specialist from the comfort of your home. We offer secure phone and video consultations across Kenya.
          </p>
          <Link href="/book" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
            Book an Online Consultation
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
            <h3 className="text-xl font-bold mb-3">Book your slot</h3>
            <p className="text-gray-600">Choose a doctor, select 'Phone' or 'Video' consultation, and pick a time that works for you.</p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
            <h3 className="text-xl font-bold mb-3">Get a reminder</h3>
            <p className="text-gray-600">We'll send you an SMS and WhatsApp reminder 30 minutes before your appointment with instructions.</p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
            <h3 className="text-xl font-bold mb-3">Speak to the doctor</h3>
            <p className="text-gray-600">For phone calls, just tap the 'Call Now' button in your patient portal. For video, click the secure meeting link.</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group border-b pb-4">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Can I get a prescription via telehealth?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 pl-2">Yes. If the doctor determines medication is necessary, a digital prescription will be added to your Patient Portal. You can take this to our pharmacy or any registered pharmacy.</p>
            </details>
            
            <details className="group border-b pb-4">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                What if I need physical tests?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 pl-2">If the doctor needs lab tests or a physical exam, they will refer you to visit one of our branches in-person. The initial consultation fee covers the assessment.</p>
            </details>
          </div>
        </div>
      </div>
    </main>
  );
}
