
function Third({ emailFields, setEmailFields, onNext, onBack }) {
  const handleAddEmail = () => {
    setEmailFields([...emailFields, { email: '', role: 'Member' }]);
  };

  const handleEmailChange = (index, value) => {
    const newFields = [...emailFields];
    newFields[index].email = value;
    setEmailFields(newFields);
  };

  const handleDeleteEmail = (index) => {
    const newFields = emailFields.filter((_, i) => i !== index);
    setEmailFields(newFields);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-2/3 w-full flex flex-col px-8 lg:px-24 py-8">
        <div className="overflow-y-auto">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-8">
            Invite your team members
          </h1>

          <div className="space-y-4">
            {emailFields.map((field, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="email"
                  value={field.email}
                  onChange={(e) => handleEmailChange(index, e.target.value)}
                  placeholder="Enter email address"
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={() => handleDeleteEmail(index)}
                  className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleAddEmail}
            className="mt-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add another member
          </button>
        </div>
      </div>
    </div>
  );
}

export default Third;
