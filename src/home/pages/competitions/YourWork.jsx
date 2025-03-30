import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Sample data - replace with actual API call or data fetching logic
const userCompetitions = [
  {
    id: 1,
    imageUrl: "https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png",
    title: "My First ML Competition",
    description: "A beginner-friendly machine learning challenge",
    status: "active",
    participants: 156,
    submissions: 423,
    deadline: "2024-03-01"
  },
  {
    id: 2,
    imageUrl: "https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png",
    title: "Data Analysis Challenge",
    description: "Analyze customer behavior patterns",
    status: "closed",
    participants: 89,
    submissions: 267,
    deadline: "2024-02-15"
  }
];

const CompetitionCard = ({ competition, onClick }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      onClick={() => onClick(competition)}
      className="card w-full max-w-3xl bg-white rounded-xl shadow-md overflow-hidden mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick(competition)}
    >
      <div className="flex">
        <div className="w-1/4">
          <img 
            src={competition.imageUrl} 
            alt={`${competition.title} banner`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-3/4 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold mb-2">{competition.title}</h2>
              <p className="text-gray-600 mb-4">{competition.description}</p>
            </div>
            <span 
              className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(competition.status)}`}
            >
              {competition.status.charAt(0).toUpperCase() + competition.status.slice(1)}
            </span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <div>
              <span className="font-semibold">{competition.participants}</span> participants
            </div>
            <div>
              <span className="font-semibold">{competition.submissions}</span> submissions
            </div>
            <div>
              Deadline: <span className="font-semibold">{new Date(competition.deadline).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const YourWork = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const filteredCompetitions = userCompetitions.filter(comp => {
    if (filter === 'all') return true;
    return comp.status === filter;
  });

  const handleCompetitionClick = (competition) => {
    navigate(`/dashboard/competitions/${competition.id}`, { state: { competition } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "Nunito" }}>
      <div className="mb-8">
              <Link to="/dashboard/competitions" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
                <ArrowLeft size={20} />
                <span className="text-lg">Back</span>
              </Link>
            </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Competitions</h1>
          <p className="text-gray-600">
            Manage and track all the competitions you've created
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${
              filter === 'all' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } transition-colors duration-200`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-full ${
              filter === 'active' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } transition-colors duration-200`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('closed')}
            className={`px-4 py-2 rounded-full ${
              filter === 'closed' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } transition-colors duration-200`}
          >
            Closed
          </button>
        </div>

        {/* Competitions List */}
        <div className="space-y-4">
          {filteredCompetitions.length > 0 ? (
            filteredCompetitions.map((competition) => (
              <CompetitionCard
                key={competition.id}
                competition={competition}
                onClick={handleCompetitionClick}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No competitions found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourWork;