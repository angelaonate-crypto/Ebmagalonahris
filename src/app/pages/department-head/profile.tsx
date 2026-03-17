import { User, Mail, Phone, Briefcase, Calendar, MapPin, Edit, Save, X, Users, GraduationCap, Award, BookOpen, Heart, FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function DepartmentHeadProfile() {
  const [isEditing, setIsEditing] = useState(false);

  // Complete PDS Data Structure for Department Head
  const departmentHeadData = {
    // Profile Header
    employeeId: 'EMP-2020-015',
    photo: null,
    position: 'Department Head - Information Technology',
    department: 'Information Technology',
    employmentStatus: 'Regular',
    dateHired: '2020-03-01',
    
    // Section I - Personal Information
    surname: 'Gonzales',
    firstName: 'Roberto',
    middleName: 'Martinez',
    nameExtension: '',
    dateOfBirth: '1985-04-20',
    placeOfBirth: 'Quezon City, Philippines',
    sex: 'Male',
    civilStatus: 'Married',
    citizenship: 'Filipino',
    height: '5\'10"',
    weight: '75 kg',
    bloodType: 'A+',
    
    // Government IDs
    umidNumber: '0001-1111111-1',
    pagibigNumber: '2222-3333-4444',
    philhealthNumber: '12-987654321-1',
    philsysNumber: '9876-5432-1098-7654',
    tinNumber: '987-654-321-000',
    agencyEmployeeNumber: 'EMP-2020-015',
    
    // Contact Information
    residentialAddress: '789 Technology Drive, Quezon City, Metro Manila 1105',
    permanentAddress: '789 Technology Drive, Quezon City, Metro Manila 1105',
    telephoneNumber: '(02) 8765-4321',
    mobileNumber: '+63 917 888 9999',
    email: 'roberto.gonzales@company.com',
    
    // Section II - Family Background
    spouse: {
      surname: 'Gonzales',
      firstName: 'Elizabeth Ann',
      middleName: 'Cruz',
      occupation: 'Senior Accountant',
      employer: 'Major Corporation Inc.',
      businessAddress: '456 Business Park, Makati City',
      telephone: '(02) 8456-7890'
    },
    father: {
      surname: 'Gonzales',
      firstName: 'Carlos',
      middleName: 'Rivera'
    },
    mother: {
      surname: 'Martinez',
      firstName: 'Carmen',
      middleName: 'Santos'
    },
    children: [
      { name: 'Roberto Carlos Gonzales Jr.', dateOfBirth: '2015-09-10' },
      { name: 'Isabella Marie Gonzales', dateOfBirth: '2018-05-22' },
      { name: 'Miguel Antonio Gonzales', dateOfBirth: '2021-11-08' }
    ],
    
    // Section III - Educational Background
    education: [
      {
        level: 'Graduate Studies',
        school: 'De La Salle University',
        course: 'Master of Business Administration (MBA)',
        period: '2015 - 2017',
        units: '48 units',
        yearGraduated: '2017',
        honors: 'With Distinction'
      },
      {
        level: 'Graduate Studies',
        school: 'Ateneo de Manila University',
        course: 'Master of Science in Information Technology',
        period: '2010 - 2012',
        units: '42 units',
        yearGraduated: '2012',
        honors: 'Cum Laude'
      },
      {
        level: 'College',
        school: 'University of the Philippines - Diliman',
        course: 'Bachelor of Science in Computer Science',
        period: '2003 - 2007',
        units: '160 units',
        yearGraduated: '2007',
        honors: 'Magna Cum Laude'
      },
      {
        level: 'Secondary',
        school: 'Philippine Science High School',
        course: 'Science and Technology',
        period: '1999 - 2003',
        units: 'Completed',
        yearGraduated: '2003',
        honors: 'With Highest Honors'
      },
      {
        level: 'Elementary',
        school: 'Quezon City Pilot Elementary School',
        course: '',
        period: '1993 - 1999',
        units: 'Completed',
        yearGraduated: '1999',
        honors: 'Class Valedictorian'
      }
    ],
    
    // Section IV - Civil Service Eligibility
    eligibility: [
      {
        type: 'Career Service Executive/Managerial',
        rating: '92.75%',
        dateOfExamination: '2019-06-15',
        placeOfExamination: 'Civil Service Commission, Quezon City',
        licenseNumber: 'CSC-EXEC-2019-06-789012',
        validityDate: 'Lifetime'
      },
      {
        type: 'Career Service Professional',
        rating: '88.50%',
        dateOfExamination: '2008-03-20',
        placeOfExamination: 'Civil Service Commission, Manila',
        licenseNumber: 'CSC-2008-03-456789',
        validityDate: 'Lifetime'
      }
    ],
    
    // Section V - Work Experience
    workExperience: [
      {
        period: 'Mar 2020 - Present',
        position: 'Department Head - Information Technology',
        company: 'Current Organization, Quezon City',
        status: 'Regular',
        govService: 'Yes',
        accomplishments: 'Led digital transformation initiative, Reduced IT costs by 35%, Implemented new HRIS system, Managed team of 25+ IT professionals, Achieved 99.9% system uptime',
        duties: 'Oversee all IT operations and strategy, Manage department budget and resources, Lead technology roadmap planning, Supervise IT staff performance and development, Coordinate with executive leadership on technology initiatives, Ensure compliance with data security policies'
      },
      {
        period: 'Jun 2015 - Feb 2020',
        position: 'IT Manager',
        company: 'Previous Organization, Makati City',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Implemented cloud migration strategy, Built high-performing IT team from 5 to 15 members, Launched mobile-first applications, Reduced incident response time by 60%',
        duties: 'Manage IT infrastructure and operations, Lead software development projects, Coordinate with vendors and partners, Implement cybersecurity measures, Develop IT policies and procedures'
      },
      {
        period: 'Jul 2012 - May 2015',
        position: 'Senior IT Specialist',
        company: 'Technology Solutions Corp., Taguig City',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Led major ERP implementation, Mentored 8 junior developers, Achieved 98% customer satisfaction rating, Received Innovation Award 2014',
        duties: 'Design and implement enterprise solutions, Conduct technical training sessions, Manage client relationships, Provide technical leadership on complex projects, Review and approve technical specifications'
      },
      {
        period: 'Aug 2007 - Jun 2012',
        position: 'IT Specialist',
        company: 'Software Development Inc., Quezon City',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Developed critical business applications, Improved system performance by 45%, Led team of 3 developers',
        duties: 'Develop and maintain software applications, Troubleshoot technical issues, Document system processes, Participate in project planning, Provide technical support to users'
      }
    ],
    
    // Section VI - Voluntary Work
    voluntaryWork: [
      {
        organization: 'Philippine Computer Society - National Board',
        period: 'Jan 2022 - Present',
        hours: 200,
        position: 'Board of Directors - Technology Advancement Committee'
      },
      {
        organization: 'Tech for Good Philippines Foundation',
        period: 'Jun 2020 - Dec 2023',
        hours: 150,
        position: 'Mentor for IT Professionals and Students'
      },
      {
        organization: 'Public School IT Infrastructure Program',
        period: 'Jan 2019 - May 2020',
        hours: 120,
        position: 'Technical Advisor and Volunteer Coordinator'
      }
    ],
    
    // Section VII - Learning and Development
    training: [
      {
        title: 'Executive Leadership Program',
        period: 'Oct 15-20, 2025',
        hours: 40,
        type: 'Executive',
        sponsor: 'Asian Institute of Management'
      },
      {
        title: 'Strategic IT Management and Digital Transformation',
        period: 'Jun 5-9, 2025',
        hours: 32,
        type: 'Managerial',
        sponsor: 'Harvard Business School Online'
      },
      {
        title: 'Certified Information Security Manager (CISM)',
        period: 'Mar 10-14, 2025',
        hours: 40,
        type: 'Technical',
        sponsor: 'ISACA Philippines Chapter'
      },
      {
        title: 'Advanced Project Management Professional (PMP)',
        period: 'Nov 20-25, 2024',
        hours: 35,
        type: 'Managerial',
        sponsor: 'Project Management Institute'
      },
      {
        title: 'Change Management and Organizational Development',
        period: 'Aug 12-14, 2024',
        hours: 24,
        type: 'Supervisory',
        sponsor: 'Philippine Institute for Development Studies'
      },
      {
        title: 'Enterprise Architecture and Cloud Strategy',
        period: 'May 5-7, 2024',
        hours: 20,
        type: 'Technical',
        sponsor: 'Amazon Web Services'
      }
    ],
    
    // Section VIII - Other Information
    otherInfo: {
      skills: 'Strategic Planning, IT Management, Team Leadership, Digital Transformation, Cloud Architecture, Cybersecurity, Budget Management, Stakeholder Management, Agile/Scrum, Enterprise Systems, Project Management, Change Management',
      distinctions: 'IT Leader of the Year 2023 (Philippine IT Association), Innovation Excellence Award 2021, Outstanding Manager Award 2019, Best Thesis Award - MBA Program 2017, Dean\'s List (2003-2007)',
      memberships: 'Philippine Computer Society (Board Member), Information Systems Audit and Control Association (ISACA) - Senior Member, Project Management Institute (PMI) - Certified Member, Association for Computing Machinery (ACM) - Professional Member'
    },
    
    // Section IX - References
    references: [
      {
        name: 'Dr. Patricia Cruz',
        address: 'Executive Director, Technology Institute of the Philippines, Manila',
        contact: '+63 917 111 2222 / p.cruz@tip.edu.ph'
      },
      {
        name: 'Engr. Michael Santos',
        address: 'Chief Technology Officer, Major Corporation Inc., Makati City',
        contact: '+63 918 333 4444 / m.santos@majorcorp.com'
      },
      {
        name: 'Atty. Jose Reyes',
        address: 'Managing Partner, Technology Law Associates, BGC Taguig',
        contact: '+63 919 555 6666 / j.reyes@techlaw.com.ph'
      }
    ],
    
    // Declaration
    governmentId: 'UMID',
    idNumber: '0001-1111111-1',
    idIssuance: 'SSS, Quezon City / March 15, 2019',
    dateAccomplished: 'March 12, 2026'
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">My Profile</h1>
        <p className="text-gray-600">Personal Data Sheet (CS Form 212 Revised 2025)</p>
      </div>

      {/* Profile Header Card */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] px-8 py-10">
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
              <User className="w-14 h-14 text-[#C62828]" />
            </div>
            <div className="text-white flex-1">
              <h2 className="text-2xl font-bold mb-1">
                {departmentHeadData.firstName} {departmentHeadData.middleName} {departmentHeadData.surname}
              </h2>
              <p className="text-base text-white/90">{departmentHeadData.position}</p>
              <p className="text-sm text-white/80">{departmentHeadData.department}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-600 mb-1">Employee ID</p>
              <p className="text-sm text-gray-900 font-medium">{departmentHeadData.employeeId}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Employment Status</p>
              <p className="text-sm text-gray-900 font-medium">{departmentHeadData.employmentStatus}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Date Hired</p>
              <p className="text-sm text-gray-900 font-medium">{departmentHeadData.dateHired}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C62828]" />
              <div>
                <p className="text-xs text-gray-600">Email</p>
                <p className="text-xs text-gray-900">{departmentHeadData.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C62828]" />
              <div>
                <p className="text-xs text-gray-600">Mobile</p>
                <p className="text-xs text-gray-900">{departmentHeadData.mobileNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C62828]" />
              <div>
                <p className="text-xs text-gray-600">Telephone</p>
                <p className="text-xs text-gray-900">{departmentHeadData.telephoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section I - Personal Information */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#C62828]" />
            <h3 className="text-base font-semibold text-gray-900">Section I — Personal Information</h3>
          </div>
        </div>

        <div className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Surname</label>
              <p className="text-sm text-gray-900">{departmentHeadData.surname}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">First Name</label>
              <p className="text-sm text-gray-900">{departmentHeadData.firstName}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Middle Name</label>
              <p className="text-sm text-gray-900">{departmentHeadData.middleName}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Name Extension</label>
              <p className="text-sm text-gray-900">{departmentHeadData.nameExtension || 'N/A'}</p>
            </div>
          </div>

          {/* Birth and Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Date of Birth</label>
              <p className="text-sm text-gray-900">{departmentHeadData.dateOfBirth}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-gray-600 mb-1">Place of Birth</label>
              <p className="text-sm text-gray-900">{departmentHeadData.placeOfBirth}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Sex</label>
              <p className="text-sm text-gray-900">{departmentHeadData.sex}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Civil Status</label>
              <p className="text-sm text-gray-900">{departmentHeadData.civilStatus}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Citizenship</label>
              <p className="text-sm text-gray-900">{departmentHeadData.citizenship}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Blood Type</label>
              <p className="text-sm text-gray-900">{departmentHeadData.bloodType}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Height</label>
              <p className="text-sm text-gray-900">{departmentHeadData.height}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Weight</label>
              <p className="text-sm text-gray-900">{departmentHeadData.weight}</p>
            </div>
          </div>

          {/* Government IDs */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-xs text-gray-700 font-semibold mb-3 uppercase">Government Issued IDs</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">UMID Number</label>
                <p className="text-sm text-gray-900">{departmentHeadData.umidNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">PAG-IBIG Number</label>
                <p className="text-sm text-gray-900">{departmentHeadData.pagibigNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">PhilHealth Number</label>
                <p className="text-sm text-gray-900">{departmentHeadData.philhealthNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">PhilSys Number</label>
                <p className="text-sm text-gray-900">{departmentHeadData.philsysNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">TIN</label>
                <p className="text-sm text-gray-900">{departmentHeadData.tinNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Agency Employee Number</label>
                <p className="text-sm text-gray-900">{departmentHeadData.agencyEmployeeNumber}</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-xs text-gray-700 font-semibold mb-3 uppercase">Contact Information</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Residential Address</label>
                <p className="text-sm text-gray-900">{departmentHeadData.residentialAddress}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Permanent Address</label>
                <p className="text-sm text-gray-900">{departmentHeadData.permanentAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section II - Family Background */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section II — Family Background</h3>
        </div>

        <div className="space-y-6">
          {/* Spouse Information */}
          <div>
            <h4 className="text-xs text-gray-700 font-semibold mb-3 uppercase">Spouse Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Surname</label>
                <p className="text-sm text-gray-900">{departmentHeadData.spouse.surname}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">First Name</label>
                <p className="text-sm text-gray-900">{departmentHeadData.spouse.firstName}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Middle Name</label>
                <p className="text-sm text-gray-900">{departmentHeadData.spouse.middleName}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Occupation</label>
                <p className="text-sm text-gray-900">{departmentHeadData.spouse.occupation}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Employer</label>
                <p className="text-sm text-gray-900">{departmentHeadData.spouse.employer}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Telephone</label>
                <p className="text-sm text-gray-900">{departmentHeadData.spouse.telephone}</p>
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs text-gray-600 mb-1">Business Address</label>
                <p className="text-sm text-gray-900">{departmentHeadData.spouse.businessAddress}</p>
              </div>
            </div>
          </div>

          {/* Parents */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-xs text-gray-700 font-semibold mb-3 uppercase">Father's Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Surname</label>
                <p className="text-sm text-gray-900">{departmentHeadData.father.surname}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">First Name</label>
                <p className="text-sm text-gray-900">{departmentHeadData.father.firstName}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Middle Name</label>
                <p className="text-sm text-gray-900">{departmentHeadData.father.middleName}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-xs text-gray-700 font-semibold mb-3 uppercase">Mother's Maiden Name</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Surname</label>
                <p className="text-sm text-gray-900">{departmentHeadData.mother.surname}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">First Name</label>
                <p className="text-sm text-gray-900">{departmentHeadData.mother.firstName}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Middle Name</label>
                <p className="text-sm text-gray-900">{departmentHeadData.mother.middleName}</p>
              </div>
            </div>
          </div>

          {/* Children */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-xs text-gray-700 font-semibold mb-3 uppercase">Children (Name and Date of Birth)</h4>
            <div className="space-y-2">
              {departmentHeadData.children.map((child, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Name</label>
                    <p className="text-sm text-gray-900">{child.name}</p>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Date of Birth</label>
                    <p className="text-sm text-gray-900">{child.dateOfBirth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section III - Educational Background */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section III — Educational Background</h3>
        </div>

        <div className="space-y-4">
          {departmentHeadData.education.map((edu, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#C62828] text-white text-xs rounded-full">{edu.level}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">School Name</label>
                  <p className="text-sm text-gray-900">{edu.school}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Basic Education/Degree/Course</label>
                  <p className="text-sm text-gray-900">{edu.course || 'N/A'}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Period of Attendance</label>
                  <p className="text-sm text-gray-900">{edu.period}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Highest Level/Units Earned</label>
                  <p className="text-sm text-gray-900">{edu.units}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Year Graduated</label>
                  <p className="text-sm text-gray-900">{edu.yearGraduated}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Scholarship/Academic Honors</label>
                  <p className="text-sm text-gray-900">{edu.honors || 'N/A'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section IV - Civil Service Eligibility */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section IV — Civil Service Eligibility</h3>
        </div>

        <div className="space-y-4">
          {departmentHeadData.eligibility.map((elig, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Career Service/Eligibility</label>
                  <p className="text-sm text-gray-900 font-medium">{elig.type}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Rating</label>
                  <p className="text-sm text-gray-900">{elig.rating}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Date of Examination/Conferment</label>
                  <p className="text-sm text-gray-900">{elig.dateOfExamination}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Place of Examination/Conferment</label>
                  <p className="text-sm text-gray-900">{elig.placeOfExamination}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">License Number</label>
                  <p className="text-sm text-gray-900">{elig.licenseNumber}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Validity Date</label>
                  <p className="text-sm text-gray-900">{elig.validityDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section V - Work Experience */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section V — Work Experience</h3>
        </div>

        <div className="space-y-4">
          {departmentHeadData.workExperience.map((work, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Inclusive Dates</label>
                  <p className="text-sm text-gray-900 font-medium">{work.period}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Position Title</label>
                  <p className="text-sm text-gray-900 font-medium">{work.position}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Status of Appointment</label>
                  <p className="text-sm text-gray-900">{work.status}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Department/Agency/Office/Company</label>
                  <p className="text-sm text-gray-900">{work.company}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Government Service</label>
                  <p className="text-sm text-gray-900">{work.govService}</p>
                </div>
              </div>
              <div className="space-y-3 border-t border-gray-200 pt-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Key Accomplishments</label>
                  <p className="text-sm text-gray-900">{work.accomplishments}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Duties and Responsibilities</label>
                  <p className="text-sm text-gray-900">{work.duties}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section VI - Voluntary Work */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section VI — Voluntary Work or Involvement in Civic/Non-Government/People/Voluntary Organizations</h3>
        </div>

        <div className="space-y-4">
          {departmentHeadData.voluntaryWork.map((vol, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Organization Name & Address</label>
                  <p className="text-sm text-gray-900">{vol.organization}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Inclusive Dates</label>
                  <p className="text-sm text-gray-900">{vol.period}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Number of Hours</label>
                  <p className="text-sm text-gray-900">{vol.hours} hours</p>
                </div>
                <div className="md:col-span-3">
                  <label className="block text-xs text-gray-600 mb-1">Position/Nature of Work</label>
                  <p className="text-sm text-gray-900">{vol.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section VII - Learning and Development */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section VII — Learning and Development (L&D) Interventions/Training Programs Attended</h3>
        </div>

        <div className="space-y-4">
          {departmentHeadData.training.map((train, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-600 mb-1">Title of Learning and Development Interventions/Training Programs</label>
                  <p className="text-sm text-gray-900 font-medium">{train.title}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Inclusive Dates of Attendance</label>
                  <p className="text-sm text-gray-900">{train.period}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Number of Hours</label>
                  <p className="text-sm text-gray-900">{train.hours} hours</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Type of LD</label>
                  <span className="inline-block px-2 py-1 text-xs bg-[#C62828] text-white rounded">
                    {train.type}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <label className="block text-xs text-gray-600 mb-1">Conducted/Sponsored By</label>
                  <p className="text-sm text-gray-900">{train.sponsor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section VIII - Other Information */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section VIII — Other Information</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-2">Special Skills and Hobbies</label>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-900">{departmentHeadData.otherInfo.skills}</p>
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-2">Non-Academic Distinctions/Recognition</label>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-900">{departmentHeadData.otherInfo.distinctions}</p>
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-2">Membership in Association/Organization</label>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-900">{departmentHeadData.otherInfo.memberships}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section IX - References */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <CheckCircle className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section IX — Character References</h3>
        </div>

        <div className="space-y-4">
          {departmentHeadData.references.map((ref, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Name</label>
                  <p className="text-sm text-gray-900 font-medium">{ref.name}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Address</label>
                  <p className="text-sm text-gray-900">{ref.address}</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Tel. No. / Email</label>
                  <p className="text-sm text-gray-900">{ref.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Declaration */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Declaration</h3>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700 mb-4 italic">
              I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein. I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Government Issued ID</label>
              <p className="text-sm text-gray-900">{departmentHeadData.governmentId}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">ID Number</label>
              <p className="text-sm text-gray-900">{departmentHeadData.idNumber}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Date/Place of Issuance</label>
              <p className="text-sm text-gray-900">{departmentHeadData.idIssuance}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-600 mb-1">Date Accomplished</p>
                <p className="text-sm text-gray-900 font-medium">{departmentHeadData.dateAccomplished}</p>
              </div>
              <div className="text-right">
                <div className="mb-2">
                  <p className="text-xs text-gray-600 mb-8">Signature</p>
                  <div className="border-b-2 border-gray-400 w-48"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
