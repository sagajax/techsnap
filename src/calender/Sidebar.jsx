import React, { useState } from 'react';
import { Calendar, List, CheckSquare, Star, Link2, X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: "Calendar", href: "/calender", icon: <Calendar size={20} /> },
  { name: "Priorities", href: "/calender/priorities", icon: <Star size={20} /> },
  { name: "Tasks", href: "/calender/tasks", icon: <List size={20} /> },
  { name: "Habits", href: "/calender/habits", icon: <CheckSquare size={20} /> },
  { name: "Scheduling Links", href: "/calender/scheduling", icon: <Link2 size={20} /> },
];

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className={`h-screen bg-gray-900 transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <div className="p-4 ">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-gray-100 mb-4 ml-3 focus:outline-none"
        >
          {isExpanded ? <X/> : <Menu/>}
        </button>

        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  <div className="min-w-[24px] flex items-center justify-center">
                    {item.icon}
                  </div>
                  {/* Only show the item name when expanded */}
                  <span
                    className={`whitespace-nowrap transition-all duration-300 ${
                      isExpanded ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
