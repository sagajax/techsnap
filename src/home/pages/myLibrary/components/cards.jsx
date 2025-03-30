export const EmptyState = ({ Icon, message, isButton =true }) => (
    <div className="flex border-dashed border-2 items-center border-gray-200 p-8 rounded-lg gap-6 justify-start">
      <Icon className="text-black " size={30} />
      <div>
        <p className="text-gray-600 text-sm text-center mb-2">{message}</p>
        {isButton && <button className="px-4 py-2 bg-green-400 text-black  text-xs rounded-md hover:bg-green-600 transition-colors font-inter">
          Browse Courses
        </button>}
      </div>
    </div>
  );