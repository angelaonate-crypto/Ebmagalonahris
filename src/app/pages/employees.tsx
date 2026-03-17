import { Plus, Search, Filter, User, Mail, Phone, Briefcase, Users, GraduationCap, Award, BookOpen, ChevronRight, Heart, FileText, CheckCircle, X, Upload as UploadIcon } from 'lucide-react';
import { useState } from 'react';

// Sample employee data with complete PDS structure
const employeesData = [
  {
    id: 1,
    // Profile Header
    employeeId: 'EMP-2024-001',
    surname: 'Dela Cruz',
    firstName: 'Juan',
    middleName: 'Santos',
    nameExtension: '',
    position: 'Software Engineer',
    department: 'Information Technology',
    status: 'Active',
    employmentStatus: 'Regular',
    dateHired: '2024-01-15',
    
    // Section I - Personal Information
    dateOfBirth: '1995-06-15',
    placeOfBirth: 'Manila, Philippines',
    sex: 'Male',
    civilStatus: 'Married',
    citizenship: 'Filipino',
    height: '5\'8"',
    weight: '70 kg',
    bloodType: 'O+',
    umidNumber: '0000-0000000-0',
    pagibigNumber: '1234-5678-9012',
    philhealthNumber: '12-345678901-2',
    philsysNumber: '1234-5678-9012-3456',
    tinNumber: '123-456-789-000',
    agencyEmployeeNumber: 'EMP-2024-001',
    residentialAddress: '123 Mabini Street, Quezon City, Metro Manila 1100',
    permanentAddress: '456 Rizal Avenue, Caloocan City, Metro Manila 1400',
    telephoneNumber: '(02) 8123-4567',
    mobileNumber: '+63 912 345 6789',
    email: 'juan.delacruz@company.com',
    
    // Section II - Family Background
    spouse: {
      surname: 'Dela Cruz',
      firstName: 'Maria Clara',
      middleName: 'Reyes',
      occupation: 'Teacher',
      employer: 'Department of Education',
      businessAddress: '789 Education St., QC',
      telephone: '(02) 8234-5678'
    },
    father: { surname: 'Dela Cruz', firstName: 'Pedro', middleName: 'Lopez' },
    mother: { surname: 'Santos', firstName: 'Rosa', middleName: 'Garcia' },
    children: [
      { name: 'Juan Carlos Dela Cruz Jr.', dateOfBirth: '2020-03-15' },
      { name: 'Maria Sofia Dela Cruz', dateOfBirth: '2022-08-20' }
    ],
    
    // Section III - Educational Background
    education: [
      { level: 'Graduate Studies', school: 'Ateneo de Manila University', course: 'Master of Science in Computer Science', period: '2019-2021', units: '36 units', yearGraduated: '2021', honors: 'With Distinction' },
      { level: 'College', school: 'University of the Philippines - Diliman', course: 'BS Computer Science', period: '2013-2017', units: '160 units', yearGraduated: '2017', honors: 'Cum Laude' },
      { level: 'Secondary', school: 'Quezon City Science High School', course: 'Science, Technology', period: '2009-2013', units: 'Completed', yearGraduated: '2013', honors: 'With Honors' },
      { level: 'Elementary', school: 'QC Central Elementary School', course: '', period: '2003-2009', units: 'Completed', yearGraduated: '2009', honors: 'With Honors' }
    ],
    
    // Section IV - Civil Service Eligibility
    eligibility: [
      { type: 'Career Service Professional', rating: '85.50%', dateOfExamination: '2017-08-15', placeOfExamination: 'CSC Manila', licenseNumber: 'CSC-2017-08-123456', validityDate: 'Lifetime' }
    ],
    
    // Section V - Work Experience
    workExperience: [
      { period: 'Jan 2024 - Present', position: 'Software Engineer', company: 'Tech Solutions Inc., Makati', status: 'Regular', govService: 'No', accomplishments: 'Led portal development, CI/CD implementation', duties: 'Design web apps, code reviews, sprint planning' },
      { period: 'Jun 2020 - Dec 2023', position: 'Junior Developer', company: 'Digital Innovations Corp., QC', status: 'Regular', govService: 'No', accomplishments: '5 internal tools, 30% bug reduction', duties: 'Develop applications, fix bugs, documentation' }
    ],
    
    // Section VI - Voluntary Work
    voluntaryWork: [
      { organization: 'Philippine Red Cross, QC Chapter', period: 'Jan-Dec 2023', hours: 120, position: 'IT Volunteer' }
    ],
    
    // Section VII - Learning and Development
    training: [
      { title: 'Advanced React Development', period: 'Nov 20-22, 2025', hours: 24, type: 'Technical', sponsor: 'Tech Training Center' },
      { title: 'Agile Project Management', period: 'May 10-12, 2025', hours: 16, type: 'Managerial', sponsor: 'PMI' }
    ],
    
    // Section VIII - Other Information
    otherInfo: {
      skills: 'React, Node.js, TypeScript, AWS',
      distinctions: 'Employee of the Year 2022',
      memberships: 'Philippine Computer Society'
    },
    
    // Section IX - References
    references: [
      { name: 'Maria Garcia', address: 'Tech Solutions Inc.', contact: '+63 917 123 4567' },
      { name: 'Roberto Santos', address: 'Digital Innovations', contact: '+63 905 234 5678' }
    ]
  },
  {
    id: 2,
    employeeId: 'EMP-2023-045',
    surname: 'Garcia',
    firstName: 'Maria',
    middleName: 'Reyes',
    nameExtension: '',
    position: 'Senior Project Manager',
    department: 'Information Technology',
    status: 'Active',
    employmentStatus: 'Regular',
    dateHired: '2023-03-20',
    dateOfBirth: '1990-03-22',
    placeOfBirth: 'Cebu City',
    sex: 'Female',
    civilStatus: 'Single',
    citizenship: 'Filipino',
    height: '5\'4"',
    weight: '55 kg',
    bloodType: 'A+',
    umidNumber: '0001-1111111-1',
    pagibigNumber: '2345-6789-0123',
    philhealthNumber: '23-456789012-3',
    philsysNumber: '2345-6789-0123-4567',
    tinNumber: '234-567-890-111',
    agencyEmployeeNumber: 'EMP-2023-045',
    residentialAddress: '789 Bonifacio St., Makati',
    permanentAddress: '789 Bonifacio St., Makati',
    telephoneNumber: '(02) 8765-4321',
    mobileNumber: '+63 917 654 3210',
    email: 'maria.garcia@company.com',
    spouse: { surname: '', firstName: '', middleName: '', occupation: '', employer: '', businessAddress: '', telephone: '' },
    father: { surname: 'Garcia', firstName: 'Carlos', middleName: 'Torres' },
    mother: { surname: 'Reyes', firstName: 'Teresa', middleName: 'Santos' },
    children: [],
    education: [
      { level: 'Graduate Studies', school: 'Ateneo de Manila', course: 'MBA', period: '2017-2019', units: '48 units', yearGraduated: '2019', honors: 'With Distinction' },
      { level: 'College', school: 'De La Salle University', course: 'BS Information Technology', period: '2008-2012', units: '156 units', yearGraduated: '2012', honors: 'Magna Cum Laude' }
    ],
    eligibility: [
      { type: 'PMP Certified', rating: 'Certified', dateOfExamination: '2018-06-10', placeOfExamination: 'Manila', licenseNumber: 'PMP-2018-123456', validityDate: '2027-06-10' }
    ],
    workExperience: [
      { period: 'Mar 2023 - Present', position: 'Senior Project Manager', company: 'Tech Solutions Inc.', status: 'Regular', govService: 'No', accomplishments: '15+ successful projects', duties: 'Lead teams, stakeholder management' }
    ],
    voluntaryWork: [],
    training: [
      { title: 'Scrum Master Certification', period: 'Aug 15, 2024', hours: 16, type: 'Management', sponsor: 'Scrum Alliance' }
    ],
    otherInfo: { skills: 'Project Management, Agile, Scrum', distinctions: 'PMI Award 2023', memberships: 'PMI Philippines' },
    references: [
      { name: 'Roberto Cruz', address: 'Tech Solutions', contact: '+63 917 111 2222' }
    ]
  }
];

