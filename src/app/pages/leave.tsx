import { useState } from 'react';
import { CheckCircle, XCircle, Clock, Filter } from 'lucide-react';

interface LeaveRequest {
  id: number;
  empId: string;
  name: string;
  department: string;
  type: string;
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  submitted: string;
}

const initialLeaveRequests: LeaveRequest[] = [
  { id: 1, empId: 'EMP-001', name: 'John Smith', department: 'IT', type: 'Vacation Leave', startDate: '2026-03-15', endDate: '2026-03-20', days: 6, reason: 'Family vacation', status: 'Pending', submitted: '2026-03-05' },
  { id: 2, empId: 'EMP-002', name: 'Jane Doe', department: 'HR', type: 'Sick Leave', startDate: '2026-03-11', endDate: '2026-03-12', days: 2, reason: 'Medical checkup', status: 'Approved', submitted: '2026-03-08' },
  { id: 3, empId: 'EMP-003', name: 'Mike Johnson', department: 'Finance', type: 'Emergency Leave', startDate: '2026-03-10', endDate: '2026-03-10', days: 1, reason: 'Family emergency', status: 'Approved', submitted: '2026-03-09' },
  { id: 4, empId: 'EMP-004', name: 'Sarah Williams', department: 'Marketing', type: 'Vacation Leave', startDate: '2026-03-25', endDate: '2026-03-30', days: 6, reason: 'Personal travel', status: 'Pending', submitted: '2026-03-06' },
  { id: 5, empId: 'EMP-005', name: 'David Brown', department: 'IT', type: 'Sick Leave', startDate: '2026-03-12', endDate: '2026-03-14', days: 3, reason: 'Flu symptoms', status: 'Pending', submitted: '2026-03-10' },
];

const leaveBalance = [
  { type: 'Vacation Leave', total: 15, used: 8, remaining: 7 },
  { type: 'Sick Leave', total: 10, used: 3, remaining: 7 },
  { type: 'Emergency Leave', total: 5, used: 2, remaining: 3 },
  { type: 'Maternity Leave', total: 105, used: 0, remaining: 105 },
];

export default function LeaveManagement() {
  const [leaveRequests, setLeaveRequests] = useState(initialLeaveRequests);

  const handleApprove = (id: number) => {
    setLeaveRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status: 'Approved' as const } : request
      )
    );
  };

  const handleReject = (id: number) => {
    setLeaveRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status: 'Rejected' as const } : request
      )
    );
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Leave Management</h1>
        <p className="text-gray-600">Manage employee leave requests and balances</p>
      </div>

      {/* Leave Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Pending Requests</p>
            <Clock className="w-5 h-5 text-[#FFC107]" />
          </div>
          <p className="text-2xl text-gray-900">23</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Approved Today</p>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl text-gray-900">12</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">On Leave Today</p>
            <CheckCircle className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl text-gray-900">15</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Rejected</p>
            <XCircle className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-2xl text-gray-900">3</p>
        </div>
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <h3 className="text-lg text-gray-900 mb-4">Leave Requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-700">Employee</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Department</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Leave Type</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Start Date</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">End Date</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Days</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Reason</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request) => (
                <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm text-gray-900">{request.name}</p>
                      <p className="text-xs text-gray-500">{request.empId}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.department}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.type}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.startDate}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.endDate}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{request.days}</td>
                  <td className="py-4 px-4 text-sm text-gray-600 max-w-xs truncate">{request.reason}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      request.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : request.status === 'Pending'
                        ? 'bg-[#FFF8E1] text-[#C62828]'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {request.status === 'Pending' && (
                      <div className="flex gap-2">
                        <button className="text-green-600 hover:text-green-700" title="Approve" onClick={() => handleApprove(request.id)}>
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-700" title="Reject" onClick={() => handleReject(request.id)}>
                          <XCircle className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leave Balance Dashboard */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <h3 className="text-lg text-gray-900 mb-4">Company Leave Balance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {leaveBalance.map((balance, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm text-gray-900 mb-3">{balance.type}</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total:</span>
                  <span className="text-gray-900">{balance.total} days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Used:</span>
                  <span className="text-[#C62828]">{balance.used} days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Remaining:</span>
                  <span className="text-green-600">{balance.remaining} days</span>
                </div>
              </div>
              <div className="mt-3 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#C62828] h-2 rounded-full"
                  style={{ width: `${(balance.used / balance.total) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}