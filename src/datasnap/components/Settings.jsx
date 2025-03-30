import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Settings() {
  const { pathname } = useLocation();
  
  const getActiveStyle = (path) =>
    pathname.endsWith(path) 
      ? 'border-b-2 border-blue-500' 
      : 'hover:border-b-2 hover:border-gray-400 hover:text-gray-600 dark:hover:text-gray-400';

  return (
    <div className="w-full h-full dark:bg-black text-black dark:text-white">
      <div className="max-w-screen-lg flex flex-col mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6 ml-4 lg:ml-0">Settings</h1>
        
        <div className="w-[360px] md:max-w-screen-sm flex md:space-x-2 md:justify-between items-center px-2 lg:px-0 mb-3 text-gray-500 text-xs md:text-sm">
          <Link to="account" className={`px-1 py-2 md:p-2 ${getActiveStyle('account')}`}>
            Account
          </Link>
          <Link to="profile" className={`px-1 py-2 md:p-2 ${getActiveStyle('profile')}`}>
            Profile
          </Link>
          <Link to="privacy" className={`px-1 py-2 md:p-2 ${getActiveStyle('privacy')}`}>
            Privacy
          </Link>
          <Link to="preferences" className={`px-1 py-2 md:p-2 ${getActiveStyle('preferences')}`}>
            Preferences
          </Link>
          <Link to="notifications" className={`px-1 py-2 md:p-2 ${getActiveStyle('notifications')}`}>
            Notifications
          </Link>
        </div>

        <div className="px-4 lg:py-2 lg:px-0 overflow-auto lg:min-h-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Settings;
