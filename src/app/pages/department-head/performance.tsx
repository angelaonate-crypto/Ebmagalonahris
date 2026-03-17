import { TrendingUp, Star, Search, Edit } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function PerformanceEvaluation() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const employees = [
    { id: 1, empId: 'EMP-001', name: 'John Michael Smith', position: 'Software Engineer', department: 'IT Department', rating: 4.5, category: 'Outstanding', status: 'Completed' },
    { id: 2, empId: 'EMP-002', name: 'Sarah Ann Williams', position: 'Project Manager', department: 'IT Department', rating: 4.8, category: 'Outstanding', status: 'Completed' },
    { id: 3, empId: 'EMP-003', name: 'Pedro Santos', position: 'UX Designer', department: 'IT Department', rating: 4.2, category: 'Very Satisfactory', status: 'Pending' },
    { id: 4, empId: 'EMP-004', name: 'Ana Reyes', position: 'QA Engineer', department: 'IT Department', rating: 0, category: 'Not Evaluated', status: 'Pending' },
  ];

  const chartData = [
    { category: 'Outstanding', count: 6, percentage: 25 },
    { category: 'Very Satisfactory', count: 12, percentage: 50 },
    { category: 'Satisfactory', count: 5, percentage: 20.8 },
    { category: 'Unsatisfactory', count: 1, percentage: 4.2 },
  ];

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4.0) return 'text-blue-600';
    if (rating >= 3.5) return 'text-yellow-600';
    if (rating > 0) return 'text-red-600';
    return 'text-gray-400';
  };

  const handleEvaluate = (employee: any) => {
    navigate(`/department-head/performance-evaluation/${employee.id}`, {
      state: { employee }
    });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Performance Evaluation</h1>
        <p className="text-gray-600">View and conduct SPMS-based employee performance evaluations</p>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Performance Summary</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" angle={-15} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar key="employees" dataKey="count" fill="#C62828" name="Employees" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* SPMS Rating Guide */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">SPMS Rating Scale</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded">
            <p className="text-2xl font-bold text-green-600 mb-1">5</p>
            <p className="text-sm font-medium text-gray-900">Outstanding</p>
          </div>
          <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
            <p className="text-2xl font-bold text-blue-600 mb-1">4</p>
            <p className="text-sm font-medium text-gray-900">Very Satisfactory</p>
          </div>
          <div className="p-4 border-l-4 border-yellow-600 bg-yellow-50 rounded">
            <p className="text-2xl font-bold text-yellow-600 mb-1">3</p>
            <p className="text-sm font-medium text-gray-900">Satisfactory</p>
          </div>
          <div className="p-4 border-l-4 border-orange-600 bg-orange-50 rounded">
            <p className="text-2xl font-bold text-orange-600 mb-1">2</p>
            <p className="text-sm font-medium text-gray-900">Unsatisfactory</p>
          </div>
          <div className="p-4 border-l-4 border-red-600 bg-red-50 rounded">
            <p className="text-2xl font-bold text-red-600 mb-1">1</p>
            <p className="text-sm font-medium text-gray-900">Poor</p>
          </div>
        </div>
      </div>

      {/* Employee Evaluations */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#C62828]" />
            <h3 className="text-lg font-semibold text-gray-900">Employee Evaluations</h3>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search employee..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Employee ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Employee</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Position</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rating</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-600">{emp.empId}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{emp.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{emp.position}</td>
                  <td className="py-4 px-4">
                    {emp.rating > 0 ? (
                      <div className="flex items-center gap-2">
                        <Star className={`w-4 h-4 ${getRatingColor(emp.rating)}`} fill="currentColor" />
                        <span className={`text-sm font-medium ${getRatingColor(emp.rating)}`}>{emp.rating.toFixed(1)}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{emp.category}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      emp.status === 'Completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => handleEvaluate(emp)}
                      className="flex items-center gap-1 text-sm text-[#C62828] hover:underline"
                    >
                      <Edit className="w-4 h-4" />
                      {emp.status === 'Completed' ? 'View' : 'Evaluate'}
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