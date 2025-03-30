import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Edit, Trash2, Bell, Settings, Users } from 'lucide-react';

const ChannelContextMenu = ({ x, y, onClose, channel, settingsOpen, setSettingsOpen }) => {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if the click is outside the menu and modal
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  const adjustPosition = () => {
    const menuWidth = 200;
    const menuHeight = 250;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let adjustedX = x;
    let adjustedY = y;

    if (x + menuWidth > screenWidth) {
      adjustedX = screenWidth - menuWidth - 10;
    }
    if (y + menuHeight > screenHeight) {
      adjustedY = screenHeight - menuHeight - 10;
    }

    return { adjustedX, adjustedY };
  };

  const { adjustedX, adjustedY } = adjustPosition();

  const menuItems = [
    {
      icon: <UserPlus className="w-4 h-4" />,
      label: 'Invite People',
      action: () => console.log('Invite to', channel.name),
    },
    {
      icon: <Edit className="w-4 h-4" />,
      label: 'Edit Channel',
      action: () => console.log('Edit', channel.name),
    },
    {
      icon: <Bell className="w-4 h-4" />,
      label: 'Notification Preferences',
      action: () => console.log('Notifications for', channel.name),
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: 'Manage Members',
      action: () => navigate(`/managesnap/manage-members`),
    },
    {
      icon: <Settings className="w-4 h-4" />,
      label: 'Channel Settings',
      action: () => setSettingsOpen(true),
    },
    {
      icon: <Trash2 className="w-4 h-4" />,
      label: 'Delete Channel',
      action: () => console.log('Delete', channel.name),
    },
  ];

  return (
    <>
      <div
        ref={menuRef}
        style={{
          top: `${adjustedY}px`,
          left: `${adjustedX}px`,
        }}
        className="fixed bg-white dark:bg-zinc-800 shadow-lg rounded-lg border border-gray-200 dark:border-zinc-700 py-1 z-50 w-56"
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`px-4 py-2 cursor-pointer flex items-center space-x-3 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700`}
            onClick={() => {
              item.action();
              if (item.label !== 'Channel Settings') {
                onClose();
              }
            }}
            role="menuitem"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChannelContextMenu;
