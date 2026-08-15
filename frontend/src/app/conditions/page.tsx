import Link from "next/link";

export default function ConditionsPage() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  return (
    <main className="flex-1 bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Conditions We Treat</h1>
        <p className="text-gray-600 max-w-3xl mb-12 text-lg">
          Search our A-Z directory to find information about specific medical conditions, and connect with the right specialists and services for your care.
        </p>

        {/* Search & Filter */}
        <div className="mb-12">
          <input 
            type="text" 
            placeholder="Search for a condition..." 
            className="w-full max-w-xl border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        {/* Alphabet Navigation */}
        <div className="flex flex-wrap gap-2 mb-12">
          {alphabet.map(letter => (
            <a key={letter} href={`#letter-${letter}`} className="w-10 h-10 flex items-center justify-center bg-gray-50 border rounded hover:bg-blue-50 text-blue-900 font-medium">
              {letter}
            </a>
          ))}
        </div>

        {/* Conditions List */}
        <div className="space-y-12">
          
          <div id="letter-A">
            <h2 className="text-2xl font-bold border-b-2 border-blue-900 pb-2 mb-4">A</h2>
            <ul className="grid md:grid-cols-3 gap-4">
              <li><Link href="/conditions/asthma" className="text-blue-600 hover:underline">Asthma</Link></li>
              <li><Link href="/conditions/appendicitis" className="text-blue-600 hover:underline">Appendicitis</Link></li>
              <li><Link href="/conditions/arthritis" className="text-blue-600 hover:underline">Arthritis</Link></li>
            </ul>
          </div>
          
          <div id="letter-D">
            <h2 className="text-2xl font-bold border-b-2 border-blue-900 pb-2 mb-4">D</h2>
            <ul className="grid md:grid-cols-3 gap-4">
              <li><Link href="/conditions/diabetes" className="text-blue-600 hover:underline">Diabetes (Type 1 & 2)</Link></li>
              <li><Link href="/conditions/dermatitis" className="text-blue-600 hover:underline">Dermatitis</Link></li>
            </ul>
          </div>
          
          <div id="letter-H">
            <h2 className="text-2xl font-bold border-b-2 border-blue-900 pb-2 mb-4">H</h2>
            <ul className="grid md:grid-cols-3 gap-4">
              <li><Link href="/conditions/hypertension" className="text-blue-600 hover:underline">Hypertension (High Blood Pressure)</Link></li>
              <li><Link href="/conditions/hernia" className="text-blue-600 hover:underline">Hernia</Link></li>
              <li><Link href="/conditions/heart-failure" className="text-blue-600 hover:underline">Heart Failure</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
