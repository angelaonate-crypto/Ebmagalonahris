import { User, Mail, Phone, Briefcase, Calendar, MapPin, Edit, Save, X, Users, GraduationCap, Award, BookOpen, Heart, FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function HRStaffProfile() {
  const [isEditing, setIsEditing] = useState(false);

  // Complete PDS Data Structure for HR Staff
  const employeeData = {
    // Profile Header
    employeeId: 'EMP-2024-015',
    photo: null,
    position: 'HR Staff',
    department: 'Human Resources',
    employmentStatus: 'Regular',
    dateHired: '2024-01-08',
    
    // Section I - Personal Information
    surname: 'Mercado',
    firstName: 'Elena',
    middleName: 'Rivera',
    nameExtension: '',
    dateOfBirth: '1996-04-22',
    placeOfBirth: 'Pasig City, Philippines',
    sex: 'Female',
    civilStatus: 'Single',
    citizenship: 'Filipino',
    height: '5\'5"',
    weight: '52 kg',
    bloodType: 'A+',
    
    // Government IDs
    umidNumber: '0000-0000015-0',
    pagibigNumber: '1234-5678-9015',
    philhealthNumber: '12-345678915-2',
    philsysNumber: '1234-5678-9015-3456',
    tinNumber: '123-456-789-015',
    agencyEmployeeNumber: 'EMP-2024-015',
    
    // Contact Information
    residentialAddress: '456 Shaw Boulevard, Pasig City, Metro Manila 1600',
    permanentAddress: '789 Ortigas Avenue, Pasig City, Metro Manila 1605',
    telephoneNumber: '(02) 8567-8901',
    mobileNumber: '+63 917 456 7890',
    email: 'elena.mercado@company.com',
    
    // Section II - Family Background
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
      surname: 'Mercado',
      firstName: 'Ricardo',
      middleName: 'Santos'
    },
    mother: {
      surname: 'Rivera',
      firstName: 'Carmen',
      middleName: 'Torres'
    },
    children: [],
    
    // Section III - Educational Background
    education: [
      {
        level: 'College',
        school: 'Polytechnic University of the Philippines',
        course: 'Bachelor of Science in Business Administration Major in Human Resource Management',
        period: '2014 - 2018',
        units: '180 units',
        yearGraduated: '2018',
        honors: 'Cum Laude'
      },
      {
        level: 'Secondary',
        school: 'Pasig Catholic College',
        course: 'Business and Management Track',
        period: '2010 - 2014',
        units: 'Completed',
        yearGraduated: '2014',
        honors: 'With Honors'
      },
      {
        level: 'Elementary',
        school: 'Pasig City Elementary School',
        course: '',
        period: '2004 - 2010',
        units: 'Completed',
        yearGraduated: '2010',
        honors: 'With Honors'
      }
    ],
    
    // Section IV - Civil Service Eligibility
    eligibility: [
      {
        type: 'Career Service Professional',
        rating: '82.75%',
        dateOfExamination: '2018-11-18',
        placeOfExamination: 'Civil Service Commission, Quezon City',
        licenseNumber: 'CSC-2018-11-234567',
        validityDate: 'Lifetime'
      }
    ],
    
    // Section V - Work Experience
    workExperience: [
      {
        period: 'Jan 2024 - Present',
        position: 'HR Staff',
        company: 'Current Company, Makati City',
        status: 'Regular',
        govService: 'Yes',
        accomplishments: 'Digitized 500+ employee records, Implemented new HRIS module, Streamlined document processing by 40%',
        duties: 'Maintain employee records and PDS information, Process employee documentation, Coordinate recruitment activities, Assist in benefits administration, Manage attendance and leave records'
      },
      {
        period: 'Mar 2021 - Dec 2023',
        position: 'HR Assistant',
        company: 'Business Services Corporation, Pasig City',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Managed 300+ employee files, Achieved 99% accuracy in records management, Received Recognition Award 2023',
        duties: 'File and maintain personnel records, Process government benefits enrollments, Assist in recruitment coordination, Handle employee inquiries, Prepare HR reports and documents'
      },
      {
        period: 'Jun 2018 - Feb 2021',
        position: 'Administrative Assistant - HR',
        company: 'Human Capital Solutions Inc., Mandaluyong City',
        status: 'Regular',
        govService: 'No',
        accomplishments: 'Organized 50+ recruitment activities, Reduced document processing time by 25%',
        duties: 'Assist HR department with administrative tasks, Maintain filing system, Schedule interviews and meetings, Prepare employment documents'
      }
    ],
    
    // Section VI - Voluntary Work
    voluntaryWork: [
      {
        organization: 'PMAP - People Management Association of the Philippines',
        period: '2022-2024',
        hours: 60,
        position: 'Volunteer Member'
      },
      {
        organization: 'Pasig City Skills Training Program',
        period: '2020',
        hours: 30,
        position: 'Administrative Support Volunteer'
      }
    ],
    
    // Section VII - Learning and Development
    training: [
      {
        title: 'Strategic HR Management',
        period: 'February 2024',
        hours: 24,
        type: 'Management',
        sponsor: 'People Management Association of the Philippines'
      },
      {
        title: 'Philippine Labor Law and Compliance',
        period: 'November 2023',
        hours: 16,
        type: 'Legal',
        sponsor: 'Department of Labor and Employment'
      },
      {
        title: 'HRIS Systems Management',
        period: 'August 2023',
        hours: 20,
        type: 'Technical',
        sponsor: 'HR Technology Institute'
      },
      {
        title: 'Records Management and Data Privacy',
        period: 'May 2023',
        hours: 12,
        type: 'Compliance',
        sponsor: 'National Privacy Commission'
      },
      {
        title: 'Recruitment and Selection Best Practices',
        period: 'January 2023',
        hours: 16,
        type: 'Technical',
        sponsor: 'Philippine Recruiters Association'
      }
    ],
    
    // Section VIII - Other Information
    otherInfo: {
      skills: 'HRIS Systems, MS Office Suite, Document Management, Employee Relations, Recruitment Support, Records Management, Data Entry, Filing Systems',
      distinctions: 'Recognition Award for Outstanding Service 2023, Best Administrative Support Staff 2022',
      memberships: 'People Management Association of the Philippines (PMAP) - Associate Member'
    },
    
    // Section IX - References
    references: [
      {
        name: 'Ms. Patricia Santos',
        address: 'Business Services Corporation, Pasig City',
        contact: 'patricia.santos@bscorp.com / +63 918 123 4567'
      },
      {
        name: 'Mr. Roberto Cruz',
        address: 'Human Capital Solutions Inc., Mandaluyong City',
        contact: 'roberto.cruz@hcsinc.com / +63 919 234 5678'
      },
      {
        name: 'Prof. Maria Gonzales',
        address: 'Polytechnic University of the Philippines, Manila',
        contact: 'maria.gonzales@pup.edu.ph / +63 920 345 6789'
      }
    ],
    
    // Declaration
    governmentId: 'UMID',
    idNumber: '0000-0000015-0',
    idIssuance: 'SSS, Pasig City / January 8, 2024',
    dateAccomplished: 'March 12, 2026'
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save logic here
    setIsEditing(false);
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
          {!isEditing && (
            <button
              onClick={handleEdit}
              className="text-[#C62828] hover:text-[#B71C1C] flex items-center gap-1 text-sm font-medium"
            >
              <Edit className="w-4 h-4" />
              Edit Contact Info
            </button>
          )}
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

          {/* Addresses - Editable */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-gray-700 mb-3">Addresses</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Residential Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={employeeData.residentialAddress}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                ) : (
                  <p className="text-sm text-gray-900">{employeeData.residentialAddress}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Permanent Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={employeeData.permanentAddress}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                ) : (
                  <p className="text-sm text-gray-900">{employeeData.permanentAddress}</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information - Editable */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-gray-700 mb-3">Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Telephone Number</label>
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={employeeData.telephoneNumber}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                ) : (
                  <p className="text-sm text-gray-900">{employeeData.telephoneNumber}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Mobile Number</label>
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={employeeData.mobileNumber}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                ) : (
                  <p className="text-sm text-gray-900">{employeeData.mobileNumber}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    defaultValue={employeeData.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                ) : (
                  <p className="text-sm text-gray-900">{employeeData.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Edit Action Buttons */}
          {isEditing && (
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-[#C62828] text-white rounded-lg hover:bg-[#B71C1C] flex items-center gap-2 text-sm"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Section II - Family Background */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-[#C62828]" />
          <h3 className="text-base font-semibold text-gray-900">Section II — Family Background</h3>
        </div>

        <div className="space-y-6">
          {/* Parents Information */}
          <div>
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
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
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
            <label className="block text-xs text-gray-600 mb-2">Special Skills and Hobbies</label>
            <p className="text-sm text-gray-900">{employeeData.otherInfo.skills}</p>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-2">Non-Academic Distinctions / Recognition</label>
            <p className="text-sm text-gray-900">{employeeData.otherInfo.distinctions}</p>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-2">Membership in Association / Organization</label>
            <p className="text-sm text-gray-900">{employeeData.otherInfo.memberships}</p>
          </div>
        </div>
      </div>

      {/* Section IX - References */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
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
    </div>
  );
}