import { useState } from 'react';
import { Bell, Calendar, AlertCircle, Info, CheckCircle, Plus, X } from 'lucide-react';

export default function HRStaffAnnouncements() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Announcement created successfully!');
    setIsModalOpen(false);
  };
  // Mock announcements
  const announcements = [
    {
      id: 1,
      title: 'Updated Leave Policy Effective April 1, 2026',
      category: 'Policy Update',
      date: '2026-03-10',
      priority: 'high',
      content: 'The new leave policy includes updated provisions for sick leave, vacation leave, and emergency leave. All employees are required to review the updated policy document available in the HR portal.',
      icon: AlertCircle,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100',
    },
    {
      id: 2,
      title: 'Leadership Development Program - March 20-22, 2026',
      category: 'Training Schedule',
      date: '2026-03-08',
      priority: 'medium',
      content: 'The Advanced Leadership Development Program will be conducted at the main office training room. Participants should confirm attendance by March 15, 2026.',
      icon: Calendar,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
    },
    {
      id: 3,
      title: 'Monthly Payroll Processing Deadline',
      category: 'HR Notice',
      date: '2026-03-05',
      priority: 'high',
      content: 'All payroll data must be submitted by March 25, 2026. Late submissions will be processed in the next payroll cycle. Please ensure timesheets and attendance records are accurate.',
      icon: AlertCircle,
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-100',
    },
    {
      id: 4,
      title: 'New Employee Orientation - March 20, 2026',
      category: 'HR Notice',
      date: '2026-03-03',
      priority: 'medium',
      content: 'Orientation for new employees will be held in Conference Room A from 9:00 AM to 4:00 PM. All new hires are required to attend.',
      icon: Info,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
    },
    {
      id: 5,
      title: 'Health and Wellness Program Enrollment',
      category: 'Employee Benefit',
      date: '2026-03-01',
      priority: 'low',
      content: 'Enrollment for the company\'s health and wellness program is now open. Employees can register through the HR portal until March 31, 2026.',
      icon: CheckCircle,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
    },
    {
      id: 6,
      title: 'System Maintenance Notice',
      category: 'System Update',
      date: '2026-02-28',
      priority: 'medium',
      content: 'The HRIS will undergo scheduled maintenance on March 15, 2026 from 12:00 AM to 4:00 AM. The system will be temporarily unavailable during this period.',
      icon: Info,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
    },
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">High Priority</span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">Medium Priority</span>;
      case 'low':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">Low Priority</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">HR Announcements</h1>
          <p className="text-gray-600">Stay updated with HR policies, training schedules, and important notices</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Announcement
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button className="px-4 py-2 bg-[#C62828] text-white rounded-lg text-sm font-medium">
          All Announcements
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
          Policy Updates
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
          Training Schedules
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
          HR Notices
        </button>
      </div>

      {/* Announcements Grid */}
      <div className="grid grid-cols-1 gap-6">
        {announcements.map((announcement) => {
          const Icon = announcement.icon;
          return (
            <div
              key={announcement.id}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg ${announcement.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${announcement.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {announcement.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {announcement.date}
                          </span>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                            {announcement.category}
                          </span>
                        </div>
                      </div>
                      {getPriorityBadge(announcement.priority)}
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Important Reminder */}
      <div className="mt-8 bg-gradient-to-r from-[#C62828] to-[#B71C1C] rounded-lg shadow-md p-6 text-white">
        <div className="flex items-start gap-3">
          <Bell className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Important Reminders</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">•</span>
                <span>All HR Staff must review new policy updates before implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">•</span>
                <span>Training coordination should be completed at least 2 weeks in advance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">•</span>
                <span>Contact the HR Officer for any clarifications on announcements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Create Announcement Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl text-[#C62828] mb-1">Create Announcement</h2>
                <p className="text-sm text-gray-600">Publish a new announcement for employees</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6">
              {/* Announcement Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Announcement Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Announcement Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Updated Leave Policy Effective April 1, 2026"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Announcement Content <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Write the full announcement message here..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">Provide detailed information about the announcement.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Publish Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                      >
                        <option value="">Select Category</option>
                        <option value="Policy Update">Policy Update</option>
                        <option value="Training Schedule">Training Schedule</option>
                        <option value="HR Notice">HR Notice</option>
                        <option value="Employee Benefit">Employee Benefit</option>
                        <option value="System Update">System Update</option>
                        <option value="Company Event">Company Event</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Audience <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Audience</option>
                      <option value="All Employees">All Employees</option>
                      <option value="HR Department">HR Department Only</option>
                      <option value="IT Department">IT Department Only</option>
                      <option value="Finance Department">Finance Department Only</option>
                      <option value="Operations Department">Operations Department Only</option>
                      <option value="Marketing Department">Marketing Department Only</option>
                      <option value="Sales Department">Sales Department Only</option>
                      <option value="Management">Management Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Priority</option>
                      <option value="high">High Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="low">Low Priority</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#C62828] text-white rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  Publish Announcement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
