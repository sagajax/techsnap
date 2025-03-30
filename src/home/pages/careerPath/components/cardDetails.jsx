import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaFile } from 'react-icons/fa';

const Card = ({ data }) => {
  const navigate = useNavigate();
    const { careerId} = useParams();

  return (
    <div 
      className="relative w-[80%] mb-8 text-white rounded-lg shadow-lg overflow-hidden" 
      style={{ 
        backgroundImage: `url(${data.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="bg-custom-gradient">
        <div className="p-6 space-y-4">
          <div className="flex gap-2 text-sm items-center">
            <div className="flex gap-1 items-center">
              <FaFile />
              <span>{data.lessons} lessons</span>
            </div>
            <span>{data.practices} practices</span>
          </div>
          <h2 className="text-lg md:text-2xl font-bold">{data.title}</h2>
          <p className="text-gray-300 line-clamp-3 md:line-clamp-none">{data.description}</p>
          <span className="block text-sm">2 Hours Ago</span>
        </div>
        <button 
          className="absolute bottom-4 right-4 border hover:bg-blue-900 text-white text-sm px-4 py-2 rounded transition" 
          onClick={() => {
            console.log(`/career/${careerId}/${data.details.replace(/\s+/g, '')}`);
            navigate(`/dashboard/details/${data.details.replace(/\s+/g, '')}`);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
