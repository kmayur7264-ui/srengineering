function AdminDashboard() {
  const [inquiries, setInquiries] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedInquiry, setSelectedInquiry] = React.useState(null);

  React.useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    try {
      const result = await trickleListObjects('inquiry', 100, true);
      setInquiries(result.items);
    } catch (error) {
      console.error('Error loading inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateInquiry = async (objectId, updates) => {
    try {
      await trickleUpdateObject('inquiry', objectId, updates);
      await loadInquiries();
      setSelectedInquiry(null);
    } catch (error) {
      console.error('Error updating inquiry:', error);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
      'Contacted': 'bg-purple-100 text-purple-800',
      'Quoted': 'bg-green-100 text-green-800',
      'Closed': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading inquiries...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Inquiry Management</h1>
            <a href="index.html" className="text-[var(--primary-color)]">
              Back to Website
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inquiries.map(inquiry => (
                <tr key={inquiry.objectId}>
                  <td className="px-6 py-4">{inquiry.objectData.Name}</td>
                  <td className="px-6 py-4">{inquiry.objectData.Company || '-'}</td>
                  <td className="px-6 py-4">{inquiry.objectData.Email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded ${getStatusColor(inquiry.objectData.Status)}`}>
                      {inquiry.objectData.Status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedInquiry(inquiry)}
                      className="text-[var(--primary-color)] hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedInquiry && (
          <InquiryModal
            inquiry={selectedInquiry}
            onClose={() => setSelectedInquiry(null)}
            onUpdate={updateInquiry}
          />
        )}
      </main>
    </div>
  );
}

function InquiryModal({ inquiry, onClose, onUpdate }) {
  const [status, setStatus] = React.useState(inquiry.objectData.Status);
  const [notes, setNotes] = React.useState(inquiry.objectData.Notes || '');

  const handleSave = () => {
    onUpdate(inquiry.objectId, { Status: status, Notes: notes });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Inquiry Details</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <div className="icon-x text-2xl"></div>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="font-semibold">Name:</label>
              <p>{inquiry.objectData.Name}</p>
            </div>
            <div>
              <label className="font-semibold">Email:</label>
              <p>{inquiry.objectData.Email}</p>
            </div>
            <div>
              <label className="font-semibold">Phone:</label>
              <p>{inquiry.objectData.Phone || '-'}</p>
            </div>
            <div>
              <label className="font-semibold">Company:</label>
              <p>{inquiry.objectData.Company || '-'}</p>
            </div>
            <div>
              <label className="font-semibold">Message:</label>
              <p className="whitespace-pre-wrap">{inquiry.objectData.Message}</p>
            </div>
            <div>
              <label className="font-semibold block mb-2">Status:</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option>New</option>
                <option>In Progress</option>
                <option>Contacted</option>
                <option>Quoted</option>
                <option>Closed</option>
              </select>
            </div>
            <div>
              <label className="font-semibold block mb-2">Notes:</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border rounded px-3 py-2"
                rows="4"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={handleSave} className="px-6 py-2 bg-[var(--primary-color)] text-white rounded">
              Save Changes
            </button>
            <button onClick={onClose} className="px-6 py-2 border rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AdminDashboard />);