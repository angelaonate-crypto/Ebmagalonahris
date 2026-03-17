import { useState } from 'react';
import { Calendar, Download, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { date: 'Mon, Mar 4', present: 1195, absent: 52, late: 15 },
  { date: 'Tue, Mar 5', present: 1203, absent: 44, late: 18 },
  { date: 'Wed, Mar 6', present: 1189, absent: 58, late: 12 },
  { date: 'Thu, Mar 7', present: 1210, absent: 37, late: 20 },
  { date: 'Fri, Mar 8', present: 1198, absent: 49, late: 14 },
];

const todayAttendance = [
  { id: 1, empId: 'EMP-001', name: 'John Smith', department: 'IT', timeIn: '08:00 AM', timeOut: '-', status: 'Present' },
  { id: 2, empId: 'EMP-002', name: 'Jane Doe', department: 'HR', timeIn: '08:15 AM', timeOut: '-', status: 'Late' },
  { id: 3, empId: 'EMP-003', name: 'Mike Johnson', department: 'Finance', timeIn: '08:05 AM', timeOut: '-', status: 'Present' },
  { id: 4, empId: 'EMP-004', name: 'Sarah Williams', department: 'Marketing', timeIn: '-', timeOut: '-', status: 'Absent' },
  { id: 5, empId: 'EMP-005', name: 'David Brown', department: 'IT', timeIn: '08:30 AM', timeOut: '-', status: 'Late' },
  { id: 6, empId: 'EMP-006', name: 'Emily Davis', department: 'Operations', timeIn: '07:55 AM', timeOut: '-', status: 'Present' },
];

export default function AttendanceMonitoring() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Attendance Monitoring</h1>
          <p className="text-gray-600">Track employee attendance and working hours</p>
        </div>
        <button className="bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Present Today</p>
            <Calendar className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl text-gray-900">1,189</p>
          <p className="text-xs text-green-600 mt-1">95.4% attendance rate</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Absent Today</p>
            <Calendar className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-2xl text-gray-900">58</p>
          <p className="text-xs text-gray-500 mt-1">4.6% of total</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Late Arrivals</p>
            <Calendar className="w-5 h-5 text-[#FFC107]" />
          </div>
          <p className="text-2xl text-gray-900">23</p>
          <p className="text-xs text-gray-500 mt-1">Today</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">On Leave</p>
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl text-gray-900">15</p>
          <p className="text-xs text-gray-500 mt-1">Approved leaves</p>
        </div>
      </div>

      {/* Attendance Analytics */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <h3 className="text-lg text-gray-900 mb-4">Weekly Attendance Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar key="bar-present" dataKey="present" fill="#10B981" name="Present" />
            <Bar key="bar-late" dataKey="late" fill="#FFC107" name="Late" />
            <Bar key="bar-absent" dataKey="absent" fill="#C62828" name="Absent" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Daily Attendance Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-gray-900">Today's Attendance Log - March 10, 2026</h3>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>All Departments</option>
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>All Status</option>
              <option>Present</option>
              <option>Absent</option>
              <option>Late</option>
            </select>
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-700">Employee ID</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Department</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Time In</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Time Out</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {todayAttendance.map((record) => (
                <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-900">{record.empId}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{record.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{record.department}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{record.timeIn}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{record.timeOut}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      record.status === 'Present'
                        ? 'bg-green-100 text-green-700'
                        : record.status === 'Late'
                        ? 'bg-[#FFF8E1] text-[#C62828]'
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
      </div>
    </div>
  );
}