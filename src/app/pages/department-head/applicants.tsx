import { useState } from 'react';
import { Upload, Trophy, Award, FileText, Download, CheckCircle, XCircle, AlertCircle, ThumbsUp, ThumbsDown, X, Upload as UploadIcon } from 'lucide-react';
import { StatusBadge } from '../../components/shared/status-badge';

interface Applicant {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  appliedDate: string;
  documents: {
    diploma: { name: string; uploaded: boolean };
    eligibility: { name: string; uploaded: boolean };
    training: { name: string; uploaded: boolean };
    experience: { name: string; uploaded: boolean };
  };
  scores: {
    education: number;
    eligibility: number;
    training: number;
    experience: number;
    total: number;
  };
  status: string;
  recommendationStatus?: 'Recommended' | 'Not Recommended' | 'Pending';
}

const applicantsData: Applicant[] = [
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
    recommendationStatus: 'Pending',
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
    recommendationStatus: 'Pending',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    position: 'Project Manager',
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
    recommendationStatus: 'Recommended',
  },
  {
    id: 4,
    name: 'Mike Johnson',
    position: 'UX Designer',
    email: 'mike.j@email.com',
    phone: '+63 945 678 9012',
    appliedDate: '2026-03-05',
    documents: {
      diploma: { name: 'BS_Design_Diploma.pdf', uploaded: true },
      eligibility: { name: 'None.pdf', uploaded: false },
      training: { name: 'Design_Training.pdf', uploaded: true },
      experience: { name: 'Work_Experience.pdf', uploaded: true },
    },
    scores: {
      education: 22,
      eligibility: 18,
      training: 17,
      experience: 16,
      total: 73,
    },
    status: 'For Review',
    recommendationStatus: 'Pending',
  },
  {
    id: 5,
    name: 'Emily Davis',
    position: 'Software Engineer',
    email: 'emily.d@email.com',
    phone: '+63 956 789 0123',
    appliedDate: '2026-03-06',
    documents: {
      diploma: { name: 'BS_CS_Diploma.pdf', uploaded: true },
      eligibility: { name: 'None.pdf', uploaded: false },
      training: { name: 'Tech_Training.pdf', uploaded: true },
      experience: { name: 'Experience_Letters.pdf', uploaded: true },
    },
    scores: {
      education: 23,
      eligibility: 0,
      training: 21,
      experience: 19,
      total: 63,
    },
    status: 'Not Qualified',
    recommendationStatus: 'Not Recommended',
  },
  {
    id: 6,
    name: 'Robert Chen',
    position: 'QA Engineer',
    email: 'robert.c@email.com',
    phone: '+63 967 890 1234',
    appliedDate: '2026-03-07',
    documents: {
      diploma: { name: 'BS_IT_Diploma.pdf', uploaded: true },
      eligibility: { name: 'Civil_Service_Professional.pdf', uploaded: true },
      training: { name: 'QA_Certifications.pdf', uploaded: true },
      experience: { name: 'QA_Work_History.pdf', uploaded: true },
    },
    scores: {
      education: 25,
      eligibility: 23,
      training: 24,
      experience: 22,
      total: 94,
    },
    status: 'Qualified',
    recommendationStatus: 'Pending',
  },
  {
    id: 7,
    name: 'Maria Garcia',
    position: 'Business Analyst',
    email: 'maria.g@email.com',
    phone: '+63 978 901 2345',
    appliedDate: '2026-03-08',
    documents: {
      diploma: { name: 'BS_Business_Diploma.pdf', uploaded: true },
      eligibility: { name: 'Civil_Service_SubProfessional.pdf', uploaded: true },
      training: { name: 'Business_Training.pdf', uploaded: true },
      experience: { name: 'Business_Experience.pdf', uploaded: true },
    },
    scores: {
      education: 24,
      eligibility: 22,
      training: 20,
      experience: 23,
      total: 89,
    },
    status: 'Qualified',
    recommendationStatus: 'Pending',
  },
  {
    id: 8,
    name: 'David Lee',
    position: 'Software Engineer',
    email: 'david.l@email.com',
    phone: '+63 989 012 3456',
    appliedDate: '2026-03-09',
    documents: {
      diploma: { name: 'Pending_Upload.pdf', uploaded: false },
      eligibility: { name: 'Pending_Upload.pdf', uploaded: false },
      training: { name: 'Pending_Upload.pdf', uploaded: false },
      experience: { name: 'Pending_Upload.pdf', uploaded: false },
    },
    scores: {
      education: 0,
      eligibility: 0,
      training: 0,
      experience: 0,
      total: 0,
    },
    status: 'Pending Evaluation',
    recommendationStatus: 'Pending',
  },
];

