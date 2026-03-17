import { useState } from 'react';
import { FileText, CheckCircle, XCircle, Eye, Download } from 'lucide-react';
import { StatusBadge } from '../components/shared/status-badge';

const applicants = [
  {
    id: 1,
    name: 'Jane Smith',
    position: 'Software Engineer',
    email: 'jane.smith@email.com',
    phone: '+63 912 345 6789',
    appliedDate: '2026-03-01',
    documents: {
      diploma: { name: 'BS_Computer_Science_Diploma.pdf', uploaded: true },
      eligibility: { name: 'Civil_Service_Professional.pdf', uploaded: true },
      training: { name: 'Training_Certificates.pdf', uploaded: true },
      experience: { name: 'Employment_Certificates.pdf', uploaded: true },
    },
    scores: {
      education: 25,
      eligibility: 25,
      training: 22,
      experience: 24,
      total: 96,
    },
    status: 'Qualified',
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'Software Engineer',
    email: 'john.doe@email.com',
    phone: '+63 923 456 7890',
    appliedDate: '2026-03-02',
    documents: {
      diploma: { name: 'BS_IT_Diploma.pdf', uploaded: true },
      eligibility: { name: 'Civil_Service_SubProfessional.pdf', uploaded: true },
      training: { name: 'Training_Certificates.pdf', uploaded: true },
      experience: { name: 'Work_Experience.pdf', uploaded: true },
    },
    scores: {
      education: 23,
      eligibility: 20,
      training: 20,
      experience: 22,
      total: 85,
    },
    status: 'Qualified',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    position: 'HR Specialist',
    email: 'sarah.w@email.com',
    phone: '+63 934 567 8901',
    appliedDate: '2026-03-03',
    documents: {
      diploma: { name: 'BS_Psychology_Diploma.pdf', uploaded: true },
      eligibility: { name: 'Civil_Service_Professional.pdf', uploaded: true },
      training: { name: 'HR_Training_Certificates.pdf', uploaded: true },
      experience: { name: 'HR_Experience_Letters.pdf', uploaded: true },
    },
    scores: {
      education: 24,
      eligibility: 25,
      training: 23,
      experience: 20,
      total: 92,
    },
    status: 'Qualified',
  },
  {
    id: 4,
    name: 'Mike Johnson',
    position: 'Accountant',
    email: 'mike.j@email.com',
    phone: '+63 945 678 9012',
    appliedDate: '2026-03-05',
    documents: {
      diploma: { name: 'BS_Accountancy_Diploma.pdf', uploaded: true },
      eligibility: { name: 'CPA_License.pdf', uploaded: true },
      training: { name: 'Accounting_Seminars.pdf', uploaded: true },
      experience: { name: 'Employment_Records.pdf', uploaded: true },
    },
    scores: {
      education: 22,
      eligibility: 18,
      training: 17,
      experience: 16,
      total: 73,
    },
    status: 'For Review',
  },
  {
    id: 5,
    name: 'Emily Davis',
    position: 'Software Engineer',
    email: 'emily.d@email.com',
    phone: '+63 956 789 0123',
    appliedDate: '2026-03-06',
    documents: {
      diploma: { name: 'BS_Computer_Engineering.pdf', uploaded: true },
      eligibility: { name: 'Civil_Service_Eligibility.pdf', uploaded: false },
      training: { name: 'Tech_Certifications.pdf', uploaded: true },
      experience: { name: 'Work_History.pdf', uploaded: true },
    },
    scores: {
      education: 23,
      eligibility: 0,
      training: 21,
      experience: 19,
      total: 63,
    },
    status: 'Not Qualified',
  },
];

