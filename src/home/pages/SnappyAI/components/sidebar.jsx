import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { RiChatAiLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaFolderTree, FaRegFolder } from "react-icons/fa6";
import { CiFolderOn } from "react-icons/ci";
 import "../sideBar.css"

  

export const recents = [
  {
    id: 1,
    title: "React Router Setup",
    time: "2:30 PM",
    aiResponses: ["I'll help you set up React Router."],
    humanQuestions: ["How do I implement React Router?"],
  },
  {
    id: 2,
    title: "State Management",
    time: "1:45 PM", 
    aiResponses: ["Redux and Context API are popular choices."],
    humanQuestions: ["What's the best state management?"],
  },
  {
    id: 3,
    title: "API Integration",
    time: "11:20 AM",
    aiResponses: ["You can use fetch or axios for API calls."],
    humanQuestions: ["How do I fetch data?"],
  },
  {
    id: 4,
    title: "Component Lifecycle",
    time: "10:15 AM",
    aiResponses: ["Let's go through React lifecycle methods."],
    humanQuestions: ["Explain component lifecycle"],
  },
  {
    id: 5,
    title: "React Hooks Guide",
    time: "9:30 AM",
    aiResponses: ["Here's how hooks work in React."],
    humanQuestions: ["How do I use hooks?"],
  },
  // Adding more items with incremental IDs and varied content
  {
    id: 6,
    title: "CSS Styling",
    time: "8:45 AM",
    aiResponses: ["CSS-in-JS is one approach."],
    humanQuestions: ["Best practices for styling?"],
  },
  // ... continuing pattern for remaining items
  {
    id: 7,
    title: "Performance Tips",
    time: "Yesterday",
    aiResponses: ["Let's optimize your React app."],
    humanQuestions: ["How to improve performance?"],
  },
  {
    id: 8,
    title: "Testing React Apps",
    time: "Yesterday",
    aiResponses: ["Jest and React Testing Library are recommended."],
    humanQuestions: ["How to write tests?"],
  },
  {
    id: 9,
    title: "Redux Setup",
    time: "Yesterday",
    aiResponses: ["Here's a Redux implementation guide."],
    humanQuestions: ["How to set up Redux?"],
  },
  {
    id: 10,
    title: "Form Validation",
    time: "2 days ago",
    aiResponses: ["You can use Formik or React Hook Form."],
    humanQuestions: ["Best form handling practices?"],
  },
  // Continue pattern...
  {
    id: 11,
    title: "Authentication",
    time: "2 days ago",
    aiResponses: ["JWT is commonly used for auth."],
    humanQuestions: ["How to implement auth?"],
  },
  {
    id: 12,
    title: "Error Boundaries",
    time: "3 days ago",
    aiResponses: ["Error boundaries help catch errors."],
    humanQuestions: ["How to handle errors?"],
  },
  {
    id: 13,
    title: "Code Splitting",
    time: "3 days ago",
    aiResponses: ["Let's implement lazy loading."],
    humanQuestions: ["How to split code?"],
  },
  {
    id: 14,
    title: "TypeScript Setup",
    time: "4 days ago",
    aiResponses: ["Here's how to add TypeScript."],
    humanQuestions: ["TypeScript integration?"],
  },
  {
    id: 15,
    title: "SSR Setup",
    time: "4 days ago",
    aiResponses: ["Next.js is great for SSR."],
    humanQuestions: ["How to implement SSR?"],
  },
  {
    id: 16,
    title: "React Native Basics",
    time: "5 days ago",
    aiResponses: ["Let's start with React Native."],
    humanQuestions: ["Mobile development tips?"],
  },
  {
    id: 17,
    title: "GraphQL Setup",
    time: "5 days ago",
    aiResponses: ["Apollo Client is recommended."],
    humanQuestions: ["How to use GraphQL?"],
  },
  {
    id: 18,
    title: "Webpack Config",
    time: "6 days ago",
    aiResponses: ["Here's a basic webpack setup."],
    humanQuestions: ["Webpack configuration?"],
  },
  {
    id: 19,
    title: "React Context",
    time: "6 days ago",
    aiResponses: ["Context API explained."],
    humanQuestions: ["How to use Context?"],
  },
  {
    id: 20,
    title: "Custom Hooks",
    time: "7 days ago",
    aiResponses: ["Let's create custom hooks."],
    humanQuestions: ["Writing custom hooks?"],
  },
  {
    id: 21,
    title: "React Patterns",
    time: "7 days ago",
    aiResponses: ["Common React patterns explained."],
    humanQuestions: ["Design patterns?"],
  },
  {
    id: 22,
    title: "React Query",
    time: "7 days ago",
    aiResponses: ["Data fetching with React Query."],
    humanQuestions: ["How to use React Query?"],
  },
  {
    id: 23,
    title: "Animation Tips",
    time: "7 days ago",
    aiResponses: ["Framer Motion basics."],
    humanQuestions: ["How to add animations?"],
  },
  {
    id: 24,
    title: "React Security",
    time: "7 days ago",
    aiResponses: ["Security best practices."],
    humanQuestions: ["Security measures?"],
  },
  {
    id: 25,
    title: "SEO Tips",
    time: "7 days ago",
    aiResponses: ["React SEO optimization."],
    humanQuestions: ["How to improve SEO?"],
  },
  {
    id: 26,
    title: "React Tools",
    time: "7 days ago",
    aiResponses: ["Essential development tools."],
    humanQuestions: ["Recommended tools?"],
  },
  {
    id: 27,
    title: "Deployment",
    time: "7 days ago",
    aiResponses: ["Deployment strategies explained."],
    humanQuestions: ["How to deploy React apps?"],
  }
];

