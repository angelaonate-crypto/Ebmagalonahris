import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Camera, RefreshCw, CheckCircle } from 'lucide-react';
import imgImage1 from "figma:asset/73450976410b159c4bd1062cd1ca463409f520ba.png";
import imgImageHrisLogo from "figma:asset/c72d7cbccefc0352c4dd51dd71910fe0b60a917e.png";

export default function FaceVerification() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [verificationComplete, setVerificationComplete] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleVerify = () => {
    setIsScanning(true);
    setScanProgress(0);
    setVerificationComplete(false);

    // Simulate scanning progress
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setVerificationComplete(true);
          
          // Complete verification and redirect to dashboard based on role
          setTimeout(() => {
            localStorage.setItem('needsFaceVerification', 'false');
            localStorage.setItem('faceVerified', 'true');
            const userRole = localStorage.getItem('userRole');
            if (userRole === 'hr') {
              navigate('/');
            } else if (userRole === 'depthead') {
              navigate('/department-head');
            } else if (userRole === 'hrstaff') {
              navigate('/hr-staff');
            } else {
              navigate('/employee');
            }
          }, 1500);
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleRetryScan = () => {
    setScanProgress(0);
    setVerificationComplete(false);
    setIsScanning(false);
  };

  return (
    <div className="bg-white relative min-h-screen w-full overflow-auto flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute h-full w-full left-0 top-0">
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src={imgImage1} 
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bg-gradient-to-b from-[rgba(96,19,19,0)] h-full left-0 to-[rgba(198,40,40,0.43)] top-0 via-1/2 via-[rgba(147,30,30,0.23)] w-full" />

      {/* Verification Container */}
      <div className="relative z-10 w-full max-w-[500px] my-8">
        <div className="bg-[rgba(255,255,255,0.95)] border border-[#6a7282] border-solid rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-full p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20">
              <img 
                alt="HRIS Logo" 
                className="w-full h-full object-contain" 
                src={imgImageHrisLogo} 
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mb-6 text-center">
            <h1 className="font-medium text-2xl text-[#424242] mb-2">
              Facial Verification
            </h1>
            <p className="text-sm text-[#757575]">
              Please verify your identity to continue accessing the system.
            </p>
          </div>

          {/* Camera Scanning Area - Square aspect ratio */}
          <div className="bg-[#f3f4f6] border-2 border-[#d1d5dc] border-solid rounded-2xl mb-6 relative aspect-square w-full">
            {/* Camera Preview */}
            <div 
              className="absolute inset-0 flex items-center justify-center rounded-2xl"
              style={{ backgroundImage: "linear-gradient(143.213deg, rgb(229, 231, 235) 0%, rgb(209, 213, 220) 100%)" }}
            >
              {verificationComplete ? (
                <div className="flex flex-col items-center gap-4">
                  <CheckCircle className="w-24 h-24 text-green-600" strokeWidth={1.5} />
                  <p className="text-lg font-medium text-green-700">Verification Successful!</p>
                </div>
              ) : (
                <Camera className="w-24 h-24 text-[#99A1AF]" strokeWidth={1.5} />
              )}
            </div>

            {/* Dashed Border Frame */}
            <div className="absolute inset-4 border-4 border-[#99a1af] border-dashed rounded-xl pointer-events-none" />

            {/* Scanning Progress */}
            {isScanning && (
              <div className="absolute inset-0 bg-[rgba(198,40,40,0.1)] flex items-center justify-center rounded-2xl">
                <div className="bg-white rounded-lg p-6 shadow-lg max-w-xs mx-4">
                  <div className="flex items-center gap-4">
                    <RefreshCw className="w-6 h-6 text-[#C62828] animate-spin flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#424242]">Scanning...</p>
                      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
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

            {/* Camera Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[rgba(255,255,255,0.9)] px-4 py-2 rounded-lg">
              <p className="text-sm text-[#424242] whitespace-nowrap">
                Camera Scanning Area
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleVerify}
              disabled={isScanning || verificationComplete}
              className="flex-1 bg-[#c62828] h-12 rounded-lg shadow-md font-medium text-base text-white hover:bg-[#B71C1C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isScanning ? 'Verifying...' : verificationComplete ? 'Verified ✓' : 'Verify Face'}
            </button>
            <button
              onClick={handleRetryScan}
              disabled={isScanning}
              className="bg-white border-2 border-[#d1d5dc] border-solid h-12 px-6 rounded-lg font-medium text-base text-[#424242] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Retry Scan
            </button>
          </div>

          {/* Instructions */}
          <div className="p-4 bg-[#FFF8E1] rounded-lg border border-[#FFC107]">
            <p className="text-xs text-[#424242] text-center mb-2 font-medium">Verification Instructions:</p>
            <ul className="text-xs text-[#757575] space-y-1">
              <li>• Position your face within the camera frame</li>
              <li>• Ensure good lighting conditions</li>
              <li>• Remove any face coverings or accessories</li>
              <li>• Click "Verify Face" to begin scanning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white text-center z-10">
        © 2026 Human Resource Information System
      </p>
    </div>
  );
}