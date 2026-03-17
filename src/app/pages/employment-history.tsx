import { Search, Filter, Eye } from 'lucide-react';
import { StatCard } from '../components/shared/stat-card';
import { StatusBadge } from '../components/shared/status-badge';
import { DataTable } from '../components/shared/data-table';

const employeeRecords = [
  { id: 1, empId: 'EMP-001', name: 'John Smith', department: 'IT', position: 'Senior Software Engineer', hireDate: '2023-01-15', status: 'Active', tenure: '3.2 years' },
  { id: 2, empId: 'EMP-002', name: 'Jane Doe', department: 'HR', position: 'HR Manager', hireDate: '2022-06-20', status: 'Active', tenure: '3.7 years' },
  { id: 3, empId: 'EMP-003', name: 'Mike Johnson', department: 'Finance', position: 'Senior Accountant', hireDate: '2021-03-10', status: 'Active', tenure: '5.0 years' },
  { id: 4, empId: 'EMP-004', name: 'Sarah Williams', department: 'Marketing', position: 'Marketing Specialist', hireDate: '2023-09-01', status: 'Active', tenure: '2.5 years' },
  { id: 5, empId: 'EMP-005', name: 'David Brown', department: 'IT', position: 'Network Administrator', hireDate: '2022-11-15', status: 'Active', tenure: '3.3 years' },
  { id: 6, empId: 'EMP-006', name: 'Emily Davis', department: 'Operations', position: 'Operations Manager', hireDate: '2020-04-22', status: 'Resigned', tenure: '5.5 years' },
];

export default function EmploymentHistory() {
  const columns = [
    { key: 'empId', header: 'Employee ID', render: (value: string) => <span className="text-gray-900">{value}</span> },
    { key: 'name', header: 'Name', render: (value: string) => <span className="text-gray-900">{value}</span> },
    { key: 'department', header: 'Department', render: (value: string) => <span className="text-gray-600">{value}</span> },
    { key: 'position', header: 'Position', render: (value: string) => <span className="text-gray-600">{value}</span> },
    { key: 'hireDate', header: 'Hire Date', render: (value: string) => <span className="text-gray-600">{value}</span> },
    { key: 'tenure', header: 'Tenure', render: (value: string) => <span className="text-gray-900">{value}</span> },
    { key: 'status', header: 'Status', render: (value: string) => <StatusBadge status={value} /> },
    {
      key: 'actions',
      header: 'Actions',
      render: () => (
        <button className="text-[#C62828] hover:text-[#B71C1C]" title="View Details">
          <Eye className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Employment History</h1>
        <p className="text-gray-600">View employee employment records and history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatCard label="Total Employees" value="1,247" />
        <StatCard label="Active" value="1,189" />
        <StatCard label="Resigned (YTD)" value="35" />
        <StatCard label="Avg Tenure" value="4.2" subtext="years" />
      </div>

      {/* Employment Records Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-gray-900">Employment Records</h3>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Search className="w-4 h-4" />
              Search
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
        <DataTable columns={columns} data={employeeRecords} keyExtractor={(row) => row.id} />
      </div>
    </div>
  );
}