import { DollarSign, Download, Calendar, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { useState } from 'react';

interface PayrollRecord {
  id: number;
  payPeriod: string;
  startDate: string;
  endDate: string;
  baseSalary: number;
  allowances: number;
  bonuses: number;
  deductions: number;
  taxes: number;
  grossSalary: number;
  netSalary: number;
  status: string;
  payDate: string;
}

const payrollData: PayrollRecord[] = [
  {
    id: 1,
    payPeriod: 'February 2026',
    startDate: '2026-02-01',
    endDate: '2026-02-28',
    baseSalary: 85000,
    allowances: 15000,
    bonuses: 5000,
    deductions: 8500,
    taxes: 12750,
    grossSalary: 105000,
    netSalary: 83750,
    status: 'Paid',
    payDate: '2026-03-05'
  },
  {
    id: 2,
    payPeriod: 'January 2026',
    startDate: '2026-01-01',
    endDate: '2026-01-31',
    baseSalary: 85000,
    allowances: 15000,
    bonuses: 0,
    deductions: 8500,
    taxes: 12150,
    grossSalary: 100000,
    netSalary: 79350,
    status: 'Paid',
    payDate: '2026-02-05'
  },
  {
    id: 3,
    payPeriod: 'December 2025',
    startDate: '2025-12-01',
    endDate: '2025-12-31',
    baseSalary: 85000,
    allowances: 15000,
    bonuses: 20000,
    deductions: 8500,
    taxes: 16650,
    grossSalary: 120000,
    netSalary: 94850,
    status: 'Paid',
    payDate: '2026-01-05'
  },
  {
    id: 4,
    payPeriod: 'November 2025',
    startDate: '2025-11-01',
    endDate: '2025-11-30',
    baseSalary: 85000,
    allowances: 15000,
    bonuses: 0,
    deductions: 8500,
    taxes: 12150,
    grossSalary: 100000,
    netSalary: 79350,
    status: 'Paid',
    payDate: '2025-12-05'
  },
  {
    id: 5,
    payPeriod: 'October 2025',
    startDate: '2025-10-01',
    endDate: '2025-10-31',
    baseSalary: 85000,
    allowances: 15000,
    bonuses: 0,
    deductions: 8500,
    taxes: 12150,
    grossSalary: 100000,
    netSalary: 79350,
    status: 'Paid',
    payDate: '2025-11-05'
  },
  {
    id: 6,
    payPeriod: 'September 2025',
    startDate: '2025-09-01',
    endDate: '2025-09-30',
    baseSalary: 85000,
    allowances: 15000,
    bonuses: 0,
    deductions: 8500,
    taxes: 12150,
    grossSalary: 100000,
    netSalary: 79350,
    status: 'Paid',
    payDate: '2025-10-05'
  }
];

export default function DepartmentHeadPayroll() {
  const [selectedPayslip, setSelectedPayslip] = useState<PayrollRecord>(payrollData[0]);

  const latestPayroll = payrollData[0];
  
  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleDownloadPayslip = (record: PayrollRecord) => {
    alert(`Downloading payslip for ${record.payPeriod}...`);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Payslip</h1>
        <p className="text-gray-600">View your salary records and download payslips</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Base Salary Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Base Salary</p>
          <p className="text-2xl text-gray-900 mb-2">{formatCurrency(latestPayroll.baseSalary)}</p>
          <p className="text-xs text-gray-500">Per month</p>
        </div>

        {/* Allowances Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Allowances</p>
          <p className="text-2xl text-gray-900 mb-2">{formatCurrency(latestPayroll.allowances)}</p>
          <p className="text-xs text-gray-500">Latest period</p>
        </div>

        {/* Deductions Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Deductions</p>
          <p className="text-2xl text-gray-900 mb-2">{formatCurrency(latestPayroll.deductions + latestPayroll.taxes)}</p>
          <p className="text-xs text-gray-500">Deductions + Taxes</p>
        </div>

        {/* Net Salary Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#C62828] bg-opacity-10 rounded-lg flex items-center justify-center">
              <Wallet className="w-6 h-6 text-[#C62828]" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Net Salary</p>
          <p className="text-2xl text-[#C62828] mb-2">{formatCurrency(latestPayroll.netSalary)}</p>
          <p className="text-xs text-gray-500">Take-home pay</p>
        </div>
      </div>

      {/* Latest Payslip */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 mb-8">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg text-gray-900 mb-1">Latest Payslip</h2>
              <p className="text-sm text-gray-600">{selectedPayslip.payPeriod} ({selectedPayslip.startDate} to {selectedPayslip.endDate})</p>
            </div>
            <button
              onClick={() => handleDownloadPayslip(selectedPayslip)}
              className="px-4 py-2 bg-[#C62828] text-white rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Payslip
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Earnings Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Earnings</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Base Salary</span>
                  <span className="text-sm text-gray-900 font-medium">{formatCurrency(selectedPayslip.baseSalary)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Allowances</span>
                  <span className="text-sm text-gray-900 font-medium">{formatCurrency(selectedPayslip.allowances)}</span>
                </div>
                {selectedPayslip.bonuses > 0 && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Bonuses</span>
                    <span className="text-sm text-green-600 font-medium">{formatCurrency(selectedPayslip.bonuses)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 bg-gray-50 px-3 rounded-lg mt-3">
                  <span className="text-sm text-gray-900 font-semibold">Gross Salary</span>
                  <span className="text-sm text-gray-900 font-bold">{formatCurrency(selectedPayslip.grossSalary)}</span>
                </div>
              </div>
            </div>

            {/* Deductions Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Deductions</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Mandatory Deductions</span>
                  <span className="text-sm text-gray-900 font-medium">{formatCurrency(selectedPayslip.deductions)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Withholding Tax</span>
                  <span className="text-sm text-gray-900 font-medium">{formatCurrency(selectedPayslip.taxes)}</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-gray-50 px-3 rounded-lg mt-3">
                  <span className="text-sm text-gray-900 font-semibold">Total Deductions</span>
                  <span className="text-sm text-gray-900 font-bold">{formatCurrency(selectedPayslip.deductions + selectedPayslip.taxes)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Net Pay Summary */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] rounded-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80 mb-1">Net Salary (Take-Home Pay)</p>
                  <p className="text-3xl font-bold">{formatCurrency(selectedPayslip.netSalary)}</p>
                  <p className="text-xs text-white/70 mt-2">Paid on {selectedPayslip.payDate}</p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown Details */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-xs text-blue-600 mb-1">Pay Period</p>
              <p className="text-sm text-gray-900 font-medium">{selectedPayslip.payPeriod}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-xs text-green-600 mb-1">Payment Date</p>
              <p className="text-sm text-gray-900 font-medium">{selectedPayslip.payDate}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-xs text-purple-600 mb-1">Status</p>
              <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                {selectedPayslip.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Payroll History */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg text-gray-900">Payroll History</h2>
          <p className="text-sm text-gray-600">View and download previous payslips</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Pay Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Date Range
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Gross Salary
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Deductions
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Net Salary
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Payslip
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payrollData.map((record) => (
                <tr 
                  key={record.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedPayslip(record)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900 font-medium">{record.payPeriod}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{record.startDate} to {record.endDate}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm text-gray-900">{formatCurrency(record.grossSalary)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm text-orange-600">{formatCurrency(record.deductions + record.taxes)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm text-[#C62828] font-medium">{formatCurrency(record.netSalary)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadPayslip(record);
                      }}
                      className="inline-flex items-center gap-1 text-sm text-[#C62828] hover:text-[#B71C1C] transition-colors"
                    >
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

      {/* Info Note */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> This is your personal payroll information. For payroll inquiries or discrepancies, please contact the HR Department. 
          Payroll data is confidential and for your viewing only.
        </p>
      </div>
    </div>
  );
}