import { useState } from 'react';
import { GraduationCap, CheckCircle, XCircle, Calendar, Plus, X, Upload as UploadIcon } from 'lucide-react';

const trainingRequests = [
  { id: 1, empId: 'EMP-001', name: 'John Smith', department: 'IT', course: 'Advanced JavaScript Programming', provider: 'Tech Academy', duration: '40 hours', cost: '₱15,000', status: 'Pending', submitted: '2026-03-05' },
  { id: 2, empId: 'EMP-002', name: 'Jane Doe', department: 'HR', course: 'Strategic HR Management', provider: 'HR Institute', duration: '32 hours', cost: '₱12,000', status: 'Approved', submitted: '2026-03-01' },
  { id: 3, empId: 'EMP-003', name: 'Mike Johnson', department: 'Finance', course: 'Financial Analytics', provider: 'Finance School', duration: '24 hours', cost: '₱18,000', status: 'Approved', submitted: '2026-02-28' },
  { id: 4, empId: 'EMP-004', name: 'Sarah Williams', department: 'Marketing', course: 'Digital Marketing Mastery', provider: 'Marketing Pro', duration: '36 hours', cost: '₱14,000', status: 'Pending', submitted: '2026-03-08' },
  { id: 5, empId: 'EMP-005', name: 'David Brown', department: 'IT', course: 'Cloud Architecture', provider: 'Cloud Academy', duration: '48 hours', cost: '₱20,000', status: 'Pending', submitted: '2026-03-09' },
];

const trainingRecords = [
  { id: 1, empId: 'EMP-001', name: 'John Smith', course: 'React Development', completedDate: '2026-02-15', duration: '40 hours', status: 'Completed' },
  { id: 2, empId: 'EMP-002', name: 'Jane Doe', course: 'Leadership Skills', completedDate: '2026-02-20', duration: '32 hours', status: 'Completed' },
  { id: 3, empId: 'EMP-003', name: 'Mike Johnson', course: 'Excel Advanced', completedDate: '2026-01-30', duration: '24 hours', status: 'Completed' },
  { id: 4, empId: 'EMP-004', name: 'Sarah Williams', course: 'Social Media Marketing', completedDate: 'Ongoing', duration: '36 hours', status: 'In Progress' },
];

const upcomingTrainings = [
  { id: 1, title: 'Cybersecurity Awareness', date: '2026-03-15', slots: 25, enrolled: 18, instructor: 'John Security' },
  { id: 2, title: 'Project Management Fundamentals', date: '2026-03-20', slots: 30, enrolled: 22, instructor: 'Jane PM' },
  { id: 3, title: 'Effective Communication', date: '2026-03-25', slots: 40, enrolled: 35, instructor: 'Mike Speaker' },
];

export default function TrainingManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Training record added successfully!');
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Training Management</h1>
          <p className="text-gray-600">Manage training requests, approvals, and employee training records</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Training
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Pending Requests</p>
            <Calendar className="w-5 h-5 text-[#FFC107]" />
          </div>
          <p className="text-2xl text-gray-900">34</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Approved</p>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl text-gray-900">156</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Completed</p>
            <GraduationCap className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl text-gray-900">423</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Budget Used</p>
            <GraduationCap className="w-5 h-5 text-[#C62828]" />
          </div>
          <p className="text-2xl text-gray-900">₱2.4M</p>
          <p className="text-xs text-gray-500 mt-1">68% of ₱3.5M budget</p>
        </div>
      </div>

      {/* Training Request List */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <h3 className="text-lg text-gray-900 mb-4">Training Requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-700">Employee</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Department</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Course</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Provider</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Duration</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Cost</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {trainingRequests.map((request) => (
                <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm text-gray-900">{request.name}</p>
                      <p className="text-xs text-gray-500">{request.empId}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.department}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{request.course}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.provider}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.duration}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{request.cost}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      request.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-[#FFF8E1] text-[#C62828]'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {request.status === 'Pending' && (
                      <div className="flex gap-2">
                        <button className="text-green-600 hover:text-green-700" title="Approve">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-700" title="Reject">
                          <XCircle className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Trainings */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Upcoming Training Sessions</h3>
          <div className="space-y-4">
            {upcomingTrainings.map((training) => (
              <div key={training.id} className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm text-gray-900 mb-2">{training.title}</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                  <div>
                    <span className="text-gray-500">Date:</span> {training.date}
                  </div>
                  <div>
                    <span className="text-gray-500">Instructor:</span> {training.instructor}
                  </div>
                  <div>
                    <span className="text-gray-500">Slots:</span> {training.slots}
                  </div>
                  <div>
                    <span className="text-gray-500">Enrolled:</span> {training.enrolled}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-[#C62828] h-2 rounded-full"
                      style={{ width: `${(training.enrolled / training.slots) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">
                    {training.slots - training.enrolled} left
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Records */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Recent Training Records</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-700">Employee</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-700">Course</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-700">Completed</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {trainingRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm text-gray-900">{record.name}</p>
                        <p className="text-xs text-gray-500">{record.empId}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{record.course}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{record.completedDate}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        record.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-[#FFF8E1] text-[#C62828]'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Training Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl text-[#C62828] mb-1">Add Training Record</h2>
                <p className="text-sm text-gray-600">Record completed training or upcoming training session</p>
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
              {/* Training Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Training Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Training Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Advanced React Development"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Training Provider <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Tech Training Center Philippines"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date Conducted <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Hours <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        placeholder="24"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Training Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Training Type</option>
                      <option value="Technical">Technical</option>
                      <option value="Managerial">Managerial</option>
                      <option value="Leadership">Leadership</option>
                      <option value="Compliance">Compliance</option>
                      <option value="Soft Skills">Soft Skills</option>
                      <option value="Professional Development">Professional Development</option>
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
                  <Plus className="w-4 h-4" />
                  Add Training
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
