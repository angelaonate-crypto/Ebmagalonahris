import { Bell, CheckCircle, XCircle, Trash2 } from 'lucide-react';

const notifications = [
  { id: 1, type: 'leave', title: 'New leave request', message: 'John Smith requested 6 days of vacation leave', time: '2 hours ago', read: false },
  { id: 2, type: 'applicant', title: 'New job applicant', message: 'Jane Doe applied for Software Engineer position', time: '4 hours ago', read: false },
  { id: 3, type: 'payroll', title: 'Payroll processed', message: 'March 2026 payroll has been successfully processed', time: '1 day ago', read: true },
  { id: 4, type: 'training', title: 'Training approved', message: 'Mike Johnson\'s training request has been approved', time: '1 day ago', read: true },
  { id: 5, type: 'performance', title: 'Performance review due', message: '5 employees pending performance evaluation', time: '2 days ago', read: true },
  { id: 6, type: 'leave', title: 'Leave approved', message: 'Sarah Williams\' leave request has been approved', time: '2 days ago', read: true },
  { id: 7, type: 'recruitment', title: 'Interview scheduled', message: 'Interview scheduled for David Brown on March 15', time: '3 days ago', read: true },
  { id: 8, type: 'system', title: 'System update', message: 'HRIS system will undergo maintenance on March 20', time: '3 days ago', read: true },
];

export default function Notifications() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Notifications</h1>
          <p className="text-gray-600">View all system notifications and alerts</p>
        </div>
        <button className="text-[#C62828] hover:text-[#B71C1C] text-sm">
          Mark all as read
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Unread</p>
            <Bell className="w-5 h-5 text-[#C62828]" />
          </div>
          <p className="text-2xl text-gray-900">2</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Today</p>
            <Bell className="w-5 h-5 text-[#FFC107]" />
          </div>
          <p className="text-2xl text-gray-900">2</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">This Week</p>
            <Bell className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl text-gray-900">8</p>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100">
        <div className="divide-y divide-gray-100">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-gray-50 transition-colors ${
                !notification.read ? 'bg-[#FFF8E1]/30' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  notification.type === 'leave' ? 'bg-blue-100' :
                  notification.type === 'applicant' ? 'bg-green-100' :
                  notification.type === 'payroll' ? 'bg-[#FFF8E1]' :
                  notification.type === 'training' ? 'bg-purple-100' :
                  notification.type === 'performance' ? 'bg-orange-100' :
                  notification.type === 'recruitment' ? 'bg-pink-100' :
                  'bg-gray-100'
                }`}>
                  <Bell className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-sm text-gray-900">{notification.title}</h4>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-[#C62828] rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
                <div className="flex gap-2">
                  {!notification.read && (
                    <button className="text-green-600 hover:text-green-700" title="Mark as read">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  )}
                  <button className="text-gray-400 hover:text-red-600" title="Delete">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
