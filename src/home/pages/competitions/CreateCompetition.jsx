import { ArrowLeft, ExternalLink, HelpCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AI from './assets/AI.png';
import Browsw from './assets/browse.png';
import Clone from './assets/clone.png';
import New from './assets/new.png';
import CompetitionDetailsPanel from './CopetitionDetailPanel';
// CompetitionOption Component
const CompetitionOption = ({ icon, title, description, onClick }) => (
  <div 
    className="p-6 mb-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-all"
    onClick={onClick}
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

// Main CreateCompetition Component
const CreateCompetition = () => {
  const [isDetailsPanelOpen, setIsDetailsPanelOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-8">
        <Link to="/dashboard/competitions" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft size={20} />
          <span className="text-lg">Create Competition</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-6">What kind of competition do you want to create?</h2>
          
          <CompetitionOption
            icon={<img src={New} alt="ML Competition" className="w-12 h-12" />}
            title="New Competition"
            description="Use your own dataset to create a competition"
            onClick={() => setIsDetailsPanelOpen(true)}
          />

          <CompetitionOption
            icon={<img src={AI} alt="AI Generated" className="w-12 h-12" />}
            title="AI Generated Competition"
            description="Quickly create an ML Prediction Competition based on a dataset generated by AI"
          />

          <CompetitionOption
            icon={<img src={Clone} alt="Clone Competition" className="w-12 h-12" />}
            title="Clone a Competition You Hosted" 
            description="Re-run a competition you hosted previously"
          />

          <CompetitionOption
            icon={<img src={Browsw} alt="Browse Library" className="w-12 h-12" />}
            title="Browse Cloneable Library"
            description="Use a competition created by another Kaggle user as a template"
          />
        </div>

        <div className="w-full lg:w-80">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="text-blue-500" size={24} />
              <h3 className="text-lg font-semibold">Competition Creation Help</h3>
            </div>
            <p className="text-gray-600 mb-6">Dig into resources to learn how to create a competition.</p>
            <div className="space-y-3">
              <Link 
                to="/setup-guide" 
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
              >
                View Setup Guide
                <ExternalLink size={16} />
              </Link>
              <Link 
                to="/host-discussions" 
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
              >
                View Host Discussions
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Competition Details Panel */}
      <CompetitionDetailsPanel 
        isOpen={isDetailsPanelOpen}
        onClose={() => setIsDetailsPanelOpen(false)}
      />
    </div>
  );
};

export default CreateCompetition;