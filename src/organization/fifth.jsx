function Fifth() {
    return (
      <div className="py-8 flex flex-col items-center">
        {/* Success Icon */}
        <div className="mb-8 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
  
        {/* Heading Section */}
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
          Thank you for your request!
        </h1>
  
        <div className="text-gray-600 text-center max-w-lg mb-8">
          We have received your request for creation of organization. Our sales team will reach out to you soon to help you get started.
        </div>
  
        <div className="text-sm text-gray-500 text-center mb-6">
          Meanwhile, check your email for further instructions
        </div>
  
        <a 
          href="/dashboard/profile" 
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Go to Dashboard
        </a>
      </div>
    );
  }
  
  export default Fifth;
  