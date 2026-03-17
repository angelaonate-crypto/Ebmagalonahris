import { Calendar, Clock, FileText, TrendingUp, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stats = [
  { label: "Today's Attendance", value: 'Present', icon: CheckCircle, color: 'bg-[#C62828]' },
  { label: 'Leave Balance', value: '12 days', icon: Calendar, color: 'bg-[#FFC107]' },
  { label: 'Pending Requests', value: '2', icon: FileText, color: 'bg-[#FF9800]' },
  { label: 'Total Hours (Week)', value: '40h', icon: Clock, color: 'bg-[#FFD54F]' },
];

const attendanceData = [
  { id: 'jan', month: 'Jan', present: 20, late: 2 },
  { id: 'feb', month: 'Feb', present: 19, late: 1 },
  { id: 'mar', month: 'Mar', present: 8, late: 1 },
  { id: 'apr', month: 'Apr', present: 0, late: 0 },
  { id: 'may', month: 'May', present: 0, late: 0 },
  { id: 'jun', month: 'Jun', present: 0, late: 0 },
];

export default function EmployeeDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Employee Portal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        {/* Attendance Chart */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">My Attendance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar key="present" dataKey="present" fill="#C62828" name="Present Days" radius={[4, 4, 0, 0]} />
              <Bar key="late" dataKey="late" fill="#FFC107" name="Late Days" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Announcements */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Recent Announcements</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
              <div className="w-2 h-2 bg-[#C62828] rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Company Holiday - March 15, 2026</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
              <div className="w-2 h-2 bg-[#FFC107] rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Payroll Processing Update</p>
                <p className="text-xs text-gray-500">4 days ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
              <div className="w-2 h-2 bg-[#FF9800] rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">New Health Insurance Policy</p>
                <p className="text-xs text-gray-500">1 week ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#C62828] rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Team Building Event - March 22</p>
                <p className="text-xs text-gray-500">2 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="p-4 bg-[#FFF8E1] rounded-lg border border-gray-200">
              <p className="text-sm font-medium text-gray-700">National Holiday</p>
              <p className="text-lg text-gray-900 mt-1">March 15, 2026</p>
              <p className="text-xs text-gray-600 mt-1">Office Closed</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Team Building Event</p>
              <p className="text-lg text-gray-900 mt-1">March 22, 2026</p>
              <p className="text-xs text-gray-600 mt-1">Annual Company Outing</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Performance Review</p>
              <p className="text-lg text-gray-900 mt-1">March 30, 2026</p>
              <p className="text-xs text-gray-600 mt-1">Q1 Review Meeting</p>
            </div>
          </div>
        </div>

        {/* This Week's Attendance */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">This Week's Attendance</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">Monday</p>
                <p className="text-xs text-gray-500">08:30 AM - 05:30 PM</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Present</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">Tuesday</p>
                <p className="text-xs text-gray-500">08:25 AM - 05:35 PM</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Present</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">Wednesday</p>
                <p className="text-xs text-gray-500">08:35 AM - 05:30 PM</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Present</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-900">Thursday</p>
                <p className="text-xs text-gray-500">09:15 AM - 05:30 PM</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Late</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div>
                <p className="text-sm text-gray-900">Friday</p>
                <p className="text-xs text-gray-500">In Progress</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}