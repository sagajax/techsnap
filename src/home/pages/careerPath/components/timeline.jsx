import React, { useEffect, useRef } from "react";
import "../timeline2.css";
import Card from "./cardDetails";
import { FaHtml5 } from "react-icons/fa";
import { useTimelineStore } from "../utils/store";

const Icon = ({ name, size = 24, className = "" }) => {
  const IconComponent = name;
  return <IconComponent size={size} className={className} />;
};

const TimelineSection = ({ data, isActive }) => {
  const lineRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      lineRef.current?.classList.add('bg-gray-700');
      lineRef.current?.classList.remove('bg-gray-200');
      circleRef.current?.classList.add('bg-gray-700');
      circleRef.current?.classList.remove('bg-gray-200');
    } else {
      lineRef.current?.classList.remove('bg-gray-700');
      lineRef.current?.classList.add('bg-gray-200');
      circleRef.current?.classList.remove('bg-gray-700');
      circleRef.current?.classList.add('bg-gray-200');
    }
  }, [isActive]);

  return (
    <div className="flex gap-4 justify-center group">
      <div className="flex flex-col items-center">
        <div 
          ref={circleRef}
          className="w-auto h-auto rounded-full p-2 bg-gray-200 transition-all duration-700"
        >
          <Icon 
            name={FaHtml5}  
            className={`transition-colors duration-700 ${
              isActive ? 'text-white' : 'text-gray-700'
            }`}
          />
        </div>
        <div 
          ref={lineRef} 
          className="w-1 h-full bg-gray-200 transition-all duration-700 ease-in-out"
        />
      </div>
      <Card data={data} />
    </div>
  );
};

const Timeline = () => {
  const { journeyData, activeSections, updateActiveSections } = useTimelineStore();
  const sectionRefs = useRef([]);
  const observerRef = useRef(null);

  
  useEffect(() => {
    if (journeyData) {
      updateActiveSections(Array(journeyData.length).fill(false));
    }
  }, [journeyData, updateActiveSections]);

  useEffect(() => {
    if (!journeyData) return;

    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const updatedActiveSections = [...activeSections];

        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) {
            updatedActiveSections[index] = entry.isIntersecting || entry.boundingClientRect.top < 0;
          }
        });

        updateActiveSections(updatedActiveSections);
      },
      {
        root: null,
        threshold: .85,
        rootMargin: '-50px 0px -50px 0px',
      }
    );

   
    sectionRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [journeyData, activeSections, updateActiveSections]);

  if (!journeyData || !journeyData.length) return null;

  return (
    <div className="px-8">
      {journeyData.map((journey, index) => (
        <div
          ref={(el) => (sectionRefs.current[index] = el)}
          key={index}
        >
          <TimelineSection
            data={journey}
            isActive={activeSections[index]}
          />
        </div>
      ))}
    </div>
  );
};


export default Timeline;
