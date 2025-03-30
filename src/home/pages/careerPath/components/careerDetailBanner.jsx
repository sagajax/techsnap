import { RiLightbulbFlashLine, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { cn } from "../../../../lib/utils";
import Marquee from "react-fast-marquee";
import AnimatedGridPattern from "../../../../components/ui/animated-grid-pattern";
import { FaClock, FaDumbbell } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { ImDownload } from "react-icons/im";
import { GoPeople } from "react-icons/go";

export const  mnc = [
  {
    name: "Google",
    icon: "https://d3kl8zsmmx4oop.cloudfront.net/Google_c2d8e527c7.svg",
  },
  {
    name: "Swiggy",
    icon: "https://d3kl8zsmmx4oop.cloudfront.net/layer1_001742dcec.svg",
  },
  {
    name: "Zoho",
    icon: "https://d3kl8zsmmx4oop.cloudfront.net/Vector_8abe02abf9.svg",
  },
  {
    name: "Philips",
    icon: "https://d3kl8zsmmx4oop.cloudfront.net/Philips_8bcd20d6c4.svg",
  },
  {
    name: "Microsoft",
    icon: "https://d3kl8zsmmx4oop.cloudfront.net/Google_1_eb75fe0681.svg",
  },
  {
    name: "Zomato",
    icon: "https://d3kl8zsmmx4oop.cloudfront.net/Mask_group_3_da9617f594.png",
  },
  {
    name: "Paytm",
    icon: "https://d3kl8zsmmx4oop.cloudfront.net/Mask_group_4_f997505a34.png",
  },
];



function Banner({ data, showHeader = false, showFooter = false }) {
  return (
    <div className="m-2 md:m-0 flex-col relative flex border overflow-hidden md:shadow-xl text-left bg-[#101523] shadow-xl p-6 md:p-10 rounded-lg text-white">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      
      <div className="flex flex-col md:flex-row gap-8 1300:gap-16 flex-wrap relative z-10">
        <div className="flex-1 min-w-[50%]">
          {showHeader && (
            <div className="flex items-center flex-wrap mb-6 gap-3">
              <span className="text-gray-300">Career Path</span>
              <span className="text-gray-300">|</span>
              <h4 className="bg-[#ffc700] rounded-full px-4 py-1.5 shadow-sm text-sm text-black font-medium">
                Human Generated
              </h4>
              <h4 className="bg-[#0000fd] rounded-full px-4 py-1.5 text-white shadow-sm text-sm font-medium">
                Certification Available
              </h4>
            </div>
          )}

          <h1 className="text-3xl md:text-5xl font-bold mb-6">{data.title}</h1>

          <p className="text-gray-200 text-justify 1200:max-w-[90%] line-clamp-4 text-ellipsis md:line-clamp-none text-sm md:text-lg mb-6">
            {data.description}
          </p>

          {showFooter && (
            <div className="space-y-6">
              <div className="flex flex-wrap text-sm text-gray-200 gap-2 md:gap-6">
                <p className="flex items-center">
                  <FaClock className="mr-2" />
                  <span className="font-medium">{data.totalHours}</span> Hours
                </p>
                <p className="flex items-center">
                  <RiLightbulbFlashLine className="mr-2" />
                  <span className="font-medium">{data.totalVideos}</span> Videos
                </p>
                <p className="flex items-center">
                  <GiBullseye className="mr-2" />
                  <span className="font-medium">{data.totalExercises}</span> Assessments
                </p>
                <p className="flex items-center">
                  <ImDownload className="mr-2" />
                  <span className="font-medium">6</span> Projects
                </p>
                <p className="flex items-center">
                  <GoPeople className="mr-2" />
                  <span className="font-medium">912,484</span> Participants
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="bg-[#0000fd] hover:bg-[#0000dd] transition-colors rounded-md px-2 md:px-6 py-2.5 shadow-sm text-sm font-medium">
                  Enroll Now
                </button>
                <button className="bg-[#2d3855] hover:bg-[#3d4865] transition-colors rounded-md px-6 py-2.5 text-sm font-medium">
                  View Curated Course
                </button>
                <button className="bg-[#2d3855] hover:bg-[#3d4865] transition-colors rounded-md px-6 py-2.5 text-sm font-medium">
                  Know in Detail
                </button>
              </div>
            </div>
          )}
        </div>

        
        <div className=" md:grid lg:grid-cols-2 hidden 1200:flex 1200:flex-col flex-row w-full 1200:w-auto gap-4">
          
          <div className="rounded-lg text-[#101523] p-5 flex items-center justify-between w- group bg-white transition-all hover:shadow-lg">
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{data.salaryRange}</span>
              <span className="text-sm text-gray-600">Average Annual Salary</span>
            </div>
            <RiMoneyRupeeCircleFill className="w-12 h-12 text-[#eae9e2] group-hover:text-[#36ca7c] transition-colors" />
          </div>

        
          <div className="rounded-lg group relative text-[#101523] p-5 flex items-center bg-white transition-all hover:shadow-lg h-[100px]">
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Live QnA Sessions</span>
              <span className="text-sm text-gray-600">TALK WITH INDUSTRY EXPERTS</span>
            </div>
            <img
              alt="icon"
              className="group-hover:hidden absolute bottom-0 right-0 rounded-lg w-14 h-16"
              src="https://www.growthschool.io/images/course-diff/screen.svg"
            />
            <img
              alt="icon"
              className="hidden group-hover:block absolute bottom-0 rounded-lg  right-0 w-14 h-16"
              src="https://www.growthschool.io/images/course-diff/screen-hover.svg"
            />
          </div>

          <div className="rounded-lg w-full col-span-2 bg-white p-5  1200:max-w-[380px]  transition-all hover:shadow-lg">
            <div className="flex flex-col gap-3 overflow-hidden">
            <Marquee pauseOnHover={true} direction="right" speed={30}>
                
                  {mnc.map((m) => (
                    <img
                      key={m.name}
                      src={m.icon}
                      alt={m.name}
                      className="h-8 w-auto mr-10 object-contain"
                    />
                  ))}
                
              </Marquee>

              <Marquee pauseOnHover={true} direction="left" speed={30}>
                
                  {mnc.map((m) => (
                    <img
                      key={m.name}
                      src={m.icon}
                      alt={m.name}
                      className="h-8 w-auto mr-10 object-contain"
                    />
                  ))}
               
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 


export default Banner;
