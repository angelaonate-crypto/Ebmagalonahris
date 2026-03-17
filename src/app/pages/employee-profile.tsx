import { Mail, Phone, Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const employeeProfile = {
  id: 'EMP-001',
  name: 'John Smith',
  position: 'Senior Software Engineer',
  department: 'IT Department',
  email: 'john.smith@company.com',
  phone: '+63 912 345 6789',
  address: 'Manila, Philippines',
  dateOfBirth: '1990-05-15',
  joinDate: '2023-01-15',
  employmentStatus: 'Active',
  employmentType: 'Full-time',
  reportingTo: 'Jane Manager',
  photo: null,
};

const educationHistory = [
  { degree: 'Bachelor of Science in Computer Science', institution: 'University of the Philippines', year: '2012' },
  { degree: 'Master of Science in Information Technology', institution: 'Ateneo de Manila', year: '2015' },
];

const workHistory = [
  { position: 'Software Engineer', company: 'Tech Corp', duration: '2018-2023', description: 'Full-stack development' },
  { position: 'Junior Developer', company: 'StartUp Inc', duration: '2015-2018', description: 'Web development' },
];

export default function EmployeeProfile() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Employee Profile</h1>
        <p className="text-gray-600">View detailed employee information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-[#C62828] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
              JS
            </div>
            <h2 className="text-xl text-gray-900 mb-1">{employeeProfile.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{employeeProfile.position}</p>
            <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
              {employeeProfile.employmentStatus}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{employeeProfile.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{employeeProfile.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{employeeProfile.address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{employeeProfile.department}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">Joined {employeeProfile.joinDate}</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-[#C62828] text-white px-4 py-2 rounded-lg hover:bg-[#B71C1C] transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Employee ID</p>
                <p className="text-sm text-gray-900">{employeeProfile.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Date of Birth</p>
                <p className="text-sm text-gray-900">{employeeProfile.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Employment Type</p>
                <p className="text-sm text-gray-900">{employeeProfile.employmentType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Reporting To</p>
                <p className="text-sm text-gray-900">{employeeProfile.reportingTo}</p>
              </div>
            </div>
          </div>

          {/* Education History */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg text-gray-900 mb-4">Education History</h3>
            <div className="space-y-4">
              {educationHistory.map((edu, index) => (
                <div key={index} className="border-l-4 border-[#C62828] pl-4">
                  <p className="text-sm text-gray-900">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg text-gray-900 mb-4">Work History</h3>
            <div className="space-y-4">
              {workHistory.map((work, index) => (
                <div key={index} className="border-l-4 border-[#FFC107] pl-4">
                  <p className="text-sm text-gray-900">{work.position}</p>
                  <p className="text-sm text-gray-600">{work.company}</p>
                  <p className="text-xs text-gray-500">{work.duration}</p>
                  <p className="text-xs text-gray-600 mt-1">{work.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg text-gray-900 mb-4">Performance Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Latest Rating</p>
                <p className="text-2xl text-green-600">92</p>
                <p className="text-xs text-gray-500">Outstanding</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Leave Balance</p>
                <p className="text-2xl text-gray-900">12</p>
                <p className="text-xs text-gray-500">Days remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
