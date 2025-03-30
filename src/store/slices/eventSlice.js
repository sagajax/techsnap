import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: []
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    updateEvent: (state, action) => {
      const { id, data } = action.payload;
      const index = state.events.findIndex(event => event.id === id);
      if (index !== -1) {
        const existing = state.events[index];
        state.events[index] = {
          ...existing,
          ...data,
          extendedProps: {
            ...existing.extendedProps,
            ...data.extendedProps
          }
        };
      }
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    }
  }
});

export const { addEvent, removeEvent, updateEvent, setEvents } = eventSlice.actions;
export default eventSlice.reducer;
