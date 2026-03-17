import { Calendar, Clock, Send, CheckCircle, XCircle, AlertCircle, Plus, X } from 'lucide-react';
import { useState } from 'react';

export default function EmployeeLeave() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    leaveType: 'Vacation Leave',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const leaveHistory = [
    {
      id: 1,
      type: 'Vacation Leave',
      startDate: '2026-03-20',
      endDate: '2026-03-22',
      status: 'Pending',
      appliedDate: '2026-03-10',
      days: 3,
    },
    {
      id: 2,
      type: 'Sick Leave',
      startDate: '2026-02-15',
      endDate: '2026-02-16',
      status: 'Approved',
      appliedDate: '2026-02-14',
      days: 2,
    },
    {
      id: 3,
      type: 'Emergency Leave',
      startDate: '2026-01-25',
      endDate: '2026-01-25',
      status: 'Approved',
      appliedDate: '2026-01-24',
      days: 1,
    },
    {
      id: 4,
      type: 'Vacation Leave',
      startDate: '2026-01-10',
      endDate: '2026-01-12',
      status: 'Rejected',
      appliedDate: '2026-01-05',
      days: 3,
    },
  ];

  const leaveBalance = {
    vacation: 12,
    sick: 10,
    emergency: 3,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Leave request submitted successfully!');
    setFormData({
      leaveType: 'Vacation Leave',
      startDate: '',
      endDate: '',
      reason: '',
    });
    setShowModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'Pending':
        return <AlertCircle className="w-4 h-4" />;
      case 'Rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Leave Requests</h1>
          <p className="text-gray-600">Submit and manage your leave requests</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#C62828] text-white px-6 py-2.5 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Request Leave
        </button>
      </div>

      {/* Leave Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Vacation Leave</p>
              <p className="text-2xl text-gray-900">{leaveBalance.vacation} days</p>
            </div>
            <div className="bg-[#C62828] text-white p-3 rounded-lg">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Sick Leave</p>
              <p className="text-2xl text-gray-900">{leaveBalance.sick} days</p>
            </div>
            <div className="bg-[#FFC107] text-white p-3 rounded-lg">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Emergency Leave</p>
              <p className="text-2xl text-gray-900">{leaveBalance.emergency} days</p>
            </div>
            <div className="bg-[#FF9800] text-white p-3 rounded-lg">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Leave History */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Leave Type</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Start Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">End Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Days</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Applied Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveHistory.map((leave) => (
                <tr key={leave.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-900">{leave.type}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{leave.startDate}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{leave.endDate}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{leave.days}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{leave.appliedDate}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        leave.status
                      )}`}
                    >
                      {getStatusIcon(leave.status)}
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leave Request Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Submit Leave Request</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Leave Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Leave Type</label>
                  <select
                    value={formData.leaveType}
                    onChange={(e) => setFormData({ ...formData, leaveType: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    required
                  >
                    <option>Vacation Leave</option>
                    <option>Sick Leave</option>
                    <option>Emergency Leave</option>
                    <option>Maternity/Paternity Leave</option>
                    <option>Bereavement Leave</option>
                  </select>
                </div>

                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    required
                  />
                </div>

                {/* End Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    required
                  />
                </div>

                {/* Reason */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    rows={4}
                    placeholder="Please provide a reason for your leave request..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#C62828] text-white px-6 py-2.5 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2 font-medium"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
