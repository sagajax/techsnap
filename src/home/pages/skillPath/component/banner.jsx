import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../../components/ui/bento-grid";
import { AuroraText } from "../../../../components/ui/aurora-text";
import { FaSmile } from "react-icons/fa";

export function Banner() {
  return (
    <BentoGrid className=" md:max-w-[1100px] h-[432px] mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          content={item.content}
          className={cn("[&>p:text-lg] ", item.className)}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ children }) => (
  <div className="flex flex-1 w-full h-full min-h-32 rounded-xl bg-[#f3f5fb]">
    {children}
  </div>
);
const items = [
  {
    content: (
      <div className="flex flex-col gap-4 items-center relative justify-center  w-full rounded-xl  overflow-hidden">
        <div className="text-xl font-semibold text-white">Agent Engine</div>
        <div className="bg-[#9c90dd] text-[#a8a7de] text-sm font-semibold p-1 px-3 rounded-full ">
          Describe a character .... |
        </div>
        <svg
          width="356"
          height="428"
          viewBox="-12 -12 356 428"
          fill="none"
          className="w-full absolute z-[-1]"
        >
          <g
            opacity="0.5"
            filter="url(#svg325637223_1381_filter0_f_4066_17948)"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M294.105 170.778C301.044 213.725 306.744 257.653 291.066 294.807C273.94 335.39 245.523 372.925 207.2 376.727C170.288 380.388 140.256 340.829 109.016 312.865C79.4328 286.383 44.7694 263.488 33.8679 221.571C22.3649 177.34 32.6438 131.191 52.2289 94.5105C71.752 57.9465 102.795 34.2328 138.624 25.3776C176.092 16.1172 218.73 15.4693 250.776 45.4383C281.817 74.4659 286.74 125.191 294.105 170.778Z"
              fill="url(#svg325637223_1381_paint0_radial_4066_17948)"
            />
          </g>
          <defs>
            <filter
              id="svg325637223_1381_filter0_f_4066_17948"
              x="-50.3619"
              y="-59.6627"
              width="430.868"
              height="516.039"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="39.7063"
                result="effect1_foregroundBlur_4066_17948"
              />
            </filter>
            <radialGradient
              id="svg325637223_1381_paint0_radial_4066_17948"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(236.669 295.795) rotate(-111.343) scale(289.122 237.041)"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.499897" stop-color="#506AFF" />
              <stop offset="1" stop-color="#0040FF" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    ),
    className: "col-span-2 ",
  },
  {
    content: (
      <Skeleton>
        <div className="text-xl font-bold p-4 flex flex-col justify-center text-center">
          <div className="text-blue-500">Realtime</div>
          streaming support
        </div>
      </Skeleton>
    ),
  },
  {
    content: (
      <Skeleton>
        <div className="text-base font-bold p-4 flex flex-col items-center justify-center leading-5 text-center">
          <img
            src="https://framerusercontent.com/images/XojhdcsRYHug9deT48gTwB3YYck.png"
            alt="icon"
            className="w-16 h-auto"
          />
          Import custom 3D models
        </div>
      </Skeleton>
    ),
  },
  {
    content: (
      <Skeleton>
        <div className="text-base font-bold p-4 flex flex-col items-center justify-center leading-5 text-center">
          <img
            src="https://framerusercontent.com/images/Zfg0V5XjkE0YDsXR2tqvCVd3xn4.png"
            alt="icon"
            className="w-[40%] h-auto"
          />
          <div className="w-[50%]"> Proprietary Motion Capture Dataset</div>
        </div>
      </Skeleton>
    ),

    className: "col-span-2 ",
  },
  {
    content: (
      <Skeleton>
        <div className="text-lg font-bold p-4 rounded-xl relative w-full overflow-hidden flex flex-col items-start justify-between leading-5 ">
          <img
            src="https://framerusercontent.com/images/Cq3Nnlh5MRhFdsRYgX9qAbwqs.png"
            alt="icon"
            className="w-auto absolute h-auto -top-[20%] -right-10 z-[0]"
          />
          <div className="text-xl font-bold p-4 flex text-black gap-2 justify-center text-center">
            Character
            <div className="text-blue-500">Editor</div>
          </div>
          <img
            src="https://framerusercontent.com/images/dnA1pgYmQsp0yqbUTfGWNXI8g.png"
            alt="icon"
            className="w-full self-end h-auto bottom-4  z-[1]"
          />
        </div>
      </Skeleton>
    ),

    className: "row-span-2 col-span-2 ",
  },
  {
    content: (
      <Skeleton>
        <div className="text-lg font-bold p-4 rounded-xl relative w-full overflow-hidden flex flex-col items-center leading-5 ">
          <img
            src="https://framerusercontent.com/images/2LPeyRebCWUmieuC6x5IypBQUk.png"
            alt="icon"
            className="w-full scale-[1.5] absolute h-auto -top-10 z-[0]"
          />
          <div className="text-4xl font-bold mt-auto mb-2 flex flex-col items-center text-white justify-center z-[1] text-center">
            <p className="flex gap-2">
              Animation <p className="italic">Inc.</p>
            </p>
            <div className="text-sm">Animation Character Engine</div>
          </div>
        </div>
      </Skeleton>
    ),

    className: "row-span-2 col-span-2 ",
  },
  {
    content: (
      <Skeleton>
        <div className="text-lg font-bold p-4 rounded-xl relative w-full overflow-hidden flex flex-col items-center justify-center leading-5 ">
          <img
            src="https://framerusercontent.com/images/SMNpxo0pIEsCCDXufUksARtE.png"
            alt="icon"
            className="w-[300%] absolute h-auto top-6 scale-[1.2] z-[0]"
          />
          <div className="text-xl font-bold  flex flex-col items-center text-white justify-center z-[1] text-center">
            Customizable AI Behavior interactions
          </div>
        </div>
      </Skeleton>
    ),

    className: " col-span-2 ",
  },
  {
    content: (
      <Skeleton>
        <div className="flex ">
          <div className="text-xl w-1/2 font-bold p-4 flex flex-col justify-center text-left">
            <div className="text-blue-500">On-device</div>
            text-to-speech Engine
          </div>
          <img
            src="https://framerusercontent.com/images/4HRJ1bgniRnNbZb42rSoCMCNO7s.png"
            alt="icon"
            className="w-1/2 my-auto scale-[.8] h-1/2 aspect-auto "
          />
        </div>
      </Skeleton>
    ),

    className: " col-span-2 ",
  },
  // {
  //   content: (
  //     <Skeleton>
  //       <div className="flex items-center px-8 text-xl font-bold justify-start w-full h-full overflow-hidden relative">
  //         <div className="w-[60%]">
            
  //           Model Adapters for custom <p className="text-blue-400">character rigs</p>
  //         </div>
  //         <div className="absolute flex right-0 h-full w-auto">
  //           <img
  //             src="https://framerusercontent.com/images/iwg2WdyRQ7FPTDHl66Zt5qkB0qk.png"
  //             alt="icon"
  //             className=""
  //           />
  //           <img
  //             src="https://framerusercontent.com/images/3YthM98JkQJONcKCmob4c5I.png"
  //             alt="icon"
  //             className=""
  //           />
  //         </div>
  //       </div>
  //     </Skeleton>
  //   ),

  //   className: "col-span-2 ",
  // },
  // {
  //   content: (
  //     <Skeleton>
  //       <div className="w-full text-center text-xl p-4 font-bold flex flex-col justify-center items-center">
  //         On-Device
  //         <AuroraText>Animation Model</AuroraText>
  //       </div>
  //     </Skeleton>
  //   ),
  // },
  // {
  //   content: (
  //     <Skeleton>
  //       <div className="flex flex-col items-center relative justify-center overflow-hidden rounded-xl">
  //         <div className="text-gray-400">Happiness</div>
  //         <img
  //           src="https://framerusercontent.com/images/3LlMobMCJALLEcmUCmKanOxOyvk.png"
  //           alt="icon"
  //           className="w-[80%] z-[1] h-auto"
  //         />
  //         <div className="text-gray-400">Angry</div>
  //         <div className="z-[0] absolute  text-center h-full backdrop-blur-[.9px] text-2xl font-bold flex items-center">
  //           Emotion Detection
  //         </div>
  //       </div>
  //     </Skeleton>
  //   ),
  // },
  // {
  //   content: (
  //     <Skeleton>
  //       <div className="flex items-center px-8 text-xl font-bold justify-start w-full h-full overflow-hidden relative">
  //         <div className="w-[20%]">
  //           <FaSmile className="text-green-400" />
  //           Facial Expressions
  //         </div>
  //         <img
  //           src="https://framerusercontent.com/images/NWciWexAO9omIZ1WNRZZ3KGVkmg.png"
  //           alt="icon"
  //           className=" w-[80%] -right-8 absolute"
  //         />
  //       </div>
  //     </Skeleton>
  //   ),

  //   className: "col-span-2 ",
  // },
];
