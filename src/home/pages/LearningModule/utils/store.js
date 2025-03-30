import { create } from 'zustand';

export const useSettingStore = create((set) => ({
    isCanvasMode: false,
    isButtonExpanded: false,
    isPopupRight: true,
    isChatOpen: false,
    isSideBar : false,
    isTabMode: false,
    setIsCanvasMode: (isCanvasMode) => set({ isCanvasMode }),
    setIsButtonExpanded: (isButtonExpanded) => set({ isButtonExpanded }),
    setIsPopupRight: (isPopupRight) => set({ isPopupRight }),
    setIsChatOpen: (isChatOpen) => set({ isChatOpen }),
    setSideBar: (isSideBar) => set({ isSideBar }),
    setIsTabMode: (isTabMode) => set({ isTabMode }),
}));

export const useSideBarSettingStore = create((set) => ({
    isCollapsed: false,
    setIsCollapsed: (isCollapsed) => set({ isCollapsed }),
}));