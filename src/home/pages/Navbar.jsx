import { useState, useEffect } from "react";
import techsnaplo from "../assets/hh.png";
import tech from '../assets/techsnaplo.jpg';
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom"; 
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActiveDropdown, setIsActiveDropdown] = useState(null);

  const productData = {
    DeveloperCareers: [
      { label: "Frontend Developer" },
      { label: "Backend Developer" },
      { label: "Software Developer" },
      { label: "Game Developer" },
      { label: "Mobile Application Dev" },
      { label: "View all >>" },
    ],
    DataCareers: [
      { label: "Data Analyst" },
      { label: "Data Engineer" },
      { label: "Data Scientist" },
      { label: "Data Architect" },
      { label: "ML Engineer" },
      { label: "View all >>" },
    ],
    CloudCareers: [
      { label: "Cloud Architect" },
      { label: "DevOps Engineer" },
      { label: "Cloud Security Analyst" },
      { label: "Cloud Engineer" },
      { label: "IoT Developer" },
      { label: "View all >>" },
    ],
    OtherCareers: [
      { label: "UI/UX Designer" },
      { label: "IT Consultant" },
      { label: "SEO Manager" },
      { label: "Social Media Manager" },
      { label: "Technical Writer" },
      { label: "View all >>" },
    ],
  };

  const Community = [
    { label: "About" },
    { label: "Forum" },
    { label: "Our People" },
    { label: "Contact" },
    { label: "Learner Stories" },
    { label: "Contribute" },
  ];

  const Resources =[
    {label:"Datasnap"},
{label: "Cheat Sheets"},
{label: "Mock Interview"},
{label: "Events"},
{label: "Webinars"},
{label: "Challenges"},
{label: "News"},
  ]

const Pricing= [
    {label:"For Individuals"},
{label: "For Students"},
{label: "For University"},
  ]
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 mt-4 transition-all duration-300 ease-in-out 
      ${isScrolled ? "px-2 py-1" : "px-8 py-4"}`}
    >
      <div
        className={`mx-auto rounded-full ${
          isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent"
        } 
        ${
          isScrolled
            ? "max-w-[1200px] xl:max-w-[1300px] 2xl:max-w-[1400px]"
            : "max-w-[1300px] xl:max-w-[1400px] 2xl:max-w-[1500px]"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="hidden lg:flex pb-3 space-x-4 px-6 py-2 pl-10 w-full  items-center justify-between">
          {/* Logo */}
          <div className="w-[200px] ">
          <img src={isScrolled ? tech : techsnaplo} alt="Logo" className={`${isScrolled ? 'h-10' : 'h-16'}  pb-1 pl-2 transition-all duration-300`}  />
          </div>
          {/* Navigation Links */}
          <div className="pb-3 space-x-4 flex px-6  py-2 pl-10 rounded-full bg-white text-black transition-all duration-300">
            {/* Product Dropdown */}
            <div className=" flex relative group">
              <button
                className=" flex items-center px-4 py-2 group rounded-full font-medium text-black hover:bg-[#ff69b4]"
                onMouseEnter={() => setIsActiveDropdown("product")}
             
              >
                Product
                <AiOutlineArrowDown className="group-hover:rotate-180 transition-transform duration-300 " />
              </button>
            

              {isActiveDropdown === "product" && (
                <div className="h-[400px] absolute top-full left-0 mt-4 w-[900px] bg-white rounded-2xl p-6 grid grid-cols-4 gap-10"
                onMouseLeave={() => setIsActiveDropdown(null)}>
                  {/* Developer Careers */}
                  <div>
                    <h3 className="text-black font-medium mb-4">Developer Careers</h3>
                    <div className="space-y-3">
                      {productData.DeveloperCareers.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-black hover:text-[#ff69b4] transition-colors">
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Data Careers */}
                  <div>
                    <h3 className="text-black font-medium mb-4">Data Careers</h3>
                    <div className="space-y-3">
                      {productData.DataCareers.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-black hover:text-[#ff69b4] transition-colors">
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cloud Careers */}
                  <div>
                    <h3 className="text-black font-medium mb-4">Cloud Careers</h3>
                    <div className="space-y-3">
                      {productData.CloudCareers.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-black hover:text-[#ff69b4] transition-colors">
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other Careers */}
                  <div>
                    <h3 className="text-black font-medium mb-4">Other Careers</h3>
                    <div className="space-y-3">
                      {productData.OtherCareers.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-black hover:text-[#ff69b4] transition-colors">
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Community Dropdown */}
            <div className="relative group">
              <button
                className=" flex items-center px-4 py-2 rounded-full font-medium text-black hover:bg-[#ff69b4]"
                onMouseEnter={() => setIsActiveDropdown("community")}
                
              >
                Community
                <AiOutlineArrowDown className="group-hover:rotate-180 transition-transform duration-300 " />
              </button>

              {isActiveDropdown === "community" && (
                <div className="absolute top-full left-0 mt-4 w-[200px] bg-white rounded-2xl p-4"
                onMouseLeave={() => setIsActiveDropdown(null)}>
                  <div className="space-y-3">
                    {Community.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-black hover:text-[#ff69b4] transition-colors">
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center px-4 py-2 rounded-full font-medium text-black hover:bg-[#ff69b4]"
                
               
              >
                CarrerPaths 
                <AiOutlineArrowDown className="group-hover:rotate-180 transition-transform duration-300 " />
              </button>
            </div>
            <div className="relative group">
              <button
                className="flex items-center px-4 py-2 rounded-full font-medium text-black hover:bg-[#ff69b4]"
                onMouseEnter={() => setIsActiveDropdown("resources")}
               
              >
                Resources
                <AiOutlineArrowDown className="group-hover:rotate-180 transition-transform duration-300 " />
              </button>
              


              {isActiveDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-4 w-[200px] bg-white rounded-2xl p-4"
                onMouseLeave={() => setIsActiveDropdown(null)}>
                  <div className="space-y-3">
                    {Resources.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-black hover:text-[#ff69b4] transition-colors">
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                className="flex items-center px-4 py-2 rounded-full font-medium text-black hover:bg-[#ff69b4]"
                onMouseEnter={() => setIsActiveDropdown("pricing")}
                
              >
                Pricing
                <AiOutlineArrowDown className="group-hover:rotate-180 transition-transform duration-300 " />
              </button>

              {isActiveDropdown === "pricing" && (
                <div className="absolute top-full left-0 mt-4 w-[200px] bg-white rounded-2xl p-4" 
                onMouseLeave={() => setIsActiveDropdown(null)}>
                  <div className="space-y-3">
                    {Pricing.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-black hover:text-[#ff69b4] transition-colors">
                        
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
           
          </div>

          {/* Login & Register Buttons */}
          <div className="hidden lg:flex w-[200px] space-x-6 pb-1 pr-6">
            <Link 
            to="/signup"
            className="px-4 py-2 bg-gray-200 rounded-full">Login</Link>
            <Link
            to="/signin"
             className="px-4 py-2 bg-[#ff69b4] text-white rounded-full ">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
