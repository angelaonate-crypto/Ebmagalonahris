import { Link, useLocation, Outlet, useNavigate } from 'react-router';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Award,
  CheckCircle2,
  UserCheck,
  Calendar,
  FileText,
  DollarSign,
  BarChart3,
  GraduationCap,
  Bell,
  Settings,
  ChevronDown,
  Search,
  ChevronRight,
  User,
  LogOut,
  Clock,
  CheckCircle,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import { useState } from 'react';
import imgImageHrisLogo from "figma:asset/c72d7cbccefc0352c4dd51dd71910fe0b60a917e.png";

interface NavItem {
  path?: string;
  label: string;
  icon: any;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  {
    label: 'Recruitment',
    icon: UserPlus,
    children: [
      { path: '/manpower', label: 'Job Vacancies', icon: Users },
      { path: '/applicant-management', label: 'Applicant Management', icon: UserPlus },
    ],
  },
  { path: '/employee-directory', label: 'Employees', icon: UserCheck },
  {
    label: 'Attendance & Leave',
    icon: Calendar,
    children: [
      { path: '/attendance', label: 'Attendance Monitoring', icon: Calendar },
      { path: '/leave', label: 'Leave Management', icon: CheckCircle2 },
    ],
  },
  { path: '/payroll', label: 'Payroll', icon: DollarSign },
  { path: '/performance', label: 'SPMS Performance', icon: Award },
  { path: '/training', label: 'Training', icon: GraduationCap },
  { path: '/reports', label: 'Reports', icon: FileText },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const isMenuExpanded = (label: string) => expandedMenus.includes(label);

  const isActive = (path?: string) => path === location.pathname;

  const isGroupActive = (children?: NavItem[]) => {
    if (!children) return false;
    return children.some((child) => child.path === location.pathname);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('faceVerified');
    localStorage.removeItem('needsFaceVerification');
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
            const hasChildren = item.children && item.children.length > 0;
            const expanded = isMenuExpanded(item.label);
            const groupActive = isGroupActive(item.children);

            if (hasChildren) {
              return (
                <div key={item.label}>
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={`w-full flex items-center justify-between px-6 py-3 transition-colors ${
                      groupActive ? 'bg-[#B71C1C]' : 'text-white hover:bg-[#B71C1C]'
                    }`}
                  >
                    <div className="flex items-center">
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    {expanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {expanded && (
                    <div className="bg-[#B71C1C]/50">
                      {item.children!.map((child) => {
                        const ChildIcon = child.icon;
                        return (
                          <Link
                            key={child.path}
                            to={child.path!}
                            className={`flex items-center px-6 pl-14 py-2.5 transition-colors text-sm ${
                              isActive(child.path)
                                ? 'bg-white text-[#C62828]'
                                : 'text-white hover:bg-[#B71C1C]'
                            }`}
                          >
                            <ChildIcon className="w-4 h-4 mr-3" />
                            <span>{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path!}
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
                            <p className="text-sm text-gray-900">Leave approved for John Doe</p>
                            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <UserPlus className="w-5 h-5 text-[#C62828] mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">New hiring decision pending approval</p>
                            <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <DollarSign className="w-5 h-5 text-[#FFC107] mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">Payroll for March 2026 has been processed</p>
                            <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-[#C62828] mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">Training approval needed for IT Department</p>
                            <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">Attendance report generated</p>
                            <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-gray-200">
                      <Link to="/notifications" className="text-sm text-[#C62828] hover:text-[#B71C1C] block text-center">
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
                    HR
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-900">HR Officer</p>
                    <p className="text-xs text-gray-500">officer@hris.com</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </a>
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