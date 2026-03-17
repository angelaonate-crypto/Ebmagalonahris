import { Bell, Calendar } from 'lucide-react';

export default function DepartmentHeadAnnouncements() {
  const announcements = [
    {
      id: 1,
      title: 'Team Meeting - Sprint Planning',
      content: 'Reminder: Sprint planning meeting tomorrow at 2:00 PM in Conference Room A. Please prepare your task estimates.',
      type: 'Department',
      priority: 'high',
      date: 'March 11, 2026',
      author: 'Department Head'
    },
    {
      id: 2,
      title: 'Annual Performance Review Period',
      content: 'The annual performance review period will run from March 15-30, 2026. Please complete all employee evaluations by the deadline.',
      type: 'HR',
      priority: 'high',
      date: 'March 10, 2026',
      author: 'HR Department'
    },
    {
      id: 3,
      title: 'Technology Training Workshop',
      content: 'Advanced React and TypeScript training workshop scheduled for March 20, 2026. Registration is open for all interested team members.',
      type: 'Training',
      priority: 'medium',
      date: 'March 9, 2026',
      author: 'Training Department'
    },
    {
      id: 4,
      title: 'Office Holiday - March 25',
      content: 'Reminder: March 25, 2026 is a company holiday. Offices will be closed.',
      type: 'HR',
      priority: 'medium',
      date: 'March 8, 2026',
      author: 'HR Department'
    },
    {
      id: 5,
      title: 'New Project Kickoff',
      content: 'We are starting a new customer portal project next week. Project kickoff meeting on March 15 at 10:00 AM.',
      type: 'Department',
      priority: 'high',
      date: 'March 7, 2026',
      author: 'Department Head'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-700 border-green-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Department': return 'bg-[#C62828] text-white';
      case 'HR': return 'bg-blue-600 text-white';
      case 'Training': return 'bg-green-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Announcements</h1>
        <p className="text-gray-600">Department and HR announcements</p>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(announcement.type)}`}>
                      {announcement.type}
                    </span>
                    <span className={`px-2 py-1 rounded border text-xs font-medium ${getPriorityColor(announcement.priority)}`}>
                      {announcement.priority.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{announcement.title}</h3>
                  <p className="text-sm text-gray-700">{announcement.content}</p>
                </div>
                <Bell className="w-5 h-5 text-[#C62828] flex-shrink-0 ml-4" />
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{announcement.date}</span>
                </div>
                <span className="text-xs text-gray-600">By: {announcement.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
