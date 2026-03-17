import { useState } from 'react';
import { Search, Plus, User, Mail, Phone, MapPin, Briefcase, Users as UsersIcon, GraduationCap, Award, BookOpen, Heart, FileText, CheckCircle, X, Upload as UploadIcon } from 'lucide-react';
import { StatusBadge } from '../components/shared/status-badge';

interface Employee {
  id: number;
  empId: string;
  name: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  status: string;
  dateHired: string;
  employmentStatus: string;
  personalInfo: {
    surname: string;
    firstName: string;
    middleName: string;
    nameExtension: string;
    dateOfBirth: string;
    placeOfBirth: string;
    sex: string;
    civilStatus: string;
    citizenship: string;
    height: string;
    weight: string;
    bloodType: string;
    umidNumber: string;
    pagibigNumber: string;
    philhealthNumber: string;
    philsysNumber: string;
    tinNumber: string;
    agencyEmployeeNumber: string;
    residentialAddress: string;
    permanentAddress: string;
    telephoneNumber: string;
    mobileNumber: string;
    email: string;
  };
  familyBackground: {
    spouse: {
      surname: string;
      firstName: string;
      middleName: string;
      occupation: string;
      employer: string;
      businessAddress: string;
      telephone: string;
    };
    father: {
      surname: string;
      firstName: string;
      middleName: string;
    };
    mother: {
      surname: string;
      firstName: string;
      middleName: string;
    };
    children: Array<{
      name: string;
      dateOfBirth: string;
    }>;
  };
  education: Array<{
    level: string;
    school: string;
    course: string;
    period: string;
    units: string;
    yearGraduated: string;
    honors: string;
  }>;
  eligibility: Array<{
    type: string;
    rating: string;
    dateOfExamination: string;
    placeOfExamination: string;
    licenseNumber: string;
    validityDate: string;
  }>;
  workExperience: Array<{
    period: string;
    position: string;
    company: string;
    status: string;
    govService: string;
    accomplishments: string;
    duties: string;
  }>;
  voluntaryWork: Array<{
    organization: string;
    period: string;
    hours: number;
    position: string;
  }>;
  training: Array<{
    title: string;
    period: string;
    hours: number;
    type: string;
    sponsor: string;
  }>;
  otherInfo: {
    skills: string;
    distinctions: string;
    memberships: string;
  };
  references: Array<{
    name: string;
    address: string;
    contact: string;
  }>;
}

