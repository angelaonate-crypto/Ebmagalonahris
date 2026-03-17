import { Download, FileText, Calendar, Filter, BarChart3, Users, DollarSign, Award } from 'lucide-react';
import { useState } from 'react';

const attendanceReports = [
  { id: 1, name: 'March 2026 Attendance Summary', generated: '2026-03-10', size: '2.4 MB' },
  { id: 2, name: 'February 2026 Attendance Summary', generated: '2026-03-01', size: '2.2 MB' },
];

const payrollReports = [
  { id: 1, name: 'February 2026 Payroll Summary', generated: '2026-03-01', size: '3.8 MB' },
  { id: 2, name: 'January 2026 Payroll Summary', generated: '2026-02-01', size: '3.5 MB' },
];

const recruitmentReports = [
  { id: 1, name: 'February 2026 Recruitment Metrics', generated: '2026-03-03', size: '1.9 MB' },
  { id: 2, name: 'Q1 2026 Hiring Statistics', generated: '2026-03-08', size: '2.1 MB' },
];

const performanceReports = [
  { id: 1, name: 'Q1 2026 Performance Review', generated: '2026-03-05', size: '5.2 MB' },
  { id: 2, name: 'Annual 2025 Performance Summary', generated: '2026-01-15', size: '6.8 MB' },
];

export default function Reports() {
  const [activeTab, setActiveTab] = useState('attendance');

  const tabs = [
    { id: 'attendance', label: 'Attendance' },
    { id: 'payroll', label: 'Payroll' },
    { id: 'recruitment', label: 'Recruitment' },
    { id: 'performance', label: 'Performance' },
  ];

  const getReportData = () => {
    switch (activeTab) {
      case 'attendance': return attendanceReports;
      case 'payroll': return payrollReports;
      case 'recruitment': return recruitmentReports;
      case 'performance': return performanceReports;
      default: return [];
    }
  };

  return (
    <div>
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl text-[#C62828] mb-2">Reports</h1>
        <p className="text-gray-600">Generate and view all HR reports in one place</p>
      </div>

      {/* Report Type Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
              activeTab === tab.id
                ? 'bg-[#C62828] text-white shadow-md hover:bg-[#B71C1C]'
                : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Generate Report Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate Report</h3>
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
    </div>
  );
}