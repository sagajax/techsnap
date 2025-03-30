import { ArcherContainer, ArcherElement } from "react-archer";
import { AnimatedBeamMultipleOutput } from "./animatedBeam";
import { useBeamStore } from '../utils/store';
import { useEffect, useState } from 'react';

function Roadmap({ data }) {
  const units = data;
  const { expandedCards } = useBeamStore();
  const [key, setKey] = useState(0); 

  
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [expandedCards]);

  const getPosition = (index) => {
    return index % 2;
  };

  const getCardPositionClasses = (position) => {
    if (position === 1) return "justify-end";
    return "justify-start";
  };

  const getDynamicPadding = (index) => {
    const isExpanded = expandedCards[`card-${index}`];
    const position = getPosition(index);
  
    if (isExpanded) {
      if (position === 0) {
        return "lg:pr-auto  pl-0"; 
      } else {
        return "lg:pl-auto  pr-0"; 
      }
    }
  
    return "md:px-24 1300:px-32 txl:px-36 1500:px-40"; 
  };
  

  const getArcherRelations = (index, currentPosition) => {
    if (index === units.length - 1) return [];

    const isCurrentExpanded = expandedCards[`card-${index}`];
    const isNextExpanded = expandedCards[`card-${index + 1}`];

    let sourceAnchor = 'top';
    let targetAnchor = 'bottom';

    if (isCurrentExpanded) {
      sourceAnchor = 'bottom';
    }
    if (isNextExpanded) {
      targetAnchor = 'top';
    }

    return [{
      targetId: `element${index + 1}`,
      targetAnchor,
      sourceAnchor,
      style: {
        strokeDasharray: '8 8',
        strokeWidth: 2,
        stroke: 'rgba(0, 0, 0, 0.2)'
      }
    }];
  };

  return (
    <div className="container mx-auto ">
      <ArcherContainer 
        key={key} 
        strokeColor="rgba(0, 0, 0, 0.2)" 
        endMarker={false}
      > 
        <div className="flex flex-col gap-24 ">
          {units.map((unit, index) => {
            const currentPosition = getPosition(index);
            const relations = getArcherRelations(index, currentPosition);
            const padding = getDynamicPadding(index);
            
            return (
              <div
                key={index}
                className={`flex w-full transition-all duration-500 ${getCardPositionClasses(
                  currentPosition
                )} ${padding}`}
              >
                <div className={`relative ${currentPosition === 0 ? "mr-10" : "ml-10"}`}>
                  <AnimatedBeamMultipleOutput 
                    data={unit} 
                    index={index}
                    relations={relations}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </ArcherContainer>
    </div>
  );
}

export default Roadmap;