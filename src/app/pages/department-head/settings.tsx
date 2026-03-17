import { Save, User, Lock, Bell, Globe } from 'lucide-react';
import { useState } from 'react';

export default function DepartmentHeadSettings() {
  const [activeTab, setActiveTab] = useState('profile');

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
              onClick={() => setActiveTab('security')}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${
                activeTab === 'security'
                  ? 'bg-[#FFF8E1] text-[#C62828]'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Lock className="w-5 h-5" />
              Security
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
                      defaultValue="Department"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Head"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="depthead@company.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+63 920 123 4567"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Department</label>
                  <input
                    type="text"
                    defaultValue="Information Technology"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Position</label>
                  <input
                    type="text"
                    defaultValue="Department Head"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                    readOnly
                  />
                </div>
              </div>
              <button className="mt-6 bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors flex items-center gap-2">
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg text-gray-900 mb-6">Security Settings</h3>
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
              <button className="mt-6 bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors">
                Update Password
              </button>
            </div>
          )}

          {/* Notification Preferences */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg text-gray-900 mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-sm text-gray-900">Email Notifications</p>
                    <p className="text-xs text-gray-600">Receive notifications via email</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#C62828]" />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-sm text-gray-900">Leave Request Alerts</p>
                    <p className="text-xs text-gray-600">Get notified of new leave requests</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#C62828]" />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-sm text-gray-900">Attendance Alerts</p>
                    <p className="text-xs text-gray-600">Get notified about team attendance issues</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#C62828]" />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-sm text-gray-900">Applicant Alerts</p>
                    <p className="text-xs text-gray-600">Get notified of new applicants for review</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#C62828]" />
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
