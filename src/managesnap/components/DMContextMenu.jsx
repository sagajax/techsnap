import React, { useEffect, useRef } from 'react';
import { MessageSquare, Star, UserMinus, Flag, Ban } from 'lucide-react';

const DMContextMenu = ({ x, y, dm, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const menuItems = [
    {
      icon: <MessageSquare className="w-4 h-4" />,
      label: 'Open conversation',
      action: () => {
        console.log('Opening conversation with:', dm.name);
        onClose();
      }
    },
    {
      icon: <Star className="w-4 h-4" />,
      label: 'Add to favorites',
      action: () => {
        console.log('Adding to favorites:', dm.name);
        onClose();
      }
    },
    {
      icon: <UserMinus className="w-4 h-4" />,
      label: 'Delete chat',
      action: () => {
        console.log('Removing from DMs:', dm.name);
        onClose();
      }
    },
    {
      icon: <Flag className="w-4 h-4" />,
      label: 'Report user',
      action: () => {
        console.log('Reporting user:', dm.name);
        onClose();
      }
    },
    {
      icon: <Ban className="w-4 h-4" />,
      label: 'Block user',
      danger: true,
      action: () => {
        console.log('Blocking user:', dm.name);
        onClose();
      }
    }
  ];

  return (
    <div
      ref={menuRef}
      className="fixed bg-white dark:bg-zinc-800 rounded-lg shadow-lg z-[999] w-48 py-2"
      style={{
        left: x-30,
        top: y,
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer ${
            item.danger ? 'text-red-500 hover:text-red-600' : 'text-gray-700 dark:text-gray-200'
          }`}
          onClick={item.action}
        >
          <span className="mr-3">{item.icon}</span>
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DMContextMenu;