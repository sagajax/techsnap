import React, { useState, useRef } from 'react';
import circle from '../assets/sideCircle.png';

const CurvedTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    "Sales & Conversion",
    "Customer Support",
    "Marketing",
    "Analytics & Insights"
  ];

  const tabFeatures = [
    // Sales & Conversion
    [
      {
        title: "Proactive Chat",
        description: "Intelligently engages visitors based on their browsing behavior to significantly reduce cart abandonment rates and boost overall sales conversions through timely interventions.",
        icon: "💬"
      },
      {
        title: "Product Recommendations", 
        description: "Advanced AI-powered suggestions that analyze customer preferences and browsing history to intelligently recommend complementary products, increasing average order value by 20-30%.",
        icon: "📊"
      }
    ],
    // Customer Support
    [
      {
        title: "Live Chat Support",
        description: "Instant real-time assistance with average response times under 30 seconds, resolving customer queries immediately with our 24/7 support team availability.",
        icon: "👨‍💻"
      },
      {
        title: "Knowledge Base",
        description: "Comprehensive self-service portal containing detailed articles, video tutorials and FAQs that empower customers to find answers quickly, reducing support tickets by 40%.",
        icon: "📚"
      }
    ],
    // Marketing
    [
      {
        title: "Email Campaigns", 
        description: "Highly targeted email sequences with personalized content that nurture leads through the sales funnel, achieving industry-leading open rates of 35-45%.",
        icon: "✉️"
      },
      {
        title: "Social Integration",
        description: "Seamless connection across all major social platforms including Facebook, Instagram and Twitter with unified messaging and automated posting schedules.",
        icon: "📱"
      }
    ],
    // Analytics
    [
      {
        title: "Real-time Dashboard",
        description: "Comprehensive monitoring of all key performance indicators with customizable widgets that update in real-time for instant business insights.",
        icon: "📈"
      },
      {
        title: "Conversion Funnels",
        description: "Detailed analysis of customer journey paths with heatmaps and drop-off point identification to optimize conversion rates at every stage.",
        icon: "🔄"
      }
    ]
  ];

  const activeClass = 'rounded-3xl h-[70px] bg-white p-2 w-full font-semibold transition-height pb-0 duration-200 linear';
  const inActiveClass = 'rounded-t-3xl rounded-b-3xl font-[500] bg-white p-2 w-full h-[70px] pb-8 transition-height duration-500 linear';

  return (
    <div className="relative w-[90vw] max-w-[1800px] mx-auto bg-gray-500 p-8 rounded-3xl shadow-2xl">
      {/* Tabs */}
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-0 relative z-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index 
                  ? activeClass
                  : inActiveClass
              }`}
            >
              <div className={`flex items-center justify-between p-3 rounded-3xl hover:bg-lime-300 hover:text-white transition-all duration-300 ease-in-out
              ${    
                activeTab === index 
                  ? 'bg-white border-2 border-lime-300 '
                  :'bg-gray-200'
              }`}>
                <div className="font-medium text-gray-800 text-lg md:text-xl">{tab}</div>
                <svg 
                  className={`w-5 h-5 ml-2 transition-transform ${
                    activeTab === index ? 'rotate-180 bg-lime-300 rounded-full w-6 h-6' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="relative pt-10 pb-10 border-t-2 bg-white rounded-b-3xl min-h-[500px]">
        {/* Circle background */}
        <img 
          src={circle} 
          alt=""
          className="absolute right-0 top-0 h-full object-contain"
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row h-full px-10">
          {/* Features - takes 60% width */}
          <div className="flex-1 max-w-[60%] space-y-10">
            {tabFeatures[activeTab].map((feature, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-16 h-16 bg-lime-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-white text-2xl">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image placeholder - takes 40% width */}
          <div className="hidden md:flex w-[40%] items-center justify-center pl-10">
            <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500 p-10">
                <svg className="w-20 h-20 mx-auto mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xl mb-2">Visual Content Placeholder</p>
                <p className="text-lg">For {tabs[activeTab]} features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurvedTabs;