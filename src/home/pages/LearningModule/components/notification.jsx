import SidePopup from "./sidePopup";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AnimatedList } from "../../../../components/ui/animated-list";
const notifications = [
    {
      name: "Payment received",
      description: "Magic UI",
      time: "15m ago",
   
      icon: "💸",
      color: "#00C9A7",
    },
    {
      name: "User signed up",
      description: "Magic UI",
      time: "10m ago",
      icon: "👤",
      color: "#FFB800",
    },
    {
      name: "New message",
      description: "Magic UI",
      time: "5m ago",
      icon: "💬",
      color: "#FF3D71",
    },
    {
      name: "New event",
      description: "Magic UI",
      time: "2m ago",
      icon: "🗞️",
      color: "#1E86FF",
    },
  ];
   
 

  const NotificationCard = ({ name, description, icon, color, time }) => {
    return (
      <div
        className={cn(
          "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
          // animation styles
          "transition-all duration-200 ease-in-out hover:scale-[103%]",
          // light styles
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        )}
      >
        <div className="flex flex-row items-center gap-3">
          <div
            className="flex size-10 items-center justify-center rounded-2xl"
            style={{
              backgroundColor: color,
            }}
          >
            <span className="text-lg">{icon}</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
              <span className="text-sm sm:text-lg">{name}</span>
              <span className="mx-1">·</span>
              <span className="text-xs text-gray-500">{time}</span>
            </figcaption>
            <p className="text-sm font-normal dark:text-white/60">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };
   
const Notification = ({ onClose }) => {
return (
    <SidePopup isOpen={true} closeSettingBar={onClose}>
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold dark:text-white">Notifications</span>
                <Link className="text-blue-500 text-sm hover:text-blue-600 transition-colors">
                    Mark All as Read
                </Link>
            </div>
            <AnimatedList className="space-y-4">
                {notifications.map((item, idx) => (
                    <NotificationCard {...item} key={idx} />
                ))}
            </AnimatedList>
            <Link 
                to="#" 
                className="block text-center text-blue-500 hover:text-blue-600 transition-colors mt-6 py-2"
            >
                See All Notifications
            </Link>
        </div>
    </SidePopup>
);
};

export default Notification;
