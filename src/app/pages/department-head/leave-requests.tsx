import { Calendar, Search, Check, X, Clock, Filter } from 'lucide-react';
import { useState } from 'react';

export default function LeaveRequests() {
  const [filter, setFilter] = useState('pending');
  const [searchQuery, setSearchQuery] = useState('');

  const leaveRequests = [
    {
      id: 1,
      employee: 'Juan Dela Cruz',
      employeeId: 'EMP-001',
      leaveType: 'Vacation Leave',
      startDate: '2026-03-15',
      endDate: '2026-03-19',
      days: 5,
      reason: 'Family vacation',
      status: 'Pending',
      dateSubmitted: '2026-03-05'
    },
    {
      id: 2,
      employee: 'Maria Garcia',
      employeeId: 'EMP-002',
      leaveType: 'Sick Leave',
      startDate: '2026-03-12',
      endDate: '2026-03-13',
      days: 2,
      reason: 'Medical checkup',
      status: 'Pending',
      dateSubmitted: '2026-03-10'
    },
    {
      id: 3,
      employee: 'Pedro Santos',
      employeeId: 'EMP-003',
      leaveType: 'Emergency Leave',
      startDate: '2026-03-14',
      endDate: '2026-03-14',
      days: 1,
      reason: 'Family emergency',
      status: 'Pending',
      dateSubmitted: '2026-03-11'
    },
    {
      id: 4,
      employee: 'Ana Reyes',
      employeeId: 'EMP-004',
      leaveType: 'Vacation Leave',
      startDate: '2026-03-01',
      endDate: '2026-03-03',
      days: 3,
      reason: 'Personal matters',
      status: 'Approved',
      dateSubmitted: '2026-02-20',
      approvedDate: '2026-02-22'
    },
    {
      id: 5,
      employee: 'Roberto Cruz',
      employeeId: 'EMP-005',
      leaveType: 'Sick Leave',
      startDate: '2026-02-25',
      endDate: '2026-02-26',
      days: 2,
      reason: 'Flu symptoms',
      status: 'Rejected',
      dateSubmitted: '2026-02-24',
      rejectedDate: '2026-02-25',
      rejectionReason: 'Critical project deadline'
    },
  ];

  const filteredRequests = leaveRequests.filter(req => {
    const matchesStatus = filter === 'all' || req.status.toLowerCase() === filter;
    const matchesSearch = req.employee.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         req.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    pending: leaveRequests.filter(r => r.status === 'Pending').length,
    approved: leaveRequests.filter(r => r.status === 'Approved').length,
    rejected: leaveRequests.filter(r => r.status === 'Rejected').length,
  };

  const handleApprove = (id: number) => {
    alert(`Leave request #${id} approved!`);
  };

  const handleReject = (id: number) => {
    const reason = prompt('Enter rejection reason:');
    if (reason) {
      alert(`Leave request #${id} rejected. Reason: ${reason}`);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Approved': return 'bg-green-100 text-green-700 border-green-300';
      case 'Rejected': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Leave Requests</h1>
        <p className="text-gray-600">Approve or reject employee leave requests</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending Requests</p>
              <p className="text-3xl text-gray-900">{stats.pending}</p>
            </div>
            <div className="bg-yellow-500 text-white p-3 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Approved</p>
              <p className="text-3xl text-gray-900">{stats.approved}</p>
            </div>
            <div className="bg-green-600 text-white p-3 rounded-lg">
              <Check className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Rejected</p>
              <p className="text-3xl text-gray-900">{stats.rejected}</p>
            </div>
            <div className="bg-red-600 text-white p-3 rounded-lg">
              <X className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#C62828]" />
            <h3 className="text-lg text-gray-900">Leave Request Management</h3>
          </div>
          
          <div className="flex gap-3">
            <div className="relative flex-1 md:flex-none md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search employee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
              />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              filter === 'pending'
                ? 'border-[#C62828] text-[#C62828]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <Filter className="w-4 h-4 inline mr-1" />
            Pending ({stats.pending})
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              filter === 'approved'
                ? 'border-[#C62828] text-[#C62828]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Approved ({stats.approved})
          </button>
          <button
            onClick={() => setFilter('rejected')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              filter === 'rejected'
                ? 'border-[#C62828] text-[#C62828]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Rejected ({stats.rejected})
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              filter === 'all'
                ? 'border-[#C62828] text-[#C62828]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Employee</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Leave Type</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Start Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">End Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Days</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Reason</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{request.employee}</p>
                      <p className="text-xs text-gray-600">{request.employeeId}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.leaveType}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.startDate}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.endDate}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{request.days}</td>
                  <td className="py-4 px-4 text-sm text-gray-600 max-w-xs truncate">{request.reason}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {request.status === 'Pending' ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleApprove(request.id)}
                          className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          title="Approve"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleReject(request.id)}
                          className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                          title="Reject"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-500">
                        {request.status === 'Approved' ? `Approved: ${request.approvedDate}` : 
                         request.status === 'Rejected' ? `Rejected: ${request.rejectedDate}` : '-'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRequests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No leave requests found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}