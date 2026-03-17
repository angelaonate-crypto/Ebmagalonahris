import { Award, TrendingUp } from 'lucide-react';
import { BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const performanceRatings = [
  { id: 1, empId: 'EMP-001', name: 'John Smith', department: 'IT', position: 'Software Engineer', quality: 92, efficiency: 88, teamwork: 90, innovation: 85, overall: 89, rating: 'Outstanding' },
  { id: 2, empId: 'EMP-002', name: 'Jane Doe', department: 'HR', position: 'HR Manager', quality: 95, efficiency: 93, teamwork: 94, innovation: 90, overall: 93, rating: 'Outstanding' },
  { id: 3, empId: 'EMP-003', name: 'Mike Johnson', department: 'Finance', position: 'Senior Accountant', quality: 88, efficiency: 90, teamwork: 85, innovation: 82, overall: 86, rating: 'Very Satisfactory' },
  { id: 4, empId: 'EMP-004', name: 'Sarah Williams', department: 'Marketing', position: 'Marketing Specialist', quality: 85, efficiency: 87, teamwork: 88, innovation: 90, overall: 88, rating: 'Very Satisfactory' },
  { id: 5, empId: 'EMP-005', name: 'David Brown', department: 'IT', position: 'Network Admin', quality: 80, efficiency: 82, teamwork: 79, innovation: 78, overall: 80, rating: 'Satisfactory' },
];

const departmentPerformance = [
  { department: 'IT', avgScore: 87 },
  { department: 'HR', avgScore: 91 },
  { department: 'Finance', avgScore: 84 },
  { department: 'Marketing', avgScore: 86 },
  { department: 'Operations', avgScore: 83 },
];

const radarData = [
  { subject: 'Quality', value: 90 },
  { subject: 'Efficiency', value: 85 },
  { subject: 'Teamwork', value: 88 },
  { subject: 'Innovation', value: 82 },
  { subject: 'Leadership', value: 87 },
];

export default function PerformanceEvaluation() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Performance Evaluation</h1>
        <p className="text-gray-600">SPMS evaluation dashboard and employee performance ratings</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Outstanding</p>
            <Award className="w-5 h-5 text-[#C62828]" />
          </div>
          <p className="text-2xl text-gray-900">234</p>
          <p className="text-xs text-gray-500 mt-1">18.8% of employees</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Very Satisfactory</p>
            <TrendingUp className="w-5 h-5 text-[#FFC107]" />
          </div>
          <p className="text-2xl text-gray-900">567</p>
          <p className="text-xs text-gray-500 mt-1">45.5% of employees</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Satisfactory</p>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl text-gray-900">389</p>
          <p className="text-xs text-gray-500 mt-1">31.2% of employees</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Average Rating</p>
            <Award className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl text-gray-900">87.3</p>
          <p className="text-xs text-green-600 mt-1">+2.1 from last period</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Department Performance */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Department Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar key="bar-avgScore" dataKey="avgScore" fill="#C62828" name="Average Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Criteria Radar */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Overall Performance Criteria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar name="Company Average" dataKey="value" stroke="#C62828" fill="#C62828" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Ratings Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <h3 className="text-lg text-gray-900 mb-4">Employee Performance Ratings</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-700">Emp ID</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Department</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Position</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Quality</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Efficiency</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Teamwork</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Innovation</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Overall</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Rating</th>
              </tr>
            </thead>
            <tbody>
              {performanceRatings.map((employee) => (
                <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-900">{employee.empId}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{employee.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.department}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.position}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-900">{employee.quality}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-900">{employee.efficiency}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-900">{employee.teamwork}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-900">{employee.innovation}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`text-sm ${employee.overall >= 90 ? 'text-green-600' : 'text-gray-900'}`}>
                      {employee.overall}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      employee.rating === 'Outstanding'
                        ? 'bg-green-100 text-green-700'
                        : employee.rating === 'Very Satisfactory'
                        ? 'bg-[#FFF8E1] text-[#C62828]'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {employee.rating}
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