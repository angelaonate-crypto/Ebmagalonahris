import { CheckCircle, XCircle, Eye, FileText } from 'lucide-react';
import { useState } from 'react';

const candidates = [
  { id: 1, name: 'Jane Smith', position: 'Software Engineer', score: 94, education: 'BS Computer Science', experience: '5 years', status: 'Pending' },
  { id: 2, name: 'Sarah Williams', position: 'Software Engineer', score: 90, education: 'BS Information Technology', experience: '4 years', status: 'Pending' },
  { id: 3, name: 'John Doe', position: 'Software Engineer', score: 88, education: 'BS Computer Engineering', experience: '3 years', status: 'Pending' },
];

export default function HiringDecision() {
  const [selectedCandidate, setSelectedCandidate] = useState(candidates[0]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [decision, setDecision] = useState<'approve' | 'reject' | null>(null);

  const handleDecision = (type: 'approve' | 'reject') => {
    setDecision(type);
    setShowConfirmation(true);
  };

  const confirmDecision = () => {
    setShowConfirmation(false);
    setDecision(null);
    // In a real app, this would send the decision to the backend
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Hiring Decision</h1>
        <p className="text-gray-600">Review and approve or reject candidates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Candidate List */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h3 className="text-lg text-gray-900 mb-4">Candidates for Review</h3>
          <div className="space-y-3">
            {candidates.map((candidate) => (
              <button
                key={candidate.id}
                onClick={() => setSelectedCandidate(candidate)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  selectedCandidate.id === candidate.id
                    ? 'border-[#C62828] bg-[#FFF8E1]'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-900">{candidate.name}</p>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Score: {candidate.score}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{candidate.position}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Candidate Details & Decision */}
        <div className="lg:col-span-2 space-y-6">
          {/* Candidate Profile */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg text-gray-900 mb-6">Candidate Profile</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Full Name</p>
                <p className="text-sm text-gray-900">{selectedCandidate.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Position Applied</p>
                <p className="text-sm text-gray-900">{selectedCandidate.position}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Education</p>
                <p className="text-sm text-gray-900">{selectedCandidate.education}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Experience</p>
                <p className="text-sm text-gray-900">{selectedCandidate.experience}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Evaluation Score</p>
                <p className="text-2xl text-[#C62828]">{selectedCandidate.score}/100</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Status</p>
                <span className="px-3 py-1 rounded-full text-xs bg-[#FFF8E1] text-[#C62828]">
                  {selectedCandidate.status}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Eye className="w-4 h-4" />
                View Resume
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FileText className="w-4 h-4" />
                View Documents
              </button>
            </div>
          </div>

          {/* Interview Notes */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg text-gray-900 mb-4">Interview Notes & Recommendations</h3>
            <textarea
              placeholder="Add your notes and recommendations here..."
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] resize-none"
            ></textarea>
          </div>

          {/* Decision Actions */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg text-gray-900 mb-4">Make Decision</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleDecision('approve')}
                className="bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Approve Candidate
              </button>
              <button
                onClick={() => handleDecision('reject')}
                className="bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Reject Candidate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl text-gray-900 mb-4">
              Confirm {decision === 'approve' ? 'Approval' : 'Rejection'}
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to {decision === 'approve' ? 'approve' : 'reject'}{' '}
              <strong>{selectedCandidate.name}</strong> for the position of{' '}
              <strong>{selectedCandidate.position}</strong>?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDecision}
                className={`flex-1 px-4 py-2 rounded-lg text-white ${
                  decision === 'approve'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