const employeesData: Employee[] = [
  {
    id: 1,
    empId: 'EMP-2024-001',
    name: 'Juan Dela Cruz',
    department: 'Information Technology',
    position: 'Software Engineer',
    email: 'juan.delacruz@company.com',
    phone: '+63 912 345 6789',
    status: 'Active',
    dateHired: '2024-01-15',
    employmentStatus: 'Regular',
    personalInfo: {
      surname: 'Dela Cruz',
      firstName: 'Juan',
      middleName: 'Santos',
      nameExtension: '',
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
    },
    familyBackground: {
      spouse: {
        surname: 'Dela Cruz',
        firstName: 'Maria Clara',
        middleName: 'Reyes',
        occupation: 'Teacher',
        employer: 'Department of Education',
        businessAddress: '789 Education Street, Quezon City',
        telephone: '(02) 8234-5678'
      },
      father: {
        surname: 'Dela Cruz',
        firstName: 'Pedro',
        middleName: 'Lopez'
      },
      mother: {
        surname: 'Santos',
        firstName: 'Rosa',
        middleName: 'Garcia'
      },
      children: [
        { name: 'Juan Carlos Dela Cruz Jr.', dateOfBirth: '2020-03-15' },
        { name: 'Maria Sofia Dela Cruz', dateOfBirth: '2022-08-20' }
      ]
    },
    education: [
      {
        level: 'Graduate Studies',
        school: 'Ateneo de Manila University',
        course: 'Master of Science in Computer Science',
        period: '2019 - 2021',
        units: '36 units',
        yearGraduated: '2021',
        honors: 'With Distinction'
      },
      {
        level: 'College',
        school: 'University of the Philippines - Diliman',
        course: 'Bachelor of Science in Computer Science',
        period: '2013 - 2017',
        units: '160 units',
        yearGraduated: '2017',
        honors: 'Cum Laude'
      },
      {
        level: 'Secondary',
        school: 'Quezon City Science High School',
        course: 'Science, Technology, Engineering',
        period: '2009 - 2013',
        units: 'Completed',
        yearGraduated: '2013',
        honors: 'With Honors'
      },
      {
        level: 'Elementary',
        school: 'Quezon City Central Elementary School',
        course: '',
        period: '2003 - 2009',
        units: 'Completed',
        yearGraduated: '2009',
        honors: 'With Honors'
      }
    ],
    eligibility: [
      {
        type: 'Career Service Professional',
        rating: '85.50%',
        dateOfExamination: '2017-08-15',
        placeOfExamination: 'Civil Service Commission, Manila',
        licenseNumber: 'CSC-2017-08-123456',
        validityDate: 'Lifetime'
      }
    ],
    workExperience: [
      {
        period: 'Jan 2024 - Present',
        position: 'Software Engineer',
        company: 'Tech Solutions Inc., Makati City',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Led development of customer portal, Implemented CI/CD pipeline, Mentored 3 junior developers',
        duties: 'Design and develop web applications, Review code and provide feedback, Participate in sprint planning and retrospectives, Lead technical discussions'
      },
      {
        period: 'Jun 2020 - Dec 2023',
        position: 'Junior Software Developer',
        company: 'Digital Innovations Corp., Quezon City',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Developed 5 internal tools, Reduced bug rate by 30%, Received Employee of the Year Award 2022',
        duties: 'Develop and maintain internal applications, Fix bugs and implement new features, Write technical documentation, Assist senior developers'
      }
    ],
    voluntaryWork: [
      {
        organization: 'Philippine Red Cross, Quezon City Chapter',
        period: 'Jan 2023 - Dec 2023',
        hours: 120,
        position: 'IT Volunteer - Database Management'
      },
      {
        organization: 'Gawad Kalinga Community Development Foundation',
        period: 'Jun 2022 - Dec 2022',
        hours: 80,
        position: 'Technology Trainer for Youth'
      }
    ],
    training: [
      {
        title: 'Advanced React and TypeScript Development',
        period: 'Nov 20-22, 2025',
        hours: 24,
        type: 'Technical',
        sponsor: 'Tech Training Center Philippines'
      },
      {
        title: 'Agile Project Management Certification',
        period: 'May 10-12, 2025',
        hours: 16,
        type: 'Managerial',
        sponsor: 'Project Management Institute'
      }
    ],
    otherInfo: {
      skills: 'React.js, Node.js, TypeScript, Python, SQL, AWS, Docker, Git, Agile/Scrum',
      distinctions: 'Employee of the Year 2022, Best Thesis Award 2017, Dean\'s Lister (2013-2017)',
      memberships: 'Philippine Computer Society (PCS), Association for Computing Machinery (ACM)'
    },
    references: [
      {
        name: 'Maria Garcia',
        address: 'Tech Solutions Inc., Makati City',
        contact: '+63 917 123 4567 / m.garcia@techsolutions.com'
      },
      {
        name: 'Roberto Santos',
        address: 'Digital Innovations Corp., Quezon City',
        contact: '+63 905 234 5678 / r.santos@digitalinnovations.com'
      },
      {
        name: 'Dr. Ana Reyes',
        address: 'University of the Philippines, Diliman',
        contact: '+63 912 345 6789 / a.reyes@up.edu.ph'
      }
    ]
  },
  {
    id: 2,
    empId: 'EMP-2024-002',
    name: 'Maria Santos',
    department: 'Human Resources',
    position: 'HR Manager',
    email: 'maria.santos@company.com',
    phone: '+63 923 456 7890',
    status: 'Active',
    dateHired: '2022-06-20',
    employmentStatus: 'Regular',
    personalInfo: {
      surname: 'Santos',
      firstName: 'Maria',
      middleName: 'Reyes',
      nameExtension: '',
      dateOfBirth: '1988-08-22',
      placeOfBirth: 'Quezon City, Philippines',
      sex: 'Female',
      civilStatus: 'Single',
      citizenship: 'Filipino',
      height: '5\'4"',
      weight: '55 kg',
      bloodType: 'A+',
      umidNumber: '1111-1111111-1',
      pagibigNumber: '2345-6789-0123',
      philhealthNumber: '12-456789012-3',
      philsysNumber: '2345-6789-0123-4567',
      tinNumber: '234-567-890-111',
      agencyEmployeeNumber: 'EMP-2024-002',
      residentialAddress: '456 Roxas Boulevard, Pasay City, Metro Manila 1300',
      permanentAddress: '456 Roxas Boulevard, Pasay City, Metro Manila 1300',
      telephoneNumber: '(02) 8234-5678',
      mobileNumber: '+63 923 456 7890',
      email: 'maria.santos@company.com',
    },
    familyBackground: {
      spouse: {
        surname: '',
        firstName: '',
        middleName: '',
        occupation: '',
        employer: '',
        businessAddress: '',
        telephone: ''
      },
      father: {
        surname: 'Santos',
        firstName: 'Jose',
        middleName: 'Cruz'
      },
      mother: {
        surname: 'Reyes',
        firstName: 'Ana',
        middleName: 'Lopez'
      },
      children: []
    },
    education: [
      {
        level: 'Graduate Studies',
        school: 'De La Salle University',
        course: 'Master in Business Administration',
        period: '2018 - 2020',
        units: '48 units',
        yearGraduated: '2020',
        honors: 'With Distinction'
      },
      {
        level: 'College',
        school: 'University of Santo Tomas',
        course: 'Bachelor of Science in Psychology',
        period: '2006 - 2010',
        units: '144 units',
        yearGraduated: '2010',
        honors: 'Magna Cum Laude'
      },
      {
        level: 'Secondary',
        school: 'St. Paul College',
        course: 'High School Diploma',
        period: '2002 - 2006',
        units: 'Completed',
        yearGraduated: '2006',
        honors: 'With High Honors'
      },
      {
        level: 'Elementary',
        school: 'Pasay Elementary School',
        course: '',
        period: '1996 - 2002',
        units: 'Completed',
        yearGraduated: '2002',
        honors: 'With Honors'
      }
    ],
    eligibility: [
      {
        type: 'Career Service Professional',
        rating: '88.25%',
        dateOfExamination: '2011-09-20',
        placeOfExamination: 'Civil Service Commission, Quezon City',
        licenseNumber: 'CSC-2011-09-234567',
        validityDate: 'Lifetime'
      }
    ],
    workExperience: [
      {
        period: 'Jun 2022 - Present',
        position: 'HR Manager',
        company: 'Government Agency, Quezon City',
        status: 'Regular',
        govService: 'Yes',
        accomplishments: 'Implemented new performance management system, Reduced employee turnover by 25%, Led successful talent acquisition campaigns',
        duties: 'Oversee recruitment and selection, Manage employee relations, Implement HR policies and procedures, Conduct performance reviews'
      },
      {
        period: 'Jan 2016 - May 2022',
        position: 'HR Specialist',
        company: 'Corporate Solutions Inc., Makati City',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Hired 200+ employees, Streamlined onboarding process reducing time by 40%',
        duties: 'Managed recruitment processes, Conducted interviews, Processed employee benefits, Maintained HR records'
      }
    ],
    voluntaryWork: [
      {
        organization: 'Community Development Foundation',
        period: 'Jan 2024 - Present',
        hours: 80,
        position: 'HR Consultant - Volunteer Program'
      }
    ],
    training: [
      {
        title: 'Strategic HR Management',
        period: 'Jan 10-12, 2024',
        hours: 24,
        type: 'Leadership',
        sponsor: 'HR Leadership Academy'
      },
      {
        title: 'Labor Laws and Employee Relations',
        period: 'Sep 15-16, 2023',
        hours: 16,
        type: 'Compliance',
        sponsor: 'Department of Labor and Employment'
      }
    ],
    otherInfo: {
      skills: 'HR Management, Recruitment, Employee Relations, Training and Development, Performance Management',
      distinctions: 'HR Professional of the Year 2023, Outstanding Thesis Award 2020',
      memberships: 'People Management Association of the Philippines (PMAP), Society for Human Resource Management (SHRM)'
    },
    references: [
      {
        name: 'Director Patricia Cruz',
        address: 'Government Agency, Quezon City',
        contact: '+63 918 234 5678 / p.cruz@gov.ph'
      },
      {
        name: 'Anna Rodriguez',
        address: 'Corporate Solutions Inc., Makati City',
        contact: '+63 920 345 6789 / a.rodriguez@corpsolutions.com'
      }
    ]
  }
];

