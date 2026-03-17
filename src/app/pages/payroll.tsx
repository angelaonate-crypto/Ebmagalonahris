import { DollarSign, Download, FileText, TrendingUp } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const payrollSummary = [
  { month: 'Jan', amount: 4567890 },
  { month: 'Feb', amount: 4623450 },
  { month: 'Mar', amount: 4789234 },
  { month: 'Apr', amount: 4856123 },
  { month: 'May', amount: 4923456 },
  { month: 'Jun', amount: 4998765 },
];

const departmentPayroll = [
  { name: 'IT', value: 1250000, color: '#C62828' },
  { name: 'Finance', value: 980000, color: '#FFC107' },
  { name: 'HR', value: 750000, color: '#FF9800' },
  { name: 'Marketing', value: 890000, color: '#E53935' },
  { name: 'Operations', value: 1130000, color: '#FFD54F' },
];

const employees = [
  { id: 1, empId: 'EMP-001', name: 'John Smith', department: 'IT', basicSalary: 45000, allowances: 5000, deductions: 2500, netSalary: 47500, status: 'Processed' },
  { id: 2, empId: 'EMP-002', name: 'Jane Doe', department: 'HR', basicSalary: 42000, allowances: 4500, deductions: 2200, netSalary: 44300, status: 'Processed' },
  { id: 3, empId: 'EMP-003', name: 'Mike Johnson', department: 'Finance', basicSalary: 48000, allowances: 5500, deductions: 2800, netSalary: 50700, status: 'Processed' },
  { id: 4, empId: 'EMP-004', name: 'Sarah Williams', department: 'Marketing', basicSalary: 40000, allowances: 4000, deductions: 2000, netSalary: 42000, status: 'Pending' },
  { id: 5, empId: 'EMP-005', name: 'David Brown', department: 'IT', basicSalary: 46000, allowances: 5200, deductions: 2600, netSalary: 48600, status: 'Processed' },
];

export default function PayrollManagement() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Payroll Management</h1>
          <p className="text-gray-600">Manage employee payroll and salary computation</p>
        </div>
        <button className="bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Generate Payroll
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total Payroll (Mar)</p>
            <DollarSign className="w-5 h-5 text-[#C62828]" />
          </div>
          <p className="text-2xl text-gray-900">₱4,998,765</p>
          <p className="text-xs text-green-600 mt-1">+3.2% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Processed</p>
            <FileText className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl text-gray-900">1,189</p>
          <p className="text-xs text-gray-500 mt-1">Employees</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Pending</p>
            <FileText className="w-5 h-5 text-[#FFC107]" />
          </div>
          <p className="text-2xl text-gray-900">58</p>
          <p className="text-xs text-gray-500 mt-1">Employees</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Avg Salary</p>
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl text-gray-900">₱40,086</p>
          <p className="text-xs text-gray-500 mt-1">Per employee</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Payroll Trend */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Monthly Payroll Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={payrollSummary}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `₱${Number(value).toLocaleString()}`} />
              <Legend />
              <Bar key="bar-amount" dataKey="amount" fill="#C62828" name="Payroll Amount" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Department Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Department Payroll Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentPayroll}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentPayroll.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₱${Number(value).toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Salary Computation Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-gray-900">March 2026 Salary Computation</h3>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-700">Emp ID</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Department</th>
                <th className="text-right py-3 px-4 text-sm text-gray-700">Basic Salary</th>
                <th className="text-right py-3 px-4 text-sm text-gray-700">Allowances</th>
                <th className="text-right py-3 px-4 text-sm text-gray-700">Deductions</th>
                <th className="text-right py-3 px-4 text-sm text-gray-700">Net Salary</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-900">{employee.empId}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{employee.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.department}</td>
                  <td className="py-4 px-4 text-sm text-right text-gray-900">₱{employee.basicSalary.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm text-right text-green-600">₱{employee.allowances.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm text-right text-red-600">₱{employee.deductions.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm text-right text-gray-900">₱{employee.netSalary.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      employee.status === 'Processed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-[#FFF8E1] text-[#C62828]'
                    }`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-[#C62828] hover:text-[#B71C1C] text-sm flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      Payslip
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