import { Upload, Search, Filter, Eye, Trophy, Award } from 'lucide-react';
import { StatusBadge } from '../components/shared/status-badge';
import { DataTable } from '../components/shared/data-table';

const applicants = [
  { id: 1, name: 'Jane Smith', position: 'Software Engineer', email: 'jane.smith@email.com', educationScore: 25, eligibilityScore: 25, trainingScore: 22, experienceScore: 24, totalScore: 96, status: 'Qualified', applied: '2026-03-01' },
  { id: 2, name: 'John Doe', position: 'Software Engineer', email: 'john.doe@email.com', educationScore: 23, eligibilityScore: 20, trainingScore: 20, experienceScore: 22, totalScore: 85, status: 'Qualified', applied: '2026-03-02' },
  { id: 3, name: 'Sarah Williams', position: 'HR Specialist', email: 'sarah.w@email.com', educationScore: 24, eligibilityScore: 25, trainingScore: 23, experienceScore: 20, totalScore: 92, status: 'Qualified', applied: '2026-03-03' },
  { id: 4, name: 'Mike Johnson', position: 'Accountant', email: 'mike.j@email.com', educationScore: 22, eligibilityScore: 18, trainingScore: 17, experienceScore: 16, totalScore: 73, status: 'For Review', applied: '2026-03-05' },
  { id: 5, name: 'Emily Davis', position: 'Software Engineer', email: 'emily.d@email.com', educationScore: 23, eligibilityScore: 0, trainingScore: 21, experienceScore: 19, totalScore: 63, status: 'Not Qualified', applied: '2026-03-06' },
  { id: 6, name: 'Robert Chen', position: 'HR Specialist', email: 'robert.c@email.com', educationScore: 25, eligibilityScore: 23, trainingScore: 24, experienceScore: 22, totalScore: 94, status: 'Qualified', applied: '2026-03-07' },
  { id: 7, name: 'Maria Garcia', position: 'Accountant', email: 'maria.g@email.com', educationScore: 24, eligibilityScore: 22, trainingScore: 20, experienceScore: 23, totalScore: 89, status: 'Qualified', applied: '2026-03-08' },
  { id: 8, name: 'David Lee', position: 'Software Engineer', email: 'david.l@email.com', educationScore: 0, eligibilityScore: 0, trainingScore: 0, experienceScore: 0, totalScore: 0, status: 'Pending Evaluation', applied: '2026-03-09' },
];

export default function RecruitmentManagement() {
  // Get top ranked applicants (sorted by total score)
  const topApplicants = [...applicants]
    .filter(a => a.totalScore > 0)
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 5);

  const applicantColumns = [
    { key: 'name', header: 'Applicant Name', render: (value: string) => <span className="text-gray-900">{value}</span> },
    { key: 'position', header: 'Position Applied', render: (value: string) => <span className="text-gray-600">{value}</span> },
    { key: 'educationScore', header: 'Education', render: (value: number) => <span className="text-gray-900">{value}</span> },
    { key: 'eligibilityScore', header: 'Eligibility', render: (value: number) => <span className="text-gray-900">{value}</span> },
    { key: 'trainingScore', header: 'Training', render: (value: number) => <span className="text-gray-900">{value}</span> },
    { key: 'experienceScore', header: 'Experience', render: (value: number) => <span className="text-gray-900">{value}</span> },
    { 
      key: 'totalScore', 
      header: 'Total Score', 
      render: (value: number) => (
        <span className={`text-sm font-semibold ${
          value >= 90 ? 'text-green-600' : value >= 80 ? 'text-[#FFC107]' : value >= 70 ? 'text-orange-600' : value > 0 ? 'text-red-600' : 'text-gray-400'
        }`}>
          {value}/100
        </span>
      )
    },
    { key: 'status', header: 'Status', render: (value: string) => <StatusBadge status={value} /> },
    {
      key: 'actions',
      header: 'Actions',
      render: () => (
        <button className="text-[#C62828] hover:text-[#B71C1C]" title="View">
          <Eye className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Applicant List</h1>
          <p className="text-gray-600">View and manage job applicants with automated evaluation scores</p>
        </div>
      </div>

      {/* Applicant Ranking Panel */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-6 h-6 text-[#FFC107]" />
          <h3 className="text-lg text-gray-900">Top Ranked Applicants</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {topApplicants.map((applicant, index) => (
            <div 
              key={applicant.id} 
              className={`border rounded-lg p-4 ${
                index === 0 ? 'border-[#FFC107] bg-[#FFF8E1]' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                  index === 0 ? 'bg-[#FFC107]' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-[#CD7F32]' : 'bg-gray-300'
                }`}>
                  #{index + 1}
                </div>
                {index < 3 && <Award className={`w-5 h-5 ${index === 0 ? 'text-[#FFC107]' : index === 1 ? 'text-gray-400' : 'text-[#CD7F32]'}`} />}
              </div>
              <p className="text-sm text-gray-900 mb-1">{applicant.name}</p>
              <p className="text-xs text-gray-600 mb-2">{applicant.position}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Total Score</span>
                <span className={`text-lg font-semibold ${
                  applicant.totalScore >= 90 ? 'text-green-600' : 'text-[#FFC107]'
                }`}>
                  {applicant.totalScore}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload New Applicant File */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-gray-900">Upload Applicant Documents</h3>
          <button className="bg-[#C62828] text-white px-6 py-2 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload New Applicant File
          </button>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#C62828] transition-colors cursor-pointer">
          <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
          <p className="text-sm text-gray-600 mb-1">Upload applicant documents for automatic evaluation</p>
          <p className="text-xs text-gray-500">Supported: Diploma, Civil Service Eligibility, Training Certificates, Employment Certificates (PDF, DOC, DOCX)</p>
        </div>
      </div>

      {/* Applicant List Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-gray-900">All Applicants</h3>
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
        <DataTable columns={applicantColumns} data={applicants} keyExtractor={(row) => row.id} />
      </div>
    </div>
  );
}