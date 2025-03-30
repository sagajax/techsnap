import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import TermsModel from './TermsModel';


const CompetitionDetailsPanel = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    visibility: 'public',
    whoCanJoin: 'anyone',
    enableNotebooks: true,
    enablePrizes: false,
    prizePool: ''
  });

  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTerms(true); // Show terms modal instead of submitting directly
  };

  const handleTermsAccept = () => {
    // Handle the actual form submission after terms are accepted
    console.log('Form submitted with accepted terms:', formData);
    setShowTerms(false);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:w-[600px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          <div className="border-b mt-[75px] flex justify-start items-center p-4 gap-4">
            <button onClick={onClose} className="p-2  hover:bg-gray-100 rounded-full">
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold">New Competition</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    NEW TITLE <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter a descriptive title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={50}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.title.length}/50
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    COMPETITION URL <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">kaggle.com/competitions/</span>
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Edit"
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SUBTITLE <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    placeholder="Enter a subtitle explaining what competitors will do."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    maxLength={140}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.subtitle.length}/140
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Privacy, Access & Resources</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      VISIBILITY
                    </label>
                    <select
                      name="visibility"
                      value={formData.visibility}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                    <p className="text-sm text-gray-500 mt-1">
                      Competition will be visible on Kaggle.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WHO CAN JOIN
                    </label>
                    <select
                      name="whoCanJoin"
                      value={formData.whoCanJoin}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="anyone">Anyone</option>
                      <option value="invited">Invited Only</option>
                    </select>
                    <p className="text-sm text-gray-500 mt-1">
                      Anyone will be able to join via Kaggle or the competition URL.
                    </p>
                  </div>

                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="enableNotebooks"
                        className="sr-only peer"
                        checked={formData.enableNotebooks}
                        onChange={(e) => handleChange({
                          target: {
                            name: 'enableNotebooks',
                            value: e.target.checked
                          }
                        })}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-700">Enable Notebooks and Models</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-1 ml-14">
                      Notebooks allow participants to work directly on Kaggle with your dataset. Turn off notebooks if you desire higher levels of privacy. 
                      <Link to="/learn-more" className="text-blue-500 hover:text-blue-600 ml-1">Learn more</Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Prizes Section */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">Prizes</h3>
                <p className="text-gray-600 mb-4">
                  You can award up to $10,000 USD. 
                  <Link to="/learn-more" className="text-blue-500 hover:text-blue-600 ml-1">Learn more</Link>
                </p>
                
                <label className="relative inline-flex items-center cursor-pointer mb-4">
                  <input
                    type="checkbox"
                    name="enablePrizes"
                    className="sr-only peer"
                    checked={formData.enablePrizes}
                    onChange={(e) => handleChange({
                      target: {
                        name: 'enablePrizes',
                        value: e.target.checked
                      }
                    })}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-700">Competition will award prizes</span>
                </label>

                {formData.enablePrizes && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      TOTAL PRIZE POOL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="prizePool"
                      value={formData.prizePool}
                      onChange={(e) => {
                        const value = Math.min(Number(e.target.value), 10000);
                        handleChange({
                          target: {
                            name: 'prizePool',
                            value: value
                          }
                        });
                      }}
                      placeholder="Enter amount"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500">
                      Cannot exceed $10,000 USD.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t p-4 bg-gray-50 mt-auto">
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                  disabled={!formData.title || !formData.subtitle}
                >
                  Create Competition
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Terms Modal */}
      <TermsModel
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        onAccept={handleTermsAccept}
      />
    </>
  );
};

export default CompetitionDetailsPanel;