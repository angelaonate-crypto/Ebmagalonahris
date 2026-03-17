import { Users, UserCheck, Calendar, ClipboardList, GraduationCap, TrendingUp, Cake } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

export default function HRStaffDashboard() {
  // Attendance trend data
  const attendanceData = [
    { id: 'mon', day: 'Mon', present: 145, absent: 5 },
    { id: 'tue', day: 'Tue', present: 148, absent: 2 },
    { id: 'wed', day: 'Wed', present: 142, absent: 8 },
    { id: 'thu', day: 'Thu', present: 147, absent: 3 },
    { id: 'fri', day: 'Fri', present: 150, absent: 0 },
  ];

  // Department distribution
  const departmentData = [
    { id: 'it', name: 'IT', value: 45, color: '#C62828' },
    { id: 'hr', name: 'HR', value: 20, color: '#FFC107' },
    { id: 'finance', name: 'Finance', value: 35, color: '#4CAF50' },
    { id: 'ops', name: 'Operations', value: 50, color: '#2196F3' },
  ];

  // Recent activity
  const recentActivity = [
    { id: 1, action: 'New employee onboarded', employee: 'Juan Dela Cruz', time: '10 minutes ago' },
    { id: 2, action: 'Leave request submitted', employee: 'Maria Santos', time: '1 hour ago' },
    { id: 3, action: 'Attendance record updated', employee: 'Pedro Reyes', time: '2 hours ago' },
    { id: 4, action: 'Training completed', employee: 'Ana Garcia', time: '3 hours ago' },
  ];

  // Upcoming birthdays
  const upcomingBirthdays = [
    { id: 1, name: 'Roberto Martinez', department: 'IT', date: 'March 15' },
    { id: 2, name: 'Lisa Cruz', department: 'HR', date: 'March 18' },
    { id: 3, name: 'Carlos Lopez', department: 'Finance', date: 'March 20' },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Dashboard</h1>
        <p className="text-gray-600">HR Staff Operations Overview</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {/* Total Employees */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">150</h3>
          <p className="text-sm text-gray-600">Total Employees</p>
        </div>

        {/* Employees Present Today */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">147</h3>
          <p className="text-sm text-gray-600">Present Today</p>
        </div>

        {/* Pending Leave Requests */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
          <p className="text-sm text-gray-600">Pending Leave</p>
        </div>

        {/* New Applicants */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">8</h3>
          <p className="text-sm text-gray-600">New Applicants</p>
        </div>

        {/* Training Requests */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#C62828]" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">5</h3>
          <p className="text-sm text-gray-600">Training Requests</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Attendance Trends */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-[#C62828]" />
            <h2 className="text-lg font-semibold text-gray-900">Attendance Trends (This Week)</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar key="present" dataKey="present" fill="#4CAF50" name="Present" radius={[4, 4, 0, 0]} />
              <Bar key="absent" dataKey="absent" fill="#C62828" name="Absent" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Department Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-[#C62828]" />
            <h2 className="text-lg font-semibold text-gray-900">Employee Distribution by Department</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentData.map((entry) => (
                  <Cell key={`cell-${entry.id}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Widgets Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Employee Activity */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Employee Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-[#C62828] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.employee}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Birthdays */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Cake className="w-5 h-5 text-[#C62828]" />
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Birthdays</h2>
          </div>
          <div className="space-y-3">
            {upcomingBirthdays.map((birthday) => (
              <div key={birthday.id} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm font-medium text-gray-900">{birthday.name}</p>
                <p className="text-xs text-gray-600">{birthday.department}</p>
                <p className="text-xs text-yellow-700 font-medium mt-1">{birthday.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HR Announcements */}
      <div className="mt-6 bg-gradient-to-r from-[#C62828] to-[#B71C1C] rounded-lg shadow-md p-6 text-white">
        <h2 className="text-lg font-semibold mb-3">Important HR Announcements</h2>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-yellow-300">•</span>
            <p className="text-sm">Monthly payroll processing deadline: March 25, 2026</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-300">•</span>
            <p className="text-sm">New employee orientation scheduled for March 20, 2026</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-300">•</span>
            <p className="text-sm">Updated leave policy effective April 1, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}