import { Users, UserCheck, FileText, UserPlus, GraduationCap, DollarSign } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stats = [
  { label: 'Total Employees', value: '1,247', icon: Users, color: 'bg-[#C62828]' },
  { label: 'Present Today', value: '1,189', icon: UserCheck, color: 'bg-[#FFC107]' },
  { label: 'Leave Requests', value: '23', icon: FileText, color: 'bg-[#FF9800]' },
  { label: 'Job Applicants', value: '156', icon: UserPlus, color: 'bg-[#E53935]' },
  { label: 'Training Requests', value: '34', icon: GraduationCap, color: 'bg-[#FFD54F]' },
  { label: 'Payroll Status', value: 'Processed', icon: DollarSign, color: 'bg-[#C62828]' },
];

const attendanceData = [
  { month: 'Jan', present: 1200, absent: 47 },
  { month: 'Feb', present: 1215, absent: 32 },
  { month: 'Mar', present: 1189, absent: 58 },
  { month: 'Apr', present: 1230, absent: 17 },
  { month: 'May', present: 1210, absent: 37 },
  { month: 'Jun', present: 1195, absent: 52 },
];

const recruitmentData = [
  { month: 'Jan', applicants: 120, hired: 15 },
  { month: 'Feb', applicants: 145, hired: 18 },
  { month: 'Mar', applicants: 156, hired: 22 },
  { month: 'Apr', applicants: 134, hired: 19 },
  { month: 'May', applicants: 167, hired: 24 },
  { month: 'Jun', applicants: 148, hired: 20 },
];

const performanceData = [
  { name: 'Outstanding', value: 234, color: '#C62828' },
  { name: 'Very Satisfactory', value: 567, color: '#FFC107' },
  { name: 'Satisfactory', value: 389, color: '#FF9800' },
  { name: 'Needs Improvement', value: 57, color: '#FFD54F' },
];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to the HR Officer Portal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} text-white p-3 rounded-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Attendance Statistics */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Attendance Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar key="bar-present" dataKey="present" fill="#C62828" name="Present" />
              <Bar key="bar-absent" dataKey="absent" fill="#FFC107" name="Absent" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recruitment Statistics */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Recruitment Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={recruitmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line key="line-applicants" type="monotone" dataKey="applicants" stroke="#C62828" name="Applicants" strokeWidth={2} />
              <Line key="line-hired" type="monotone" dataKey="hired" stroke="#FFC107" name="Hired" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Employee Performance Summary</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
              <div className="w-2 h-2 bg-[#C62828] rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">New leave request from John Doe</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
              <div className="w-2 h-2 bg-[#FFC107] rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">New job applicant for Software Engineer</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
              <div className="w-2 h-2 bg-[#FF9800] rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Payroll processed for March 2026</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#C62828] rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Training session scheduled for next week</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}