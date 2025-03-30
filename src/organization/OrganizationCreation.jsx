import { useState } from 'react';


// Import existing step components
import First from './first';
import Second from './second';
import Fourth from './fourth';
import Third from './third';
import Fifth from './fifth';

function OrganizationCreation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    purpose: 'enterprise',
    orgName: '',
    size: '',
    institutionType: '',  // for universities
    nonprofitType: '',    // for non-profits
    teamEmails: [{ email: '', role: 'Admin' }],
    orgDescription: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    // Skip second step if personal use is selected
    if (currentStep === 1 && formData.purpose === 'personal') {
      setCurrentStep(5);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    // Handle going back when second step was skipped
    if (currentStep === 5 && formData.purpose === 'personal') {
      setCurrentStep(1);
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {//TODO: Implement organization creation
      setCurrentStep(5);
    } catch (error) {
      console.error('Error creating organization:', error);
    }
  };

  const renderStep = () => {
    const commonProps = {
      formData,
      setFormData: handleInputChange,
    };

    switch (currentStep) {
      case 1:
        return <First
          selectedOption={formData.purpose}
          handleOptionChange={(e) => handleInputChange('purpose', e.target.value)}
        />;
      case 2:
        // Don't render second step for personal use
        if (formData.purpose === 'personal') {
          return null;
        }
        return <Second
          {...commonProps}
          selectedOption={formData.department}
          handleOptionChange={(e) => handleInputChange('department', e.target.value)}
        />;
      case 3:
        return <Third
          {...commonProps}
          emailFields={formData.teamEmails}
          setEmailFields={(emails) => handleInputChange('teamEmails', emails)}
        />;
      case 4:
        return <Fourth
          {...commonProps}
          selectedOption={formData.department}
          handleOptionChange={(e) => handleInputChange('department', e.target.value)}
        />;
      case 5:
        return <Fifth />
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Main content */}
      <div className="lg:w-2/3 w-full flex flex-col h-full">
        {/* Logo Section */}
        <div className="m-8">
          <div>Techsnap org logo</div>
        </div>
        {/* Step content */}
        <div className="flex-grow px-8 lg:px-24 overflow-y-auto">
          {renderStep()}
        </div>

        {/* Navigation buttons - fixed at bottom */}
        {currentStep !== 5 && (
          <div className="px-8 lg:px-24 py-6 border-t bg-white">
            <div className="flex justify-between items-center">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 transition duration-300"
                >
                  {currentStep === 3 ? 'Remind me later' : '← Back'}
                </button>
              )}

              <button
                onClick={currentStep === 4 ? handleSubmit : handleNext}
                className={`${currentStep === 1 ? 'ml-auto' : ''
                  } bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300`}
              >
                {currentStep === 4 ? 'Finish' : currentStep === 3 ? 'Invite team' : 'Continue →'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right section - Image */}
      <div className="hidden lg:flex lg:w-1/3 bg-gray-100">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://dummyimage.com/400x400/00ff00"
            alt="Step illustration"
            className="w-64 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
}

export default OrganizationCreation; 