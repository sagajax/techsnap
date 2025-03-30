// Example implementation of the parseTimeSlot function
// Add this to your utility functions or directly in your component file

/**
 * Parses a time slot string into hours and minutes
 * @param {string} timeslot - Time slot string (e.g. "9:00 AM", "2:30 PM")
 * @returns {Object|null} Object with hours and minutes, or null if parsing failed
 */
const parseTimeSlot = (timeslot) => {
    if (!timeslot) return null;
    
    try {
      // Handle various time formats
      const timeRegex = /(\d+):(\d+)\s*(AM|PM)?/i;
      const match = timeslot.match(timeRegex);
      
      if (!match) return null;
      
      let hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      const period = match[3]?.toUpperCase();
      
      // Convert to 24-hour format if AM/PM is specified
      if (period === 'PM' && hours < 12) {
        hours += 12;
      } else if (period === 'AM' && hours === 12) {
        hours = 0;
      }
      
      return { hours, minutes };
    } catch (error) {
      console.error('Error parsing time slot:', error);
      return null;
    }
  };
  
  export default parseTimeSlot;