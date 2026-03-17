import { Users, UserCheck, Calendar, ClipboardList, TrendingUp, Cake } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DepartmentHeadDashboard() {
  const stats = [
    { label: 'Employees in Department', value: '24', icon: Users, color: 'bg-[#C62828]' },
    { label: 'Present Today', value: '22', icon: UserCheck, color: 'bg-[#FFC107]' },
    { label: 'On Leave', value: '2', icon: Calendar, color: 'bg-[#FF9800]' },
    { label: 'Pending Leave Requests', value: '3', icon: ClipboardList, color: 'bg-[#E53935]' },
    { label: 'Applicants for Department', value: '8', icon: TrendingUp, color: 'bg-[#FFD54F]' },
  ];

  const attendanceData = [
    { day: 'Mon', present: 23, absent: 1 },
    { day: 'Tue', present: 22, absent: 2 },
    { day: 'Wed', present: 24, absent: 0 },
    { day: 'Thu', present: 23, absent: 1 },
    { day: 'Fri', present: 22, absent: 2 },
  ];

  const performanceData = [
    { category: 'Outstanding', count: 6 },
    { category: 'Very Satisfactory', count: 12 },
    { category: 'Satisfactory', count: 5 },
    { category: 'Unsatisfactory', count: 1 },
  ];

  const recentActivity = [
    { employee: 'Juan Dela Cruz', action: 'Clocked in', time: '8:30 AM', status: 'on-time' },
    { employee: 'Maria Garcia', action: 'Submitted leave request', time: '9:15 AM', status: 'pending' },
    { employee: 'Pedro Santos', action: 'Clocked out', time: '5:30 PM', status: 'completed' },
    { employee: 'Ana Reyes', action: 'Clocked in', time: '9:05 AM', status: 'late' },
  ];

  const upcomingBirthdays = [
    { name: 'Roberto Cruz', date: 'March 15', position: 'Software Engineer' },
    { name: 'Teresa Lopez', date: 'March 18', position: 'UX Designer' },
    { name: 'Carlos Mendoza', date: 'March 22', position: 'Project Manager' },
  ];

  const announcements = [
    { title: 'Team Meeting - Sprint Planning', date: 'March 12, 2026', type: 'Department' },
    { title: 'Annual Performance Review Period', date: 'March 15-30, 2026', type: 'HR' },
    { title: 'Technology Training Workshop', date: 'March 20, 2026', type: 'Training' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Department Dashboard</h1>
        <p className="text-gray-600">IT Department Overview</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} text-white p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
            <p className="text-3xl text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Attendance Trends */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Department Attendance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line key="present" type="monotone" dataKey="present" stroke="#4CAF50" strokeWidth={2} name="Present" />
              <Line key="absent" type="monotone" dataKey="absent" stroke="#C62828" strokeWidth={2} name="Absent" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Employee Performance Summary</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" angle={-15} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#C62828" name="Employees" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Widgets Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Employee Activity */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Recent Employee Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="pb-3 border-b border-gray-100 last:border-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.employee}</p>
                    <p className="text-xs text-gray-600 mt-1">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <span
                  className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs ${
                    activity.status === 'on-time'
                      ? 'bg-green-100 text-green-700'
                      : activity.status === 'late'
                      ? 'bg-yellow-100 text-yellow-700'
                      : activity.status === 'pending'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Birthdays */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Cake className="w-5 h-5 text-[#C62828]" />
            <h3 className="text-lg text-gray-900">Upcoming Birthdays</h3>
          </div>
          <div className="space-y-3">
            {upcomingBirthdays.map((birthday, index) => (
              <div key={index} className="p-3 bg-[#FFF8E1] rounded-lg border border-[#FFC107]">
                <p className="text-sm font-medium text-gray-900">{birthday.name}</p>
                <p className="text-xs text-gray-600 mt-1">{birthday.position}</p>
                <p className="text-xs text-[#C62828] font-medium mt-1">{birthday.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Department Announcements */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Department Announcements</h3>
          <div className="space-y-3">
            {announcements.map((announcement, index) => (
              <div key={index} className="pb-3 border-b border-gray-100 last:border-0">
                <div className="flex items-start justify-between mb-1">
                  <p className="text-sm font-medium text-gray-900 flex-1">{announcement.title}</p>
                  <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full whitespace-nowrap ml-2">
                    {announcement.type}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}