export function AppSidebar() {

  
  
  const navigate = useNavigate();
  const location = useLocation();

  const [showToday, setShowToday] = useState(true);
  const[showPinned, setShowPinned] = useState(true);
  const [showPrevious7Days, setShowPrevious7Days] = useState(true);

  return (
    <Sidebar className="border-none">
      <SidebarContent className="h-full custom-scrollbar p-4 bg-[#F8F8F9] dark:bg-[#21211f]">
      
        <h1 className="text-3xl font-semibold text-purple-600 dark:text-white mb-0" onClick={() => navigate("/SnappieAi")}>
          SnappieAI
        </h1>
        <div className="flex flex-col gap-2">
          <button
            className={`flex items-center px-1 py-1 text-base text-black dark:text-[#b15f3b] font-normal gap-2 rounded-md `}
            onClick={() => navigate("/SnappieAi")}
          >
            <RiChatAiLine />
            Start new chat
          </button>
          <button
            className={`flex items-center px-1 -mt-2 text-base text-black dark:text-[#b15f3b] font-normal gap-2 rounded-md `}
            onClick={() => navigate("/SnappieAi")}
          >
            <IoMdSearch size={16}/>
            Search
          </button>
          <button
            className={`flex items-center px-1 py-1 -mt-2 text-base text-black dark:text-[#b15f3b] font-normal gap-2 rounded-md `}
            onClick={() => navigate("/SnappieAi")}
          >
            <FaRegFolder   />
            Snaps
          </button>
          <div className="flex mt-4 flex-col gap-2">
            <button
              className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-[#f5f4ef]"
              onClick={() => setShowPinned(!showPinned)}
            >
              <span>Pinned</span>
              <span>{showPinned ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            {showPinned && (
              <div className="flex flex-col text-base font-normal text-gray-700 dark:text-[#f5f4ef] gap-1">
                {recents.slice(0,3).map((item) => (
                  <div
                    key={item.id}
                    className={`flex gap-1 items-center line-clamp-1 px-1 py-0 tracking-wide rounded-md cursor-pointer
                      ${
                        location.pathname === `/SnappieAi/${item.id}`
                          ? "bg-gray-300 dark:bg-[#1a1918]"
                          : "hover:bg-gray-300 dark:hover:bg-[#1a1918]/80"
                      }`}
                    onClick={() => navigate(`/SnappieAi/${item.id}`)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex mt-4 flex-col gap-2">
            <button
              className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-[#f5f4ef]"
              onClick={() => setShowToday(!showToday)}
            >
              <span>Today</span>
              <span>{showToday ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            {showToday && (
              <div className="flex flex-col text-base font-normal text-gray-700 dark:text-[#f5f4ef] gap-1">
                {recents.slice(3,9).map((item) => (
                  <div
                    key={item.id}
                    className={`flex gap-1 items-center line-clamp-1 px-1 py-0 tracking-wide rounded-md cursor-pointer
                      ${
                        location.pathname === `/SnappieAi/${item.id}`
                          ? "bg-gray-300 dark:bg-[#1a1918]"
                          : "hover:bg-gray-300 dark:hover:bg-[#1a1918]/80"
                      }`}
                    onClick={() => navigate(`/SnappieAi/${item.id}`)}
                  >
                    {item.title}
                  </div>
                ))}
                
              </div>
            )}
            
          </div>
          <div className="flex mt-4 flex-col gap-2">
            <button
              className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-[#f5f4ef]"
              onClick={() => setShowPrevious7Days(!showPrevious7Days)}
            >
              <span>Previous 7 days</span>
              <span>{showPrevious7Days ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            {showPrevious7Days && (
              <div className="flex flex-col text-base font-normal text-gray-700 dark:text-[#f5f4ef] gap-1">
                {recents.slice(9,).map((item) => (
                  <div
                    key={item.id}
                    className={`flex gap-1 items-center line-clamp-1 px-1 py-0 tracking-wide rounded-md cursor-pointer
                      ${
                        location.pathname === `/SnappieAi/${item.id}`
                          ? "bg-gray-300 dark:bg-[#1a1918]"
                          : "hover:bg-gray-300 dark:hover:bg-[#1a1918]/80"
                      }`}
                    onClick={() => navigate(`/SnappieAi/${item.id}`)}
                  >
                    {item.title}
                  </div>
                ))}
               
               
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
