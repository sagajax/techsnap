import { useEffect, useRef, useState } from "react";
import coinImage from "./../../assets/coin (3).png";
import { RxCross1 } from "react-icons/rx";

const PointCard = ({ points, isSelected, onClick }) => {
  return (
    <div
      className={`w-full rounded-xl border-2 flex justify-start items-center gap-6 px-10 py-4 cursor-pointer transition-all 
        ${
          isSelected
            ? "border-blue-500 bg-blue-50 text-blue-500"
            : "border-gray-500 text-gray-500"
        } hover:border-blue-400 hover:bg-blue-100`}
      onClick={onClick}
    >
      <img src="/target.png" className="w-10 h-10" />
      <p className="text-lg">{points} Points per Day</p>
    </div>
  );
};

function Points() {
  const [isGoalsVisible, setGoalsVisible] = useState(false);
  const [isPowerVisible, setPowerVisible] = useState(false);
  const [isCoinVisible, setCoinVisible] = useState(false);
  const [isGoalEdit, setGoalEdit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const pointOptions = [100, 250, 350, 500];

  const goalsRef = useRef(null);
  const powerRef = useRef(null);
  const coinRef = useRef(null);

  const toggleGoals = () => setGoalsVisible(!isGoalsVisible);
  const togglePower = () => setPowerVisible(!isPowerVisible);
  const toggleCoin = () => setCoinVisible(!isCoinVisible);

  const handleClickOutside = (event) => {
    if (
      goalsRef.current &&
      !goalsRef.current.contains(event.target) &&
      isGoalsVisible
    ) {
      setGoalsVisible(false);
    }
    if (
      powerRef.current &&
      !powerRef.current.contains(event.target) &&
      isPowerVisible
    ) {
      setPowerVisible(false);
    }
    if (
      coinRef.current &&
      !coinRef.current.contains(event.target) &&
      isCoinVisible
    ) {
      setCoinVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGoalsVisible, isPowerVisible, isCoinVisible]);

  return (
    <>
      <div
        className={`points relative items-center max-[900px]:hidden w-[180px] rounded-xl bg-gray-100 px-3 py-2 mr-4 cursor-pointer ${
          isGoalsVisible ? "blackTheme" : ""
        }`}
        onClick={toggleGoals}
        ref={goalsRef}
      >
        <div className="flex items-center justify-between">
          <p className="flex items-center font-medium text-sm mr-2 text-black dark:text-white ">
            <span className="mr-1">🔥</span> 365
          </p>
          <div className=" w-[1px] bg-gray-500 h-5 "></div>
          <p className="flex items-center font-medium text-sm text-black dark:text-white ">
            <span className="mr-1">🎯</span> 36935
          </p>
        </div>
        {isGoalsVisible && (
          <div>
            <div
              className="goals_DropDown bg-white rounded-md w-[400px] absolute right-[-70%] top-16"
              style={{
                boxShadow:
                  "0 -5px 10px -5px rgba(0, 0, 0, 0.35), 5px 0 10px -5px rgba(0, 0, 0, 0.35), -5px 0 10px -5px rgba(0, 0, 0, 0.35)",
              }}
            >
              <div className="absolute w-5 h-5 bg-inherit top-[-10px] left-[45%] rotate-45 content-['']"></div>

              <div className="title flex justify-between items-center px-4 py-2 border-b">
                <h2 className="text-lg font-semibold">Daily Goals</h2>
                <p
                  onClick={() => setGoalEdit(!isGoalEdit)}
                  className="text-blue-500 hover:text-blue-700 text-base cursor-pointer  "
                >
                  Edit Goals
                </p>
              </div>
              <div className="info_text px-4 py-2 border-b flex items-center justify-between bg-gray-100 text-sm mb-2">
                <p className="text-gray-600">
                  How does streak work , know more about here
                </p>
                <span
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  onClick={() => setGoalsVisible(false)}
                >
                  X
                </span>
              </div>
              <div className="goals_section flex px-4 py-2 text-sm">
                <div className="left_section w-1/2 pr-2 mb-4">
                  <div className="total_streak_day bg-[#ffecee] rounded-md p-2 h-[60%]">
                    <div className="title flex justify-between items-center">
                      <p className="text-gray-600">Total Streak</p>
                      <img
                        src="https://img.icons8.com/color/48/000000/share--v1.png"
                        className="w-3 h-3"
                        alt="Share"
                      />
                    </div>
                    <div className="streak_body flex items-center justify-start p-2">
                      <img
                        src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-fire-blogger-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
                        className="w-8 h-8 mr-2"
                        alt="Fire"
                      />
                      <div className="body_details">
                        <p className="text-lg font-bold">0</p>
                        <span className="text-gray-600">Day Streak</span>
                      </div>
                    </div>
                  </div>
                  <div className="total_streak_freeeze bg-[#ebfcfc] rounded-md mt-3 p-2 h-[40%]">
                    <div className="streak_body flex justify-start items-center ">
                      <img
                        src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-fire-kitchen-kiranshastry-lineal-color-kiranshastry.png"
                        className="w-8 h-8 mr-2"
                        alt="Freeze"
                      />
                      <div className="body_details">
                        <p className="text-lg font-bold">0</p>
                        <span className="text-gray-600">Streak Freeze</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right_section w-1/2 pl-2 mb-3">
                  <div className="right_box bg-[#fff7ea] rounded-md px-2 py-4">
                    <div className="title flex justify-between mb-2 flex-col">
                      <p className="text-gray-600 font-bold mb-2">Daily Goal</p>
                      <div className="time_box bg-[#e9b7bbb6] rounded-full w-[120px] text-center px-2">
                        <span className="text-red-500">11:34:13</span>
                      </div>
                    </div>
                    <div className="streak_body flex items-center mb-2">
                      <div className="body_details">
                        <p className="text-lg font-semibold">10/200</p>
                        <span className="text-gray-600">Points</span>
                      </div>
                    </div>
                    <div className="progress_streak">
                      <div className="progress_bar bg-gray-300 rounded-full h-2">
                        <div
                          className="bar bg-blue-500 h-2 rounded-full"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <button className="bg-[#21dde0] text-black dark:text-white  dark:text-white font-bold py-2 px-4 rounded mt-2 w-full">
                        Achieve Score
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div ref={powerRef} className={`score relative flex items-center `}>
        <div
          onClick={togglePower}
          className={`points flex gap-2 relative items-center  rounded-xl bg-gray-100 px-3 py-2 cursor-pointer`}
        >
          <p className="flex items-center font-medium text-sm mr-1 shock cursor-pointer text-black dark:text-white ">
            <span>⚡</span> 200
          </p>
          <div className=" w-[1px] bg-gray-500 h-5 "></div>
          <img src={coinImage} className="w-[20px] h-[20px] cursor-pointer" />
        </div>
        {isPowerVisible && (
          <div>
            <div
              className="power_dropDown min-w-64 flex  p-4 rounded-lg gap-2 absolute top-16 right-[-48%] w-auto z-50 bg-white text-center justify-center items-center text-base"
              style={{
                boxShadow:
                  "0 -5px 10px -5px rgba(0, 0, 0, 0.35), 5px 0 10px -5px rgba(0, 0, 0, 0.35), -5px 0 10px -5px rgba(0, 0, 0, 0.35)",
              }}
            >
              <div className="absolute w-5 h-5 bg-inherit top-[-10px] left-[50%] rotate-45 content-['']"></div>

              <div className=" min-w-[400px]  font-bold  grid grid-flow-row  grid-cols-3 justify-center items-star gap-2">
                <div className="flex flex-col w-full row-span-1 col-span-2  h-full justify-start items-start font-light p-2 gap-4 bg-red-100 rounded-xl duration-300">
                  <div className="title w-full text-lg px-4 flex justify-between items-center text-gray-800 ">
                    Experience
                  </div>
                  <div className="w-full flex  items-center justify-start gap-4 px-4">
                    <img src="/experience.png" className=" w-14 h-14" />
                    <div className="flex w-full flex-col items-center justify-center gap-4">
                      <div className="flex  w-full  h-full justify-between items-start font-light">
                        <p className=" text-gray-500">Highest xp</p>
                        <p className="font-bold text-xl">200</p>
                      </div>
                      <div className="flex  w-full  h-full justify-between items-start font-light">
                        <p className="text-gray-500">Current xp</p>
                        <p className="font-bold text-xl">10</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full  h-full justify-center items-center gap-4 font-light p-2 bg-indigo-100 rounded-xl">
                  <p className="  w-full text-right  text-gray-500">Rank </p>
                  <div className="w-full flex  items-center justify-start gap-4 ">
                    <p className="text-[#333] font-bold text-left text-xl">
                      25
                    </p>
                    <img src="/rank.png" className=" w-14 h-14" />
                  </div>
                </div>
                <div className="flex flex-col w-full  h-full justify-start items-start font-light p-2 bg-emerald-100 rounded-xl">
                  <p className=" text-gray-500">Coins </p>
                  <div className="w-full flex  items-center justify-start gap-4">
                    <p className="font-bold text-left text-xl">999</p>
                    <img src="/coin.png" className=" w-14 h-14" />
                  </div>
                </div>

                <div className="flex  w-full col-span-2  h-full justify-start items-center font-light p-2 px-4 gap-4 bg-amber-100 rounded-xl">
                  <img src="/level.png" className=" w-14 h-14" />
                  <div className="flex w-full flex-col items-center justify-center gap-4">
                    <div className="flex  w-full  h-full justify-between items-start font-light">
                      <p className=" text-[#333]">Levels</p>
                      <p className="font-bold text-xl">200</p>
                    </div>
                    <div className="flex  w-full  h-full justify-between items-start font-light">
                      <p className=" text-[#333]">Max Level</p>
                      <p className="font-bold text-xl">10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isGoalEdit && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[100] flex justify-center items-center">
          <div className="bg-white p-4 w-1/2 h-full absolute top-0 right-0 flex flex-col justify-start items-start py-20 gap-10 px-10">
            <div className="flex flex-col justify-start w-full items-center gap-4">
              <div className="flex justify-between w-full items-center">
                <h1 className=" text-2xl font-semibold">Edit Your Goal</h1>
                <RxCross1 size={24} onClick={() => setGoalEdit(false)} />
              </div>
              <p className="text-gray-600 text-md font-thin">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                eius repudiandae est labore rem commodi quis numquam ullam,
                suscipit doloribus facilis ipsum consectetur.
              </p>
            </div>
            <div className="flex flex-col justify-start w-full items-center gap-4">
              {pointOptions.map((points, index) => (
                <PointCard
                  key={index}
                  points={points}
                  isSelected={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
            <div className="flex justify-start w-full items-center gap-4">
              <p className="text-gray-800 font-semibold">Back</p>
              <p className="text-yellow-400 font-semibold">Update goal</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Points;
