export const Card = ({key, data, onClick }) => {

    return (
      <div className="bg-white dark:bg-gray-800 pb-4 border shadow-md rounded-lg flex flex-col overflow-hidden w-full">
        {/* Banner */}
        <div className="h-[150px] max-[900px]:mb-4">
          <img
            src={data.bannerImage}
            alt="card"
            className="h-full w-full object-cover"
          />
        </div>
  
        {/* Students and Duration */}
        <div className="flex justify-between text-gray-600 text-sm px-4 my-2">
          <div>{data.students}</div>
          <div>{data.duration}</div>
        </div>
  
        {/* Title */}
        <div className="px-4 pb-2">
          <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
            {data.title}
          </p>
        </div>
  
        {/* Author */}
        <div className="flex gap-2 items-center px-4 py-2">
          <img
            src={data.author.avatar}
            alt="Author Avatar"
            className="rounded-full h-10 w-10"
          />
          <div className="text-sm">
            <div>{data.author.name}</div>
          </div>
        </div>
  
        {/* Tags */}
        <div className="px-4 text-sm pt-1">
          <div className="flex items-center space-x-2">
            {data.tags.map((tag, index) => (
              <div
                key={index}
                className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
  
        {/* Button */}
        <button className="w-[90%] mx-auto bg-white dark:bg-gray-700 text-black dark:text-gray-200 h-9 border border-black dark:border-gray-500 font-semibold rounded-md mt-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition" onClick={onClick}>
          Get Started
        </button>
      </div>
    );
  };