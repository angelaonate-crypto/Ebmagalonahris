import { Calendar, Clock, Check, X, AlertCircle, Camera, RefreshCw, CheckCircle, LogIn, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HRStaffMyAttendance() {
  const [selectedMonth, setSelectedMonth] = useState('March 2026');
  const [selectedAction, setSelectedAction] = useState<'clock-in' | 'clock-out' | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'scanning' | 'detected' | 'success' | 'failed'>('idle');
  const [todayCheckIn, setTodayCheckIn] = useState<string | null>(null);
  const [todayCheckOut, setTodayCheckOut] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const monthlyAttendance = [
    { date: '2026-03-01', day: 'Mon', status: 'Present', checkIn: '08:00 AM', checkOut: '05:00 PM', hours: '9h' },
    { date: '2026-03-02', day: 'Tue', status: 'Present', checkIn: '07:55 AM', checkOut: '05:05 PM', hours: '9h 10m' },
    { date: '2026-03-03', day: 'Wed', status: 'Present', checkIn: '08:00 AM', checkOut: '05:00 PM', hours: '9h' },
    { date: '2026-03-04', day: 'Thu', status: 'Present', checkIn: '08:00 AM', checkOut: '05:00 PM', hours: '9h' },
    { date: '2026-03-05', day: 'Fri', status: 'Present', checkIn: '07:58 AM', checkOut: '05:02 PM', hours: '9h 4m' },
    { date: '2026-03-06', day: 'Sat', status: 'Weekend', checkIn: '-', checkOut: '-', hours: '-' },
    { date: '2026-03-07', day: 'Sun', status: 'Weekend', checkIn: '-', checkOut: '-', hours: '-' },
    { date: '2026-03-08', day: 'Mon', status: 'Present', checkIn: '08:00 AM', checkOut: '05:00 PM', hours: '9h' },
    { date: '2026-03-09', day: 'Tue', status: 'Present', checkIn: '08:00 AM', checkOut: '05:00 PM', hours: '9h' },
    { date: '2026-03-10', day: 'Wed', status: 'Present', checkIn: '07:57 AM', checkOut: '05:03 PM', hours: '9h 6m' },
    { date: '2026-03-11', day: 'Thu', status: 'Present', checkIn: '08:00 AM', checkOut: '05:00 PM', hours: '9h' },
    { date: '2026-03-12', day: 'Fri', status: 'Today', checkIn: todayCheckIn || '-', checkOut: todayCheckOut || '-', hours: '-' },
  ];

  const stats = {
    present: 9,
    late: 0,
    absent: 0,
    totalHours: '81h 20m',
  };

  // Check if already checked in today (HR Staff specific key)
  useEffect(() => {
    const hasCheckedIn = localStorage.getItem('hrStaffTodayCheckIn');
    const hasCheckedOut = localStorage.getItem('hrStaffTodayCheckOut');
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
      localStorage.setItem('hrStaffTodayCheckIn', currentTime);
      setVerificationStatus('success');
      setShowConfirmation(true);
    } else if (selectedAction === 'clock-out') {
      setTodayCheckOut(currentTime);
      localStorage.setItem('hrStaffTodayCheckOut', currentTime);
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
        <h1 className="text-3xl text-[#C62828] mb-2">My Attendance</h1>
        <p className="text-gray-600">Clock in/out and view your attendance records.</p>
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

                {/* Progress Bar */}
                {isScanning && verificationStatus === 'scanning' && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-full h-3 overflow-hidden shadow-md">
                      <div 
                        className="bg-[#C62828] h-full transition-all duration-200"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Retry Button */}
              {verificationStatus === 'failed' && (
                <button
                  onClick={handleRetry}
                  className="mt-4 w-full bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Retry Verification
                </button>
              )}
            </div>

            {/* Status Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Verification Status</h3>
              
              {/* Status Card */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    verificationStatus === 'success' ? 'bg-green-100' :
                    verificationStatus === 'failed' ? 'bg-red-100' :
                    verificationStatus === 'scanning' || verificationStatus === 'detected' ? 'bg-blue-100' :
                    'bg-gray-100'
                  }`}>
                    {verificationStatus === 'success' ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : verificationStatus === 'failed' ? (
                      <X className="w-6 h-6 text-red-600" />
                    ) : (
                      <Clock className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold mb-1 ${getVerificationStatusColor()}`}>
                      {getVerificationStatusText()}
                    </p>
                    <p className="text-xs text-gray-600">
                      {selectedAction === 'clock-in' 
                        ? 'Position your face within the camera frame to clock in'
                        : 'Position your face within the camera frame to clock out'
                      }
                    </p>
                  </div>
                </div>

                {/* Progress Percentage */}
                {isScanning && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Verification Progress</span>
                      <span className="font-semibold">{scanProgress}%</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Today's Status */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Today's Record</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Clock In:</span>
                    <span className={`text-sm font-medium ${todayCheckIn ? 'text-green-600' : 'text-gray-400'}`}>
                      {todayCheckIn || 'Not recorded'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Clock Out:</span>
                    <span className={`text-sm font-medium ${todayCheckOut ? 'text-blue-600' : 'text-gray-400'}`}>
                      {todayCheckOut || 'Not recorded'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-900 font-medium mb-2">Instructions:</p>
                <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
                  <li>Select Clock In or Clock Out above</li>
                  <li>Position your face within the frame</li>
                  <li>Wait for automatic verification</li>
                  <li>Confirmation will appear upon success</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Present Days</p>
              <p className="text-2xl font-bold text-green-600">{stats.present}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Check className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Late Days</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.late}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Absent Days</p>
              <p className="text-2xl font-bold text-red-600">{stats.absent}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <X className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Hours</p>
              <p className="text-2xl font-bold text-[#C62828]">{stats.totalHours}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <Clock className="w-6 h-6 text-[#C62828]" />
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Attendance Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Monthly Attendance Record</h2>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]"
              >
                <option>March 2026</option>
                <option>February 2026</option>
                <option>January 2026</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Day</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Clock In</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Clock Out</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Work Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {monthlyAttendance.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{record.day}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(record.status)}`}>
                      {getStatusIcon(record.status)}
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.checkIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.checkOut}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
