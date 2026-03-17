import { User, Mail, Phone, Briefcase, Calendar, MapPin, Edit, Save, X, Users, GraduationCap, Award, BookOpen, Heart, FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function EmployeeProfile() {
  const [isEditing, setIsEditing] = useState(false);

  // Complete PDS Data Structure
  const employeeData = {
    // Profile Header
    employeeId: 'EMP-2024-001',
    photo: null,
    position: 'Software Engineer',
    department: 'Information Technology',
    employmentStatus: 'Regular',
    dateHired: '2024-01-15',
    
    // Section I - Personal Information
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
    
    // Government IDs
    umidNumber: '0000-0000000-0',
    pagibigNumber: '1234-5678-9012',
    philhealthNumber: '12-345678901-2',
    philsysNumber: '1234-5678-9012-3456',
    tinNumber: '123-456-789-000',
    agencyEmployeeNumber: 'EMP-2024-001',
    
    // Contact Information
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
    ],
    
    // Section III - Educational Background
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
    
    // Section IV - Civil Service Eligibility
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
    
    // Section V - Work Experience
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
      },
      {
        period: 'Jul 2017 - May 2020',
        position: 'Software Development Intern',
        company: 'Startup Hub Philippines, Taguig City',
        status: 'Contractual',
        govService: 'No',
        accomplishments: 'Completed 3 major projects, Learned modern development practices',
        duties: 'Assist in software development, Debug and test applications, Document code and processes'
      }
    ],
    
    // Section VI - Voluntary Work
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
    
    // Section VII - Learning and Development
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
      },
      {
        title: 'AWS Cloud Practitioner Certification',
        period: 'Sep 15-16, 2024',
        hours: 12,
        type: 'Technical',
        sponsor: 'Amazon Web Services'
      },
      {
        title: 'Leadership and Team Building Workshop',
        period: 'Mar 20, 2024',
        hours: 8,
        type: 'Supervisory',
        sponsor: 'Corporate Training Solutions'
      }
    ],
    
    // Section VIII - Other Information
    otherInfo: {
      skills: 'React.js, Node.js, TypeScript, Python, SQL, AWS, Docker, Git, Agile/Scrum',
      distinctions: 'Employee of the Year 2022, Best Thesis Award 2017, Dean\'s Lister (2013-2017)',
      memberships: 'Philippine Computer Society (PCS), Association for Computing Machinery (ACM)'
    },
    
    // Section IX - References
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
    ],
    
    // Declaration
    governmentId: 'UMID',
    idNumber: '0000-0000000-0',
    idIssuance: 'SSS, Quezon City / January 15, 2020',
    dateAccomplished: 'March 11, 2026'
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
                {employeeData.firstName} {employeeData.middleName} {employeeData.surname}
              </h2>
              <p className="text-base text-white/90">{employeeData.position}</p>
              <p className="text-sm text-white/80">{employeeData.department}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-600 mb-1">Employee ID</p>
              <p className="text-sm text-gray-900 font-medium">{employeeData.employeeId}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Employment Status</p>
              <p className="text-sm text-gray-900 font-medium">{employeeData.employmentStatus}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Date Hired</p>
              <p className="text-sm text-gray-900 font-medium">{employeeData.dateHired}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C62828]" />
              <div>
                <p className="text-xs text-gray-600">Email</p>
                <p className="text-xs text-gray-900">{employeeData.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C62828]" />
              <div>
                <p className="text-xs text-gray-600">Mobile</p>
                <p className="text-xs text-gray-900">{employeeData.mobileNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C62828]" />
              <div>
                <p className="text-xs text-gray-600">Telephone</p>
                <p className="text-xs text-gray-900">{employeeData.telephoneNumber}</p>
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
              <p className="text-sm text-gray-900">{employeeData.surname}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">First Name</label>
              <p className="text-sm text-gray-900">{employeeData.firstName}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Middle Name</label>
              <p className="text-sm text-gray-900">{employeeData.middleName}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Name Extension</label>
              <p className="text-sm text-gray-900">{employeeData.nameExtension || 'N/A'}</p>
            </div>
          </div>

          {/* Birth and Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Date of Birth</label>
              <p className="text-sm text-gray-900">{employeeData.dateOfBirth}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-gray-600 mb-1">Place of Birth</label>
              <p className="text-sm text-gray-900">{employeeData.placeOfBirth}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Sex at Birth</label>
              <p className="text-sm text-gray-900">{employeeData.sex}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Civil Status</label>
              <p className="text-sm text-gray-900">{employeeData.civilStatus}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Citizenship</label>
              <p className="text-sm text-gray-900">{employeeData.citizenship}</p>
            </div>
          </div>

          {/* Physical Details */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-gray-700 mb-3">Physical Details</h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Height</label>
                <p className="text-sm text-gray-900">{employeeData.height}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Weight</label>
                <p className="text-sm text-gray-900">{employeeData.weight}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Blood Type</label>
                <p className="text-sm text-gray-900">{employeeData.bloodType}</p>
              </div>
            </div>
          </div>

          {/* Government IDs */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-gray-700 mb-3">Government Issued IDs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">UMID ID Number</label>
                <p className="text-sm text-gray-900">{employeeData.umidNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">PAG-IBIG ID Number</label>
                <p className="text-sm text-gray-900">{employeeData.pagibigNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">PhilHealth Number</label>
                <p className="text-sm text-gray-900">{employeeData.philhealthNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">PhilSys Number</label>
                <p className="text-sm text-gray-900">{employeeData.philsysNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">TIN Number</label>
                <p className="text-sm text-gray-900">{employeeData.tinNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Agency Employee Number</label>
                <p className="text-sm text-gray-900">{employeeData.agencyEmployeeNumber}</p>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-gray-700 mb-3">Addresses</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Residential Address</label>
                <p className="text-sm text-gray-900">{employeeData.residentialAddress}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Permanent Address</label>
                <p className="text-sm text-gray-900">{employeeData.permanentAddress}</p>
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
            <h4 className="text-xs font-semibold text-gray-700 mb-3">Spouse Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Surname</label>
                <p className="text-sm text-gray-900">{employeeData.spouse.surname}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">First Name</label>
                <p className="text-sm text-gray-900">{employeeData.spouse.firstName}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Middle Name</label>
                <p className="text-sm text-gray-900">{employeeData.spouse.middleName}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Occupation</label>
                <p className="text-sm text-gray-900">{employeeData.spouse.occupation}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Employer / Business Name</label>
                <p className="text-sm text-gray-900">{employeeData.spouse.employer}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Business Address</label>
                <p className="text-sm text-gray-900">{employeeData.spouse.businessAddress}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Telephone Number</label>
                <p className="text-sm text-gray-900">{employeeData.spouse.telephone}</p>
              </div>
            </div>
          </div>

          {/* Parents Information */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-gray-700 mb-3">Parents Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Father's Name</label>
                <p className="text-sm text-gray-900">
                  {employeeData.father.firstName} {employeeData.father.middleName} {employeeData.father.surname}
                </p>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Mother's Maiden Name</label>
                <p className="text-sm text-gray-900">
                  {employeeData.mother.firstName} {employeeData.mother.middleName} {employeeData.mother.surname}
                </p>
              </div>
            </div>
          </div>

          {/* Children */}
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
                  {employeeData.children.map((child, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-3 text-sm text-gray-900">{child.name}</td>
                      <td className="py-3 px-3 text-sm text-gray-600">{child.dateOfBirth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              {employeeData.education.map((edu, index) => (
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
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
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
              {employeeData.eligibility.map((elig, index) => (
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
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section V — Work Experience</h3>
        </div>
        <div className="space-y-4">
          {employeeData.workExperience.map((work, index) => (
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
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
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
              {employeeData.voluntaryWork.map((vol, index) => (
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
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
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
              {employeeData.training.map((train, index) => (
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
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section VIII — Other Information</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Special Skills and Hobbies</label>
            <p className="text-sm text-gray-900">{employeeData.otherInfo.skills}</p>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Non-Academic Distinctions / Recognition</label>
            <p className="text-sm text-gray-900">{employeeData.otherInfo.distinctions}</p>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Membership in Associations / Organizations</label>
            <p className="text-sm text-gray-900">{employeeData.otherInfo.memberships}</p>
          </div>
        </div>
      </div>

      {/* Section IX - References */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-[#C62828]" />
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
              {employeeData.references.map((ref, index) => (
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

      {/* Declaration and Signature */}
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
              <p className="text-sm text-gray-900">{employeeData.governmentId}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">ID Number</label>
              <p className="text-sm text-gray-900">{employeeData.idNumber}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Date/Place of Issuance</label>
              <p className="text-sm text-gray-900">{employeeData.idIssuance}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-600 mb-1">Date Accomplished</p>
                <p className="text-sm text-gray-900 font-medium">{employeeData.dateAccomplished}</p>
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

      {/* Info Note */}
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> This is your personal profile information. For profile updates or discrepancies, please contact the HR Department. 
          Profile data is confidential and for your viewing only.
        </p>
      </div>
    </div>
  );
}