import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../DarkMode/ThemeProvider';
import AddChannel from '../ChatComps/AddChannel';
import AddGroup from '../ChatComps/AddGroup';
import { PlusCircleIcon } from 'lucide-react';

const channels = [
  {
    category: "Mobile apps",
    items: [
      { id: "mobile-apps", name: "mobile-apps", memberCount: 120 },
      { id: "react-native", name: "react native", memberCount: 85 },
      { id: "flutter", name: "flutter", memberCount: 95 }
    ]
  },
  {
    category: "Desktop apps",
    items: [
      { id: "desktop-apps", name: "desktop-apps", memberCount: 75 },
      { id: "electron", name: "electron", memberCount: 60 },
      { id: "nwjs", name: "nwjs", memberCount: 40 }
    ]
  },
  {
    category: "3D and graphics",
    items: [
      { id: "threejs", name: "threejs", memberCount: 110 },
      { id: "webgl", name: "webgl", memberCount: 80 },
      { id: "d3js", name: "d3js", memberCount: 70 }
    ]
  },
  {
    category: "Tools",
    items: [
      { id: "graphql", name: "graphql", memberCount: 130 },
      { id: "typescript", name: "typescript", memberCount: 150 },
      { id: "bundlers", name: "bundlers", memberCount: 65 },
      { id: "editors", name: "editors", memberCount: 55 }
    ]
  },
];

function Channels() {
  const [expanded, setExpanded] = useState({
    "Mobile apps": true,
    "Desktop apps": true,
    "3D and graphics": true,
    "Tools": true
  });

  const [addChannel, setAddChannel] = useState(false);
  const [addGroup, setAddGroup] = useState(false);

  const navigate = useNavigate();

  const {theme, setTheme} = useTheme();

  const handleNavigation = (channel) => {
    navigate(`/managesnap/chat/channel/${channel.id}`, { 
      state: { 
        channelName: channel.name, 
        memberCount: channel.memberCount 
      } 
    });
  };

  const toggleCategory = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div id="sidebar" className={`sm:w-full overflow-auto py-2`}>
      <div className="flex-1 px-4">
        {channels.map((channelGroup, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer p-2 rounded transition duration-200 ease-in-out"
            >
              <span className="text-sm font-bold">{channelGroup.category}</span>
              <div className="flex items-center space-x-4">
              {/* <PlusCircleIcon id='add' className='w-5 h-5' onClick={() => setAddChannel(true)}/> */}
              {expanded[channelGroup.category] ? (
                <FaChevronUp className="" onClick={() => toggleCategory(channelGroup.category)}/>
              ) : (
                <FaChevronDown className="" onClick={() => toggleCategory(channelGroup.category)}/>
              )}
              </div>
            </div>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expanded[channelGroup.category] ? 'max-h-[1000px]' : 'max-h-0'}`}>
              <div className="mt-2">
                {channelGroup.items.map((channel, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded cursor-pointer transition duration-200 ease-in-out"
                    onClick={() => handleNavigation(channel)}
                  >
                    <div className="flex justify-between items-center">
                      <span>#{channel.name}</span>
                      <span className="text-sm ">{channel.memberCount} members</span>
                    </div>
                  </div>
                ))}
                <div className="p-3 flex space-x-2 items-center text-sm cursor-pointer" onClick={() => setAddGroup(true)}>
            <PlusCircleIcon className='w-4 h-4'/>
            <span>Add group</span>
          </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddChannel isOpen={addChannel} onClose={() => setAddChannel(false)} />
      <AddGroup isOpen={addGroup} onClose={() => setAddGroup(false)} />
    </div>
  );
}

export default Channels;