export default function EmployeeManagement() {
  const [selectedEmployee, setSelectedEmployee] = useState(employeesData[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Employee added successfully!');
    setIsModalOpen(false);
  };

  const filteredEmployees = employeesData.filter(emp => 
    emp.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Employee Directory</h1>
          <p className="text-gray-600">Comprehensive employee records and profiles</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Employee
        </button>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Employee List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search employees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                />
              </div>
              <button className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            {/* Employee List */}
            <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  onClick={() => setSelectedEmployee(employee)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                    selectedEmployee.id === employee.id
                      ? 'bg-[#FFF8E1] border-l-4 border-l-[#C62828]'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">
                        {employee.firstName} {employee.surname}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">{employee.employeeId}</p>
                      <p className="text-xs text-gray-600">{employee.position}</p>
                      <p className="text-xs text-gray-500">{employee.department}</p>
                      <span className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs ${
                        employee.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {employee.status}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Employee Profile (PDS Structure) */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] px-6 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                    <User className="w-10 h-10 text-[#C62828]" />
                  </div>
                  <div className="text-white flex-1">
                    <h2 className="text-xl font-bold mb-1">
                      {selectedEmployee.firstName} {selectedEmployee.middleName} {selectedEmployee.surname}
                    </h2>
                    <p className="text-sm text-white/90">{selectedEmployee.position}</p>
                    <p className="text-xs text-white/80">{selectedEmployee.department}</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-4 gap-3 text-xs">
                  <div>
                    <p className="text-gray-600 mb-0.5">Employee ID</p>
                    <p className="text-gray-900 font-medium">{selectedEmployee.employeeId}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-0.5">Status</p>
                    <p className="text-gray-900 font-medium">{selectedEmployee.employmentStatus}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-0.5">Date Hired</p>
                    <p className="text-gray-900 font-medium">{selectedEmployee.dateHired}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-gray-200 text-xs">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-[#C62828] flex-shrink-0" />
                    <div>
                      <p className="text-gray-600 text-[10px]">Email</p>
                      <p className="text-gray-900 text-[11px]">{selectedEmployee.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-[#C62828] flex-shrink-0" />
                    <div>
                      <p className="text-gray-600 text-[10px]">Mobile</p>
                      <p className="text-gray-900 text-[11px]">{selectedEmployee.mobileNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section I - Personal Information */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-[#C62828]" />
                <h3 className="text-sm font-semibold text-gray-900">Section I — Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-4 gap-3 text-xs mb-3">
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Surname</p>
                  <p className="text-gray-900">{selectedEmployee.surname}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">First Name</p>
                  <p className="text-gray-900">{selectedEmployee.firstName}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Middle Name</p>
                  <p className="text-gray-900">{selectedEmployee.middleName}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Extension</p>
                  <p className="text-gray-900">{selectedEmployee.nameExtension || 'N/A'}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Date of Birth</p>
                  <p className="text-gray-900">{selectedEmployee.dateOfBirth}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-600 text-[10px] mb-0.5">Place of Birth</p>
                  <p className="text-gray-900">{selectedEmployee.placeOfBirth}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 text-xs mb-3">
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Sex</p>
                  <p className="text-gray-900">{selectedEmployee.sex}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Civil Status</p>
                  <p className="text-gray-900">{selectedEmployee.civilStatus}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Blood Type</p>
                  <p className="text-gray-900">{selectedEmployee.bloodType}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-700 mb-2">Government IDs</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-gray-600 text-[10px]">UMID: {selectedEmployee.umidNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-[10px]">PAG-IBIG: {selectedEmployee.pagibigNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-[10px]">PhilHealth: {selectedEmployee.philhealthNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-[10px]">TIN: {selectedEmployee.tinNumber}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 mt-3">
                <div className="space-y-2 text-xs">
                  <div>
                    <p className="text-gray-600 text-[10px] mb-0.5">Residential Address</p>
                    <p className="text-gray-900">{selectedEmployee.residentialAddress}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-[10px] mb-0.5">Permanent Address</p>
                    <p className="text-gray-900">{selectedEmployee.permanentAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section II - Family Background */}
            {selectedEmployee.spouse.firstName && (
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-[#C62828]" />
                  <h3 className="text-sm font-semibold text-gray-900">Section II — Family Background</h3>
                </div>
                
                <div className="space-y-3 text-xs">
                  <div>
                    <p className="text-[10px] font-semibold text-gray-700 mb-1">Spouse</p>
                    <p className="text-gray-900">
                      {selectedEmployee.spouse.firstName} {selectedEmployee.spouse.middleName} {selectedEmployee.spouse.surname}
                    </p>
                    <p className="text-gray-600 text-[10px]">{selectedEmployee.spouse.occupation} - {selectedEmployee.spouse.employer}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-gray-600 text-[10px] mb-0.5">Father</p>
                      <p className="text-gray-900">
                        {selectedEmployee.father.firstName} {selectedEmployee.father.middleName} {selectedEmployee.father.surname}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-[10px] mb-0.5">Mother</p>
                      <p className="text-gray-900">
                        {selectedEmployee.mother.firstName} {selectedEmployee.mother.middleName} {selectedEmployee.mother.surname}
                      </p>
                    </div>
                  </div>

                  {selectedEmployee.children.length > 0 && (
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-[10px] font-semibold text-gray-700 mb-1">Children</p>
                      {selectedEmployee.children.map((child, idx) => (
                        <p key={idx} className="text-gray-900 text-[11px]">
                          {child.name} ({child.dateOfBirth})
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Section III - Educational Background */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-[#C62828]" />
                <h3 className="text-sm font-semibold text-gray-900">Section III — Educational Background</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-1.5 px-2 text-[10px] font-semibold text-gray-700">Level</th>
                      <th className="text-left py-1.5 px-2 text-[10px] font-semibold text-gray-700">School</th>
                      <th className="text-left py-1.5 px-2 text-[10px] font-semibold text-gray-700">Course</th>
                      <th className="text-left py-1.5 px-2 text-[10px] font-semibold text-gray-700">Year</th>
                      <th className="text-left py-1.5 px-2 text-[10px] font-semibold text-gray-700">Honors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedEmployee.education.map((edu, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-2 px-2 text-[11px] text-gray-900">{edu.level}</td>
                        <td className="py-2 px-2 text-[11px] text-gray-600">{edu.school}</td>
                        <td className="py-2 px-2 text-[11px] text-gray-600">{edu.course || '-'}</td>
                        <td className="py-2 px-2 text-[11px] text-gray-600">{edu.yearGraduated}</td>
                        <td className="py-2 px-2 text-[11px] text-gray-600">{edu.honors || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section IV - Civil Service Eligibility */}
            {selectedEmployee.eligibility.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-[#C62828]" />
                  <h3 className="text-sm font-semibold text-gray-900">Section IV — Civil Service Eligibility</h3>
                </div>
                <div className="space-y-2 text-xs">
                  {selectedEmployee.eligibility.map((elig, idx) => (
                    <div key={idx} className="pb-2 border-b border-gray-100 last:border-0">
                      <p className="text-gray-900 font-medium">{elig.type}</p>
                      <div className="grid grid-cols-3 gap-2 mt-1 text-[10px] text-gray-600">
                        <p>Rating: {elig.rating}</p>
                        <p>Date: {elig.dateOfExamination}</p>
                        <p>Validity: {elig.validityDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section V - Work Experience */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-[#C62828]" />
                <h3 className="text-sm font-semibold text-gray-900">Section V — Work Experience</h3>
              </div>
              <div className="space-y-3">
                {selectedEmployee.workExperience.map((work, idx) => (
                  <div key={idx} className="pb-3 border-b border-gray-200 last:border-0 text-xs">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="font-medium text-gray-900">{work.position}</p>
                        <p className="text-gray-600 text-[10px]">{work.company}</p>
                      </div>
                      <span className="text-[#C62828] text-[10px] font-medium">{work.period}</span>
                    </div>
                    <p className="text-gray-700 text-[11px] mt-1"><strong>Accomplishments:</strong> {work.accomplishments}</p>
                    <p className="text-gray-700 text-[11px]"><strong>Duties:</strong> {work.duties}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section VI - Voluntary Work */}
            {selectedEmployee.voluntaryWork.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-4 h-4 text-[#C62828]" />
                  <h3 className="text-sm font-semibold text-gray-900">Section VI — Voluntary Work</h3>
                </div>
                <div className="space-y-2 text-xs">
                  {selectedEmployee.voluntaryWork.map((vol, idx) => (
                    <div key={idx} className="pb-2 border-b border-gray-100 last:border-0">
                      <p className="text-gray-900 font-medium">{vol.organization}</p>
                      <p className="text-gray-600 text-[10px]">{vol.position} | {vol.period} | {vol.hours} hours</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section VII - Learning and Development */}
            {selectedEmployee.training.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#C62828]" />
                  <h3 className="text-sm font-semibold text-gray-900">Section VII — Learning and Development</h3>
                </div>
                <div className="space-y-2 text-xs">
                  {selectedEmployee.training.map((train, idx) => (
                    <div key={idx} className="pb-2 border-b border-gray-100 last:border-0">
                      <p className="text-gray-900 font-medium">{train.title}</p>
                      <p className="text-gray-600 text-[10px]">
                        {train.period} | {train.hours}hrs | {train.type} | {train.sponsor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section VIII - Other Information */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-[#C62828]" />
                <h3 className="text-sm font-semibold text-gray-900">Section VIII — Other Information</h3>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Skills</p>
                  <p className="text-gray-900">{selectedEmployee.otherInfo.skills}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Distinctions</p>
                  <p className="text-gray-900">{selectedEmployee.otherInfo.distinctions}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] mb-0.5">Memberships</p>
                  <p className="text-gray-900">{selectedEmployee.otherInfo.memberships}</p>
                </div>
              </div>
            </div>

            {/* Section IX - References */}
            {selectedEmployee.references.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-[#C62828]" />
                  <h3 className="text-sm font-semibold text-gray-900">Section IX — References</h3>
                </div>
                <div className="space-y-2 text-xs">
                  {selectedEmployee.references.map((ref, idx) => (
                    <div key={idx} className="pb-2 border-b border-gray-100 last:border-0">
                      <p className="text-gray-900 font-medium">{ref.name}</p>
                      <p className="text-gray-600 text-[10px]">{ref.address}</p>
                      <p className="text-gray-600 text-[10px]">{ref.contact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Employee Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl text-[#C62828] mb-1">Add Employee</h2>
                <p className="text-sm text-gray-600">Create a new employee record with basic information</p>
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
              {/* Basic Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Juan"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      placeholder="Santos"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dela Cruz"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="juan.delacruz@company.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+63 912 345 6789"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Employment Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Employment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Department</option>
                      <option value="IT">Information Technology</option>
                      <option value="HR">Human Resources</option>
                      <option value="Finance">Finance</option>
                      <option value="Operations">Operations</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Software Engineer"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employment Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Status</option>
                      <option value="Regular">Regular</option>
                      <option value="Probationary">Probationary</option>
                      <option value="Contractual">Contractual</option>
                      <option value="Casual">Casual</option>
                      <option value="Job Order">Job Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Hired <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Upload Documents
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Personal Data Sheet (PDS) <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#C62828] transition-colors cursor-pointer">
                      <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF, DOCX (Max 5MB)</p>
                      <input type="file" accept=".pdf,.docx" className="hidden" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Experience Sheet <span className="text-gray-500">(Optional)</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#C62828] transition-colors cursor-pointer">
                      <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF, DOCX (Max 5MB)</p>
                      <input type="file" accept=".pdf,.docx" className="hidden" />
                    </div>
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
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}