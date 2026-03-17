import { useState } from 'react';
import { Search, Plus, Edit, GraduationCap } from 'lucide-react';

export default function HRStaffTraining() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock training data
  const trainingRecords = [
    {
      id: 1,
      title: 'Advanced Leadership Development Program',
      provider: 'Asian Institute of Management',
      datesConducted: 'March 20-22, 2026',
      hours: 24,
      participants: 15,
      status: 'Scheduled',
    },
    {
      id: 2,
      title: 'Digital Transformation Workshop',
      provider: 'Tech Training Center Philippines',
      datesConducted: 'February 15-16, 2026',
      hours: 16,
      participants: 25,
      status: 'Completed',
    },
    {
      id: 3,
      title: 'HR Analytics and Metrics',
      provider: 'Philippine HR Institute',
      datesConducted: 'January 10-12, 2026',
      hours: 20,
      participants: 12,
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Cybersecurity Awareness Training',
      provider: 'InfoSec Philippines',
      datesConducted: 'April 5-6, 2026',
      hours: 12,
      participants: 50,
      status: 'Scheduled',
    },
  ];

  const filteredRecords = trainingRecords.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || record.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleAddTraining = () => {
    setShowAddModal(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Training Management</h1>
        <p className="text-gray-600">Manage employee training records and schedules</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {trainingRecords.filter(t => t.status === 'Scheduled').length}
          </h3>
          <p className="text-sm text-gray-600">Scheduled Trainings</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {trainingRecords.filter(t => t.status === 'Completed').length}
          </h3>
          <p className="text-sm text-gray-600">Completed Trainings</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {trainingRecords.reduce((sum, t) => sum + t.participants, 0)}
          </h3>
          <p className="text-sm text-gray-600">Total Participants</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {trainingRecords.reduce((sum, t) => sum + t.hours, 0)}
          </h3>
          <p className="text-sm text-gray-600">Total Training Hours</p>
        </div>
      </div>

      {/* Training Records Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100">
        {/* Filters and Actions */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search trainings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
              >
                <option value="all">All Status</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              
              <button
                onClick={handleAddTraining}
                className="flex items-center gap-2 px-4 py-2 bg-[#C62828] text-white rounded-lg text-sm hover:bg-[#B71C1C] transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Training Record
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Training Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Training Provider</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Date Conducted</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Hours</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Participants</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{record.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.provider}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.datesConducted}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.hours} hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.participants}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      title="Edit Record"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing {filteredRecords.length} records</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 bg-[#C62828] text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>

      {/* Add Training Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Add Training Record</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Training Title</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    placeholder="Enter training title"
                  />
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Training Provider</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    placeholder="Enter provider name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dates Conducted</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    placeholder="e.g., March 20-22, 2026"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Hours</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    placeholder="Enter hours"
                  />
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  alert('Training record added successfully!');
                }}
                className="px-4 py-2 bg-[#C62828] text-white rounded-lg text-sm hover:bg-[#B71C1C] transition-colors"
              >
                Add Training
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
