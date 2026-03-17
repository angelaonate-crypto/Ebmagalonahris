import { Link, useLocation, Outlet, useNavigate } from 'react-router';
import {
  LayoutDashboard,
  Users,
  Clock,
  Calendar,
  DollarSign,
  ClipboardList,
  GraduationCap,
  FileText,
  Bell,
  Settings,
  ChevronDown,
  Search,
  User,
  LogOut,
} from 'lucide-react';
import { useState } from 'react';
import imgImageHrisLogo from "figma:asset/c72d7cbccefc0352c4dd51dd71910fe0b60a917e.png";

interface NavItem {
  path: string;
  label: string;
  icon: any;
  dropdown?: { path: string; label: string; icon: any }[];
}

const navItems: NavItem[] = [
  { path: '/hr-staff', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/hr-staff/my-attendance', label: 'My Attendance', icon: User },
  { 
    path: '/hr-staff/employees', 
    label: 'Employees', 
    icon: Users,
    dropdown: [
      { path: '/hr-staff/employees', label: 'Employee List', icon: Users },
      { path: '/hr-staff/attendance', label: 'Attendance', icon: Clock },
      { path: '/hr-staff/leave', label: 'Leave Management', icon: Calendar },
    ],
  },
  { path: '/hr-staff/payroll', label: 'Payroll Preparation', icon: DollarSign },
  { path: '/hr-staff/applicants', label: 'Applicant Management', icon: ClipboardList },
  { path: '/hr-staff/training', label: 'Training Management', icon: GraduationCap },
  { path: '/hr-staff/reports', label: 'Reports', icon: FileText },
  { path: '/hr-staff/announcements', label: 'Announcements', icon: Bell },
  { path: '/hr-staff/profile', label: 'My Profile', icon: User },
  { path: '/hr-staff/settings', label: 'Settings', icon: Settings },
];

export function HRStaffLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path === '/hr-staff') {
      return location.pathname === path;
    }
    // Don't mark parent items as active based on child paths
    return false;
  };

  const isChildActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleDropdown = (path: string) => {
    setExpandedDropdown(expandedDropdown === path ? null : path);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('faceVerified');
    localStorage.removeItem('needsFaceVerification');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const notifications = [
    { icon: Calendar, message: '12 pending leave requests', time: '5 min ago', color: 'text-[#C62828]' },
    { icon: Users, message: 'New employee record updated', time: '1 hour ago', color: 'text-green-600' },
    { icon: ClipboardList, message: '8 new applicants to review', time: '2 hours ago', color: 'text-[#C62828]' },
    { icon: Bell, message: 'Payroll draft ready for review', time: '3 hours ago', color: 'text-[#FFC107]' },
    { icon: GraduationCap, message: 'Training schedule updated', time: '1 day ago', color: 'text-gray-400' },
  ];

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
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isExpanded = expandedDropdown === item.path;
            // For dropdown parents, don't use isActive - let children handle it
            const isItemActive = hasDropdown ? false : isActive(item.path);
            
            return (
              <div key={item.path}>
                {hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.path)}
                      className={`w-full flex items-center justify-between px-6 py-3 transition-colors ${
                        isItemActive
                          ? 'bg-white text-[#C62828]'
                          : 'text-white hover:bg-[#B71C1C]'
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon className="w-5 h-5 mr-3" />
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {isExpanded && (
                      <div className="bg-[#B71C1C]">
                        {item.dropdown.map((subItem) => {
                          const SubIcon = subItem.icon;
                          return (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`flex items-center px-10 py-2 transition-colors text-sm ${
                                isChildActive(subItem.path)
                                  ? 'bg-white text-[#C62828]'
                                  : 'text-white hover:bg-[#A31919]'
                              }`}
                            >
                              <SubIcon className="w-4 h-4 mr-2" />
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center px-6 py-3 transition-colors ${
                      isItemActive
                        ? 'bg-white text-[#C62828]'
                        : 'text-white hover:bg-[#B71C1C]'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout Button */}
        
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
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Bell className="w-6 h-6" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#C62828] rounded-full"></span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification, index) => {
                        const NotifIcon = notification.icon;
                        return (
                          <div
                            key={index}
                            className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex items-start gap-3"
                          >
                            <NotifIcon className={`w-5 h-5 ${notification.color} flex-shrink-0 mt-0.5`} />
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="p-3 border-t border-gray-200">
                      <button className="text-sm text-[#C62828] hover:underline w-full text-center">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 pl-3 pr-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C62828] flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">HR Staff</p>
                    <p className="text-xs text-gray-500">staff@company.com</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <Link
                      to="/hr-staff/profile"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                    >
                      <User className="w-4 h-4" />
                      My Profile
                    </Link>
                    <Link
                      to="/hr-staff/settings"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        handleLogout();
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-[#C62828] hover:bg-gray-50 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
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