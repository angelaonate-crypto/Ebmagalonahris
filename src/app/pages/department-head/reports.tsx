import { FileText, Download, Calendar } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DepartmentHeadReports() {
  const attendanceData = [
    { month: 'Jan', present: 95, late: 3, absent: 2 },
    { month: 'Feb', present: 96, late: 2, absent: 2 },
    { month: 'Mar', present: 94, late: 4, absent: 2 },
  ];

  const leaveData = [
    { type: 'Vacation', count: 12 },
    { type: 'Sick', count: 8 },
    { type: 'Emergency', count: 3 },
    { type: 'Maternity', count: 1 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Reports</h1>
        <p className="text-gray-600">Department attendance, leave, and performance reports</p>
      </div>

      {/* Attendance Reports */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#C62828]" />
            <h3 className="text-lg font-semibold text-gray-900">Attendance Report</h3>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#C62828] text-white rounded-lg hover:bg-[#B71C1C]">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line key="present" type="monotone" dataKey="present" stroke="#4CAF50" strokeWidth={2} name="Present %" />
            <Line key="late" type="monotone" dataKey="late" stroke="#FFC107" strokeWidth={2} name="Late %" />
            <Line key="absent" type="monotone" dataKey="absent" stroke="#F44336" strokeWidth={2} name="Absent %" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Leave Reports */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#C62828]" />
            <h3 className="text-lg font-semibold text-gray-900">Leave Report</h3>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#C62828] text-white rounded-lg hover:bg-[#B71C1C]">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={leaveData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar key="leave-count" dataKey="count" fill="#C62828" name="Leave Count" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Reports */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Performance Summary</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#C62828] text-white rounded-lg hover:bg-[#B71C1C]">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-600 mb-1">Outstanding</p>
            <p className="text-2xl font-bold text-green-700">6</p>
            <p className="text-xs text-gray-600 mt-1">25%</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-600 mb-1">Very Satisfactory</p>
            <p className="text-2xl font-bold text-blue-700">12</p>
            <p className="text-xs text-gray-600 mt-1">50%</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-gray-600 mb-1">Satisfactory</p>
            <p className="text-2xl font-bold text-yellow-700">5</p>
            <p className="text-xs text-gray-600 mt-1">20.8%</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-gray-600 mb-1">Unsatisfactory</p>
            <p className="text-2xl font-bold text-red-700">1</p>
            <p className="text-xs text-gray-600 mt-1">4.2%</p>
          </div>
        </div>
      </div>
    </div>
  );
}