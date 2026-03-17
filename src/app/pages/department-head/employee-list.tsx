import { Search, User, Mail, Phone, MapPin, FileText, Users as UsersIcon, Heart, Briefcase, Award, Plus, X, Upload as UploadIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { StatusBadge } from '../../components/shared/status-badge';

interface Employee {
  id: number;
  empId: string;
  name: string;
  department: string;
  position: string;
  status: string;
  personalInfo: {
    surname: string;
    firstName: string;
    middleName: string;
    nameExtension: string;
    dateOfBirth: string;
    placeOfBirth: string;
    sexAtBirth: string;
    civilStatus: string;
    citizenship: string;
    height: string;
    weight: string;
    bloodType: string;
    umidNo: string;
    pagibigNo: string;
    philhealthNo: string;
    philsysNo: string;
    tinNo: string;
    agencyEmployeeNo: string;
    residentialAddress: string;
    permanentAddress: string;
    telephoneNo: string;
    mobileNo: string;
    email: string;
  };
  familyBackground: {
    spouseName: string;
    spouseOccupation: string;
    employerName: string;
    businessAddress: string;
    telephoneNo: string;
    fatherName: string;
    motherMaidenName: string;
    children: Array<{
      name: string;
      dateOfBirth: string;
    }>;
  };
  education: Array<{
    level: string;
    school: string;
    degree: string;
    periodFrom: string;
    periodTo: string;
    unitsEarned: string;
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
    inclusiveDatesFrom: string;
    inclusiveDatesTo: string;
    positionTitle: string;
    department: string;
    statusOfAppointment: string;
    governmentService: string;
    accomplishments: string;
    duties: string;
  }>;
  voluntaryWork: Array<{
    organization: string;
    inclusiveDatesFrom: string;
    inclusiveDatesTo: string;
    numberOfHours: string;
    positionNature: string;
  }>;
  learningDevelopment: Array<{
    title: string;
    inclusiveDatesFrom: string;
    inclusiveDatesTo: string;
    numberOfHours: string;
    typeOfTraining: string;
    conductedBy: string;
  }>;
  otherInfo: {
    specialSkills: string;
    distinctions: string;
    memberships: string;
  };
  references: Array<{
    name: string;
    address: string;
    contactNumber: string;
  }>;
}

const employeesData: Employee[] = [
  {
    id: 1,
    empId: 'EMP-001',
    name: 'John Michael Smith',
    department: 'IT Department',
    position: 'Software Engineer',
    status: 'Active',
    personalInfo: {
      surname: 'Smith',
      firstName: 'John',
      middleName: 'Michael',
      nameExtension: '',
      dateOfBirth: 'May 15, 1990',
      placeOfBirth: 'Quezon City, Metro Manila',
      sexAtBirth: 'Male',
      civilStatus: 'Single',
      citizenship: 'Filipino',
      height: '5\'8"',
      weight: '68 kg',
      bloodType: 'O+',
      umidNo: '1234-5678-9012',
      pagibigNo: '1234-5678-9012',
      philhealthNo: '12-345678901-2',
      philsysNo: '1234-5678-9012-3456',
      tinNo: '123-456-789-000',
      agencyEmployeeNo: 'EMP-001',
      residentialAddress: '123 Main Street, Quezon City, Metro Manila 1100',
      permanentAddress: '123 Main Street, Quezon City, Metro Manila 1100',
      telephoneNo: '(02) 8123-4567',
      mobileNo: '+63 912 345 6789',
      email: 'john.smith@company.com',
    },
    familyBackground: {
      spouseName: 'N/A',
      spouseOccupation: 'N/A',
      employerName: 'N/A',
      businessAddress: 'N/A',
      telephoneNo: 'N/A',
      fatherName: 'Robert Smith',
      motherMaidenName: 'Maria Santos',
      children: [],
    },
    education: [
      {
        level: 'Elementary',
        school: 'Quezon City Elementary School',
        degree: 'Elementary Diploma',
        periodFrom: '1996',
        periodTo: '2002',
        unitsEarned: 'N/A',
        yearGraduated: '2002',
        honors: 'With Honors',
      },
      {
        level: 'Secondary',
        school: 'Manila Science High School',
        degree: 'High School Diploma',
        periodFrom: '2002',
        periodTo: '2006',
        unitsEarned: 'N/A',
        yearGraduated: '2006',
        honors: 'With High Honors',
      },
      {
        level: 'College',
        school: 'University of the Philippines',
        degree: 'BS Computer Science',
        periodFrom: '2006',
        periodTo: '2010',
        unitsEarned: '160',
        yearGraduated: '2010',
        honors: 'Cum Laude',
      },
    ],
    eligibility: [
      {
        type: 'Civil Service Professional',
        rating: '85.5%',
        dateOfExam: 'March 15, 2011',
        placeOfExam: 'Quezon City',
        licenseNumber: 'CSP-2011-123456',
        validityDate: 'Lifetime',
      },
    ],
    workExperience: [
      {
        inclusiveDatesFrom: 'January 15, 2023',
        inclusiveDatesTo: 'Present',
        positionTitle: 'Software Engineer',
        department: 'Government Agency - IT Department',
        statusOfAppointment: 'Permanent',
        governmentService: 'Yes',
        accomplishments: 'Developed HRIS system, improved system performance by 40%, led the development of the employee portal.',
        duties: 'Design and develop software applications, maintain existing systems, provide technical support, conduct code reviews, and mentor junior developers.',
      },
      {
        inclusiveDatesFrom: 'June 1, 2018',
        inclusiveDatesTo: 'December 31, 2022',
        positionTitle: 'Junior Developer',
        department: 'Tech Solutions Inc.',
        statusOfAppointment: 'Contractual',
        governmentService: 'No',
        accomplishments: 'Built 10+ web applications, mentored 5 junior developers, received Employee of the Year award in 2021.',
        duties: 'Developed web applications using modern frameworks, participated in code reviews, fixed bugs, and collaborated with cross-functional teams.',
      },
    ],
    voluntaryWork: [
      {
        organization: 'Tech for Good Foundation',
        inclusiveDatesFrom: 'January 2022',
        inclusiveDatesTo: 'December 2022',
        numberOfHours: '120',
        positionNature: 'Volunteer Web Developer',
      },
    ],
    learningDevelopment: [
      {
        title: 'Advanced React Development',
        inclusiveDatesFrom: 'November 10, 2024',
        inclusiveDatesTo: 'November 15, 2024',
        numberOfHours: '24',
        typeOfTraining: 'Technical',
        conductedBy: 'Tech Academy Philippines',
      },
      {
        title: 'Agile Project Management',
        inclusiveDatesFrom: 'May 5, 2024',
        inclusiveDatesTo: 'May 10, 2024',
        numberOfHours: '16',
        typeOfTraining: 'Managerial',
        conductedBy: 'PMI Philippines Chapter',
      },
    ],
    otherInfo: {
      specialSkills: 'Full-stack development, React, Node.js, TypeScript, Python, AWS Cloud Services',
      distinctions: 'Employee of the Year 2021 - Tech Solutions Inc.',
      memberships: 'Philippine Computer Society, Association for Computing Machinery',
    },
    references: [
      {
        name: 'Dr. Michael Chen',
        address: 'University of the Philippines, Diliman, Quezon City',
        contactNumber: '+63 917 123 4567 / michael.chen@up.edu.ph',
      },
      {
        name: 'Ms. Sarah Johnson',
        address: 'Tech Solutions Inc., Makati City',
        contactNumber: '+63 918 234 5678 / sarah.johnson@techsolutions.com',
      },
    ],
  },
  {
    id: 2,
    empId: 'EMP-002',
    name: 'Sarah Ann Williams',
    department: 'IT Department',
    position: 'Project Manager',
    status: 'Active',
    personalInfo: {
      surname: 'Williams',
      firstName: 'Sarah',
      middleName: 'Ann',
      nameExtension: '',
      dateOfBirth: 'March 22, 1988',
      placeOfBirth: 'Makati City, Metro Manila',
      sexAtBirth: 'Female',
      civilStatus: 'Married',
      citizenship: 'Filipino',
      height: '5\'4"',
      weight: '54 kg',
      bloodType: 'A+',
      umidNo: '2345-6789-0123',
      pagibigNo: '2345-6789-0123',
      philhealthNo: '23-456789012-3',
      philsysNo: '2345-6789-0123-4567',
      tinNo: '234-567-890-000',
      agencyEmployeeNo: 'EMP-002',
      residentialAddress: '456 Oak Avenue, Makati City, Metro Manila 1200',
      permanentAddress: '789 Pine Street, Pasig City, Metro Manila 1600',
      telephoneNo: '(02) 8234-5678',
      mobileNo: '+63 917 654 3210',
      email: 'sarah.williams@company.com',
    },
    familyBackground: {
      spouseName: 'David Williams',
      spouseOccupation: 'Civil Engineer',
      employerName: 'ABC Construction Corp.',
      businessAddress: '123 Business Park, Makati City',
      telephoneNo: '(02) 8345-6789',
      fatherName: 'Antonio Garcia',
      motherMaidenName: 'Carmen Reyes',
      children: [
        { name: 'Emily Williams', dateOfBirth: 'August 15, 2015' },
        { name: 'Daniel Williams', dateOfBirth: 'June 20, 2018' },
      ],
    },
    education: [
      {
        level: 'Elementary',
        school: 'St. Paul Elementary School',
        degree: 'Elementary Diploma',
        periodFrom: '1994',
        periodTo: '2000',
        unitsEarned: 'N/A',
        yearGraduated: '2000',
        honors: 'With Honors',
      },
      {
        level: 'Secondary',
        school: 'Assumption College',
        degree: 'High School Diploma',
        periodFrom: '2000',
        periodTo: '2004',
        unitsEarned: 'N/A',
        yearGraduated: '2004',
        honors: 'With High Honors',
      },
      {
        level: 'College',
        school: 'De La Salle University',
        degree: 'BS Information Technology',
        periodFrom: '2004',
        periodTo: '2008',
        unitsEarned: '168',
        yearGraduated: '2008',
        honors: 'Magna Cum Laude',
      },
      {
        level: 'Graduate Studies',
        school: 'Ateneo de Manila University',
        degree: 'MBA - IT Management',
        periodFrom: '2016',
        periodTo: '2018',
        unitsEarned: '48',
        yearGraduated: '2018',
        honors: 'With Distinction',
      },
    ],
    eligibility: [
      {
        type: 'Civil Service Professional',
        rating: '88.2%',
        dateOfExam: 'September 20, 2009',
        placeOfExam: 'Quezon City',
        licenseNumber: 'CSP-2009-345678',
        validityDate: 'Lifetime',
      },
      {
        type: 'PMP Certified',
        rating: 'Certified',
        dateOfExam: 'June 10, 2016',
        placeOfExam: 'Manila',
        licenseNumber: 'PMP-2016-789012',
        validityDate: 'June 10, 2025',
      },
    ],
    workExperience: [
      {
        inclusiveDatesFrom: 'March 1, 2022',
        inclusiveDatesTo: 'Present',
        positionTitle: 'Project Manager',
        department: 'Government Agency - IT Department',
        statusOfAppointment: 'Permanent',
        governmentService: 'Yes',
        accomplishments: 'Led 15+ successful projects, improved team efficiency by 30%, implemented Agile methodologies across department.',
        duties: 'Manage IT projects from initiation to closure, coordinate cross-functional teams, ensure project delivery on time and within budget, conduct stakeholder meetings.',
      },
      {
        inclusiveDatesFrom: 'July 1, 2013',
        inclusiveDatesTo: 'February 28, 2022',
        positionTitle: 'Senior Developer',
        department: 'Corporate Solutions Inc.',
        statusOfAppointment: 'Regular',
        governmentService: 'No',
        accomplishments: 'Developed enterprise applications serving 50,000+ users, trained 20+ developers, promoted to team lead in 2018.',
        duties: 'Lead development projects, mentor junior developers, conduct code reviews, design system architecture, and implement best practices.',
      },
    ],
    voluntaryWork: [
      {
        organization: 'Women in Technology Philippines',
        inclusiveDatesFrom: 'January 2020',
        inclusiveDatesTo: 'Present',
        numberOfHours: '200',
        positionNature: 'Board Member / Mentor',
      },
    ],
    learningDevelopment: [
      {
        title: 'Scrum Master Certification',
        inclusiveDatesFrom: 'August 15, 2024',
        inclusiveDatesTo: 'August 20, 2024',
        numberOfHours: '16',
        typeOfTraining: 'Managerial',
        conductedBy: 'Scrum Alliance',
      },
      {
        title: 'Leadership Excellence Program',
        inclusiveDatesFrom: 'November 10, 2023',
        inclusiveDatesTo: 'November 15, 2023',
        numberOfHours: '32',
        typeOfTraining: 'Supervisory',
        conductedBy: 'Leadership Institute Philippines',
      },
    ],
    otherInfo: {
      specialSkills: 'Project Management, Agile/Scrum, Team Leadership, Strategic Planning, Stakeholder Management',
      distinctions: 'Outstanding Project Manager Award 2023, Women in Tech Leadership Award 2022',
      memberships: 'PMI Philippines Chapter, Women in Technology Philippines, Agile Alliance',
    },
    references: [
      {
        name: 'Dr. Ramon Cruz',
        address: 'Ateneo de Manila University, Quezon City',
        contactNumber: '+63 917 345 6789 / ramon.cruz@ateneo.edu',
      },
      {
        name: 'Mr. James Thompson',
        address: 'Corporate Solutions Inc., BGC, Taguig City',
        contactNumber: '+63 918 456 7890 / james.thompson@corpsolutions.com',
      },
    ],
  },
];

export default function EmployeeList() {
  const [employees] = useState<Employee[]>(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(employeesData[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
          <h1 className="text-3xl text-[#C62828] mb-2">Employee List</h1>
          <p className="text-gray-600">View employee records based on Personal Data Sheet structure</p>
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
                  <p className="text-xs text-gray-500 mb-3">{employee.department}</p>
                  
                  {/* Evaluate Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/department-head/performance-evaluation/${employee.id}`, {
                        state: { employee }
                      });
                    }}
                    className="w-full px-3 py-1.5 bg-[#C62828] text-white text-xs rounded-md hover:bg-[#B71C1C] transition-colors"
                  >
                    Evaluate Employee
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Employee Profile (PDS) */}
        <div className="lg:col-span-2 space-y-6">
          {selectedEmployee ? (
            <>
              {/* SECTION I - PERSONAL INFORMATION */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-10 h-10 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl text-gray-900 mb-1">{selectedEmployee.name}</h2>
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

                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-[#C62828] uppercase tracking-wide">Section I — Personal Information</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Surname:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.surname}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">First Name:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.firstName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Middle Name:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.middleName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Name Extension:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.nameExtension || 'N/A'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Date of Birth:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.dateOfBirth}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Place of Birth:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.placeOfBirth}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Sex at Birth:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.sexAtBirth}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Civil Status:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.civilStatus}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Citizenship:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.citizenship}</p>
                  </div>
                </div>

                <h4 className="text-sm font-medium text-gray-700 mb-3 mt-5">Physical Details</h4>
                <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Height:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.height}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Weight:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.weight}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Blood Type:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.bloodType}</p>
                  </div>
                </div>

                <h4 className="text-sm font-medium text-gray-700 mb-3 mt-5">Government IDs</h4>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">UMID ID No.:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.umidNo}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">PAG-IBIG ID No.:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.pagibigNo}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">PhilHealth No.:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.philhealthNo}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">PhilSys No.:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.philsysNo}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">TIN No.:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.tinNo}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Agency Employee No.:</span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.agencyEmployeeNo}</p>
                  </div>
                </div>

                <h4 className="text-sm font-medium text-gray-700 mb-3 mt-5">Contact Information</h4>
                <div className="grid grid-cols-1 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Residential Address:
                    </span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.residentialAddress}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Permanent Address:
                    </span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.permanentAddress}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      Telephone No.:
                    </span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.telephoneNo}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      Mobile No.:
                    </span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.mobileNo}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      Email Address:
                    </span>
                    <p className="text-gray-900">{selectedEmployee.personalInfo.email}</p>
                  </div>
                </div>
              </div>

              {/* SECTION II - FAMILY BACKGROUND */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-[#C62828] uppercase tracking-wide">Section II — Family Background</h3>
                </div>

                <h4 className="text-sm font-medium text-gray-700 mb-3">Spouse Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Spouse Name:</span>
                    <p className="text-gray-900">{selectedEmployee.familyBackground.spouseName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Occupation:</span>
                    <p className="text-gray-900">{selectedEmployee.familyBackground.spouseOccupation}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Employer/Business Name:</span>
                    <p className="text-gray-900">{selectedEmployee.familyBackground.employerName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Telephone Number:</span>
                    <p className="text-gray-900">{selectedEmployee.familyBackground.telephoneNo}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500">Business Address:</span>
                    <p className="text-gray-900">{selectedEmployee.familyBackground.businessAddress}</p>
                  </div>
                </div>

                <h4 className="text-sm font-medium text-gray-700 mb-3 mt-5">Parents Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Father's Name:</span>
                    <p className="text-gray-900">{selectedEmployee.familyBackground.fatherName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Mother's Maiden Name:</span>
                    <p className="text-gray-900">{selectedEmployee.familyBackground.motherMaidenName}</p>
                  </div>
                </div>

                {selectedEmployee.familyBackground.children.length > 0 && (
                  <>
                    <h4 className="text-sm font-medium text-gray-700 mb-3 mt-5">Children</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-4 py-3 text-left text-gray-700">Child Name</th>
                            <th className="px-4 py-3 text-left text-gray-700">Date of Birth</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {selectedEmployee.familyBackground.children.map((child, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-900">{child.name}</td>
                              <td className="px-4 py-3 text-gray-600">{child.dateOfBirth}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>

              {/* SECTION III - EDUCATIONAL BACKGROUND */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-[#C62828] uppercase tracking-wide">Section III — Educational Background</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-700">Level</th>
                        <th className="px-4 py-3 text-left text-gray-700">Name of School</th>
                        <th className="px-4 py-3 text-left text-gray-700">Degree/Course</th>
                        <th className="px-4 py-3 text-left text-gray-700">Period of Attendance</th>
                        <th className="px-4 py-3 text-left text-gray-700">Units Earned</th>
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
                          <td className="px-4 py-3 text-gray-600">{edu.periodFrom} – {edu.periodTo}</td>
                          <td className="px-4 py-3 text-gray-600">{edu.unitsEarned}</td>
                          <td className="px-4 py-3 text-gray-600">{edu.yearGraduated}</td>
                          <td className="px-4 py-3 text-gray-600">{edu.honors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SECTION IV - CIVIL SERVICE ELIGIBILITY */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-[#C62828] uppercase tracking-wide">Section IV — Civil Service Eligibility</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-700">Eligibility Type</th>
                        <th className="px-4 py-3 text-left text-gray-700">Rating</th>
                        <th className="px-4 py-3 text-left text-gray-700">Date of Examination</th>
                        <th className="px-4 py-3 text-left text-gray-700">Place of Examination</th>
                        <th className="px-4 py-3 text-left text-gray-700">License Number</th>
                        <th className="px-4 py-3 text-left text-gray-700">Validity Date</th>
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

              {/* SECTION V - WORK EXPERIENCE */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-[#C62828] uppercase tracking-wide">Section V — Work Experience</h3>
                </div>
                <div className="space-y-4">
                  {selectedEmployee.workExperience.map((work, index) => (
                    <div key={index} className="border-l-4 border-[#C62828] pl-4 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-base text-gray-900 font-medium">{work.positionTitle}</h4>
                          <p className="text-sm text-gray-600">{work.department}</p>
                        </div>
                        <span className="text-sm text-[#C62828] font-medium whitespace-nowrap ml-4">
                          {work.inclusiveDatesFrom} – {work.inclusiveDatesTo}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600 mb-2">
                        <p><strong>Status of Appointment:</strong> {work.statusOfAppointment}</p>
                        <p><strong>Government Service:</strong> {work.governmentService}</p>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p><strong>Summary of Duties:</strong> {work.duties}</p>
                        <p><strong>Accomplishments:</strong> {work.accomplishments}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION VI - VOLUNTARY WORK */}
              {selectedEmployee.voluntaryWork.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h3 className="text-sm font-medium text-[#C62828] uppercase tracking-wide">Section VI — Voluntary Work</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-700">Organization Name</th>
                          <th className="px-4 py-3 text-left text-gray-700">Inclusive Dates</th>
                          <th className="px-4 py-3 text-left text-gray-700">Number of Hours</th>
                          <th className="px-4 py-3 text-left text-gray-700">Position / Nature of Work</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {selectedEmployee.voluntaryWork.map((vol, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-gray-900">{vol.organization}</td>
                            <td className="px-4 py-3 text-gray-600">{vol.inclusiveDatesFrom} – {vol.inclusiveDatesTo}</td>
                            <td className="px-4 py-3 text-gray-600">{vol.numberOfHours}</td>
                            <td className="px-4 py-3 text-gray-600">{vol.positionNature}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SECTION VII - LEARNING AND DEVELOPMENT */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-[#C62828] uppercase tracking-wide">Section VII — Learning and Development</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-700">Training Title</th>
                        <th className="px-4 py-3 text-left text-gray-700">Inclusive Dates</th>
                        <th className="px-4 py-3 text-left text-gray-700">Number of Hours</th>
                        <th className="px-4 py-3 text-left text-gray-700">Type of Training</th>
                        <th className="px-4 py-3 text-left text-gray-700">Conducted / Sponsored By</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedEmployee.learningDevelopment.map((training, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900">{training.title}</td>
                          <td className="px-4 py-3 text-gray-600">{training.inclusiveDatesFrom} – {training.inclusiveDatesTo}</td>
                          <td className="px-4 py-3 text-gray-600">{training.numberOfHours}</td>
                          <td className="px-4 py-3 text-gray-600">{training.typeOfTraining}</td>
                          <td className="px-4 py-3 text-gray-600">{training.conductedBy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SECTION VIII - OTHER INFORMATION */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-[#C62828] uppercase tracking-wide">Section VIII — Other Information</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-500 font-medium">Special Skills and Hobbies:</span>
                    <p className="text-gray-900 mt-1">{selectedEmployee.otherInfo.specialSkills}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Non-Academic Distinctions / Recognition:</span>
                    <p className="text-gray-900 mt-1">{selectedEmployee.otherInfo.distinctions}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Membership in Associations / Organizations:</span>
                    <p className="text-gray-900 mt-1">{selectedEmployee.otherInfo.memberships}</p>
                  </div>
                </div>
              </div>

              {/* SECTION IX - REFERENCES */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-[#C62828] uppercase tracking-wide">Section IX — References</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-700">Reference Name</th>
                        <th className="px-4 py-3 text-left text-gray-700">Office / Address</th>
                        <th className="px-4 py-3 text-left text-gray-700">Contact Number / Email</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedEmployee.references.map((ref, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900">{ref.name}</td>
                          <td className="px-4 py-3 text-gray-600">{ref.address}</td>
                          <td className="px-4 py-3 text-gray-600">{ref.contactNumber}</td>
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

      {/* Add Employee Modal */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
          isModalOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-900">Add New Employee</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Employee ID</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Department</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Position</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Status</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#C62828] text-white rounded-lg shadow-md hover:bg-[#B71C1C] transition-colors"
              >
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}