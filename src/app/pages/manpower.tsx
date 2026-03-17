import { Plus, Search, Filter, Eye, Edit, X, Upload as UploadIcon } from 'lucide-react';
import { useState } from 'react';
import { StatusBadge } from '../components/shared/status-badge';
import { DataTable } from '../components/shared/data-table';

const jobVacancies = [
  { id: 1, position: 'Senior Software Engineer', department: 'IT Department', openings: 3, status: 'Open', postingDate: '2026-02-15', deadline: '2026-03-30', applicants: 45 },
  { id: 2, position: 'HR Specialist', department: 'Human Resources', openings: 2, status: 'Open', postingDate: '2026-02-20', deadline: '2026-03-25', applicants: 23 },
  { id: 3, position: 'Marketing Manager', department: 'Marketing', openings: 1, status: 'Closed', postingDate: '2026-01-10', deadline: '2026-02-28', applicants: 67 },
  { id: 4, position: 'Accountant', department: 'Finance', openings: 1, status: 'In Review', postingDate: '2026-02-28', deadline: '2026-04-15', applicants: 34 },
  { id: 5, position: 'Project Coordinator', department: 'Operations', openings: 2, status: 'Open', postingDate: '2026-03-01', deadline: '2026-04-01', applicants: 28 },
  { id: 6, position: 'Network Administrator', department: 'IT Department', openings: 1, status: 'Open', postingDate: '2026-03-05', deadline: '2026-04-10', applicants: 19 },
];

const hiringRequests = [
  { id: 1, department: 'IT Department', requestedBy: 'John Smith', positions: 3, date: '2026-03-01', priority: 'High', justification: 'Expansion of dev team' },
  { id: 2, department: 'Marketing', requestedBy: 'Jane Doe', positions: 2, date: '2026-03-03', priority: 'Medium', justification: 'Campaign support' },
  { id: 3, department: 'Sales', requestedBy: 'Mike Johnson', positions: 5, date: '2026-03-05', priority: 'High', justification: 'New territory coverage' },
];

export default function ManpowerPlanning() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const vacancyColumns = [
    { key: 'position', header: 'Position', render: (value: string) => <span className="text-gray-900">{value}</span> },
    { key: 'department', header: 'Department', render: (value: string) => <span className="text-gray-600">{value}</span> },
    { key: 'openings', header: 'Number of Openings', render: (value: number) => <span className="text-gray-900">{value}</span> },
    { key: 'applicants', header: 'Applicants', render: (value: number) => <span className="text-gray-900">{value}</span> },
    { key: 'postingDate', header: 'Posting Date', render: (value: string) => <span className="text-gray-600">{value}</span> },
    { key: 'deadline', header: 'Deadline', render: (value: string) => <span className="text-gray-600">{value}</span> },
    { key: 'status', header: 'Status', render: (value: string) => <StatusBadge status={value} /> },
    {
      key: 'actions',
      header: 'Actions',
      render: () => (
        <div className="flex gap-2">
          <button className="text-[#C62828] hover:text-[#B71C1C]" title="Edit">
            <Edit className="w-4 h-4" />
          </button>
          <button className="text-gray-600 hover:text-gray-800" title="View">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  const requestColumns = [
    { key: 'department', header: 'Department', render: (value: string) => <span className="text-gray-900">{value}</span> },
    { key: 'requestedBy', header: 'Requested By', render: (value: string) => <span className="text-gray-600">{value}</span> },
    { key: 'positions', header: 'Positions', render: (value: number) => <span className="text-gray-900">{value}</span> },
    { key: 'date', header: 'Date', render: (value: string) => <span className="text-gray-600">{value}</span> },
    { 
      key: 'priority', 
      header: 'Priority', 
      render: (value: string) => (
        <span className={`px-3 py-1 rounded-full text-xs ${
          value === 'High' ? 'bg-[#FFF8E1] text-[#C62828]' : 'bg-gray-100 text-gray-700'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'actions',
      header: 'Actions',
      render: () => (
        <div className="flex gap-2">
          <button className="text-[#C62828] hover:text-[#B71C1C] text-sm">Review</button>
          <button className="text-gray-600 hover:text-gray-800 text-sm">Details</button>
        </div>
      ),
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Job vacancy submitted successfully!');
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Job Vacancies</h1>
          <p className="text-gray-600">Manage department hiring requests and job vacancies</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Upload Job Vacancy
        </button>
      </div>

      {/* Department Hiring Requests */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <h3 className="text-lg text-gray-900 mb-4">Department Hiring Requests</h3>
        <DataTable columns={requestColumns} data={hiringRequests} keyExtractor={(row) => row.id} />
      </div>

      {/* Job Vacancies Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-gray-900">All Job Vacancies</h3>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Search className="w-4 h-4" />
              Search
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
        <DataTable columns={vacancyColumns} data={jobVacancies} keyExtractor={(row) => row.id} />
      </div>

      {/* Job Vacancy Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl text-[#C62828] mb-1">Upload Job Vacancy</h2>
                <p className="text-sm text-gray-600">Create a new job vacancy aligned with Civil Service Commission (CSC) job posting standards.</p>
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
              {/* Section 1: Position Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Section 1: Position Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Administrative Officer IV"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Item Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., HRMO-ADAS4-1-2026"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Salary Grade <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Salary Grade</option>
                      {Array.from({ length: 33 }, (_, i) => i + 1).map(grade => (
                        <option key={grade} value={grade}>SG-{grade}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Salary <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="₱ 25,439.00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department / Office <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Department</option>
                      <option value="HR">Human Resources</option>
                      <option value="IT">IT Department</option>
                      <option value="Finance">Finance</option>
                      <option value="Operations">Operations</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Quezon City, Metro Manila"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Positions Available <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      placeholder="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Employment Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Section 2: Employment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employment Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Employment Status</option>
                      <option value="Permanent">Permanent</option>
                      <option value="Contractual">Contractual</option>
                      <option value="Casual">Casual</option>
                      <option value="Job Order">Job Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Job Level</option>
                      <option value="Entry Level">Entry Level</option>
                      <option value="Professional">Professional</option>
                      <option value="Supervisory">Supervisory</option>
                      <option value="Managerial">Managerial</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Qualification Standards */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Section 3: Qualification Standards (CSC Format)
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Bachelor's Degree relevant to the job"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Training <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., 4 hours of relevant training"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., 1 year of relevant experience"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eligibility <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Career Service Professional / RA 1080"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Competency <span className="text-gray-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Leadership / Technical competency"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Job Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Section 4: Job Description
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duties and Responsibilities <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Describe the main responsibilities and duties of the position..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">Provide a detailed description of the position's main duties and responsibilities.</p>
                </div>
              </div>

              {/* Section 5: Application Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Section 5: Application Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Posting Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Closing Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Application Method <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Application Method</option>
                      <option value="Online Application">Online Application</option>
                      <option value="Walk-in Application">Walk-in Application</option>
                      <option value="Email Submission">Email Submission</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 6: Document Upload */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Section 6: Document Upload
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Position Description <span className="text-red-500">*</span>
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
                      Upload Qualification Standards <span className="text-red-500">*</span>
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
                      Upload Additional Documents <span className="text-gray-500">(Optional)</span>
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
                  Submit Job Vacancy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
