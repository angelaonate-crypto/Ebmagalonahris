import { Bell, Calendar, User } from 'lucide-react';

export default function EmployeeAnnouncements() {
  const announcements = [
    {
      id: 1,
      title: 'Company Holiday - March 15, 2026',
      message:
        'The office will be closed on March 15 for the national holiday. All employees are encouraged to spend time with their families. Regular operations will resume on March 16.',
      date: '2026-03-08',
      postedBy: 'HR Department',
      category: 'Holiday',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Payroll Processing Update',
      message:
        'March payroll will be processed on March 25. Please ensure all timesheets, attendance records, and leave requests are submitted by March 23 to avoid delays in salary processing.',
      date: '2026-03-05',
      postedBy: 'HR Department',
      category: 'Payroll',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'New Health Insurance Policy',
      message:
        'Updated health insurance benefits are now available for all employees. The new policy includes dental coverage and increased hospitalization limits. Please check your email for the complete policy document and enrollment instructions.',
      date: '2026-03-01',
      postedBy: 'HR Department',
      category: 'Benefits',
      priority: 'medium',
    },
    {
      id: 4,
      title: 'Team Building Event - March 22',
      message:
        'Join us for our annual team building event on March 22 at Eco Park Resort. Activities include team games, outdoor adventures, and a special dinner. Please confirm your attendance by March 15.',
      date: '2026-02-28',
      postedBy: 'HR Department',
      category: 'Event',
      priority: 'low',
    },
    {
      id: 5,
      title: 'Performance Review Cycle Q1 2026',
      message:
        'The Q1 performance review cycle will begin on March 30. All employees are required to complete their self-assessments by April 5. Managers will conduct one-on-one review meetings from April 10-20.',
      date: '2026-02-25',
      postedBy: 'HR Department',
      category: 'Performance',
      priority: 'high',
    },
    {
      id: 6,
      title: 'IT Security Training',
      message:
        'Mandatory IT security training session will be conducted on March 18 from 2:00 PM to 4:00 PM. All employees must attend to learn about cybersecurity best practices and data protection policies.',
      date: '2026-02-20',
      postedBy: 'IT Department',
      category: 'Training',
      priority: 'medium',
    },
    {
      id: 7,
      title: 'Office Maintenance Notice',
      message:
        'Scheduled maintenance work will be performed on the 3rd floor this Saturday (March 13) from 8:00 AM to 5:00 PM. Please ensure all workstations are cleared and computers are shut down by Friday evening.',
      date: '2026-02-15',
      postedBy: 'Facilities',
      category: 'Maintenance',
      priority: 'low',
    },
    {
      id: 8,
      title: 'Employee Wellness Program Launch',
      message:
        'We are excited to introduce our new Employee Wellness Program! The program includes fitness classes, mental health support, nutrition counseling, and health screenings. Registration opens March 20.',
      date: '2026-02-10',
      postedBy: 'HR Department',
      category: 'Wellness',
      priority: 'medium',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Holiday: 'bg-purple-100 text-purple-700',
      Payroll: 'bg-green-100 text-green-700',
      Benefits: 'bg-blue-100 text-blue-700',
      Event: 'bg-pink-100 text-pink-700',
      Performance: 'bg-orange-100 text-orange-700',
      Training: 'bg-indigo-100 text-indigo-700',
      Maintenance: 'bg-gray-100 text-gray-700',
      Wellness: 'bg-teal-100 text-teal-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Announcements</h1>
        <p className="text-gray-600">Stay updated with the latest company news and announcements</p>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="bg-[#C62828] p-3 rounded-lg flex-shrink-0">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900 mb-2">{announcement.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`}>
                      {announcement.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                        announcement.priority
                      )}`}
                    >
                      {announcement.priority.charAt(0).toUpperCase() + announcement.priority.slice(1)} Priority
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">{announcement.message}</p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>Posted by {announcement.postedBy}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{announcement.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (shown when no announcements) */}
      {announcements.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-12 border border-gray-100 text-center">
          <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Announcements</h3>
          <p className="text-gray-600">There are no announcements at the moment. Check back later for updates.</p>
        </div>
      )}
    </div>
  );
}