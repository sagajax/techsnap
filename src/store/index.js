// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import mailSlice from "../features/mail/mailSlice";
import workspaceslice from "../features/organization/workspaceSlice";
import meetingSlice from "./slices/meetingSlice";
import eventSlice from "./slices/eventSlice"; // Import the new slice
import authSlice from "./slices/authSlice"; 
const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem("techsnap");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log("Error loading state from localStorage:", error);
    return undefined;
  }
};

const rawPreloadedState = loadState() || {};

const preloadedState = {
  ...rawPreloadedState,
  meeting: {
    meetingEvents:
      rawPreloadedState.meeting && Array.isArray(rawPreloadedState.meeting.meetingEvents)
        ? rawPreloadedState.meeting.meetingEvents
        : [],
  },
  event: {
    events: rawPreloadedState.event && Array.isArray(rawPreloadedState.event.events)
      ? rawPreloadedState.event.events
      : [],
  },
};


export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    mail: mailSlice,
    workspace: workspaceslice,
    meeting: meetingSlice,
    event: eventSlice, // Added event slice
  },
  preloadedState,
});

store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState());
    window.localStorage.setItem("techsnap", serializedState);
  } catch (error) {
    console.log("Error saving state to localStorage:", error);
  }
});

export default store;
