import { Save, User, Lock, Bell, Globe, Shield, Clock, Activity } from 'lucide-react';
import { useState } from 'react';

export default function HRStaffSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Notification states
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [leaveVerificationAlerts, setLeaveVerificationAlerts] = useState(true);
  const [applicantNotifications, setApplicantNotifications] = useState(true);
  const [trainingNotifications, setTrainingNotifications] = useState(true);
  const [systemNotifications, setSystemNotifications] = useState(true);
  
  // Security states
  const [facialVerification, setFacialVerification] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-[#C62828] mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 h-fit">
          <h3 className="text-lg text-gray-900 mb-4">Settings Menu</h3>
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${
                activeTab === 'profile'
                  ? 'bg-[#FFF8E1] text-[#C62828]'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <User className="w-5 h-5" />
              Profile Settings
            </button>
            <button
              onClick={() => setActiveTab('account')}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${
                activeTab === 'account'
                  ? 'bg-[#FFF8E1] text-[#C62828]'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Lock className="w-5 h-5" />
              Account Settings
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${
                activeTab === 'security'
                  ? 'bg-[#FFF8E1] text-[#C62828]'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Shield className="w-5 h-5" />
              Security Settings
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${
                activeTab === 'notifications'
                  ? 'bg-[#FFF8E1] text-[#C62828]'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Bell className="w-5 h-5" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${
                activeTab === 'preferences'
                  ? 'bg-[#FFF8E1] text-[#C62828]'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Globe className="w-5 h-5" />
              System Preferences
            </button>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg text-gray-900 mb-6">Profile Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="Elena"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Mercado"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="elena.mercado@company.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+63 917 456 7890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Department</label>
                  <input
                    type="text"
                    defaultValue="Human Resources"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Position</label>
                  <input
                    type="text"
                    defaultValue="HR Staff"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Profile Photo</label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-10 h-10 text-gray-400" />
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                      Upload Photo
                    </button>
                  </div>
                </div>
              </div>
              <button className="mt-6 bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2">
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          )}

          {/* Account Settings */}
          {activeTab === 'account' && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg text-gray-900 mb-6">Account Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    defaultValue="elena.mercado"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Employee ID</label>
                  <input
                    type="text"
                    defaultValue="EMP-2024-015"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    readOnly
                  />
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">Password Management</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Current Password</label>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">New Password</label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">Two-Factor Authentication</h4>
                  <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div>
                      <p className="text-sm text-gray-900">Enable Two-Factor Authentication</p>
                      <p className="text-xs text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={twoFactorAuth}
                      onChange={(e) => setTwoFactorAuth(e.target.checked)}
                      className="w-5 h-5 accent-[#C62828]"
                    />
                  </label>
                </div>
              </div>
              <button className="mt-6 bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2">
                <Save className="w-5 h-5" />
                Update Account
              </button>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg text-gray-900 mb-6">Security Settings</h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div>
                      <p className="text-sm text-gray-900">Enable Facial Verification</p>
                      <p className="text-xs text-gray-600">Use facial recognition for clock in/out</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={facialVerification}
                      onChange={(e) => setFacialVerification(e.target.checked)}
                      className="w-5 h-5 accent-[#C62828]"
                    />
                  </label>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Session Timeout</h4>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]">
                      <option>15 minutes</option>
                      <option>30 minutes</option>
                      <option selected>1 hour</option>
                      <option>2 hours</option>
                      <option>Never</option>
                    </select>
                    <p className="text-xs text-gray-600 mt-2">Automatically log out after period of inactivity</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-[#C62828]" />
                  <h3 className="text-lg text-gray-900">Login Activity History</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">Recent login activity on your account</p>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-900">Windows PC - Chrome</p>
                        <p className="text-xs text-gray-600">IP: 192.168.1.100</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-900">March 12, 2026</p>
                        <p className="text-xs text-gray-600">8:30 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-900">Windows PC - Chrome</p>
                        <p className="text-xs text-gray-600">IP: 192.168.1.100</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-900">March 11, 2026</p>
                        <p className="text-xs text-gray-600">8:25 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-900">Android - Chrome Mobile</p>
                        <p className="text-xs text-gray-600">IP: 192.168.1.105</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-900">March 10, 2026</p>
                        <p className="text-xs text-gray-600">5:45 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notification Preferences */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg text-gray-900 mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-sm text-gray-900">System Notifications</p>
                    <p className="text-xs text-gray-600">General system alerts and updates</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={systemNotifications}
                    onChange={(e) => setSystemNotifications(e.target.checked)}
                    className="w-5 h-5 accent-[#C62828]"
                  />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-sm text-gray-900">Email Notifications</p>
                    <p className="text-xs text-gray-600">Receive notifications via email</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                    className="w-5 h-5 accent-[#C62828]"
                  />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-sm text-gray-900">Leave Verification Alerts</p>
                    <p className="text-xs text-gray-600">Get notified when leave requests need verification</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={leaveVerificationAlerts}
                    onChange={(e) => setLeaveVerificationAlerts(e.target.checked)}
                    className="w-5 h-5 accent-[#C62828]"
                  />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-sm text-gray-900">Applicant Submission Notifications</p>
                    <p className="text-xs text-gray-600">Receive alerts for new applicant submissions</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={applicantNotifications}
                    onChange={(e) => setApplicantNotifications(e.target.checked)}
                    className="w-5 h-5 accent-[#C62828]"
                  />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-sm text-gray-900">Training Notifications</p>
                    <p className="text-xs text-gray-600">Get notified about upcoming training programs</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={trainingNotifications}
                    onChange={(e) => setTrainingNotifications(e.target.checked)}
                    className="w-5 h-5 accent-[#C62828]"
                  />
                </label>
              </div>
            </div>
          )}

          {/* System Preferences */}
          {activeTab === 'preferences' && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg text-gray-900 mb-6">System Preferences</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Language</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]">
                    <option>English</option>
                    <option>Filipino</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Theme</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Auto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Timezone</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]">
                    <option>Asia/Manila</option>
                    <option>Asia/Singapore</option>
                    <option>Asia/Tokyo</option>
                    <option>UTC</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Date Format</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]">
                    <option>YYYY-MM-DD</option>
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Time Format</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]">
                    <option>24 Hour</option>
                    <option>12 Hour (AM/PM)</option>
                  </select>
                </div>
              </div>
              <button className="mt-6 bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2">
                <Save className="w-5 h-5" />
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
