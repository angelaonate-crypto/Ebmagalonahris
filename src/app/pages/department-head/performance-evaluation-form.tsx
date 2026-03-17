import { ArrowLeft, Save, Send, User, Briefcase, Calendar } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router';

const spmsRatings = [
  { value: 5, label: 'Outstanding', description: 'Performance far exceeds expectations and requirements', color: 'text-green-600' },
  { value: 4, label: 'Very Satisfactory', description: 'Performance exceeds expectations and requirements', color: 'text-blue-600' },
  { value: 3, label: 'Satisfactory', description: 'Performance meets expectations and requirements', color: 'text-yellow-600' },
  { value: 2, label: 'Unsatisfactory', description: 'Performance needs improvement', color: 'text-orange-600' },
  { value: 1, label: 'Poor', description: 'Performance is unacceptable', color: 'text-red-600' },
];

export default function PerformanceEvaluationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  
  const employee = location.state?.employee || {
    name: 'Employee Name',
    position: 'Position',
    department: 'Department',
    empId: 'EMP-XXX',
  };

  const [formData, setFormData] = useState({
    rating: 0,
    evaluationPeriod: '',
    supervisorComments: '',
    strengths: '',
    areasForImprovement: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (isDraft: boolean) => {
    // Validate form
    if (!isDraft && (!formData.rating || !formData.evaluationPeriod)) {
      alert('Please fill in all required fields');
      return;
    }

    // Show success modal
    setShowSuccessModal(true);
    
    // Redirect after 2 seconds
    setTimeout(() => {
      navigate('/department-head/performance');
    }, 2000);
  };

  const selectedRating = spmsRatings.find(r => r.value === formData.rating);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/department-head/employees')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl text-[#C62828] mb-2">Performance Evaluation</h1>
          <p className="text-gray-600">SPMS-based employee performance evaluation</p>
        </div>
      </div>

      <div className="max-w-4xl">
        {/* Employee Information Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Employee Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#C62828] mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Employee Name</p>
                <p className="text-base text-gray-900 font-medium">{employee.name}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-[#C62828] mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Employee ID</p>
                <p className="text-base text-gray-900 font-medium">{employee.empId}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-[#C62828] mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Position</p>
                <p className="text-base text-gray-900 font-medium">{employee.position}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-[#C62828] mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="text-base text-gray-900 font-medium">{employee.department}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Evaluation Form */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Evaluation Details</h2>

          {/* Evaluation Period */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Evaluation Period <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="e.g., January - June 2026"
                value={formData.evaluationPeriod}
                onChange={(e) => setFormData({ ...formData, evaluationPeriod: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
              />
            </div>
          </div>

          {/* SPMS Rating Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              SPMS Performance Rating <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {spmsRatings.map((rating) => (
                <label
                  key={rating.value}
                  className={`flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.rating === rating.value
                      ? 'border-[#C62828] bg-[#FFF8E1]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="rating"
                    value={rating.value}
                    checked={formData.rating === rating.value}
                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-medium text-gray-900">{rating.value}</span>
                      <span className="text-lg font-medium text-gray-900">—</span>
                      <span className={`text-lg font-medium ${rating.color}`}>{rating.label}</span>
                    </div>
                    <p className="text-sm text-gray-600">{rating.description}</p>
                  </div>
                </label>
              ))}
            </div>

            {selectedRating && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Selected Rating:</strong> {selectedRating.value} - {selectedRating.label}
                </p>
              </div>
            )}
          </div>

          {/* Supervisor Comments */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Supervisor Comments
            </label>
            <textarea
              rows={4}
              placeholder="Provide overall comments on employee performance..."
              value={formData.supervisorComments}
              onChange={(e) => setFormData({ ...formData, supervisorComments: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent resize-none"
            />
          </div>

          {/* Strengths */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Strengths
            </label>
            <textarea
              rows={4}
              placeholder="List employee's key strengths and achievements..."
              value={formData.strengths}
              onChange={(e) => setFormData({ ...formData, strengths: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent resize-none"
            />
          </div>

          {/* Areas for Improvement */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Areas for Improvement
            </label>
            <textarea
              rows={4}
              placeholder="Identify areas where employee can improve and develop..."
              value={formData.areasForImprovement}
              onChange={(e) => setFormData({ ...formData, areasForImprovement: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleSubmit(false)}
            className="flex items-center gap-2 px-6 py-3 bg-[#C62828] text-white rounded-lg hover:bg-[#B71C1C] transition-colors"
          >
            <Send className="w-5 h-5" />
            Submit Evaluation
          </button>
          <button
            onClick={() => handleSubmit(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Save className="w-5 h-5" />
            Save Draft
          </button>
          <button
            onClick={() => navigate('/department-head/employees')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>

        {/* Information Notice */}
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> This evaluation will be submitted to HR and will be part of the employee's official performance record. Please ensure all information is accurate before submitting.
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Evaluation Submitted Successfully!</h3>
              <p className="text-gray-600">The performance evaluation has been saved and submitted to HR.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
