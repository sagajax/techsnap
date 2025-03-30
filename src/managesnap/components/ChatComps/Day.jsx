import React from 'react';

const Day = ({ timestamp }) => {
  const formatDate = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    
    const isToday = messageDate.toDateString() === now.toDateString();
    const isYesterday = new Date(now - 86400000).toDateString() === messageDate.toDateString();
    
    if (isToday) return 'Today';
    if (isYesterday) return 'Yesterday';
    
    return messageDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: now.getFullYear() !== messageDate.getFullYear() ? 'numeric' : undefined
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
        {formatDate(timestamp)}
      </div>
    </div>
  );
};

export default Day;