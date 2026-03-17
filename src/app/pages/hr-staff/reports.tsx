import { Download, FileText, Calendar, Filter, BarChart3, Users, DollarSign, Award } from 'lucide-react';
import { useState } from 'react';

const attendanceReports = [
  { id: 1, name: 'March 2026 Attendance Summary', generated: '2026-03-10', size: '2.4 MB' },
  { id: 2, name: 'February 2026 Attendance Summary', generated: '2026-03-01', size: '2.2 MB' },
];

const leaveReports = [
  { id: 1, name: 'March 2026 Leave Report', generated: '2026-03-10', size: '1.8 MB' },
  { id: 2, name: 'February 2026 Leave Report', generated: '2026-03-01', size: '1.6 MB' },
];

const employeeReports = [
  { id: 1, name: 'Employee Directory - March 2026', generated: '2026-03-08', size: '3.2 MB' },
  { id: 2, name: 'New Hires Report - Q1 2026', generated: '2026-03-05', size: '1.4 MB' },
];

const trainingReports = [
  { id: 1, name: 'Training Completion Report - Q1 2026', generated: '2026-03-09', size: '2.1 MB' },
  { id: 2, name: 'Training Needs Assessment', generated: '2026-03-03', size: '1.9 MB' },
];

export default function HRStaffReports() {
  const [activeTab, setActiveTab] = useState('attendance');

  const tabs = [
    { id: 'attendance', label: 'Attendance Reports', icon: Calendar },
    { id: 'leave', label: 'Leave Reports', icon: FileText },
    { id: 'employee', label: 'Employee Records', icon: Users },
    { id: 'training', label: 'Training Reports', icon: Award },
  ];

  const getReportData = () => {
    switch (activeTab) {
      case 'attendance': return attendanceReports;
      case 'leave': return leaveReports;
      case 'employee': return employeeReports;
      case 'training': return trainingReports;
      default: return [];
    }
  };

  const getTabIcon = () => {
    const tab = tabs.find(t => t.id === activeTab);
    return tab ? tab.icon : Calendar;
  };

  const TabIcon = getTabIcon();

  return (
    <div>
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl text-[#C62828] mb-2">Reports</h1>
        <p className="text-gray-600">Generate and view all HR reports in one place</p>
      </div>

      {/* Report Type Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-[#C62828] text-white shadow-md hover:bg-[#B71C1C]'
                  : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Generate Report Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TabIcon className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-lg font-semibold text-gray-900">Generate Report</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Quarter</option>
              <option>Last Quarter</option>
              <option>This Year</option>
              <option>Custom Range</option>
            </select>
          </div>
          
          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent">
              <option>All Departments</option>
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Operations</option>
            </select>
          </div>
          
          {/* Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="bg-[#C62828] text-white px-6 py-2.5 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2 font-medium">
            <Download className="w-5 h-5" />
            Generate Report
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 font-medium">
            <Filter className="w-5 h-5" />
            Advanced Filters
          </button>
        </div>
      </div>

      {/* Report Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Reports</p>
              <p className="text-2xl font-bold text-[#C62828]">24</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <FileText className="w-6 h-6 text-[#C62828]" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-green-600">8</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">3</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Departments</p>
              <p className="text-2xl font-bold text-blue-600">6</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recently Generated Reports Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recently Generated Reports</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Report Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Generated Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">File Size</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {getReportData().map((report) => (
                <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-900">{report.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{report.generated}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{report.size}</td>
                  <td className="py-4 px-4">
                    <button className="text-[#C62828] hover:text-[#B71C1C] flex items-center gap-1.5 text-sm font-medium transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Common Report Templates */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Report Templates</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors flex items-center justify-between group">
              <span className="text-sm text-gray-700">Monthly Attendance Summary</span>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-[#C62828]" />
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors flex items-center justify-between group">
              <span className="text-sm text-gray-700">Leave Balance Report</span>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-[#C62828]" />
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors flex items-center justify-between group">
              <span className="text-sm text-gray-700">Training Completion Status</span>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-[#C62828]" />
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors flex items-center justify-between group">
              <span className="text-sm text-gray-700">Employee Master List</span>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-[#C62828]" />
            </button>
          </div>
        </div>

        {/* Report Schedule */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Reports</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Monthly Attendance</p>
                  <p className="text-xs text-gray-600">Next run: April 1, 2026</p>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Quarterly Leave Summary</p>
                  <p className="text-xs text-gray-600">Next run: April 1, 2026</p>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Annual Training Report</p>
                  <p className="text-xs text-gray-600">Next run: January 1, 2027</p>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Scheduled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
