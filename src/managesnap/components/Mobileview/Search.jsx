import React, { useState } from 'react';
import { LockClosedIcon, HashtagIcon, UserIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { id: 1, label: 'Recents' },
  { id: 2, label: 'Files' },
  { id: 3, label: 'Canvases' },
  { id: 4, label: 'Channels' },
  { id: 5, label: 'People' },
];

const tabContent = {
  Recents: [
    { type: 'lock', label: 'managesnap' },
    { type: 'lock', label: 'techsnap' },
    { type: 'lock', label: 'testing' },
    { type: 'hashtag', label: 'react-frontend' },
    { type: 'user', label: 'Saketh33' },
    { type: 'hashtag', label: 'hiresnap' },
    { type: 'lock', label: 'evalsnap' },
    { type: 'lock', label: 'datasnap' },
    { type: 'hashtag', label: 'test-tasks' },
    { type: 'hashtag', label: 'general' },
  ],
  Files: ['File 1', 'File 2', 'File 3'],
  Canvases: ['Canvas 1', 'Canvas 2', 'Canvas 3'],
  Channels: ['Channel 1', 'Channel 2', 'Channel 3'],
  People: ['Person 1', 'Person 2', 'Person 3'],
};

function Search() {
  const [activeTab, setActiveTab] = useState('Recents');
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1)
  }

  const renderIcon = (type) => {
    switch (type) {
      case 'lock':
        return <LockClosedIcon className="w-5 h-5 " />;
      case 'hashtag':
        return <HashtagIcon className="w-5 h-5" />;
      case 'user':
        return <UserIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="dark:bg-black dark:text-white h-screen p-4">

      <div className="flex items-center rounded-lg mb-4">
        <ChevronLeftIcon className='w-8 ' onClick={handleBack}/>
        <input 
          type="text" 
          aria-label="Search or jump to" 
          placeholder="search..." 
          className="rounded-xl p-2 ml-2  w-full focus:outline-none bg-transparent border dark:border-gray-700"
        />
        <button 
          className="font-semibold ml-2 p-2 rounded-lg  focus:outline-none focus:ring-2 "
          aria-label="Cancel search"
        >
          Cancel
        </button>
      </div>

      <div className="flex justify-between text-sm mb-4">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(label)}
            className={`py-2 px-2 font-semibold transition-colors duration-200 rounded-lg focus:outline-none 
            ${activeTab === label ? 'bg-gray-300 text-black' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
            aria-current={activeTab === label ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {tabContent[activeTab].map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200">
            {activeTab === 'Recents' && renderIcon(item.type)}
            <span className="text-sm">{item.label || item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
