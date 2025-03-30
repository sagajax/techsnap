// store/slices/meetingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meetingEvents: [],
};

const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    addMeetingEvent: (state, action) => {
      const event = action.payload;
      const exists = state.meetingEvents.find((e) => e.id === event.id);
      if (!exists) {
        state.meetingEvents.push(event);
      }
    },
    meetingInitialiser: (state, action) => {
      const simpleMeeting = action.payload;
      // Convert duration string to an array of numbers (e.g., "15, 30" becomes [15, 30])
      const durationInMinutes = simpleMeeting.duration
        .split(",")
        .map((d) => parseInt(d.replace(/[^0-9]/g, ""), 10));

      const now = new Date();
      const thirtyDaysLater = new Date(now);
      thirtyDaysLater.setDate(now.getDate() + 30);

      const formattedMeeting = {
        id: `meeting-${simpleMeeting.id}`,
        title: simpleMeeting.title,
        startTime: now.toISOString(),
        endTime: new Date(now.getTime() + 30 * 60000).toISOString(),
        start: now.toISOString(), // For consistency with calendar libraries
        end: new Date(now.getTime() + 30 * 60000).toISOString(), // For consistency with calendar libraries
        startDate: now.toISOString(),
        endDate: thirtyDaysLater.toISOString(),
        extendedProps: {
          description: simpleMeeting.description,
          isMeeting: true,
          scheduledBy: simpleMeeting.scheduledBy || "", // You can update this with the owner's name/email
          participants: [],
          cc: [],
          message: "",
          rawStart: now.toISOString(),
          rawEnd: new Date(now.getTime() + 30 * 60000).toISOString(),
          duration: durationInMinutes, // e.g. [15, 30]
          platform: simpleMeeting.platform,
        },
      };
      
      const exists = state.meetingEvents.find(
        (e) => e.id === formattedMeeting.id
      );
      
      if (!exists) {
        state.meetingEvents.push(formattedMeeting);
      }
      console.log("Meeting template created:", formattedMeeting);
    },
    updateMeetingEvent: (state, action) => {
      const updatedEvent = action.payload;
      
      console.log("Updating meeting event:", updatedEvent);
      
      state.meetingEvents = state.meetingEvents.map((e) =>
        e.id === updatedEvent.id
          ? {
              ...e,
              ...updatedEvent,
              // Ensure both standard formats are supported
              startTime: updatedEvent.startTime || updatedEvent.start,
              endTime: updatedEvent.endTime || updatedEvent.end,
              start: updatedEvent.start || updatedEvent.startTime,
              end: updatedEvent.end || updatedEvent.endTime,
              extendedProps: {
                ...e.extendedProps,
                ...updatedEvent.extendedProps,
              },
            }
          : e
      );
    },
    removeMeetingEvent: (state, action) => {
      state.meetingEvents = state.meetingEvents.filter(
        (e) => e.id !== action.payload
      );
    },
    clearMeetingEvents: (state) => {
      state.meetingEvents = [];
    },
  },
});

export const {
  addMeetingEvent,
  meetingInitialiser,
  updateMeetingEvent,
  removeMeetingEvent,
  clearMeetingEvents,
} = meetingSlice.actions;

export default meetingSlice.reducer;