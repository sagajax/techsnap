import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Bell, Info, Headphones } from 'lucide-react';
import { Search, UserPlus, User } from 'lucide-react';
import MembersList from '../ChannelDetails/MembersList';

const ChannelModal = ({ isOpen, close }) => {
  const [activeTab, setActiveTab] = useState('About');
  const [isStarred, setIsStarred] = useState(false);

  const tabs = ['About', 'Members 5', 'Tabs', 'Integrations', 'Settings'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <div className="px-8 py-2 space-y-2">
            <div className="py-2 bg-zinc-900 rounded-lg">
            <div className='px-6 py-2 border-b border-gray-700'>
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-sm font-medium text-gray-100">Topic</h2>
                <button className="text-blue-400 text-xs hover:underline">Edit</button>
              </div>
              <p className="text-gray-400 text-sm">Add a topic</p>
            </div>
            <div className='px-6 py-2 border-b border-gray-700'>
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-sm font-medium text-gray-100">Description</h2>
                <button className="text-blue-400 text-xs hover:underline">Edit</button>
              </div>
              <p className="text-gray-400 text-sm">Add a description</p>
            </div>
            <div className='px-6 py-2 border-b border-gray-700'>
              <div className="flex items-center gap-1 mb-1">
                <h2 className="text-sm font-medium text-gray-100">Managed by</h2>
                <Info className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <p className="text-blue-400 text-sm hover:underline cursor-pointer">Saketh33</p>
            </div>
            <div className='px-6 py-2 border-b border-gray-700'>
              <h2 className="text-sm font-medium text-gray-100 mb-1">Created by</h2>
              <p className="text-gray-400 text-sm">Saketh33 on July 27, 2024</p>
            </div>
            <button className="px-6 py-2 text-pink-500 text-sm hover:text-pink-400">Leave channel</button>
            </div>

            <div className="bg-gray-800 rounded px-4 py-2 ">
              <h2 className="text-sm font-medium text-gray-100 mb-2">Files</h2>
              <p className="text-gray-400 text-sm">
                There aren't any files to see here right now. But there could be — drag and drop any file into the message pane to add it to this conversation.
              </p>
            </div>
          </div>
        );
      case 'Members 5':
        return (
          <MembersList />
        );
      default:
        return null;
    }
  };

  return createPortal(
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/50 backdrop-blur-sm">
          <div className="w-[550px] bg-[#222529] text-gray-100 rounded-lg shadow-xl">
            <div className="p-4 flex flex-col space-y-3 border-b border-gray-700">
              <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold"># react-frontend</h1>
              <button onClick={close} className="p-1.5 hover:bg-gray-700 rounded">
                  <X className="w-5 h-5" />
                </button>
                </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsStarred(!isStarred)}
                  className="p-1.5 hover:bg-gray-700 rounded-lg border border-gray-600"
                >
                  <svg className="w-5 h-5" fill={isStarred ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
                <button className="flex items-center px-3 py-1 hover:bg-gray-700 rounded-lg border border-gray-600 text-sm">
                  <Bell className="w-4 h-4 mr-2" />
                  Enable Notifications
                </button>
                <button className="flex items-center px-3 py-1 hover:bg-gray-700 rounded-lg border border-gray-600 text-sm">
                  <Headphones className="w-4 h-4 mr-2" />
                  Huddle
                </button>
              </div>
            </div>

            <div className="flex border-b border-gray-700 px-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm ${
                    activeTab === tab
                      ? 'border-b-2 border-white text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="h-[60vh] p-4 bg-[#222527]">
              {renderTabContent()}
            </div>

            <div className="px-4 pb-3 rounded-b-lg text-gray-500 text-xs bg-[#222527]">
              Channel ID: C07DXLH023H
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal-root')
  );
};

export default ChannelModal;