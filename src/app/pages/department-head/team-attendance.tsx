import { Calendar, Search, UserCheck, Clock, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function TeamAttendance() {
  const [selectedDate, setSelectedDate] = useState('2026-03-11');
  const [searchQuery, setSearchQuery] = useState('');

  const attendanceData = [
    { employee: 'Juan Dela Cruz', id: 'EMP-001', checkIn: '08:30 AM', checkOut: '05:30 PM', hours: '9h', status: 'Present' },
    { employee: 'Maria Garcia', id: 'EMP-002', checkIn: '08:25 AM', checkOut: '05:35 PM', hours: '9h 10m', status: 'Present' },
    { employee: 'Pedro Santos', id: 'EMP-003', checkIn: '09:15 AM', checkOut: '05:30 PM', hours: '8h 15m', status: 'Late' },
    { employee: 'Ana Reyes', id: 'EMP-004', checkIn: '08:30 AM', checkOut: '05:30 PM', hours: '9h', status: 'Present' },
    { employee: 'Roberto Cruz', id: 'EMP-005', checkIn: '-', checkOut: '-', hours: '-', status: 'On Leave' },
    { employee: 'Teresa Lopez', id: 'EMP-006', checkIn: '08:28 AM', checkOut: '05:32 PM', hours: '9h 4m', status: 'Present' },
    { employee: 'Carlos Mendoza', id: 'EMP-007', checkIn: '08:35 AM', checkOut: '05:30 PM', hours: '8h 55m', status: 'Present' },
    { employee: 'Isabel Ramos', id: 'EMP-008', checkIn: '08:30 AM', checkOut: '05:30 PM', hours: '9h', status: 'Present' },
    { employee: 'Miguel Torres', id: 'EMP-009', checkIn: '08:30 AM', checkOut: '05:30 PM', hours: '9h', status: 'Present' },
    { employee: 'Sofia Castillo', id: 'EMP-010', checkIn: '-', checkOut: '-', hours: '-', status: 'On Leave' },
  ];

  const filteredData = attendanceData.filter(emp => 
    emp.employee.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const summaryData = [
    { name: 'Present', value: 17, color: '#4CAF50' },
    { name: 'Late', value: 1, color: '#FFC107' },
    { name: 'On Leave', value: 2, color: '#2196F3' },
    { name: 'Absent', value: 0, color: '#F44336' },
  ];

  const stats = {
    totalEmployees: 24,
    present: 22,
    onLeave: 2,
    attendanceRate: '91.7%',
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present': return 'bg-green-100 text-green-700 border-green-300';
      case 'Late': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'On Leave': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Absent': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Team Attendance</h1>
        <p className="text-gray-600">Monitor department employee attendance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Employees</p>
              <p className="text-2xl text-gray-900">{stats.totalEmployees}</p>
            </div>
            <div className="bg-[#C62828] text-white p-3 rounded-lg">
              <UserCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Present Today</p>
              <p className="text-2xl text-gray-900">{stats.present}</p>
            </div>
            <div className="bg-green-600 text-white p-3 rounded-lg">
              <UserCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">On Leave</p>
              <p className="text-2xl text-gray-900">{stats.onLeave}</p>
            </div>
            <div className="bg-blue-600 text-white p-3 rounded-lg">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Attendance Rate</p>
              <p className="text-2xl text-gray-900">{stats.attendanceRate}</p>
            </div>
            <div className="bg-purple-600 text-white p-3 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Attendance Summary Chart */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Summary</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={summaryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {summaryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Stats */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-600 mb-1">On Time</p>
              <p className="text-3xl font-bold text-green-700">21</p>
              <p className="text-xs text-gray-600 mt-1">87.5% of employees</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-600 mb-1">Late Arrivals</p>
              <p className="text-3xl font-bold text-yellow-700">1</p>
              <p className="text-xs text-gray-600 mt-1">4.2% of employees</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">On Leave</p>
              <p className="text-3xl font-bold text-blue-700">2</p>
              <p className="text-xs text-gray-600 mt-1">8.3% of employees</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-gray-600 mb-1">Absent</p>
              <p className="text-3xl font-bold text-red-700">0</p>
              <p className="text-xs text-gray-600 mt-1">0% of employees</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#C62828]" />
            <h3 className="text-lg font-semibold text-gray-900">Team Attendance Records</h3>
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
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Employee Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Employee ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Clock In</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Clock Out</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Work Hours</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((record, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-900 font-medium">{record.employee}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{record.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{record.checkIn}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{record.checkOut}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{record.hours}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(record.status)}`}>
                      {record.status === 'Present' && <Clock className="w-3 h-3" />}
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
