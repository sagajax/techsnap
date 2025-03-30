import React, { useState } from 'react';
import { Pencil, MoreVertical, ChevronDown, Plus } from 'lucide-react';

const CompetitionOverview = () => {
  const [expandedSections, setExpandedSections] = useState({
    description: true,
    evaluation: true,
    citation: true
  });
  const [editingSections, setEditingSections] = useState({
    overview: false,
    description: false,
    evaluation: false,
    citation: false
  });
  const [sectionContents, setSectionContents] = useState({
    overview: `<p>This is the home page of the competition. In this section, you should aim to succinctly introduce the competition.</p>
               <p>All of the content on Kaggle is written in markdown. If you are copy-pasting from another application, like Word or your browser, you may need to clean up the markdown or html for things to display properly.</p>
               <p>If this is your first time creating a competition, please refer to our Getting Started Guide for help. Here is a handy link to Kaggle's competition documentation, which includes, among other things, instructions on submitting predictions.</p>`,
    description: 'The description section is used to further explain the details of your competition. You could explain more about the domain or go into more depth about the problem. You can upload images using the "Insert Image" icon on the bar that displays above this textbox when in edit mode.',
    evaluation: 'Evaluation criteria content goes here.',
    citation: 'Citation information goes here.'
  });
  


  const handleContentChange = (sectionId, newContent) => {
    setSectionContents(prev => ({
      ...prev,
      [sectionId]: newContent
    }));
  };

  const Section = ({ title, isDraft = false, children, sectionId, content }) => {
    const isExpanded = expandedSections[sectionId];
    const isEditing = editingSections[sectionId];
    
    const toggleExpand = () => {
      setExpandedSections(prev => ({...prev, [sectionId]: !prev[sectionId]}));
    };

    return (
    <div className="w-full border-b border-gray-200 last:border-b-0">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <h2 className="text-xl font-medium">{title}</h2>
          {isDraft && (
            <span className="ml-2 text-sm text-gray-500">(Draft)</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded">
            <MoreVertical className="h-4 w-4" />
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded"
            onClick={toggleExpand}
          >
            <ChevronDown 
              className={`h-4 w-4 transform transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`} 
            />
          </button>
        </div>
      </div>
      <div 
        className={`transition-all duration-200 overflow-hidden ${
          isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4">
            <div 
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
      </div>
    </div>
  )};

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Main Content */}
      <div className="p-6">
        {/* Overview Section */}
        <div className="space-y-6">
          <div className="max-w-none">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium">Overview</h2>
            </div>
              <div 
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: sectionContents.overview }}
              />
            
            
            <div className="my-6">
              <h3 className="font-medium mb-2">Timeline</h3>
              <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">
                <span className="text-gray-500">Start Date:</span>
                <span className="ml-2 font-semibold">2025-03-01</span>
                <span className="mx-2 text-gray-500">End Date:</span>
                <span className="font-semibold">2025-04-01</span>
              </div>
            </div>
          </div>

          <Section 
            title="Description" 
            sectionId="description"
            content={sectionContents.description}
          />

          <Section 
            title="Evaluation" 
            sectionId="evaluation"
            content={sectionContents.evaluation}
          />

          <Section 
            title="Citation" 
            isDraft={true} 
            sectionId="citation"
            content={sectionContents.citation}
          />

        </div>
      </div>
    </div>
  );
};

export default CompetitionOverview;