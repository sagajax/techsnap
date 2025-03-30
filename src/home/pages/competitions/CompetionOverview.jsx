import React, { useState } from 'react';
import { Pencil, MoreVertical, ChevronDown, Plus } from 'lucide-react';
import CKEDitor from '../../../CKEditor';

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
  
  const handleEditToggle = (sectionId) => {
    setEditingSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

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
          <button 
            className="p-2 hover:bg-gray-100 rounded"
            onClick={() => handleEditToggle(sectionId)}
          >
            <Pencil className="h-4 w-4" />
          </button>
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
          {isEditing ? (
            <div className="space-y-4">
              <div className="min-h-[400px] border rounded-lg">
                <CKEDitor 
                  data={content}
                  onDataChange={(newContent) => handleContentChange(sectionId, newContent)}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  onClick={() => handleEditToggle(sectionId)}
                  className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => handleEditToggle(sectionId)}
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <div 
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
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
              <button 
                className="p-2 hover:bg-gray-100 rounded"
                onClick={() => handleEditToggle('overview')}
              >
                <Pencil className="h-4 w-4" />
              </button>
            </div>
            
            {editingSections.overview ? (
              <div className="space-y-4">
                <div className="min-h-[400px] border rounded-lg">
                  <CKEDitor 
                    data={sectionContents.overview}
                    onDataChange={(newContent) => handleContentChange('overview', newContent)}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button 
                    onClick={() => handleEditToggle('overview')}
                    className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => handleEditToggle('overview')}
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <div 
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: sectionContents.overview }}
              />
            )}
            
            <div className="my-6">
              <h3 className="font-medium mb-2">Timeline</h3>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">
                <Plus className="h-4 w-4 mr-2" />
                Set Competition Deadline
              </button>
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

          <button className="mt-4 flex items-center px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">
            <Plus className="h-4 w-4 mr-2" />
            Add Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetitionOverview;