import { useState } from 'react';
import { Search, Plus, User, Mail, Phone, MapPin, Briefcase, Users as UsersIcon, GraduationCap, Award, BookOpen, Heart, FileText, CheckCircle, Edit } from 'lucide-react';
import { StatusBadge } from '../../components/shared/status-badge';

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
        surname: 'Reyes',
        firstName: 'Maria Clara',
        middleName: 'Santos',
        occupation: 'Teacher',
        employer: 'Department of Education',
        businessAddress: 'DepEd Division Office, Quezon City',
        telephone: '(02) 8234-5678',
      },
      father: {
        surname: 'Dela Cruz',
        firstName: 'Pedro',
        middleName: 'Garcia',
      },
      mother: {
        surname: 'Santos',
        firstName: 'Rosa',
        middleName: 'Lopez',
      },
      children: [
        { name: 'Juan Dela Cruz Jr.', dateOfBirth: '2020-03-15' },
        { name: 'Sofia Dela Cruz', dateOfBirth: '2022-08-20' },
      ],
    },
    education: [
      {
        level: 'Graduate Studies',
        school: 'Ateneo de Manila University',
        course: 'Master of Science in Computer Science',
        period: '2018-2021',
        units: 'N/A',
        yearGraduated: '2021',
        honors: 'With Distinction',
      },
      {
        level: 'College',
        school: 'University of the Philippines - Diliman',
        course: 'Bachelor of Science in Computer Science',
        period: '2013-2017',
        units: 'N/A',
        yearGraduated: '2017',
        honors: 'Cum Laude',
      },
      {
        level: 'Secondary',
        school: 'Philippine Science High School',
        course: '',
        period: '2009-2013',
        units: 'N/A',
        yearGraduated: '2013',
        honors: 'With High Honors',
      },
      {
        level: 'Elementary',
        school: 'Quezon City Central Elementary School',
        course: '',
        period: '2003-2009',
        units: 'N/A',
        yearGraduated: '2009',
        honors: 'Valedictorian',
      },
    ],
    eligibility: [
      {
        type: 'Career Service Professional',
        rating: '88.5%',
        dateOfExamination: '2017-10-15',
        placeOfExamination: 'Manila',
        licenseNumber: 'CSC-NCR-2017-12345',
        validityDate: 'Lifetime',
      },
    ],
    workExperience: [
      {
        period: '2024-01 to Present',
        position: 'Software Engineer',
        company: 'Current Company',
        status: 'Regular',
        govService: 'Yes',
        accomplishments: 'Led development of HR Information System',
        duties: 'Full-stack development, system architecture design, team collaboration',
      },
      {
        period: '2021-06 to 2023-12',
        position: 'Junior Software Developer',
        company: 'Tech Solutions Inc.',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Developed multiple web applications',
        duties: 'Web development, database design, API integration',
      },
      {
        period: '2017-08 to 2021-05',
        position: 'IT Support Specialist',
        company: 'Digital Services Corp.',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Improved system uptime by 25%',
        duties: 'Technical support, system maintenance, user training',
      },
    ],
    voluntaryWork: [
      {
        organization: 'Code for the Philippines',
        period: '2020-2022',
        hours: 120,
        position: 'Volunteer Developer',
      },
      {
        organization: 'Local Barangay IT Training Program',
        period: '2019',
        hours: 40,
        position: 'IT Instructor',
      },
    ],
    training: [
      {
        title: 'Advanced React and TypeScript Development',
        period: 'February 2024',
        hours: 40,
        type: 'Technical',
        sponsor: 'Tech Academy Inc.',
      },
      {
        title: 'Cloud Architecture with AWS',
        period: 'November 2023',
        hours: 32,
        type: 'Technical',
        sponsor: 'Amazon Web Services',
      },
      {
        title: 'Agile Project Management',
        period: 'August 2023',
        hours: 24,
        type: 'Management',
        sponsor: 'Scrum Alliance',
      },
    ],
    otherInfo: {
      skills: 'React, TypeScript, Node.js, Python, SQL, AWS, Docker, Git',
      distinctions: 'Employee of the Year 2023, Best Innovation Award 2022',
      memberships: 'Philippine Computer Society, ACM Professional Member',
    },
    references: [
      {
        name: 'Dr. Roberto Martinez',
        address: 'Ateneo de Manila University, Quezon City',
        contact: 'roberto.martinez@ateneo.edu / +63 917 123 4567',
      },
      {
        name: 'Engr. Lisa Fernandez',
        address: 'Tech Solutions Inc., Makati City',
        contact: 'lisa.fernandez@techsolutions.com / +63 918 234 5678',
      },
      {
        name: 'Prof. Carlos Reyes',
        address: 'University of the Philippines, Diliman',
        contact: 'carlos.reyes@up.edu.ph / +63 919 345 6789',
      },
    ],
  },
  {
    id: 2,
    empId: 'EMP-2024-002',
    name: 'Maria Santos',
    department: 'Human Resources',
    position: 'HR Specialist',
    email: 'maria.santos@company.com',
    phone: '+63 917 234 5678',
    status: 'Active',
    dateHired: '2024-02-01',
    employmentStatus: 'Regular',
    personalInfo: {
      surname: 'Santos',
      firstName: 'Maria',
      middleName: 'Lopez',
      nameExtension: '',
      dateOfBirth: '1993-08-22',
      placeOfBirth: 'Cebu City, Philippines',
      sex: 'Female',
      civilStatus: 'Single',
      citizenship: 'Filipino',
      height: '5\'4"',
      weight: '55 kg',
      bloodType: 'A+',
      umidNumber: '0000-0000001-1',
      pagibigNumber: '2234-5678-9012',
      philhealthNumber: '22-345678901-2',
      philsysNumber: '2234-5678-9012-3456',
      tinNumber: '223-456-789-000',
      agencyEmployeeNumber: 'EMP-2024-002',
      residentialAddress: '456 Bonifacio Street, Makati City, Metro Manila 1200',
      permanentAddress: '789 Osmena Boulevard, Cebu City, Cebu 6000',
      telephoneNumber: '(02) 8234-5678',
      mobileNumber: '+63 917 234 5678',
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
        telephone: '',
      },
      father: {
        surname: 'Santos',
        firstName: 'Jose',
        middleName: 'Cruz',
      },
      mother: {
        surname: 'Lopez',
        firstName: 'Carmen',
        middleName: 'Ramos',
      },
      children: [],
    },
    education: [
      {
        level: 'College',
        school: 'University of San Carlos',
        course: 'Bachelor of Science in Psychology',
        period: '2011-2015',
        units: 'N/A',
        yearGraduated: '2015',
        honors: 'Magna Cum Laude',
      },
      {
        level: 'Secondary',
        school: 'Sacred Heart School - Cebu',
        course: '',
        period: '2007-2011',
        units: 'N/A',
        yearGraduated: '2011',
        honors: 'With Honors',
      },
      {
        level: 'Elementary',
        school: 'Sacred Heart School - Cebu',
        course: '',
        period: '2001-2007',
        units: 'N/A',
        yearGraduated: '2007',
        honors: 'With Honors',
      },
    ],
    eligibility: [
      {
        type: 'Career Service Professional',
        rating: '85.2%',
        dateOfExamination: '2015-11-20',
        placeOfExamination: 'Cebu City',
        licenseNumber: 'CSC-VII-2015-67890',
        validityDate: 'Lifetime',
      },
    ],
    workExperience: [
      {
        period: '2024-02 to Present',
        position: 'HR Specialist',
        company: 'Current Company',
        status: 'Regular',
        govService: 'Yes',
        accomplishments: 'Streamlined recruitment process, improved employee onboarding',
        duties: 'Recruitment, employee relations, benefits administration, training coordination',
      },
      {
        period: '2019-01 to 2024-01',
        position: 'HR Assistant',
        company: 'Business Process Solutions Inc.',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Managed 500+ employee records',
        duties: 'Personnel records management, payroll support, leave administration',
      },
      {
        period: '2015-06 to 2018-12',
        position: 'Recruitment Coordinator',
        company: 'Talent Acquisition Group',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Successfully placed 200+ candidates',
        duties: 'Candidate sourcing, interview coordination, applicant tracking',
      },
    ],
    voluntaryWork: [
      {
        organization: 'Philippine Red Cross - Cebu Chapter',
        period: '2016-2020',
        hours: 80,
        position: 'Volunteer Coordinator',
      },
    ],
    training: [
      {
        title: 'Strategic Human Resource Management',
        period: 'January 2024',
        hours: 40,
        type: 'Management',
        sponsor: 'People Management Association of the Philippines',
      },
      {
        title: 'Labor Law and Compliance',
        period: 'October 2023',
        hours: 24,
        type: 'Legal',
        sponsor: 'Department of Labor and Employment',
      },
      {
        title: 'Recruitment and Selection Best Practices',
        period: 'June 2023',
        hours: 16,
        type: 'Technical',
        sponsor: 'HR Certification Institute',
      },
    ],
    otherInfo: {
      skills: 'HRIS Systems, Recruitment, Employee Relations, Training & Development',
      distinctions: 'Best HR Professional 2023 - PMAP Cebu Chapter',
      memberships: 'People Management Association of the Philippines (PMAP)',
    },
    references: [
      {
        name: 'Ms. Angela Rodriguez',
        address: 'Business Process Solutions Inc., Cebu City',
        contact: 'angela.rodriguez@bps.com / +63 920 123 4567',
      },
      {
        name: 'Dr. Patricia Gomez',
        address: 'University of San Carlos, Cebu City',
        contact: 'patricia.gomez@usc.edu.ph / +63 921 234 5678',
      },
    ],
  },
  {
    id: 3,
    empId: 'EMP-2023-045',
    name: 'Pedro Reyes',
    department: 'Finance',
    position: 'Accountant',
    email: 'pedro.reyes@company.com',
    phone: '+63 918 345 6789',
    status: 'Active',
    dateHired: '2023-05-10',
    employmentStatus: 'Regular',
    personalInfo: {
      surname: 'Reyes',
      firstName: 'Pedro',
      middleName: 'Garcia',
      nameExtension: '',
      dateOfBirth: '1990-12-10',
      placeOfBirth: 'Davao City, Philippines',
      sex: 'Male',
      civilStatus: 'Married',
      citizenship: 'Filipino',
      height: '5\'7"',
      weight: '68 kg',
      bloodType: 'B+',
      umidNumber: '0000-0000002-2',
      pagibigNumber: '3234-5678-9012',
      philhealthNumber: '32-345678901-2',
      philsysNumber: '3234-5678-9012-3456',
      tinNumber: '323-456-789-000',
      agencyEmployeeNumber: 'EMP-2023-045',
      residentialAddress: '789 Ayala Avenue, Makati City, Metro Manila 1226',
      permanentAddress: '321 J.P. Laurel Avenue, Davao City, Davao del Sur 8000',
      telephoneNumber: '(02) 8345-6789',
      mobileNumber: '+63 918 345 6789',
      email: 'pedro.reyes@company.com',
    },
    familyBackground: {
      spouse: {
        surname: 'Cruz',
        firstName: 'Ana',
        middleName: 'Santos',
        occupation: 'Nurse',
        employer: 'Philippine General Hospital',
        businessAddress: 'Taft Avenue, Manila',
        telephone: '(02) 8456-7890',
      },
      father: {
        surname: 'Reyes',
        firstName: 'Miguel',
        middleName: 'Torres',
      },
      mother: {
        surname: 'Garcia',
        firstName: 'Elena',
        middleName: 'Fernandez',
      },
      children: [
        { name: 'Pedro Reyes Jr.', dateOfBirth: '2018-06-12' },
      ],
    },
    education: [
      {
        level: 'College',
        school: 'Ateneo de Davao University',
        course: 'Bachelor of Science in Accountancy',
        period: '2008-2012',
        units: 'N/A',
        yearGraduated: '2012',
        honors: 'Cum Laude',
      },
      {
        level: 'Secondary',
        school: 'Davao City National High School',
        course: '',
        period: '2004-2008',
        units: 'N/A',
        yearGraduated: '2008',
        honors: 'With Honors',
      },
      {
        level: 'Elementary',
        school: 'Davao City Central Elementary School',
        course: '',
        period: '1998-2004',
        units: 'N/A',
        yearGraduated: '2004',
        honors: '',
      },
    ],
    eligibility: [
      {
        type: 'Certified Public Accountant',
        rating: '82.5%',
        dateOfExamination: '2012-10-14',
        placeOfExamination: 'Manila',
        licenseNumber: 'CPA-0123456',
        validityDate: 'Lifetime',
      },
      {
        type: 'Career Service Professional',
        rating: '86.0%',
        dateOfExamination: '2013-03-10',
        placeOfExamination: 'Davao City',
        licenseNumber: 'CSC-XI-2013-11111',
        validityDate: 'Lifetime',
      },
    ],
    workExperience: [
      {
        period: '2023-05 to Present',
        position: 'Accountant',
        company: 'Current Company',
        status: 'Regular',
        govService: 'Yes',
        accomplishments: 'Implemented new accounting software system',
        duties: 'Financial reporting, budget preparation, audit coordination, payroll management',
      },
      {
        period: '2017-02 to 2023-04',
        position: 'Senior Accounting Associate',
        company: 'Prime Accounting Services',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Led audit team for 50+ clients',
        duties: 'Financial auditing, tax compliance, client consultations',
      },
      {
        period: '2013-01 to 2017-01',
        position: 'Junior Accountant',
        company: 'Finance Solutions Corp.',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Processed 1000+ financial transactions monthly',
        duties: 'Accounts payable/receivable, bank reconciliation, financial statements',
      },
    ],
    voluntaryWork: [
      {
        organization: 'Philippine Institute of Certified Public Accountants',
        period: '2015-2020',
        hours: 60,
        position: 'Committee Member',
      },
    ],
    training: [
      {
        title: 'Advanced Financial Analysis and Reporting',
        period: 'March 2024',
        hours: 32,
        type: 'Technical',
        sponsor: 'Philippine Institute of CPAs',
      },
      {
        title: 'Tax Updates and Compliance 2024',
        period: 'January 2024',
        hours: 16,
        type: 'Technical',
        sponsor: 'Bureau of Internal Revenue',
      },
      {
        title: 'Government Accounting Standards',
        period: 'November 2023',
        hours: 24,
        type: 'Technical',
        sponsor: 'Commission on Audit',
      },
    ],
    otherInfo: {
      skills: 'Financial Accounting, Auditing, Tax Compliance, QuickBooks, SAP, Excel',
      distinctions: 'Outstanding CPA Award 2022',
      memberships: 'Philippine Institute of Certified Public Accountants (PICPA)',
    },
    references: [
      {
        name: 'CPA Maria Gonzales',
        address: 'Prime Accounting Services, Makati City',
        contact: 'maria.gonzales@primeaccounting.com / +63 922 123 4567',
      },
      {
        name: 'Prof. Roberto Cruz',
        address: 'Ateneo de Davao University, Davao City',
        contact: 'roberto.cruz@addu.edu.ph / +63 923 234 5678',
      },
    ],
  },
];