export default function ApplicantReview() {
  const [applicants, setApplicants] = useState<Applicant[]>(applicantsData);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(applicants[0]);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Calculate applicant rankings based on total score
  const getRankedApplicants = () => {
    return [...applicants]
      .filter((a) => a.scores.total > 0)
      .sort((a, b) => b.scores.total - a.scores.total);
  };

  // Get applicant rank by ID
  const getApplicantRank = (applicantId: number) => {
    const ranked = getRankedApplicants();
    const index = ranked.findIndex((a) => a.id === applicantId);
    return index !== -1 ? index + 1 : null;
  };

  // Get top ranked applicants (sorted by total score)
  const topApplicants = getRankedApplicants().slice(0, 5);

  // Get display status based on recommendation and evaluation status
  const getDisplayStatus = (applicant: Applicant) => {
    if (applicant.recommendationStatus === 'Recommended') return 'Recommended';
    if (applicant.recommendationStatus === 'Not Recommended') return 'Not Recommended';
    return applicant.status;
  };

  const handleRecommendation = (decision: 'Recommended' | 'Not Recommended') => {
    if (selectedApplicant) {
      const updatedApplicants = applicants.map((a) =>
        a.id === selectedApplicant.id ? { ...a, recommendationStatus: decision } : a
      );
      setApplicants(updatedApplicants);
      
      // Update selected applicant to reflect the change
      const updated = updatedApplicants.find((a) => a.id === selectedApplicant.id);
      if (updated) {
        setSelectedApplicant(updated);
      }
    }
  };

  const getEvaluationStatus = (total: number) => {
    if (total === 0) return { label: 'Pending Evaluation', color: 'text-gray-600', bg: 'bg-gray-100' };
    if (total >= 80) return { label: 'Qualified', color: 'text-green-600', bg: 'bg-green-50' };
    if (total >= 70) return { label: 'Under Review', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { label: 'Not Qualified', color: 'text-red-600', bg: 'bg-red-50' };
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Applicant List</h1>
          <p className="text-gray-600">View and manage job applicants with automated evaluation scores.</p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="px-6 py-3 bg-[#C62828] text-white rounded-lg shadow-md hover:bg-[#B71C1C] transition-colors flex items-center gap-2"
        >
          <Upload className="w-5 h-5" />
          Upload New Application
        </button>
      </div>

      {/* Top Ranked Applicants Section */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-6 h-6 text-[#FFC107]" />
          <h3 className="text-lg text-gray-900">Top Ranked Applicants</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {topApplicants.map((applicant, index) => (
            <div
              key={applicant.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                index === 0 ? 'border-[#FFC107] bg-[#FFF8E1]' : 'border-gray-200'
              } ${selectedApplicant?.id === applicant.id ? 'ring-2 ring-[#C62828]' : ''}`}
              onClick={() => setSelectedApplicant(applicant)}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                    index === 0
                      ? 'bg-[#FFC107]'
                      : index === 1
                      ? 'bg-gray-400'
                      : index === 2
                      ? 'bg-[#CD7F32]'
                      : 'bg-gray-300'
                  }`}
                >
                  #{index + 1}
                </div>
                {index < 3 && (
                  <Award
                    className={`w-5 h-5 ${
                      index === 0 ? 'text-[#FFC107]' : index === 1 ? 'text-gray-400' : 'text-[#CD7F32]'
                    }`}
                  />
                )}
              </div>
              <p className="text-sm text-gray-900 mb-1 font-medium">{applicant.name}</p>
              <p className="text-xs text-gray-600 mb-2">{applicant.position}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Total Score</span>
                <span
                  className={`text-lg font-semibold ${
                    applicant.scores.total >= 90 ? 'text-green-600' : 'text-[#FFC107]'
                  }`}
                >
                  {applicant.scores.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Applicants Section - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Applicant List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg text-gray-900">Applicants</h3>
              <p className="text-sm text-gray-600">Select an applicant to view details</p>
            </div>
            <div className="divide-y divide-gray-200 max-h-[800px] overflow-y-auto">
              {/* Sort applicants by score (descending), then by application date */}
              {[...applicants]
                .sort((a, b) => {
                  if (b.scores.total !== a.scores.total) {
                    return b.scores.total - a.scores.total;
                  }
                  return new Date(a.appliedDate).getTime() - new Date(b.appliedDate).getTime();
                })
                .map((applicant) => {
                  const rank = getApplicantRank(applicant.id);
                  return (
                    <div
                      key={applicant.id}
                      onClick={() => setSelectedApplicant(applicant)}
                      className={`p-4 cursor-pointer transition-colors ${
                        selectedApplicant?.id === applicant.id
                          ? 'bg-[#FFF8E1] border-l-4 border-[#C62828]'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-500">
                            {rank ? `#${rank}` : '-'}
                          </span>
                          <span className="text-sm font-medium text-gray-900">{applicant.name}</span>
                        </div>
                        {applicant.recommendationStatus && applicant.recommendationStatus !== 'Pending' && (
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              applicant.recommendationStatus === 'Recommended'
                                ? 'bg-green-100 text-green-700'
                                : applicant.recommendationStatus === 'Not Recommended'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {applicant.recommendationStatus}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{applicant.position}</p>
                      <p className="text-xs text-gray-500 mb-2">Applied: {applicant.appliedDate}</p>
                      <div className="flex items-center justify-between">
                        <StatusBadge status={getDisplayStatus(applicant)} />
                        <span
                          className={`text-sm font-semibold ${
                            applicant.scores.total >= 90
                              ? 'text-green-600'
                              : applicant.scores.total >= 80
                              ? 'text-[#FFC107]'
                              : applicant.scores.total >= 70
                              ? 'text-orange-600'
                              : applicant.scores.total > 0
                              ? 'text-red-600'
                              : 'text-gray-400'
                          }`}
                        >
                          {applicant.scores.total}/100
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Right Column - Evaluation Panel */}
        <div className="lg:col-span-2 space-y-6">
          {selectedApplicant ? (
            <>
              {/* Applicant Information */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const rank = getApplicantRank(selectedApplicant.id);
                      return rank ? (
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                            rank === 1
                              ? 'bg-[#FFC107]'
                              : rank === 2
                              ? 'bg-gray-400'
                              : rank === 3
                              ? 'bg-[#CD7F32]'
                              : 'bg-gray-300'
                          }`}
                        >
                          #{rank}
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                          -
                        </div>
                      );
                    })()}
                    <div>
                      <h2 className="text-xl text-gray-900 mb-1">{selectedApplicant.name}</h2>
                      <p className="text-gray-600">{selectedApplicant.position}</p>
                    </div>
                  </div>
                  {selectedApplicant.recommendationStatus && (
                    <span
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        selectedApplicant.recommendationStatus === 'Recommended'
                          ? 'bg-green-100 text-green-700'
                          : selectedApplicant.recommendationStatus === 'Not Recommended'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {selectedApplicant.recommendationStatus}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <p className="text-gray-900">{selectedApplicant.email}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <p className="text-gray-900">{selectedApplicant.phone}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Application Date:</span>
                    <p className="text-gray-900">{selectedApplicant.appliedDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <div className="mt-1">
                      <StatusBadge status={selectedApplicant.status} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Evaluation Results */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg text-gray-900 mb-4">Automated Evaluation Results</h3>

                {/* Evaluation Status */}
                <div className="mb-6">
                  {(() => {
                    const evalStatus = getEvaluationStatus(selectedApplicant.scores.total);
                    return (
                      <div className={`flex items-center gap-3 p-4 rounded-lg ${evalStatus.bg}`}>
                        {evalStatus.label === 'Qualified' ? (
                          <CheckCircle className={`w-6 h-6 ${evalStatus.color}`} />
                        ) : evalStatus.label === 'Not Qualified' ? (
                          <XCircle className={`w-6 h-6 ${evalStatus.color}`} />
                        ) : (
                          <AlertCircle className={`w-6 h-6 ${evalStatus.color}`} />
                        )}
                        <div>
                          <p className={`font-medium ${evalStatus.color}`}>{evalStatus.label}</p>
                          <p className="text-sm text-gray-600">
                            {evalStatus.label === 'Pending Evaluation'
                              ? 'Waiting for document upload and evaluation'
                              : `Total Score: ${selectedApplicant.scores.total}/100`}
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Score Breakdown */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Education', score: selectedApplicant.scores.education, max: 25 },
                    { label: 'Eligibility', score: selectedApplicant.scores.eligibility, max: 25 },
                    { label: 'Training', score: selectedApplicant.scores.training, max: 25 },
                    { label: 'Experience', score: selectedApplicant.scores.experience, max: 25 },
                  ].map((item) => (
                    <div key={item.label} className="border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">{item.label}</p>
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-2xl font-semibold ${
                            item.score >= item.max * 0.9
                              ? 'text-green-600'
                              : item.score >= item.max * 0.7
                              ? 'text-[#FFC107]'
                              : item.score > 0
                              ? 'text-orange-600'
                              : 'text-gray-400'
                          }`}
                        >
                          {item.score}
                        </span>
                        <span className="text-gray-500">/ {item.max}</span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            item.score >= item.max * 0.9
                              ? 'bg-green-600'
                              : item.score >= item.max * 0.7
                              ? 'bg-[#FFC107]'
                              : item.score > 0
                              ? 'bg-orange-600'
                              : 'bg-gray-400'
                          }`}
                          style={{ width: `${(item.score / item.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Score */}
                <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-gray-900">Total Evaluation Score</span>
                    <span
                      className={`text-3xl font-bold ${
                        selectedApplicant.scores.total >= 90
                          ? 'text-green-600'
                          : selectedApplicant.scores.total >= 80
                          ? 'text-[#FFC107]'
                          : selectedApplicant.scores.total >= 70
                          ? 'text-orange-600'
                          : selectedApplicant.scores.total > 0
                          ? 'text-red-600'
                          : 'text-gray-400'
                      }`}
                    >
                      {selectedApplicant.scores.total}/100
                    </span>
                  </div>
                </div>
              </div>

              {/* Applicant Documents */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg text-gray-900 mb-4">Applicant Documents</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Diploma / Education Credentials', doc: selectedApplicant.documents.diploma },
                    { label: 'Civil Service Eligibility', doc: selectedApplicant.documents.eligibility },
                    { label: 'Training Certificates', doc: selectedApplicant.documents.training },
                    { label: 'Employment Certificates', doc: selectedApplicant.documents.experience },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className={`w-5 h-5 ${item.doc.uploaded ? 'text-[#C62828]' : 'text-gray-400'}`} />
                        <div>
                          <p className="text-sm text-gray-900">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.doc.name}</p>
                        </div>
                      </div>
                      {item.doc.uploaded ? (
                        <button className="text-[#C62828] hover:text-[#B71C1C] p-2">
                          <Download className="w-4 h-4" />
                        </button>
                      ) : (
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">Not Uploaded</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hiring Recommendation Actions */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg text-gray-900 mb-4">Hiring Recommendation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Review the evaluation results and submit your recommendation. The HR Officer will make the final hiring decision.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleRecommendation('Recommended')}
                    disabled={selectedApplicant.recommendationStatus === 'Recommended'}
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <ThumbsUp className="w-5 h-5" />
                    Recommend for Hiring
                  </button>
                  <button
                    onClick={() => handleRecommendation('Not Recommended')}
                    disabled={selectedApplicant.recommendationStatus === 'Not Recommended'}
                    className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <ThumbsDown className="w-5 h-5" />
                    Do Not Recommend
                  </button>
                </div>
                {selectedApplicant.recommendationStatus !== 'Pending' && (
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Status:</strong> You have{' '}
                      {selectedApplicant.recommendationStatus === 'Recommended' ? 'recommended' : 'not recommended'}{' '}
                      this applicant. Your recommendation will be forwarded to HR for final decision.
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 border border-gray-100 text-center">
              <p className="text-gray-500">Select an applicant to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl text-[#C62828] mb-1">Upload New Application</h2>
                <p className="text-sm text-gray-600">Upload application documents for automated evaluation</p>
              </div>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Application uploaded!'); setShowUploadModal(false); }} className="p-6">
              {/* Applicant Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Applicant Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Applicant Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Juan Dela Cruz"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position Applied <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Position</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="HR Specialist">HR Specialist</option>
                      <option value="Accountant">Accountant</option>
                      <option value="Administrative Assistant">Administrative Assistant</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="juan.delacruz@email.com"
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

              {/* Education */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Educational Background
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Highest Educational Attainment <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">Select Level</option>
                      <option value="Doctoral">Doctoral Degree</option>
                      <option value="Masters">Master's Degree</option>
                      <option value="Bachelor">Bachelor's Degree</option>
                      <option value="Vocational">Vocational/Technical</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course/Program <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="BS Computer Science"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Civil Service Eligibility
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eligibility Type
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    >
                      <option value="">No Eligibility</option>
                      <option value="Professional">Career Service Professional</option>
                      <option value="SubProfessional">Career Service Sub-Professional</option>
                      <option value="RA1080">RA 1080</option>
                      <option value="PD907">PD 907</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Training */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Training & Development
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Relevant Trainings (past 5 years)
                    </label>
                    <input
                      type="number"
                      min="0"
                      placeholder="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Work Experience
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Relevant Experience
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      placeholder="0"
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
                      Resume/CV <span className="text-red-500">*</span>
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
                      Transcript of Records <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#C62828] transition-colors cursor-pointer">
                      <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF (Max 5MB)</p>
                      <input type="file" accept=".pdf" className="hidden" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eligibility Certificate <span className="text-gray-500">(Optional)</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#C62828] transition-colors cursor-pointer">
                      <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF (Max 5MB)</p>
                      <input type="file" accept=".pdf" className="hidden" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Training Certificates <span className="text-gray-500">(Optional)</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#C62828] transition-colors cursor-pointer">
                      <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF (Max 10MB)</p>
                      <input type="file" accept=".pdf" className="hidden" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Experience Certificates <span className="text-gray-500">(Optional)</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#C62828] transition-colors cursor-pointer">
                      <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF (Max 10MB)</p>
                      <input type="file" accept=".pdf" className="hidden" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#C62828] text-white rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  Upload Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}