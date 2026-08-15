import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100">
            Dedicated to providing world-class healthcare with compassion, dignity, and respect for every patient.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver exceptional, patient-centered healthcare services through continuous innovation, ethical practice, and a commitment to the well-being of the communities we serve across Kenya.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading healthcare provider in the region, recognized for clinical excellence, advanced technology, and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Teaser */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">State-of-the-Art Facilities</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our hospital is equipped with modern diagnostic and surgical technology to ensure accurate diagnosis and effective treatment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-sm text-gray-500">Photo 1</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-sm text-gray-500">Photo 2</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-sm text-gray-500">Photo 3</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-sm text-gray-500">Photo 4</div>
          </div>
          <Link href="/about/facilities" className="text-blue-600 font-bold hover:underline">
            Take a virtual tour →
          </Link>
        </div>
      </section>
    </main>
  );
}
