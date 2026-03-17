import { Search, User, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';
import { useState } from 'react';
import { StatusBadge } from '../../components/shared/status-badge';

interface Employee {
  id: number;
  empId: string;
  name: string;
  department: string;
  position: string;
  status: string;
  personalInfo: {
    fullName: string;
    dateOfBirth: string;
    gender: string;
    civilStatus: string;
    nationality: string;
    contactNumber: string;
    email: string;
    address: string;
  };
  education: Array<{
    level: string;
    school: string;
    degree: string;
    yearGraduated: string;
    honors: string;
  }>;
  eligibility: Array<{
    type: string;
    rating: string;
    dateOfExam: string;
    placeOfExam: string;
    licenseNumber: string;
    validityDate: string;
  }>;
  workExperience: Array<{
    duration: string;
    position: string;
    officeUnit: string;
    supervisor: string;
    agency: string;
    location: string;
    accomplishments: string;
    duties: string;
  }>;
  trainings: Array<{
    title: string;
    provider: string;
    date: string;
    hours: string;
    type: string;
  }>;
}

const employeesData: Employee[] = [
  {
    id: 1,
    empId: 'EMP-001',
    name: 'John Smith',
    department: 'IT',
    position: 'Software Engineer',
    status: 'Active',
    personalInfo: {
      fullName: 'John Michael Smith',
      dateOfBirth: '1990-05-15',
      gender: 'Male',
      civilStatus: 'Single',
      nationality: 'Filipino',
      contactNumber: '+63 912 345 6789',
      email: 'john.smith@company.com',
      address: '123 Main Street, Quezon City, Metro Manila',
    },
    education: [
      {
        level: 'College',
        school: 'University of the Philippines',
        degree: 'BS Computer Science',
        yearGraduated: '2012',
        honors: 'Cum Laude',
      },
      {
        level: 'Secondary',
        school: 'Manila Science High School',
        degree: 'High School Diploma',
        yearGraduated: '2008',
        honors: 'With Honors',
      },
      {
        level: 'Elementary',
        school: 'Quezon City Elementary School',
        degree: 'Elementary Diploma',
        yearGraduated: '2004',
        honors: 'With Honors',
      },
    ],
    eligibility: [
      {
        type: 'Civil Service Professional',
        rating: '85.5%',
        dateOfExam: '2013-03-15',
        placeOfExam: 'Quezon City',
        licenseNumber: 'CSP-2013-123456',
        validityDate: 'Lifetime',
      },
    ],
    workExperience: [
      {
        duration: '2023-01-15 - Present',
        position: 'Software Engineer',
        officeUnit: 'IT Department',
        supervisor: 'Michael Chen',
        agency: 'Government Agency',
        location: 'Quezon City',
        accomplishments: 'Developed HRIS system, improved system performance by 40%',
        duties: 'Design and develop software applications, maintain existing systems, provide technical support.',
      },
      {
        duration: '2018-06-01 - 2022-12-31',
        position: 'Junior Developer',
        officeUnit: 'Development Team',
        supervisor: 'Sarah Johnson',
        agency: 'Tech Solutions Inc.',
        location: 'Makati City',
        accomplishments: 'Built 10+ web applications, mentored junior developers',
        duties: 'Developed web applications, participated in code reviews, fixed bugs.',
      },
    ],
    trainings: [
      {
        title: 'Advanced React Development',
        provider: 'Tech Academy',
        date: '2024-11-15',
        hours: '24',
        type: 'Technical',
      },
      {
        title: 'Agile Project Management',
        provider: 'PMI Philippines',
        date: '2024-05-10',
        hours: '16',
        type: 'Management',
      },
    ],
  },
  {
    id: 2,
    empId: 'EMP-002',
    name: 'Sarah Williams',
    department: 'IT',
    position: 'Project Manager',
    status: 'Active',
    personalInfo: {
      fullName: 'Sarah Ann Williams',
      dateOfBirth: '1988-03-22',
      gender: 'Female',
      civilStatus: 'Married',
      nationality: 'Filipino',
      contactNumber: '+63 917 654 3210',
      email: 'sarah.williams@company.com',
      address: '456 Oak Avenue, Makati City, Metro Manila',
    },
    education: [
      {
        level: 'Graduate Studies',
        school: 'Ateneo de Manila University',
        degree: 'MBA - IT Management',
        yearGraduated: '2019',
        honors: 'With Distinction',
      },
      {
        level: 'College',
        school: 'De La Salle University',
        degree: 'BS Information Technology',
        yearGraduated: '2010',
        honors: 'Magna Cum Laude',
      },
      {
        level: 'Secondary',
        school: 'Assumption College',
        degree: 'High School Diploma',
        yearGraduated: '2006',
        honors: 'With High Honors',
      },
      {
        level: 'Elementary',
        school: 'St. Paul Elementary School',
        degree: 'Elementary Diploma',
        yearGraduated: '2002',
        honors: 'With Honors',
      },
    ],
    eligibility: [
      {
        type: 'PMP Certified',
        rating: 'Certified',
        dateOfExam: '2018-06-10',
        placeOfExam: 'Manila',
        licenseNumber: 'PMP-2018-789012',
        validityDate: '2027-06-10',
      },
      {
        type: 'Civil Service Professional',
        rating: '88.2%',
        dateOfExam: '2011-09-20',
        placeOfExam: 'Quezon City',
        licenseNumber: 'CSP-2011-345678',
        validityDate: 'Lifetime',
      },
    ],
    workExperience: [
      {
        duration: '2022-03-01 - Present',
        position: 'Project Manager',
        officeUnit: 'IT Department',
        supervisor: 'Department Head',
        agency: 'Government Agency',
        location: 'Quezon City',
        accomplishments: 'Led 15+ successful projects, improved team efficiency by 30%',
        duties: 'Manage IT projects, coordinate teams, ensure project delivery on time and within budget.',
      },
      {
        duration: '2015-07-01 - 2022-02-28',
        position: 'Senior Developer',
        officeUnit: 'Development Team',
        supervisor: 'Michael Chen',
        agency: 'Corporate Solutions Inc.',
        location: 'Makati City',
        accomplishments: 'Developed enterprise applications, trained 20+ developers',
        duties: 'Lead development projects, mentor junior developers, conduct code reviews.',
      },
    ],
    trainings: [
      {
        title: 'Scrum Master Certification',
        provider: 'Scrum Alliance',
        date: '2024-08-20',
        hours: '16',
        type: 'Management',
      },
      {
        title: 'Leadership Excellence Program',
        provider: 'Leadership Institute',
        date: '2023-11-15',
        hours: '32',
        type: 'Leadership',
      },
    ],
  },
];

export default function DepartmentHeadEmployees() {
  const [employees] = useState<Employee[]>(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(employeesData[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter employees based on search query
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Department Employees</h1>
          <p className="text-gray-600">View employee records and profiles (Read-only)</p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Employee List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search employees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
              </div>
            </div>

            {/* Employee List */}
            <div className="divide-y divide-gray-200 max-h-[800px] overflow-y-auto">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  onClick={() => setSelectedEmployee(employee)}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedEmployee?.id === employee.id
                      ? 'bg-[#FFF8E1] border-l-4 border-[#C62828]'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{employee.name}</p>
                      <p className="text-xs text-gray-500">{employee.empId}</p>
                    </div>
                    <StatusBadge status={employee.status} />
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{employee.position}</p>
                  <p className="text-xs text-gray-500">{employee.department}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Employee Profile */}
        <div className="lg:col-span-2 space-y-6">
          {selectedEmployee ? (
            <>
              {/* Section 1 - Personal Information */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-10 h-10 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl text-gray-900 mb-1">{selectedEmployee.personalInfo.fullName}</h2>
                    <p className="text-gray-600 mb-2">{selectedEmployee.position}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {selectedEmployee.empId}
                      </span>
                      <StatusBadge status={selectedEmployee.status} />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg text-gray-900 mb-4 font-medium">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Date of Birth:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.dateOfBirth}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Gender:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.gender}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Civil Status:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.civilStatus}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Nationality:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.nationality}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500 flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      Contact Number:
                    </span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.contactNumber}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500 flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      Email Address:
                    </span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.email}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Residential Address:
                    </span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Section 2 - Educational Background */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg text-gray-900 mb-4 font-medium">Educational Background</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-700">Level</th>
                        <th className="px-4 py-3 text-left text-gray-700">Name of School</th>
                        <th className="px-4 py-3 text-left text-gray-700">Degree/Course</th>
                        <th className="px-4 py-3 text-left text-gray-700">Year Graduated</th>
                        <th className="px-4 py-3 text-left text-gray-700">Honors</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedEmployee.education.map((edu, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900">{edu.level}</td>
                          <td className="px-4 py-3 text-gray-600">{edu.school}</td>
                          <td className="px-4 py-3 text-gray-600">{edu.degree}</td>
                          <td className="px-4 py-3 text-gray-600">{edu.yearGraduated}</td>
                          <td className="px-4 py-3 text-gray-600">{edu.honors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 3 - Eligibility */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg text-gray-900 mb-4 font-medium">Civil Service Eligibility</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-700">Eligibility Type</th>
                        <th className="px-4 py-3 text-left text-gray-700">Rating</th>
                        <th className="px-4 py-3 text-left text-gray-700">Date of Exam</th>
                        <th className="px-4 py-3 text-left text-gray-700">Place of Exam</th>
                        <th className="px-4 py-3 text-left text-gray-700">License Number</th>
                        <th className="px-4 py-3 text-left text-gray-700">Validity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedEmployee.eligibility.map((elig, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900">{elig.type}</td>
                          <td className="px-4 py-3 text-gray-600">{elig.rating}</td>
                          <td className="px-4 py-3 text-gray-600">{elig.dateOfExam}</td>
                          <td className="px-4 py-3 text-gray-600">{elig.placeOfExam}</td>
                          <td className="px-4 py-3 text-gray-600">{elig.licenseNumber}</td>
                          <td className="px-4 py-3 text-gray-600">{elig.validityDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 4 - Work Experience */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg text-gray-900 mb-4 font-medium">Work Experience</h3>
                <div className="space-y-4">
                  {selectedEmployee.workExperience.map((work, index) => (
                    <div key={index} className="border-l-4 border-[#C62828] pl-4 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-base text-gray-900 font-medium">{work.position}</h4>
                          <p className="text-sm text-gray-600">{work.agency} - {work.location}</p>
                        </div>
                        <span className="text-sm text-[#C62828] font-medium whitespace-nowrap ml-4">{work.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Office/Unit:</strong> {work.officeUnit}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Supervisor:</strong> {work.supervisor}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Duties:</strong> {work.duties}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Accomplishments:</strong> {work.accomplishments}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5 - Training Programs */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg text-gray-900 mb-4 font-medium">Training Programs</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-700">Training Title</th>
                        <th className="px-4 py-3 text-left text-gray-700">Training Provider</th>
                        <th className="px-4 py-3 text-left text-gray-700">Date</th>
                        <th className="px-4 py-3 text-left text-gray-700">Hours</th>
                        <th className="px-4 py-3 text-left text-gray-700">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedEmployee.trainings.map((training, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900">{training.title}</td>
                          <td className="px-4 py-3 text-gray-600">{training.provider}</td>
                          <td className="px-4 py-3 text-gray-600">{training.date}</td>
                          <td className="px-4 py-3 text-gray-600">{training.hours}</td>
                          <td className="px-4 py-3 text-gray-600">{training.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Read-Only Notice */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Employee records are view-only for Department Heads. Contact HR to update official employment data.
                </p>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 border border-gray-100 text-center">
              <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Select an employee to view their profile</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
