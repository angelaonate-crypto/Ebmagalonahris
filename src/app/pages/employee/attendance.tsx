import { Calendar, Clock, Check, X, AlertCircle, Camera, RefreshCw, CheckCircle, LogIn, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function EmployeeAttendance() {
  const [selectedMonth, setSelectedMonth] = useState('March 2026');
  const [selectedAction, setSelectedAction] = useState<'clock-in' | 'clock-out' | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'scanning' | 'detected' | 'success' | 'failed'>('idle');
  const [todayCheckIn, setTodayCheckIn] = useState<string | null>(null);
  const [todayCheckOut, setTodayCheckOut] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const monthlyAttendance = [
    { date: '2026-03-01', day: 'Mon', status: 'Present', checkIn: '08:30 AM', checkOut: '05:30 PM', hours: '9h' },
    { date: '2026-03-02', day: 'Tue', status: 'Present', checkIn: '08:25 AM', checkOut: '05:35 PM', hours: '9h 10m' },
    { date: '2026-03-03', day: 'Wed', status: 'Present', checkIn: '08:35 AM', checkOut: '05:30 PM', hours: '8h 55m' },
    { date: '2026-03-04', day: 'Thu', status: 'Present', checkIn: '08:30 AM', checkOut: '05:30 PM', hours: '9h' },
    { date: '2026-03-05', day: 'Fri', status: 'Present', checkIn: '08:28 AM', checkOut: '05:32 PM', hours: '9h 4m' },
    { date: '2026-03-06', day: 'Sat', status: 'Weekend', checkIn: '-', checkOut: '-', hours: '-' },
    { date: '2026-03-07', day: 'Sun', status: 'Weekend', checkIn: '-', checkOut: '-', hours: '-' },
    { date: '2026-03-08', day: 'Mon', status: 'Late', checkIn: '09:15 AM', checkOut: '05:30 PM', hours: '8h 15m' },
    { date: '2026-03-09', day: 'Tue', status: 'Present', checkIn: '08:30 AM', checkOut: '05:30 PM', hours: '9h' },
    { date: '2026-03-10', day: 'Wed', status: 'Present', checkIn: '08:27 AM', checkOut: '05:33 PM', hours: '9h 6m' },
  ];

  const stats = {
    present: 8,
    late: 1,
    absent: 0,
    totalHours: '72h 25m',
  };

  // Check if already checked in today
  useEffect(() => {
    const hasCheckedIn = localStorage.getItem('todayCheckIn');
    const hasCheckedOut = localStorage.getItem('todayCheckOut');
    if (hasCheckedIn) {
      setTodayCheckIn(hasCheckedIn);
    }
    if (hasCheckedOut) {
      setTodayCheckOut(hasCheckedOut);
    }
  }, []);

  const handleActionSelect = (action: 'clock-in' | 'clock-out') => {
    setSelectedAction(action);
    setVerificationStatus('idle');
    setShowConfirmation(false);
    // Start facial verification automatically after selecting action
    setTimeout(() => {
      startFacialVerification();
    }, 500);
  };

  const startFacialVerification = () => {
    setIsScanning(true);
    setVerificationStatus('scanning');
    setScanProgress(0);

    // Simulate face detection and verification
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setVerificationStatus('detected');
          
          // Record attendance after detection
          setTimeout(() => {
            recordAttendance();
          }, 500);
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const recordAttendance = () => {
    const currentTime = new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });

    if (selectedAction === 'clock-in') {
      setTodayCheckIn(currentTime);
      localStorage.setItem('todayCheckIn', currentTime);
      setVerificationStatus('success');
      setShowConfirmation(true);
    } else if (selectedAction === 'clock-out') {
      setTodayCheckOut(currentTime);
      localStorage.setItem('todayCheckOut', currentTime);
      setVerificationStatus('success');
      setShowConfirmation(true);
    }

    // Reset after 5 seconds
    setTimeout(() => {
      setShowConfirmation(false);
      setSelectedAction(null);
      setVerificationStatus('idle');
      setScanProgress(0);
    }, 5000);
  };

  const handleRetry = () => {
    setVerificationStatus('idle');
    setScanProgress(0);
    setShowConfirmation(false);
    if (selectedAction) {
      startFacialVerification();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Late':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Absent':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'Weekend':
        return 'bg-gray-100 text-gray-600 border-gray-300';
      case 'Today':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Present':
        return <Check className="w-4 h-4" />;
      case 'Late':
        return <AlertCircle className="w-4 h-4" />;
      case 'Absent':
        return <X className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getVerificationStatusText = () => {
    switch (verificationStatus) {
      case 'idle':
        return 'Ready for verification';
      case 'scanning':
        return 'Scanning for face...';
      case 'detected':
        return 'Face detected! Verifying identity...';
      case 'success':
        return `${selectedAction === 'clock-in' ? 'Clock In' : 'Clock Out'} recorded successfully!`;
      case 'failed':
        return 'Verification failed. Please try again.';
      default:
        return 'Ready';
    }
  };

  const getVerificationStatusColor = () => {
    switch (verificationStatus) {
      case 'idle':
        return 'text-gray-600';
      case 'scanning':
        return 'text-blue-600';
      case 'detected':
        return 'text-yellow-600';
      case 'success':
        return 'text-green-600';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Attendance Verification</h1>
        <p className="text-gray-600">Select Clock In or Clock Out and verify your identity using facial recognition.</p>
      </div>

      {/* Action Selection Buttons */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Select Attendance Action</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => handleActionSelect('clock-in')}
            disabled={isScanning || verificationStatus === 'success'}
            className={`p-6 rounded-lg border-2 transition-all ${
              selectedAction === 'clock-in'
                ? 'border-[#C62828] bg-[#FFF8E1]'
                : 'border-gray-300 hover:border-[#C62828] hover:bg-gray-50'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className={`p-4 rounded-full ${
                selectedAction === 'clock-in' ? 'bg-[#C62828]' : 'bg-gray-200'
              }`}>
                <LogIn className={`w-8 h-8 ${
                  selectedAction === 'clock-in' ? 'text-white' : 'text-gray-600'
                }`} />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">Clock In</p>
                <p className="text-sm text-gray-600 mt-1">Start your work day</p>
                {todayCheckIn && (
                  <p className="text-xs text-green-600 mt-2 font-medium">
                    Already clocked in at {todayCheckIn}
                  </p>
                )}
              </div>
            </div>
          </button>

          <button
            onClick={() => handleActionSelect('clock-out')}
            disabled={isScanning || verificationStatus === 'success'}
            className={`p-6 rounded-lg border-2 transition-all ${
              selectedAction === 'clock-out'
                ? 'border-[#C62828] bg-[#FFF8E1]'
                : 'border-gray-300 hover:border-[#C62828] hover:bg-gray-50'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className={`p-4 rounded-full ${
                selectedAction === 'clock-out' ? 'bg-[#C62828]' : 'bg-gray-200'
              }`}>
                <LogOut className={`w-8 h-8 ${
                  selectedAction === 'clock-out' ? 'text-white' : 'text-gray-600'
                }`} />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">Clock Out</p>
                <p className="text-sm text-gray-600 mt-1">End your work day</p>
                {todayCheckOut && (
                  <p className="text-xs text-blue-600 mt-2 font-medium">
                    Already clocked out at {todayCheckOut}
                  </p>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Facial Verification Panel */}
      {selectedAction && (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Camera Preview */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#C62828]" />
                Facial Recognition Camera
              </h3>
              
              {/* Camera Frame */}
              <div className="bg-[#f3f4f6] border-2 border-[#d1d5dc] border-solid rounded-2xl relative aspect-square w-full">
                {/* Camera Preview Area */}
                <div 
                  className="absolute inset-0 flex items-center justify-center rounded-2xl"
                  style={{ backgroundImage: "linear-gradient(143.213deg, rgb(229, 231, 235) 0%, rgb(209, 213, 220) 100%)" }}
                >
                  {verificationStatus === 'success' ? (
                    <div className="flex flex-col items-center gap-4">
                      <CheckCircle className="w-24 h-24 text-green-600" strokeWidth={1.5} />
                      <p className="text-lg font-medium text-green-700">
                        {selectedAction === 'clock-in' ? 'Clocked In!' : 'Clocked Out!'}
                      </p>
                    </div>
                  ) : verificationStatus === 'failed' ? (
                    <div className="flex flex-col items-center gap-4">
                      <X className="w-24 h-24 text-red-600" strokeWidth={1.5} />
                      <p className="text-lg font-medium text-red-700">Verification Failed</p>
                    </div>
                  ) : (
                    <Camera className="w-24 h-24 text-[#99A1AF]" strokeWidth={1.5} />
                  )}
                </div>

                {/* Face Scanning Outline Guide */}
                <div className="absolute inset-4 border-4 border-[#C62828] border-dashed rounded-xl pointer-events-none opacity-50" />

                {/* Scanning Animation */}
                {isScanning && verificationStatus === 'scanning' && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
                    <div className="absolute w-full h-1 bg-[#C62828] animate-pulse" style={{
                      top: `${scanProgress}%`,
                      transition: 'top 0.2s linear'
                    }} />
                  </div>
                )}

                {/* Scanning Progress Overlay */}
                {isScanning && (
                  <div className="absolute inset-0 bg-[rgba(198,40,40,0.05)] flex items-center justify-center rounded-2xl">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-lg p-4 shadow-lg max-w-xs mx-4">
                      <div className="flex items-center gap-3">
                        <RefreshCw className="w-5 h-5 text-[#C62828] animate-spin flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-[#424242]">Scanning...</p>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1.5">
                            <div 
                              className="h-full bg-[#C62828] rounded-full transition-all duration-300"
                              style={{ width: `${scanProgress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Status Label */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[rgba(255,255,255,0.95)] px-4 py-2 rounded-lg shadow-md">
                  <p className={`text-sm font-medium whitespace-nowrap ${getVerificationStatusColor()}`}>
                    {getVerificationStatusText()}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 space-y-2">
                {verificationStatus === 'failed' && (
                  <button
                    onClick={handleRetry}
                    className="w-full bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Retry Verification
                  </button>
                )}
                
                {verificationStatus === 'success' && (
                  <button
                    onClick={() => {
                      setSelectedAction(null);
                      setVerificationStatus('idle');
                      setShowConfirmation(false);
                      setScanProgress(0);
                    }}
                    className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Done
                  </button>
                )}
              </div>
            </div>

            {/* Status Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Verification Status</h3>
              
              {/* Today's Attendance */}
              <div className="space-y-4">
                <div className="p-4 bg-[#FFF8E1] rounded-lg border border-[#FFC107]">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Today's Record</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Date:</span>
                      <span className="text-sm font-medium text-gray-900">March 11, 2026</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Employee ID:</span>
                      <span className="text-sm font-medium text-gray-900">EMP-2024-001</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Clock In Time:</span>
                      <span className="text-sm font-medium text-green-600">
                        {todayCheckIn || '-'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Clock Out Time:</span>
                      <span className="text-sm font-medium text-blue-600">
                        {todayCheckOut || '-'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Selected Action:</span>
                      <span className="text-sm font-medium text-[#C62828]">
                        {selectedAction === 'clock-in' ? 'Clock In' : selectedAction === 'clock-out' ? 'Clock Out' : 'None'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Confirmation Message */}
                {showConfirmation && verificationStatus === 'success' && (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-green-900">
                          {selectedAction === 'clock-in' ? 'Clock In' : 'Clock Out'} Recorded Successfully!
                        </p>
                        <p className="text-xs text-green-700 mt-1">
                          Your attendance has been verified and recorded at{' '}
                          {selectedAction === 'clock-in' ? todayCheckIn : todayCheckOut}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Status Indicators */}
                <div className="space-y-2">
                  <div className={`p-3 rounded-lg border flex items-center gap-2 ${
                    verificationStatus === 'scanning' 
                      ? 'bg-blue-50 border-blue-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${verificationStatus === 'scanning' ? 'bg-blue-600 animate-pulse' : 'bg-gray-400'}`} />
                    <span className="text-sm text-gray-700">Scanning</span>
                  </div>
                  
                  <div className={`p-3 rounded-lg border flex items-center gap-2 ${
                    verificationStatus === 'detected' 
                      ? 'bg-yellow-50 border-yellow-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${verificationStatus === 'detected' ? 'bg-yellow-600 animate-pulse' : 'bg-gray-400'}`} />
                    <span className="text-sm text-gray-700">Face Detected</span>
                  </div>
                  
                  <div className={`p-3 rounded-lg border flex items-center gap-2 ${
                    verificationStatus === 'success' 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${verificationStatus === 'success' ? 'bg-green-600' : 'bg-gray-400'}`} />
                    <span className="text-sm text-gray-700">Verification Successful</span>
                  </div>
                  
                  <div className={`p-3 rounded-lg border flex items-center gap-2 ${
                    verificationStatus === 'failed' 
                      ? 'bg-red-50 border-red-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${verificationStatus === 'failed' ? 'bg-red-600' : 'bg-gray-400'}`} />
                    <span className="text-sm text-gray-700">Verification Failed</span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="text-xs font-semibold text-gray-900 mb-2">Instructions:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Select Clock In or Clock Out action</li>
                    <li>• Position your face within the camera frame</li>
                    <li>• Ensure good lighting conditions</li>
                    <li>• Wait for automatic verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Present Days</p>
              <p className="text-2xl text-gray-900">{stats.present}</p>
            </div>
            <div className="bg-[#C62828] text-white p-3 rounded-lg">
              <Check className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Late Days</p>
              <p className="text-2xl text-gray-900">{stats.late}</p>
            </div>
            <div className="bg-[#FFC107] text-white p-3 rounded-lg">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Absent Days</p>
              <p className="text-2xl text-gray-900">{stats.absent}</p>
            </div>
            <div className="bg-[#FF9800] text-white p-3 rounded-lg">
              <X className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Hours</p>
              <p className="text-2xl text-gray-900">{stats.totalHours}</p>
            </div>
            <div className="bg-[#FFD54F] text-white p-3 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Attendance History */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#C62828]" />
            <h3 className="text-lg font-semibold text-gray-900">Attendance History</h3>
          </div>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
          >
            <option>March 2026</option>
            <option>February 2026</option>
            <option>January 2026</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Day</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Clock In Time</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Clock Out Time</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Work Hours</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Today's Record (if checked in) */}
              {(todayCheckIn || todayCheckOut) && (
                <tr className="border-b border-gray-100 bg-[#FFF8E1]">
                  <td className="py-4 px-4 text-sm text-gray-900 font-medium">2026-03-11</td>
                  <td className="py-4 px-4 text-sm text-gray-600">Thu</td>
                  <td className="py-4 px-4 text-sm text-green-600 font-medium">{todayCheckIn || '-'}</td>
                  <td className="py-4 px-4 text-sm text-blue-600 font-medium">{todayCheckOut || '-'}</td>
                  <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                    {todayCheckOut ? 'Completed' : 'In Progress'}
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-blue-100 text-blue-700 border-blue-300">
                      <Clock className="w-4 h-4" />
                      Today
                    </span>
                  </td>
                </tr>
              )}
              
              {monthlyAttendance.map((record, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-900">{record.date}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{record.day}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{record.checkIn}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{record.checkOut}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{record.hours}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        record.status
                      )}`}
                    >
                      {getStatusIcon(record.status)}
                      {record.status}
                    </span>
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
