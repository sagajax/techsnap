import { useEffect, useRef, useState } from "react";

export default function ModernCards() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialVisible, setIsInitialVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const target = useRef(null);


const fadeInStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out forwards;
    }
  `;

  useEffect(() => {
    // Check if mobile on initial load
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Apply animation styles
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = fadeInStyles;
    document.head.appendChild(styleSheet);
    
    checkIfMobile();
    
    // Set initial card visibility after a short delay
    setTimeout(() => {
      setIsInitialVisible(true);
    }, 300);

    const handleScroll = () => {
      if (isMobile) return; // Don't track scroll on mobile

      const element = target.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollPercent = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height - window.innerHeight))
      );
      setScrollProgress(scrollPercent);
    };

    const handleResize = () => {
      checkIfMobile();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.head.removeChild(styleSheet);
    };
  }, [isMobile, fadeInStyles]);

  const cards = [
    {
      header: "Transform Your E-commerce Experience",
      title: "Up to 27% AOV increase",
      description:
        "Maximize your revenue potential with our proven solutions that drive higher average order values.",
      icon: "📈",
      image:
        "https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png",
      randomText: "Revolutionize your online store with cutting-edge AI tools.",
    },
    {
      header: "Turn Conversations into Revenue",
      title: "Up to 44% of chats converts into sales",
      description:
        "Transform conversations into conversions with our intelligent chat system.",
      icon: "💬",
      image:
        "https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png",
      randomText:
        "Engage customers like never before with real-time chat solutions.",
    },
    {
      header: "Personalize Every Customer Interaction",
      title: "Tailored user interactions",
      description:
        "Personalized experiences that resonate with your customers' unique needs and preferences.",
      icon: "🎯",
      image:
        "https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png",
      randomText:
        "Deliver personalized experiences that drive customer loyalty.",
    },
  ];

  return (
    <div className="bg-white mt-8 min-h-screen">
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200  top-0 bg-white z-10">
        <button
          className={`flex-1 py-4 px-3 text-center font-medium ${
            activeTab === 0
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab(0)}
        >
          Intro
        </button>
        {cards.map((card, idx) => (
          <button
            key={idx}
            className={`flex-1 py-4 px-2 text-center font-medium ${
              activeTab === idx + 1
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(idx + 1)}
          >
            {card.icon}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Initial Card */}
        {activeTab === 0 && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                Revolutionize Your Customer Experience
              </h2>
              <span className="text-5xl block mb-2">✨</span>
              <h3 className="text-2xl font-bold text-indigo-600 mt-4">
                Drive Growth with AI-Powered Solutions
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mt-3">
                Unlock new levels of customer engagement and satisfaction
                with our cutting-edge platform.
              </p>
            </div>
            <div className="mt-6">
              <img
                src="https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png"
                alt="Placeholder"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}

        {/* Card tabs */}
        {cards.map((card, idx) => (
          activeTab === idx + 1 && (
            <div key={idx} className="animate-fadeIn">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                  {card.header}
                </h2>
                <span className="text-5xl block mb-2">{card.icon}</span>
                <h3 className="text-2xl font-bold text-indigo-600 mt-4">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mt-3">
                  {card.description}
                </p>
                <p className="text-emerald-600 text-lg font-bold mt-3">
                  {card.randomText}
                </p>
              </div>
              <div className="mt-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
