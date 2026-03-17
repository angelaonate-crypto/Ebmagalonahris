import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff } from 'lucide-react';
import imgImage1 from "figma:asset/73450976410b159c4bd1062cd1ca463409f520ba.png";
import imgImageHrisLogo from "figma:asset/c72d7cbccefc0352c4dd51dd71910fe0b60a917e.png";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'employee'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!formData.username || !formData.password) {
      setError('Please enter both username and password');
      return;
    }

    // Mock authentication - in production, this would call an API
    const isHRLogin = formData.username === 'hrofficer' && formData.password === 'password123';
    const isEmployeeLogin = formData.username === 'employee' && formData.password === 'password123';
    const isDeptHeadLogin = formData.username === 'depthead' && formData.password === 'password123';
    const isHRStaffLogin = formData.username === 'hrstaff' && formData.password === 'password123';

    if (isHRLogin || isEmployeeLogin || isDeptHeadLogin || isHRStaffLogin) {
      // Store auth state
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('needsFaceVerification', 'true');
      localStorage.setItem('userRole', isHRLogin ? 'hr' : isDeptHeadLogin ? 'depthead' : isHRStaffLogin ? 'hrstaff' : 'employee');
      // Navigate to face verification
      navigate('/face-verification');
    } else {
      setError('Invalid username or password');
    }
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

      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-[450px] my-8">
        <div className="bg-[rgba(255,255,255,0.95)] border border-[#6a7282] border-solid rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-full p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24">
              <img 
                alt="HRIS Logo" 
                className="w-full h-full object-contain" 
                src={imgImageHrisLogo} 
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h1 className="font-medium text-2xl text-[#424242] text-center mb-2">
              Human Resource Information System
            </h1>
            <p className="text-sm text-[#757575] text-center">
              Secure access to your HRIS account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Email or Username */}
            <div className="space-y-2">
              <label className="block font-medium text-sm text-[#424242]">
                Email or Username
              </label>
              <input
                type="text"
                placeholder="Enter your email or username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full h-12 px-4 py-3 border border-[#d1d5dc] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block font-medium text-sm text-[#424242]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full h-12 px-4 py-3 pr-12 border border-[#d1d5dc] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6A7282] hover:text-[#424242]"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a href="#" className="text-sm text-[#c62828] hover:text-[#B71C1C]">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#c62828] h-12 rounded-lg shadow-md font-bold text-base text-white hover:bg-[#B71C1C] transition-colors mt-6"
            >
              Login
            </button>

            {/* Demo Credentials */}
            <div className="mt-4 p-4 bg-[#FFF8E1] rounded-lg border border-[#FFC107]">
              <p className="text-xs text-[#424242] text-center mb-2 font-medium">Demo Credentials:</p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-[#757575] text-center font-semibold">HR Officer:</p>
                  <p className="text-xs text-[#757575] text-center">Username: <span className="font-medium text-[#424242]">hrofficer</span> | Password: <span className="font-medium text-[#424242]">password123</span></p>
                </div>
                <div>
                  <p className="text-xs text-[#757575] text-center font-semibold">Department Head:</p>
                  <p className="text-xs text-[#757575] text-center">Username: <span className="font-medium text-[#424242]">depthead</span> | Password: <span className="font-medium text-[#424242]">password123</span></p>
                </div>
                <div>
                  <p className="text-xs text-[#757575] text-center font-semibold">HR Staff:</p>
                  <p className="text-xs text-[#757575] text-center">Username: <span className="font-medium text-[#424242]">hrstaff</span> | Password: <span className="font-medium text-[#424242]">password123</span></p>
                </div>
                <div>
                  <p className="text-xs text-[#757575] text-center font-semibold">Employee:</p>
                  <p className="text-xs text-[#757575] text-center">Username: <span className="font-medium text-[#424242]">employee</span> | Password: <span className="font-medium text-[#424242]">password123</span></p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white text-center z-10">
        © 2026 Human Resource Information System
      </p>
    </div>
  );
}