export default function EmployeeDirectory() {
  const [employees] = useState<Employee[]>(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter employees based on search query
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Employee added successfully!');
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Employee Directory</h1>
          <p className="text-gray-600">View and manage complete employee profiles with Personal Data Sheet information</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#C62828] text-white rounded-lg shadow-md hover:bg-[#B71C1C] transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Employee
        </button>
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                />
              </div>
            </div>

            {/* Employee List */}
            <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  onClick={() => setSelectedEmployee(employee)}
                  className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                    selectedEmployee?.id === employee.id
                      ? 'bg-[#FFF0F0] border-l-4 border-l-[#C62828]'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm text-gray-900 truncate">{employee.name}</h3>
                      <p className="text-xs text-gray-600 truncate">{employee.position}</p>
                      <p className="text-xs text-gray-500">{employee.empId}</p>
                      <div className="mt-1">
                        <StatusBadge status={employee.status} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Employee Profile (PDS Structure) */}
        <div className="lg:col-span-2 space-y-6">
          {selectedEmployee ? (
            <>
              {/* Profile Header Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] px-8 py-10">
                  <div className="flex items-center gap-6">
                    <div className="w-28 h-28 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                      <User className="w-14 h-14 text-[#C62828]" />
                    </div>
                    <div className="text-white flex-1">
                      <h2 className="text-2xl font-bold mb-1">
                        {selectedEmployee.personalInfo.firstName} {selectedEmployee.personalInfo.middleName} {selectedEmployee.personalInfo.surname}
                      </h2>
                      <p className="text-base text-white/90">{selectedEmployee.position}</p>
                      <p className="text-sm text-white/80">{selectedEmployee.department}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Employee ID</p>
                      <p className="text-sm text-gray-900 font-medium">{selectedEmployee.empId}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Employment Status</p>
                      <p className="text-sm text-gray-900 font-medium">{selectedEmployee.employmentStatus}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Date Hired</p>
                      <p className="text-sm text-gray-900 font-medium">{selectedEmployee.dateHired}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Status</p>
                      <StatusBadge status={selectedEmployee.status} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#C62828]" />
                      <div>
                        <p className="text-xs text-gray-600">Email</p>
                        <p className="text-xs text-gray-900">{selectedEmployee.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#C62828]" />
                      <div>
                        <p className="text-xs text-gray-600">Mobile</p>
                        <p className="text-xs text-gray-900">{selectedEmployee.personalInfo.mobileNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#C62828]" />
                      <div>
                        <p className="text-xs text-gray-600">Telephone</p>
                        <p className="text-xs text-gray-900">{selectedEmployee.personalInfo.telephoneNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section I - Personal Information */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section I — Personal Information</h3>
                </div>

                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Surname</label>
                      <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.surname}</p>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">First Name</label>
                      <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.firstName}</p>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Middle Name</label>
                      <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.middleName}</p>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Name Extension</label>
                      <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.nameExtension || 'N/A'}</p>
                    </div>
                  </div>

                  {/* Birth and Personal Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Date of Birth</label>
                      <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.dateOfBirth}</p>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs text-gray-600 mb-1">Place of Birth</label>
                      <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.placeOfBirth}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Sex at Birth</label>
                      <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.sex}</p>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Civil Status</label>
                      <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.civilStatus}</p>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Citizenship</label>
                      <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.citizenship}</p>
                    </div>
                  </div>

                  {/* Physical Details */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-semibold text-gray-700 mb-3">Physical Details</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Height</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.height}</p>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Weight</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.weight}</p>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Blood Type</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.bloodType}</p>
                      </div>
                    </div>
                  </div>

                  {/* Government IDs */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-semibold text-gray-700 mb-3">Government Issued IDs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">UMID ID Number</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.umidNumber}</p>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">PAG-IBIG ID Number</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.pagibigNumber}</p>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">PhilHealth Number</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.philhealthNumber}</p>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">PhilSys Number</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.philsysNumber}</p>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">TIN Number</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.tinNumber}</p>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Agency Employee Number</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.agencyEmployeeNumber}</p>
                      </div>
                    </div>
                  </div>

                  {/* Addresses */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-semibold text-gray-700 mb-3">Addresses</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Residential Address</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.residentialAddress}</p>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Permanent Address</label>
                        <p className="text-sm text-gray-900">{selectedEmployee.personalInfo.permanentAddress}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section II - Family Background */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <UsersIcon className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section II — Family Background</h3>
                </div>

                <div className="space-y-6">
                  {/* Spouse Information */}
                  {selectedEmployee.familyBackground.spouse.firstName && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-700 mb-3">Spouse Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Surname</label>
                          <p className="text-sm text-gray-900">{selectedEmployee.familyBackground.spouse.surname}</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">First Name</label>
                          <p className="text-sm text-gray-900">{selectedEmployee.familyBackground.spouse.firstName}</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Middle Name</label>
                          <p className="text-sm text-gray-900">{selectedEmployee.familyBackground.spouse.middleName}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Occupation</label>
                          <p className="text-sm text-gray-900">{selectedEmployee.familyBackground.spouse.occupation}</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Employer / Business Name</label>
                          <p className="text-sm text-gray-900">{selectedEmployee.familyBackground.spouse.employer}</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Business Address</label>
                          <p className="text-sm text-gray-900">{selectedEmployee.familyBackground.spouse.businessAddress}</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Telephone Number</label>
                          <p className="text-sm text-gray-900">{selectedEmployee.familyBackground.spouse.telephone}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Parents Information */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-semibold text-gray-700 mb-3">Parents Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Father's Name</label>
                        <p className="text-sm text-gray-900">
                          {selectedEmployee.familyBackground.father.firstName} {selectedEmployee.familyBackground.father.middleName} {selectedEmployee.familyBackground.father.surname}
                        </p>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Mother's Maiden Name</label>
                        <p className="text-sm text-gray-900">
                          {selectedEmployee.familyBackground.mother.firstName} {selectedEmployee.familyBackground.mother.middleName} {selectedEmployee.familyBackground.mother.surname}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Children */}
                  {selectedEmployee.familyBackground.children.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-xs font-semibold text-gray-700 mb-3">Children</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Child Name</th>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Date of Birth</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedEmployee.familyBackground.children.map((child, index) => (
                              <tr key={index} className="border-b border-gray-100">
                                <td className="py-3 px-3 text-sm text-gray-900">{child.name}</td>
                                <td className="py-3 px-3 text-sm text-gray-600">{child.dateOfBirth}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Section III - Educational Background */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section III — Educational Background</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Level</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Name of School</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Degree / Course</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Period</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Units Earned</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Year Graduated</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Honors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedEmployee.education.map((edu, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-3 text-xs text-gray-900">{edu.level}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{edu.school}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{edu.course || '-'}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{edu.period}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{edu.units}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{edu.yearGraduated}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{edu.honors || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section IV - Civil Service Eligibility */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section IV — Civil Service Eligibility</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Eligibility Type</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Rating</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Date of Examination</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Place of Examination</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">License Number</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Validity Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedEmployee.eligibility.map((elig, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-3 text-xs text-gray-900">{elig.type}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{elig.rating}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{elig.dateOfExamination}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{elig.placeOfExamination}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{elig.licenseNumber}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{elig.validityDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section V - Work Experience */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section V — Work Experience</h3>
                </div>
                <div className="space-y-4">
                  {selectedEmployee.workExperience.map((work, index) => (
                    <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-2">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Inclusive Dates</p>
                          <p className="text-xs text-gray-900 font-medium">{work.period}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Position Title</p>
                          <p className="text-xs text-gray-900 font-medium">{work.position}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs text-gray-600 mb-1">Department / Agency / Company</p>
                          <p className="text-xs text-gray-900">{work.company}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Status</p>
                          <p className="text-xs text-gray-900">{work.status}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2 mt-2">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Accomplishments</p>
                          <p className="text-xs text-gray-700">{work.accomplishments}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Summary of Duties</p>
                          <p className="text-xs text-gray-700">{work.duties}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section VI - Voluntary Work */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section VI — Voluntary Work</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Organization Name and Address</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Inclusive Dates</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Number of Hours</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Position / Nature of Work</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedEmployee.voluntaryWork.map((vol, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-3 text-xs text-gray-900">{vol.organization}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{vol.period}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{vol.hours}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{vol.position}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section VII - Learning and Development */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section VII — Learning and Development</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Training Title</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Inclusive Dates</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Hours</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Type</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Conducted / Sponsored By</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedEmployee.training.map((train, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-3 text-xs text-gray-900">{train.title}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{train.period}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{train.hours}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{train.type}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{train.sponsor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section VIII - Other Information */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section VIII — Other Information</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Special Skills and Hobbies</label>
                    <p className="text-sm text-gray-900">{selectedEmployee.otherInfo.skills}</p>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Non-Academic Distinctions / Recognition</label>
                    <p className="text-sm text-gray-900">{selectedEmployee.otherInfo.distinctions}</p>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Membership in Associations / Organizations</label>
                    <p className="text-sm text-gray-900">{selectedEmployee.otherInfo.memberships}</p>
                  </div>
                </div>
              </div>

              {/* Section IX - References */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <UsersIcon className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section IX — References</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Reference Name</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Office / Address</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Contact Number / Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedEmployee.references.map((ref, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-3 text-xs text-gray-900">{ref.name}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{ref.address}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{ref.contact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Note */}
              <div className="p-4 bg-[#FFF8E1] rounded-lg border border-[#FFC107]">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This profile follows the CS Form 212 (Revised 2025) Personal Data Sheet structure. As HR Officer, you have full access to view and edit all employee information.
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