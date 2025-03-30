import { create } from 'zustand';

export const useTimelineStore = create((set) => ({
  journeyData: [],
  activeSections: [],
  
  setJourneyData: (data) => set({ 
    journeyData: data,
    activeSections: Array(data.length).fill(false)
  }),
  
  updateActiveSections: (sections) => set({ 
    activeSections: sections 
  })
}));

export const useBeamStore = create((set) => ({
  expandedCards: {},
  toggleExpanded: (cardId) => 
    set((state) => ({
      expandedCards: {
        ...state.expandedCards,
        [cardId]: !state.expandedCards[cardId]
      }
    })),
  setExpanded: (cardId, isExpanded) => 
    set((state) => ({
      expandedCards: {
        ...state.expandedCards,
        [cardId]: isExpanded
      }
    }))
}))