export default function ApplicantEvaluation() {
  const [selectedApplicant, setSelectedApplicant] = useState(applicants[0]);
  const [viewingDocument, setViewingDocument] = useState<string | null>(null);

  const getScoreColor = (score: number, max: number) => {
    const percentage = (score / max) * 100;
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 75) return 'text-[#FFC107]';
    if (percentage >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getStatusBadge = (status: string) => {
    if (status === 'Qualified') {
      return 'bg-green-100 text-green-700';
    } else if (status === 'For Review') {
      return 'bg-[#FFF8E1] text-[#C62828]';
    } else {
      return 'bg-red-100 text-red-700';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Applicant Evaluation</h1>
        <p className="text-gray-600">Review automated applicant evaluations based on uploaded credentials</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Applicant Selection List */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Applicants</h3>
          <div className="space-y-2">
            {applicants.map((applicant) => (
              <button
                key={applicant.id}
                onClick={() => setSelectedApplicant(applicant)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  selectedApplicant.id === applicant.id
                    ? 'border-[#C62828] bg-[#FFF8E1]'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-900">{applicant.name}</p>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusBadge(applicant.status)}`}>
                    {applicant.scores.total}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{applicant.position}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Evaluation Panel */}
        <div className="lg:col-span-3 space-y-6">
          {/* Applicant Information */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl text-gray-900 mb-2">{selectedApplicant.name}</h2>
                <p className="text-gray-600">{selectedApplicant.position}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm ${getStatusBadge(selectedApplicant.status)}`}>
                {selectedApplicant.status}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="text-sm text-gray-900">{selectedApplicant.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone</p>
                <p className="text-sm text-gray-900">{selectedApplicant.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Applied Date</p>
                <p className="text-sm text-gray-900">{selectedApplicant.appliedDate}</p>
              </div>
            </div>

            {/* Total Score Card */}
            <div className="bg-gradient-to-r from-[#C62828] to-[#E53935] text-white rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 mb-1">Automated Evaluation Score</p>
                  <p className="text-4xl">{selectedApplicant.scores.total} / 100</p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90 mb-1">Rating</p>
                  <p className="text-xl">
                    {selectedApplicant.scores.total >= 90
                      ? 'Outstanding'
                      : selectedApplicant.scores.total >= 80
                      ? 'Very Good'
                      : selectedApplicant.scores.total >= 70
                      ? 'Good'
                      : selectedApplicant.scores.total >= 60
                      ? 'Satisfactory'
                      : 'Below Standard'}
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-white/20 rounded-full h-3">
                <div
                  className="bg-white h-3 rounded-full transition-all"
                  style={{ width: `${selectedApplicant.scores.total}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Score Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Score */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-700">Education</h3>
                <span className={`text-2xl ${getScoreColor(selectedApplicant.scores.education, 25)}`}>
                  {selectedApplicant.scores.education} / 25
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-[#C62828] h-2 rounded-full"
                  style={{ width: `${(selectedApplicant.scores.education / 25) * 100}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Document: {selectedApplicant.documents.diploma.name}</span>
                {selectedApplicant.documents.diploma.uploaded && (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                )}
              </div>
            </div>

            {/* Eligibility Score */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-700">Eligibility</h3>
                <span className={`text-2xl ${getScoreColor(selectedApplicant.scores.eligibility, 25)}`}>
                  {selectedApplicant.scores.eligibility} / 25
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-[#C62828] h-2 rounded-full"
                  style={{ width: `${(selectedApplicant.scores.eligibility / 25) * 100}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Document: {selectedApplicant.documents.eligibility.name}</span>
                {selectedApplicant.documents.eligibility.uploaded ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600" />
                )}
              </div>
            </div>

            {/* Training Score */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-700">Training</h3>
                <span className={`text-2xl ${getScoreColor(selectedApplicant.scores.training, 25)}`}>
                  {selectedApplicant.scores.training} / 25
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-[#C62828] h-2 rounded-full"
                  style={{ width: `${(selectedApplicant.scores.training / 25) * 100}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Document: {selectedApplicant.documents.training.name}</span>
                {selectedApplicant.documents.training.uploaded && (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                )}
              </div>
            </div>

            {/* Experience Score */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-700">Experience</h3>
                <span className={`text-2xl ${getScoreColor(selectedApplicant.scores.experience, 25)}`}>
                  {selectedApplicant.scores.experience} / 25
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-[#C62828] h-2 rounded-full"
                  style={{ width: `${(selectedApplicant.scores.experience / 25) * 100}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Document: {selectedApplicant.documents.experience.name}</span>
                {selectedApplicant.documents.experience.uploaded && (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                )}
              </div>
            </div>
          </div>

          {/* Uploaded Documents Preview */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg text-gray-900 mb-4">Uploaded Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(selectedApplicant.documents).map(([key, doc]) => (
                <div
                  key={key}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <FileText className={`w-10 h-10 ${doc.uploaded ? 'text-[#C62828]' : 'text-gray-400'}`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-xs text-gray-600 mb-3">{doc.name}</p>
                      <div className="flex gap-2">
                        {doc.uploaded ? (
                          <>
                            <button className="text-xs text-[#C62828] hover:text-[#B71C1C] flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              View
                            </button>
                            <button className="text-xs text-gray-600 hover:text-gray-800 flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              Download
                            </button>
                          </>
                        ) : (
                          <span className="text-xs text-red-600">Not uploaded</span>
                        )}
                      </div>
                    </div>
                    {doc.uploaded ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg text-gray-900 mb-4">HR Officer Actions</h3>
            <div className="flex gap-3">
              <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Approve & Move to Ranking
              </button>
              <button className="flex-1 bg-[#FFC107] text-gray-900 px-6 py-3 rounded-lg hover:bg-[#FFB300] transition-colors">
                Request Additional Documents
              </button>
              <button className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                <XCircle className="w-5 h-5" />
                Reject Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}