export default function HRStaffEmployees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(employeesData[0]);

  // Filter employees
  const filteredEmployees = employeesData.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.empId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || emp.department === filterDepartment;
    const matchesStatus = filterStatus === 'all' || emp.employmentStatus === filterStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Employee List</h1>
          <p className="text-gray-600">View and manage employee records using PDS (CS Form 212) structure.</p>
        </div>
        <button className="px-6 py-3 bg-[#C62828] text-white rounded-lg shadow-md hover:bg-[#B71C1C] transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Employee
        </button>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Employee List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            {/* Search and Filters */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                >
                  <option value="all">All Departments</option>
                  <option value="Information Technology">IT</option>
                  <option value="Human Resources">HR</option>
                  <option value="Finance">Finance</option>
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                >
                  <option value="all">All Status</option>
                  <option value="Regular">Regular</option>
                  <option value="Probationary">Probationary</option>
                  <option value="Contract">Contract</option>
                </select>
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
                      <p className="text-xs text-gray-600">{employee.empId}</p>
                    </div>
                    <StatusBadge status={employee.status} />
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{employee.position}</p>
                  <p className="text-xs text-gray-500">{employee.department}</p>
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      {employee.employmentStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Employee Profile */}
        <div className="lg:col-span-2 space-y-6">
          {selectedEmployee ? (
            <>
              {/* Employee Header Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#C62828] flex items-center justify-center text-white text-2xl font-bold">
                      {selectedEmployee.personalInfo.firstName[0]}{selectedEmployee.personalInfo.surname[0]}
                    </div>
                    <div>
                      <h2 className="text-2xl text-gray-900 mb-1">
                        {selectedEmployee.personalInfo.firstName} {selectedEmployee.personalInfo.middleName} {selectedEmployee.personalInfo.surname}
                      </h2>
                      <p className="text-gray-600">{selectedEmployee.position}</p>
                      <p className="text-sm text-gray-500">{selectedEmployee.department}</p>
                    </div>
                  </div>
                  <button className="text-[#C62828] hover:text-[#B71C1C] flex items-center gap-1 text-sm font-medium">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C62828]" />
                    <div>
                      <p className="text-xs text-gray-600">Email</p>
                      <p className="text-xs text-gray-900">{selectedEmployee.personalInfo.email}</p>
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
                  <div className={selectedEmployee.familyBackground.spouse.firstName ? 'pt-4 border-t border-gray-200' : ''}>
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
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Inclusive Dates</label>
                          <p className="text-sm text-gray-900 font-medium">{work.period}</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Position Title</label>
                          <p className="text-sm text-gray-900 font-medium">{work.position}</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Department / Agency / Office / Company</label>
                          <p className="text-sm text-gray-900">{work.company}</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Status of Appointment</label>
                          <p className="text-sm text-gray-900">{work.status}</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Government Service</label>
                          <p className="text-sm text-gray-900">{work.govService}</p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-gray-200">
                        <label className="block text-xs text-gray-600 mb-1">Accomplishments</label>
                        <p className="text-sm text-gray-900 mb-2">{work.accomplishments}</p>
                        <label className="block text-xs text-gray-600 mb-1">Summary of Duties</label>
                        <p className="text-sm text-gray-900">{work.duties}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section VI - Voluntary Work */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section VI — Voluntary Work or Involvement in Civic / Non-Government / People / Voluntary Organizations</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Organization Name</th>
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
                  <h3 className="text-base font-semibold text-gray-900">Section VII — Learning and Development (L&D) Interventions/Training Programs Attended</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Training Title</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Inclusive Dates</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Number of Hours</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Type of LD</th>
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
                    <label className="block text-xs text-gray-600 mb-2">Special Skills and Hobbies</label>
                    <p className="text-sm text-gray-900">{selectedEmployee.otherInfo.skills}</p>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-2">Non-Academic Distinctions / Recognition</label>
                    <p className="text-sm text-gray-900">{selectedEmployee.otherInfo.distinctions}</p>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-2">Membership in Association / Organization</label>
                    <p className="text-sm text-gray-900">{selectedEmployee.otherInfo.memberships}</p>
                  </div>
                </div>
              </div>

              {/* Section IX - References */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-base font-semibold text-gray-900">Section IX — References</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Name</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Address</th>
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
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 border border-gray-100 text-center">
              <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Select an employee to view their complete profile</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
