import React, { useEffect } from "react";


import Banner from "./components/careerDetailBanner";
import { useParams } from "react-router-dom";
import careerPaths from "./data/pathDetails.json";
import Timeline from "./components/timeline";

import { useTimelineStore } from "./utils/store";

function CareerDetails() {
  const { careerId } = useParams();
  const { journeyData , setJourneyData } = useTimelineStore();

  const career = careerPaths.find((path) => path.id.replace(/\s+/g, '') === careerId);

  if (!career) {
    return <div className="text-center text-red-500">Career not found.</div>;
  }

  useEffect(() => {
    setJourneyData(career.journey);
  }, [career]);

  const CareerCard = () => {
    return (
      <div className="bg-white mx-auto max-w-[1500px] dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 p-6 shadow-md">
        <div className="text-gray-600 dark:text-gray-400">
          Skill path | Human generated
        </div>
        <div className="text-2xl font-bold mt-4 mb-4">Git & Github</div>
        <div className="text-sm">
          You will investigate a dataset from a fictitious company called
          Databel in Power BI, and need to figure out why...
        </div>
        <div className="flex gap-4 mt-4">
          <div className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg">
            View Skill Path
          </div>
          <div className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Enroll Now
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="final md:pt-4">
      <Banner
        data={career}
        showHeader={true}
        showFooter={true} />
        
      <div className="m-2 md:m-0 py-10 text-left">
          <h2 className="text-3xl font-bold mb-2">Start Your Journey</h2>
        </div>
        <Timeline />
      <div className="final mt-2">
        <div
          className="
        text-black dark:text-white
        text-2xl font-bold my-4 w-full pl-4 md:w-full  m-auto"
        >
          Also Must to Know About
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-11/12 final m-auto">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
    </div>
  );
}

export default CareerDetails;
