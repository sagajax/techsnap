import NotifictaionCard from "./components/notificationCard";



export const notifications = [
  {
    title: "Your order #12345 has been shipped and is on its way to your location",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    title: "Welcome to our platform! We're excited to have you join our community",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
  {
    title: "New feature available: Enhanced notification system with improved user interface",
    timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  },
];
export default function Notification() {

  return (
    <div className="final h flex-grow">
      <div className="w-full h-full pt-10 ">
      <h1 className="text-2xl font-semibold  mb-8   text-gray-900">Notifications</h1>
      <div className="flex flex-col gap-4">
      {notifications.map((notification, index) => (
        <NotifictaionCard
          key={index}
          title={notification.title}
          timestamp={notification.timestamp}
        />
      ))}</div></div>
    </div>
  );
}


