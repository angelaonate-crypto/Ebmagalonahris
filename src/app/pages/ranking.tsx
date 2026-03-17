import { Trophy, Medal, Award, Eye } from 'lucide-react';

const rankedApplicants = [
  { id: 1, rank: 1, name: 'Jane Smith', position: 'Software Engineer', education: 25, eligibility: 23, training: 22, experience: 24, total: 94, status: 'Qualified' },
  { id: 2, rank: 2, name: 'Sarah Williams', position: 'Software Engineer', education: 24, eligibility: 22, training: 21, experience: 23, total: 90, status: 'Qualified' },
  { id: 3, rank: 3, name: 'John Doe', position: 'Software Engineer', education: 23, eligibility: 21, training: 22, experience: 22, total: 88, status: 'Qualified' },
  { id: 4, rank: 4, name: 'Mike Johnson', position: 'HR Specialist', education: 22, eligibility: 20, training: 20, experience: 21, total: 83, status: 'Qualified' },
  { id: 5, rank: 5, name: 'David Brown', position: 'Accountant', education: 21, eligibility: 19, training: 21, experience: 20, total: 81, status: 'Qualified' },
  { id: 6, rank: 6, name: 'Emily Davis', position: 'Software Engineer', education: 20, eligibility: 20, training: 19, experience: 19, total: 78, status: 'For Review' },
  { id: 7, rank: 7, name: 'James Wilson', position: 'Marketing Manager', education: 19, eligibility: 18, training: 18, experience: 20, total: 75, status: 'For Review' },
  { id: 8, rank: 8, name: 'Lisa Anderson', position: 'HR Specialist', education: 18, eligibility: 19, training: 17, experience: 18, total: 72, status: 'For Review' },
];

export default function ApplicantRanking() {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-[#FFD700]" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-[#C0C0C0]" />;
    if (rank === 3) return <Award className="w-6 h-6 text-[#CD7F32]" />;
    return <span className="text-sm text-gray-600">#{rank}</span>;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Applicant Ranking</h1>
        <p className="text-gray-600">View ranked applicants based on evaluation scores</p>
      </div>

      {/* Top 3 Leaderboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {rankedApplicants.slice(0, 3).map((applicant, index) => (
          <div
            key={applicant.id}
            className={`bg-white rounded-lg shadow-md p-6 border-2 ${
              index === 0 ? 'border-[#FFD700]' : index === 1 ? 'border-[#C0C0C0]' : 'border-[#CD7F32]'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {getRankIcon(applicant.rank)}
              </div>
              <h3 className="text-lg text-gray-900 mb-1">{applicant.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{applicant.position}</p>
              <div className="w-full bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-1">Total Score</p>
                <p className="text-3xl text-[#C62828]">{applicant.total}</p>
              </div>
              <button className="mt-4 w-full bg-[#FFF8E1] text-[#C62828] py-2 rounded-lg hover:bg-[#FFC107] hover:text-white transition-colors text-sm">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full Ranking Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <h3 className="text-lg text-gray-900 mb-4">Complete Ranking List</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-700">Rank</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Position</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Education</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Eligibility</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Training</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Experience</th>
                <th className="text-center py-3 px-4 text-sm text-gray-700">Total</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rankedApplicants.map((applicant) => (
                <tr
                  key={applicant.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 ${
                    applicant.rank <= 3 ? 'bg-[#FFF8E1]/30' : ''
                  }`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      {getRankIcon(applicant.rank)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">{applicant.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{applicant.position}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-900">{applicant.education}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-900">{applicant.eligibility}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-900">{applicant.training}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-900">{applicant.experience}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`text-sm ${applicant.total >= 85 ? 'text-green-600' : 'text-gray-900'}`}>
                      {applicant.total}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      applicant.status === 'Qualified'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-[#FFF8E1] text-[#C62828]'
                    }`}>
                      {applicant.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-[#C62828] hover:text-[#B71C1C]">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
