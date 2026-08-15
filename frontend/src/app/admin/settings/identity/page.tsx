export default function IdentitySettingsPage() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Identity Settings</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <form className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Hospital Short Name</label>
              <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="e.g. Aga Khan" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Legal Name</label>
              <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="e.g. Aga Khan University Hospital" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tagline / Mission Statement</label>
            <textarea className="w-full border rounded-md px-3 py-2" rows={3} placeholder="Quality healthcare..."></textarea>
          </div>

          <div className="pt-4 border-t">
            <button type="button" className="bg-black text-white px-4 py-2 rounded-md font-medium">
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
