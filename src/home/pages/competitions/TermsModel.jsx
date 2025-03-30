import React, { useState } from 'react';
import { X } from 'lucide-react';

const TermsModal = ({ isOpen, onClose, onAccept }) => {
  const [acceptedTerms, setAcceptedTerms] = useState({
    competition: false,
    responsibility: false,
    rules: false,
    relationship: false
  });

  const allTermsAccepted = Object.values(acceptedTerms).every(value => value);

  const handleCheckboxChange = (key) => {
    setAcceptedTerms(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6">
        {/* Modal Content */}
        <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b sticky top-0 bg-white">
            <h2 className="text-lg sm:text-xl font-semibold pr-2">Review competition terms and conditions</h2>
            <button 
              onClick={onClose} 
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full flex-shrink-0"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
              By clicking on the "I Understand and Accept", you agree to the following terms:
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  key: 'competition',
                  text: 'I confirm that this competition complies with Kaggles Terms of Service and is designed as a competition of skill, not chance.'
                },
                {
                  key: 'responsibility',
                  text: 'I understand it is my sole responsibility to ensure that the Competition-specific rules, participant eligibility, and prize fulfillment, comply with applicable law including but not limited to denied party and country regulations, embargoes, trade controls, anti-corruption laws, anti-discrimination laws, tax laws, data privacy laws, and all other applicable laws.'
                },
                {
                  key: 'rules',
                  text: 'I understand that any Competition-specific rules I make are subject to and will not supersede Kaggles Foundational Competition Rules for competitions. In the event that this competitions rules conflict with the Foundational Competition rules, the Foundational Competition Rules will supersede.'
                },
                {
                  key: 'relationship',
                  text: 'I understand participants in this competition have a direct relationship between Host and Participant. Kaggle has no liability for any actions or content of a Host or Participant.'
                }
              ].map(({ key, text }) => (
                <label key={key} className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedTerms[key]}
                    onChange={() => handleCheckboxChange(key)}
                    className="mt-1 w-4 h-4"
                  />
                  <span className="text-sm sm:text-base text-gray-700">
                    {text}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 p-4 border-t bg-gray-50 sticky bottom-0">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm sm:text-base w-full sm:w-auto"
            >
              Decline
            </button>
            <button
              onClick={onAccept}
              disabled={!allTermsAccepted}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto"
            >
              I Understand and Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsModal;