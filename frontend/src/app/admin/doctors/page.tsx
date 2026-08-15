import Link from "next/link";

// TODO: Replace mock data with fetch from NestJS Backend API
const mockDoctors = [
  { id: "1", name: "Dr. Jane Doe", specialty: "Cardiology", branches: ["Nairobi Main"], isAvailable: true },
  { id: "2", name: "Dr. John Smith", specialty: "General Surgery", branches: ["Nairobi Main", "Westlands"], isAvailable: true },
  { id: "3", name: "Dr. Alice Johnson", specialty: "Paediatrics", branches: ["Westlands"], isAvailable: false },
];

export default function DoctorsAdminPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Doctors</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md font-medium">
          Add New Doctor
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branches</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockDoctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doctor.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.specialty}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.branches.join(", ")}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {doctor.isAvailable ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">On Leave</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                  <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
