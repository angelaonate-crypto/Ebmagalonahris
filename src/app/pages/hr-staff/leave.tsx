import { useState } from 'react';
import { Search, Filter, CheckCircle, Send, Eye, Calendar } from 'lucide-react';

export default function HRStaffLeave() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null);

  // Mock leave requests
  const leaveRequests = [
    {
      id: 1,
      employeeName: 'Juan Dela Cruz',
      employeeId: 'EMP-2024-001',
      department: 'IT',
      leaveType: 'Vacation Leave',
      startDate: '2026-03-20',
      endDate: '2026-03-22',
      days: 3,
      reason: 'Family vacation',
      status: 'Pending Verification',
      appliedDate: '2026-03-10',
    },
    {
      id: 2,
      employeeName: 'Maria Santos',
      employeeId: 'EMP-2024-002',
      department: 'HR',
      leaveType: 'Sick Leave',
      startDate: '2026-03-15',
      endDate: '2026-03-16',
      days: 2,
      reason: 'Medical checkup',
      status: 'Pending Verification',
      appliedDate: '2026-03-12',
    },
    {
      id: 3,
      employeeName: 'Pedro Reyes',
      employeeId: 'EMP-2023-045',
      department: 'Finance',
      leaveType: 'Emergency Leave',
      startDate: '2026-03-13',
      endDate: '2026-03-13',
      days: 1,
      reason: 'Family emergency',
      status: 'Verified',
      appliedDate: '2026-03-12',
    },
    {
      id: 4,
      employeeName: 'Ana Garcia',
      employeeId: 'EMP-2023-067',
      department: 'IT',
      leaveType: 'Maternity Leave',
      startDate: '2026-04-01',
      endDate: '2026-06-30',
      days: 90,
      reason: 'Maternity',
      status: 'Pending Verification',
      appliedDate: '2026-03-11',
    },
  ];

  const filteredRequests = leaveRequests.filter(request => {
    const matchesSearch = request.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
    const matchesType = filterType === 'all' || request.leaveType === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleVerify = (id: number) => {
    if (confirm('Verify this leave request?')) {
      alert(`Leave request ${id} verified. Ready to forward for approval.`);
    }
  };

  const handleForward = (id: number) => {
    if (confirm('Forward this leave request to Department Head/HR Officer for approval?')) {
      alert(`Leave request ${id} forwarded for approval.`);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending Verification':
        return 'bg-yellow-100 text-yellow-700';
      case 'Verified':
        return 'bg-blue-100 text-blue-700';
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Leave Management</h1>
        <p className="text-gray-600">Verify and process employee leave requests</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
          <p className="text-sm text-gray-600">Pending Requests</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">5</h3>
          <p className="text-sm text-gray-600">Verified Today</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">8</h3>
          <p className="text-sm text-gray-600">On Leave Today</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Send className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">3</h3>
          <p className="text-sm text-gray-600">Forwarded for Approval</p>
        </div>
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100">
        {/* Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by employee name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
              >
                <option value="all">All Leave Types</option>
                <option value="Vacation Leave">Vacation Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Emergency Leave">Emergency Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
              </select>
              
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
              >
                <option value="all">All Status</option>
                <option value="Pending Verification">Pending Verification</option>
                <option value="Verified">Verified</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Leave Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">End Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Days</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Reason</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{request.employeeName}</p>
                      <p className="text-xs text-gray-500">{request.employeeId} • {request.department}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{request.leaveType}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{request.startDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{request.endDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{request.days}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 max-w-xs truncate">{request.reason}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedRequest(request.id)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      {request.status === 'Pending Verification' && (
                        <>
                          <button
                            onClick={() => handleVerify(request.id)}
                            className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                            title="Verify Leave"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      {request.status === 'Verified' && (
                        <button
                          onClick={() => handleForward(request.id)}
                          className="p-1.5 text-purple-600 hover:bg-purple-50 rounded transition-colors"
                          title="Forward for Approval"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing {filteredRequests.length} requests</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 bg-[#C62828] text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>

      {/* Leave Request Details Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Leave Request Details</h2>
            </div>
            
            <div className="p-6">
              {filteredRequests.find(r => r.id === selectedRequest) && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Employee Name</label>
                      <p className="text-base text-gray-900 font-medium">
                        {filteredRequests.find(r => r.id === selectedRequest)?.employeeName}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Employee ID</label>
                      <p className="text-base text-gray-900">
                        {filteredRequests.find(r => r.id === selectedRequest)?.employeeId}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Department</label>
                      <p className="text-base text-gray-900">
                        {filteredRequests.find(r => r.id === selectedRequest)?.department}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Leave Type</label>
                      <p className="text-base text-gray-900">
                        {filteredRequests.find(r => r.id === selectedRequest)?.leaveType}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                      <p className="text-base text-gray-900">
                        {filteredRequests.find(r => r.id === selectedRequest)?.startDate}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">End Date</label>
                      <p className="text-base text-gray-900">
                        {filteredRequests.find(r => r.id === selectedRequest)?.endDate}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Number of Days</label>
                      <p className="text-base text-gray-900">
                        {filteredRequests.find(r => r.id === selectedRequest)?.days} days
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Applied Date</label>
                      <p className="text-base text-gray-900">
                        {filteredRequests.find(r => r.id === selectedRequest)?.appliedDate}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Reason</label>
                    <p className="text-base text-gray-900">
                      {filteredRequests.find(r => r.id === selectedRequest)?.reason}
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Status</label>
                    <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                      getStatusColor(filteredRequests.find(r => r.id === selectedRequest)?.status || '')
                    }`}>
                      {filteredRequests.find(r => r.id === selectedRequest)?.status}
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
