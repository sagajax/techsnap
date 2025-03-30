import React, { useState } from 'react';
import { Search, UserPlus, User } from 'lucide-react';
import img from "../../assets/man1.jpg";
import img2 from "../../assets/man2.jpg";
import img3 from "../../assets/man3.jpg";
import img4 from "../../assets/img1.png";

const MembersList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('Everyone');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filterOptions = [
    'Everyone',
    'Online',
    'Offline',
    'Channel Managers',
    'Team Managers',
    'Product Managers',
    'Developers'
  ];

  const members = [
    {
      id: 1,
      username: 'Saketh33',
      fullName: 'sai pavan saketh',
      role: 'Product Manager ft. Devops',
      isOnline: false,
      avatar: img,
      isChannelManager: true
    },
    {
      id: 2,
      username: 'Samarth Gupta',
      fullName: 'Samarth Gupta',
      isOnline: false,
      avatar: img2
    },
    {
      id: 3,
      username: 'Tanvi Sharma',
      fullName: 'Tanvi Sharma',
      isOnline: false,
      avatar: img3
    },
    {
      id: 4,
      username: 'Vignesh Reddy (you)',
      fullName: 'Vignesh Reddy',
      isOnline: true,
      avatar: img4
    },
    {
      id: 5,
      username: 'Yaswanth',
      fullName: 'Yaswanth',
      role: 'Team Manager ft.DRF',
      isOnline: false,
      avatar: null
    }
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.role?.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter = () => {
      switch(filterOption) {
        case 'Online':
          return member.isOnline;
        case 'Offline':
          return !member.isOnline;
        case 'Channel Managers':
          return member.isChannelManager;
        case 'Team Managers':
          return member.role?.includes('Team Manager');
        case 'Product Managers':
          return member.role?.includes('Product Manager');
        case 'Developers':
          return member.role?.includes('Dev');
        default:
          return true;
      }
    };

    return matchesSearch && matchesFilter();
  });

  return (
    <div className="p-2 text-gray-200">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Find members"
              className="w-full bg-transparent border rounded-lg pl-10 pr-4 py-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <button 
              className="bg-transparent px-4 py-2 rounded-lg flex items-center gap-2 border"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {filterOption}
              <svg 
                className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-zinc-900 rounded-md shadow-lg py-1 z-10">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                    onClick={() => {
                      setFilterOption(option);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="flex items-center gap-3 w-full px-2 py-1 rounded-md text-blue-400">
          <UserPlus className="h-5 w-5" />
          <span>Add people</span>
        </button>
        <div className="space-y-1">
          {filteredMembers.length === 0 ? (
            <div className="text-center text-gray-400 py-4">
              No members found
            </div>
          ) : (
            filteredMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between px-2 py-1 hover:bg-zinc-900 rounded-md">
                <div className="flex items-center gap-3">
                  {member.avatar ? (
                    <img src={member.avatar} alt="" className="w-10 h-10 rounded-full" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                      <User className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{member.username}</span>
                      <span className="h-2 w-2 rounded-full">
                      {!member.isOnline && <div className="h-2 w-2 border mt-0.5 rounded-full"></div>}
                        {member.isOnline && <div className="h-2 w-2 bg-green-500 rounded-full"></div>}
                      </span>
                      <span className="text-gray-400">{member.fullName}</span>
                    </div>
                    {member.role && (
                      <div className="text-gray-400 text-sm">{member.role}</div>
                    )}
                  </div>
                </div>
                {member.isChannelManager && (
                  <span className="text-sm text-gray-400">Channel Manager</span>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersList;