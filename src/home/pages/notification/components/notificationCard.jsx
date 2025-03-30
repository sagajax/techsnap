import { MdKeyboardArrowRight } from 'react-icons/md';
import {cn} from '../../../../lib/utils';
export default function NotifictaionCard({ title, timestamp, className, isButton = true }) {
    const getTimeAgo = (timestamp) => {
      const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
      };
  
      for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
          return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
        }
      }
      return "Just now";
    };
  
    return (
      <div className={cn("w-full max-w-xl gap-2 flex items-center bg-white rounded-lg shadow p-4", className)}>
        <div className="">
          <p className="text-gray-900 font-inter text-lg mb-1">{title}</p>
          <p className="text-gray-500 font-inter text-sm">
            {getTimeAgo(timestamp)}
          </p>
        </div>
    {isButton && <MdKeyboardArrowRight size={20} />}
      </div>
    );
  }