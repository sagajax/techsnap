import { Pencil, MoreVertical, ExternalLink } from "lucide-react";

function computeDuration(startTime, endTime) {
  const [startH, startM] = startTime.split(":").map(Number);
  const [endH, endM] = endTime.split(":").map(Number);
  const startTotal = startH * 60 + startM;
  const endTotal = endH * 60 + endM;
  const diff = endTotal - startTotal;
  if (diff < 60) {
    return `${diff} mins`;
  } else {
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return minutes ? `${hours} hr ${minutes} mins` : `${hours} hr`;
  }
}

function formatTime(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const period = hours >= 12 ? "pm" : "am";
  const h = hours % 12 === 0 ? 12 : hours % 12;
  return `${h}:${minutes.toString().padStart(2, "0")}${period}`;
}

function getRepeatDays(days) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (!days || days.length === 0) return "No repeat";
  const sorted = [...days].sort((a, b) => a - b);
  if (
    sorted.length === 5 &&
    sorted[0] === 1 &&
    sorted[1] === 2 &&
    sorted[2] === 3 &&
    sorted[3] === 4 &&
    sorted[4] === 5
  ) {
    return "Every Monday - Friday";
  }
  return sorted.map((d) => dayNames[d]).join(", ");
}

function computeNextOccurrence(days, startTime) {
  const now = new Date();
  const currentDay = now.getDay(); 
  const sortedDays = [...days].sort((a, b) => a - b);
  let daysUntilNext = null;
  for (let d of sortedDays) {
    if (d > currentDay) {
      daysUntilNext = d - currentDay;
      break;
    }
  }
  if (daysUntilNext === null) {
    daysUntilNext = (7 - currentDay) + sortedDays[0];
  }
  const nextDate = new Date(now);
  nextDate.setDate(now.getDate() + daysUntilNext);
  const [hours, minutes] = startTime.split(":").map(Number);
  nextDate.setHours(hours, minutes, 0, 0);
  const options = { weekday: "short", month: "short", day: "numeric" };
  const datePart = nextDate.toLocaleDateString(undefined, options);
  const timePart = formatTime(startTime);
  return `${datePart} at ${timePart}`;
}

export default function Template({ reminder }) {
  const titleParts = reminder.title.split(" ");
  const emoji = titleParts[0];
  const titleText = titleParts.slice(1).join(" ");

  const duration = computeDuration(reminder.startTime, reminder.endTime);
  const repeatDays = getRepeatDays(reminder.daysOfWeek);
  const idealTime = formatTime(reminder.startTime);
  const nextOccurrence = computeNextOccurrence(reminder.daysOfWeek, reminder.startTime);

  return (
    <div className="w-80 bg-white shadow-md rounded-2xl p-4 border">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          <h2 className="text-lg font-bold">{titleText}</h2>
        </div>
        <div className="flex gap-2 text-gray-500">
          <Pencil size={16} className="cursor-pointer hover:text-gray-700" />
          <MoreVertical size={18} className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      <div className="mt-2 text-sm text-gray-600 space-y-2">
        <p>
          <strong>Duration:</strong> <br /> {duration}
        </p>
        <p>
          <strong>Repeat:</strong> <br /> {repeatDays}
        </p>
        <p>
          <strong>Ideal time:</strong> <br /> {idealTime}
        </p>
      </div>

      <div className="mt-4 border-t pt-3 text-sm">
        <p className="text-gray-600 font-medium">Next:</p>
        <p className="font-bold">{nextOccurrence}</p>
      </div>

      <div className="mt-3">
        <button className="flex items-center justify-center w-full text-sm text-blue-600 bg-gray-100 rounded-xl py-2 hover:bg-gray-200">
          Open <ExternalLink size={14} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
