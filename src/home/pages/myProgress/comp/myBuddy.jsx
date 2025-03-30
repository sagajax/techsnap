import enrollImage from "../../../assets/enrolled.svg";
function MyBuddy() {
  return (
    <div className="  w-full h-full self-stretch">
      <div className="flex flex-col h-full self-stretch  gap-4 mt-2 ">
        <div className="rounded-lg mb-2 flex flex-col h-full">
          <div className="mb-4 flex  justify-between w-full mx-auto">
            <h1 className="text-sm font-bold dark:text-white">Your buddy</h1>
            <p className="text-gray-600 text-xs dark:text-white">Need help?</p>
          </div>
          <div className="w-full max-w-[200px] h-full flex justify-start items-start flex-grow">
            <div className="flex flex-col gap-[18px] justify-between text-black h-full flex-grow">
              <div className="flex flex-col h-full justify-between bg-gray-100 shadow-xl dark:border-white rounded-lg p-4  flex-grow">
                <h2 className="flex items-center mb-2 text-[#7933ff] dark:text-white text-base font-semibold">
                  <span>
                    <img
                      src={enrollImage}
                      alt="enroll"
                      className="h-4 w-4 mr-2"
                    />
                  </span>
                  Enrolled
                </h2>
                <h1 className="text-[12px] dark:text-white">Courses : 4</h1>
                <h1 className="text-[12px] dark:text-white">CareerPaths : 2</h1>
                <h1 className="text-[12px] dark:text-white">Projects : 5</h1>
                <h1 className="text-[12px] dark:text-white">Skill Paths : 5</h1>
              </div>
              <div className="flex flex-col justify-between h-full bg-gray-100 shadow-xl dark:border-white rounded-lg p-4 flex-grow">
                <h2 className="flex items-center mb-2 text-[#7933ff] dark:text-white text-base font-semibold">
                  <span>
                    <img
                      src={enrollImage}
                      alt="enroll"
                      className="h-4 w-4 mr-2"
                    />
                  </span>
                  Enrolled
                </h2>
                <h1 className="text-[12px] dark:text-white">Courses : 4</h1>
                <h1 className="text-[12px] dark:text-white">CareerPaths : 2</h1>
                <h1 className="text-[12px] dark:text-white">Projects : 5</h1>
                <h1 className="text-[12px] dark:text-white">Skill Paths : 5</h1>
              </div>
              <div className="flex flex-col justify-between h-full bg-gray-100 shadow-xl dark:border-white rounded-lg p-4 flex-grow">
                <h2 className="flex items-center mb-2 text-[#7933ff] dark:text-white text-base font-semibold">
                  <span>
                    <img
                      src={enrollImage}
                      alt="enroll"
                      className="h-4 w-4 mr-2"
                    />
                  </span>
                  Enrolled
                </h2>
                <h1 className="text-[12px] dark:text-white ">Courses : 4</h1>
                <h1 className="text-[12px] dark:text-white ">
                  CareerPaths : 2
                </h1>
                <h1 className="text-[12px] dark:text-white ">Projects : 5</h1>
                <h1 className="text-[12px] dark:text-white ">
                  Skill Paths : 5
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBuddy;
