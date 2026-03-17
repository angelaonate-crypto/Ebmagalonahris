import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout';
import { EmployeeLayout } from './components/employee-layout';
import { DepartmentHeadLayout } from './components/department-head-layout';
import { HRStaffLayout } from './components/hr-staff-layout';
import { ProtectedRoute } from './components/protected-route';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import FaceVerification from './pages/face-verification';
import ManpowerPlanning from './pages/manpower';
import ApplicantManagement from './pages/applicant-management';
import RecruitmentManagement from './pages/recruitment';
import ApplicantEvaluation from './pages/evaluation';
import ApplicantRanking from './pages/ranking';
import HiringDecision from './pages/hiring';
import EmployeeDirectory from './pages/employee-directory';
import AttendanceMonitoring from './pages/attendance';
import LeaveManagement from './pages/leave';
import PayrollGeneration from './pages/payroll';
import PerformanceManagement from './pages/performance';
import TrainingManagement from './pages/training';
import Reports from './pages/reports';
import Settings from './pages/settings';
import Notifications from './pages/notifications';

// Employee Pages
import EmployeeDashboard from './pages/employee/dashboard';
import EmployeeAttendance from './pages/employee/attendance';
import EmployeeLeave from './pages/employee/leave';
import EmployeePayslips from './pages/employee/payslips';
import EmployeeAnnouncements from './pages/employee/announcements';
import EmployeeProfile from './pages/employee/profile';
import EmployeeSettings from './pages/employee/settings';

// Department Head Pages
import DepartmentHeadDashboard from './pages/department-head/dashboard';
import DepartmentHeadMyAttendance from './pages/department-head/my-attendance';
import TeamAttendance from './pages/department-head/team-attendance';
import DepartmentHeadEmployees from './pages/department-head/employees';
import EmployeeList from './pages/department-head/employee-list';
import PerformanceEvaluationForm from './pages/department-head/performance-evaluation-form';
import LeaveRequests from './pages/department-head/leave-requests';
import PerformanceEvaluation from './pages/department-head/performance';
import DepartmentHeadPayroll from './pages/department-head/payroll';
import ApplicantReview from './pages/department-head/applicants';
import DepartmentHeadReports from './pages/department-head/reports';
import DepartmentHeadAnnouncements from './pages/department-head/announcements';
import DepartmentHeadProfile from './pages/department-head/profile';
import DepartmentHeadSettings from './pages/department-head/settings';

// HR Staff Pages
import HRStaffDashboard from './pages/hr-staff/dashboard';
import HRStaffMyAttendance from './pages/hr-staff/my-attendance';
import HRStaffEmployees from './pages/hr-staff/employees';
import HRStaffAttendance from './pages/hr-staff/attendance';
import HRStaffLeave from './pages/hr-staff/leave';
import HRStaffPayroll from './pages/hr-staff/payroll';
import HRStaffApplicants from './pages/hr-staff/applicants';
import HRStaffTraining from './pages/hr-staff/training';
import HRStaffReports from './pages/hr-staff/reports';
import HRStaffAnnouncements from './pages/hr-staff/announcements';
import HRStaffSettings from './pages/hr-staff/settings';
import HRStaffProfile from './pages/hr-staff/profile';

export const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/face-verification',
    Component: FaceVerification,
  },
  {
    path: '/',
    Component: ProtectedRoute,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          { index: true, Component: Dashboard },
          // Recruitment
          { path: 'manpower', Component: ManpowerPlanning },
          { path: 'applicant-management', Component: ApplicantManagement },
          { path: 'recruitment', Component: RecruitmentManagement },
          { path: 'evaluation', Component: ApplicantEvaluation },
          { path: 'ranking', Component: ApplicantRanking },
          { path: 'hiring', Component: HiringDecision },
          { path: 'employee-directory', Component: EmployeeDirectory },
          { path: 'attendance', Component: AttendanceMonitoring },
          { path: 'leave', Component: LeaveManagement },
          // Payroll
          { path: 'payroll', Component: PayrollGeneration },
          // Performance
          { path: 'performance', Component: PerformanceManagement },
          // Training
          { path: 'training', Component: TrainingManagement },
          // Reports
          { path: 'reports', Component: Reports },
          // Settings
          { path: 'settings', Component: Settings },
          // Notifications
          { path: 'notifications', Component: Notifications },
        ],
      },
    ],
  },
  {
    path: '/employee',
    Component: ProtectedRoute,
    children: [
      {
        path: '/employee',
        Component: EmployeeLayout,
        children: [
          { index: true, Component: EmployeeDashboard },
          { path: 'attendance', Component: EmployeeAttendance },
          { path: 'leave', Component: EmployeeLeave },
          { path: 'payslips', Component: EmployeePayslips },
          { path: 'announcements', Component: EmployeeAnnouncements },
          { path: 'profile', Component: EmployeeProfile },
          { path: 'settings', Component: EmployeeSettings },
        ],
      },
    ],
  },
  {
    path: '/department-head',
    Component: ProtectedRoute,
    children: [
      {
        path: '/department-head',
        Component: DepartmentHeadLayout,
        children: [
          { index: true, Component: DepartmentHeadDashboard },
          { path: 'my-attendance', Component: DepartmentHeadMyAttendance },
          { path: 'team-attendance', Component: TeamAttendance },
          { path: 'employees', Component: EmployeeList },
          { path: 'performance-evaluation/:id', Component: PerformanceEvaluationForm },
          { path: 'leave-requests', Component: LeaveRequests },
          { path: 'payroll', Component: DepartmentHeadPayroll },
          { path: 'performance', Component: PerformanceEvaluation },
          { path: 'applicants', Component: ApplicantReview },
          { path: 'reports', Component: DepartmentHeadReports },
          { path: 'announcements', Component: DepartmentHeadAnnouncements },
          { path: 'profile', Component: DepartmentHeadProfile },
          { path: 'settings', Component: DepartmentHeadSettings },
        ],
      },
    ],
  },
  {
    path: '/hr-staff',
    Component: ProtectedRoute,
    children: [
      {
        path: '/hr-staff',
        Component: HRStaffLayout,
        children: [
          { index: true, Component: HRStaffDashboard },
          { path: 'my-attendance', Component: HRStaffMyAttendance },
          { path: 'employees', Component: HRStaffEmployees },
          { path: 'attendance', Component: HRStaffAttendance },
          { path: 'leave', Component: HRStaffLeave },
          { path: 'payroll', Component: HRStaffPayroll },
          { path: 'applicants', Component: HRStaffApplicants },
          { path: 'training', Component: HRStaffTraining },
          { path: 'reports', Component: HRStaffReports },
          { path: 'announcements', Component: HRStaffAnnouncements },
          { path: 'settings', Component: HRStaffSettings },
          { path: 'profile', Component: HRStaffProfile },
        ],
      },
    ],
  },
]);