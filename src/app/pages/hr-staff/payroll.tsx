import { useState } from 'react';
import { Search, Upload, FileDown, DollarSign, AlertCircle } from 'lucide-react';

export default function HRStaffPayroll() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');

  // Mock payroll data
  const payrollData = [
    {
      id: 1,
      employeeName: 'Juan Dela Cruz',
      employeeId: 'EMP-2024-001',
      department: 'IT',
      baseSalary: 50000,
      overtime: 5000,
      deductions: 8500,
      netSalary: 46500,
    },
    {
      id: 2,
      employeeName: 'Maria Santos',
      employeeId: 'EMP-2024-002',
      department: 'HR',
      baseSalary: 45000,
      overtime: 2000,
      deductions: 7200,
      netSalary: 39800,
    },
    {
      id: 3,
      employeeName: 'Pedro Reyes',
      employeeId: 'EMP-2023-045',
      department: 'Finance',
      baseSalary: 55000,
      overtime: 3000,
      deductions: 9500,
      netSalary: 48500,
    },
  ];

  const filteredData = payrollData.filter(record => {
    const matchesSearch = record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || record.department === filterDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const totalBaseSalary = filteredData.reduce((sum, record) => sum + record.baseSalary, 0);
  const totalNetSalary = filteredData.reduce((sum, record) => sum + record.netSalary, 0);

  const handleUpload = () => {
    alert('Upload payroll data feature');
  };

  const handleGenerateDraft = () => {
    if (confirm('Generate payroll draft for review?')) {
      alert('Payroll draft generated. Awaiting HR Officer approval.');
    }
  };

  const handleExport = () => {
    alert('Exporting payroll data...');
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Payroll Preparation</h1>
        <p className="text-gray-600">Prepare payroll data for HR Officer approval</p>
      </div>

      {/* Alert */}
      <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-yellow-800">Note: Payroll Approval Required</p>
          <p className="text-sm text-yellow-700 mt-1">
            HR Staff can prepare payroll data but cannot approve payroll. Final approval is handled by HR Officer.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{filteredData.length}</h3>
          <p className="text-sm text-gray-600">Employees</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">₱{totalBaseSalary.toLocaleString()}</h3>
          <p className="text-sm text-gray-600">Total Base Salary</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">₱{totalNetSalary.toLocaleString()}</h3>
          <p className="text-sm text-gray-600">Total Net Salary</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Pending</h3>
          <p className="text-sm text-gray-600">Approval Status</p>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100">
        {/* Actions Bar */}
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
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
              >
                <option value="all">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
              
              <button
                onClick={handleUpload}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                <Upload className="w-4 h-4" />
                Upload
              </button>
              
              <button
                onClick={handleGenerateDraft}
                className="flex items-center gap-2 px-4 py-2 bg-[#C62828] text-white rounded-lg text-sm hover:bg-[#B71C1C] transition-colors"
              >
                <FileDown className="w-4 h-4" />
                Generate Draft
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
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Base Salary</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Overtime</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Deductions</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Net Salary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{record.employeeName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.employeeId}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-right">₱{record.baseSalary.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-green-600 text-right">₱{record.overtime.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-red-600 text-right">₱{record.deductions.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">₱{record.netSalary.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 border-t-2 border-gray-300">
              <tr>
                <td colSpan={3} className="px-6 py-4 text-sm font-semibold text-gray-900">TOTAL</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">₱{totalBaseSalary.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600 text-right">
                  ₱{filteredData.reduce((sum, r) => sum + r.overtime, 0).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-red-600 text-right">
                  ₱{filteredData.reduce((sum, r) => sum + r.deductions, 0).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">₱{totalNetSalary.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Footer Info */}
        <div className="p-4 border-t border-gray-200 bg-blue-50">
          <p className="text-sm text-blue-800">
            <strong>Payroll Period:</strong> March 1-15, 2026 • <strong>Status:</strong> Draft • <strong>Prepared By:</strong> HR Staff
          </p>
        </div>
      </div>
    </div>
  );
}
