export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Hospital Admin</h2>
        </div>
        <nav className="p-4 space-y-2">
          <a href="/admin/settings/identity" className="block px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md">
            Identity Settings
          </a>
          <a href="/admin/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Services
          </a>
          <a href="/admin/doctors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Doctors
          </a>
          <a href="/admin/conditions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Conditions
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Admin User</span>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
