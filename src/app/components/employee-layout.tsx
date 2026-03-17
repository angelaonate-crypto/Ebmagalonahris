import { Link, useLocation, Outlet, useNavigate } from 'react-router';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Bell,
  Settings,
  User,
  LogOut,
  Clock,
  Search,
  ChevronDown,
  CheckCircle,
  DollarSign,
  GraduationCap,
  UserPlus,
} from 'lucide-react';
import { useState } from 'react';
import imgImageHrisLogo from "figma:asset/c72d7cbccefc0352c4dd51dd71910fe0b60a917e.png";

interface NavItem {
  path: string;
  label: string;
  icon: any;
}

const navItems: NavItem[] = [
  { path: '/employee', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/employee/attendance', label: 'My Attendance', icon: Clock },
  { path: '/employee/leave', label: 'Leave Requests', icon: Calendar },
  { path: '/employee/payslips', label: 'Payslips', icon: FileText },
  { path: '/employee/announcements', label: 'Announcements', icon: Bell },
  { path: '/employee/profile', label: 'My Profile', icon: User },
  { path: '/employee/settings', label: 'Settings', icon: Settings },
];

export function EmployeeLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const isActive = (path: string) => path === location.pathname;

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('faceVerified');
    localStorage.removeItem('needsFaceVerification');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-[#C62828] text-white flex flex-col shadow-lg">
        {/* Logo/Brand */}
        <div className="relative bg-[#c62828] p-6 border-b border-[#B71C1C]">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px] flex-shrink-0">
              <img 
                alt="HRIS Logo" 
                className="w-full h-full object-contain" 
                src={imgImageHrisLogo} 
              />
            </div>
            <h1 className="font-bold text-[16px] leading-tight text-white">
              Human Resource Information System
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 transition-colors ${
                  isActive(item.path)
                    ? 'bg-white text-[#C62828]'
                    : 'text-white hover:bg-[#B71C1C]'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:bg-white"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 ml-6">
              {/* Notifications */}
              <div className="relative">
                <button
                  className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="w-6 h-6 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#C62828] rounded-full"></span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-sm text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">Your leave request has been approved</p>
                            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <DollarSign className="w-5 h-5 text-[#FFC107] mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">Payslip for March 2026 is now available</p>
                            <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <Bell className="w-5 h-5 text-[#C62828] mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">New company announcement posted</p>
                            <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-[#C62828] mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">Upcoming training session reminder</p>
                            <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-gray-200">
                      <Link to="/employee/announcements" className="text-sm text-[#C62828] hover:text-[#B71C1C] block text-center">
                        View all notifications
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-[#C62828] rounded-full flex items-center justify-center text-white">
                    JD
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">employee@hris.com</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link to="/employee/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowUserMenu(false)}>
                      Profile
                    </Link>
                    <Link to="/employee/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowUserMenu(false)}>
                      Settings
                    </Link>
                    <hr className="my-2" />
                    <a href="#" className="block px-4 py-2 text-sm text-[#C62828] hover:bg-gray-100" onClick={handleLogout}>
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}