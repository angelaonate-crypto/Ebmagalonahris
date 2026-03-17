import { useState } from 'react';
import { Search, Filter, Download, Clock, Calendar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function HRStaffAttendance() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterDate, setFilterDate] = useState('2026-03-12');

  // Mock attendance data
  const attendanceRecords = [
    {
      id: 1,
      employeeName: 'Juan Dela Cruz',
      employeeId: 'EMP-2024-001',
      department: 'IT',
      date: '2026-03-12',
      clockIn: '08:00 AM',
      clockOut: '05:30 PM',
      workHours: '9.5',
      status: 'Present',
    },
    {
      id: 2,
      employeeName: 'Maria Santos',
      employeeId: 'EMP-2024-002',
      department: 'HR',
      date: '2026-03-12',
      clockIn: '08:15 AM',
      clockOut: '05:45 PM',
      workHours: '9.5',
      status: 'Present',
    },
    {
      id: 3,
      employeeName: 'Pedro Reyes',
      employeeId: 'EMP-2023-045',
      department: 'Finance',
      date: '2026-03-12',
      clockIn: '09:00 AM',
      clockOut: '06:00 PM',
      workHours: '9.0',
      status: 'Late',
    },
    {
      id: 4,
      employeeName: 'Ana Garcia',
      employeeId: 'EMP-2023-067',
      department: 'IT',
      date: '2026-03-12',
      clockIn: '08:05 AM',
      clockOut: '05:15 PM',
      workHours: '9.2',
      status: 'Present',
    },
    {
      id: 5,
      employeeName: 'Roberto Martinez',
      employeeId: 'EMP-2022-034',
      department: 'Operations',
      date: '2026-03-12',
      clockIn: '-',
      clockOut: '-',
      workHours: '0',
      status: 'Absent',
    },
  ];

  // Attendance summary chart data
  const weeklyData = [
    { day: 'Mon', present: 145, late: 3, absent: 2 },
    { day: 'Tue', present: 148, late: 1, absent: 1 },
    { day: 'Wed', present: 142, late: 5, absent: 3 },
    { day: 'Thu', present: 147, late: 2, absent: 1 },
    { day: 'Fri', present: 150, late: 0, absent: 0 },
  ];

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesSearch = record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || record.department === filterDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const handleExport = () => {
    alert('Exporting attendance records...');
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Attendance Monitoring</h1>
        <p className="text-gray-600">View and manage employee attendance records</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">147</h3>
          <p className="text-sm text-gray-600">Present Today</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">2</h3>
          <p className="text-sm text-gray-600">Late Arrivals</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">1</h3>
          <p className="text-sm text-gray-600">Absent Today</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">98%</h3>
          <p className="text-sm text-gray-600">Attendance Rate</p>
        </div>
      </div>

      {/* Attendance Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#C62828]" />
            <h2 className="text-lg font-semibold text-gray-900">Weekly Attendance Summary</h2>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar key="present" dataKey="present" fill="#4CAF50" name="Present" />
            <Bar key="late" dataKey="late" fill="#FFC107" name="Late" />
            <Bar key="absent" dataKey="absent" fill="#C62828" name="Absent" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Attendance Records Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100">
        {/* Filters and Actions */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
              />
              
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
              >
                <option value="all">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
              </select>
              
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-[#C62828] text-white rounded-lg text-sm hover:bg-[#B71C1C] transition-colors"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Employee Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Employee ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Department</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Clock In</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Clock Out</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Work Hours</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{record.employeeName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.employeeId}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.clockIn}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.clockOut}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.workHours} hrs</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      record.status === 'Present' 
                        ? 'bg-green-100 text-green-700' 
                        : record.status === 'Late'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {record.status}
                    </span>
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
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}