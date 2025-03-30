import React from "react";
import BannerImage from "./../../../assets/banner.png";
import { useSettingStore } from "../utils/store";
import SidePopup from "./sidePopup";


const SettingBar = ({
  isOpen,
  closeSettingBar,
}) => {
  const {
    isSideBar,
    isCanvasMode,
    isTabMode,
    isButtonExpanded,
    setIsButtonExpanded,
    setIsCanvasMode,
    isPopupRight,
    setIsPopupRight,
    setSideBar
    ,setIsTabMode
  } = useSettingStore();

  return (
    <SidePopup isOpen={isOpen} closeSettingBar={closeSettingBar}>

      <div className="p-4 ">
        <div className="flex justify-between items-center mb-0">
          <img src={BannerImage} alt="logo" className="w-full" />
        </div>
        <h1 className="text-2xl font-bold mb-6">Course Setting</h1>

        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-base">
              Dark Mode
              <span className="text-xs bg-purple-600 px-2 py-1 rounded-full ml-2">
                Beta
              </span>
            </p>
          </div>
          <label className="switch">
            <input type="checkbox" id="dark-mode-checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        
        <div className="flex justify-between items-center mb-6">
  <p className="text-base">Canvas Mode</p>
  <label className="switch">
    <input
      type="checkbox"
      checked={isCanvasMode}
      onChange={() => {
        setIsCanvasMode(!isCanvasMode);
        setSideBar(false);
        setIsTabMode(false);
      }}
    />
    <span className="slider round"></span>
  </label>
</div>

<div className="flex justify-between items-center mb-6">
  <p className="text-base">Side Bar Mode</p>
  <label className="switch">
    <input
      type="checkbox"
      checked={isSideBar}
      onChange={() => {
        setSideBar(!isSideBar);
        setIsCanvasMode(false);
        setIsTabMode(false);
      }}
    />
    <span className="slider round"></span>
  </label>
</div>

<div className="flex justify-between items-center mb-6">
  <p className="text-base">Tab Mode</p>
  <label className="switch">
    <input
      type="checkbox"
      checked={isTabMode}
      onChange={() => {
        setIsTabMode(!isTabMode);
        setIsCanvasMode(false);
        setSideBar(false);
      }}
    />
    <span className="slider round"></span>
  </label>
</div>



          
        <div className="flex flex-col gap-4 mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Button Mode
          </h3>

          <div className="flex gap-4">
            
            <label
              className={`flex-1 p-4 rounded-lg cursor-pointer transition-all ${
                !isButtonExpanded
                  ? "border-2 border-purple-600"
                  : "border border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="button-mode"
                value="compact"
                checked={!isButtonExpanded}
                onChange={() => setIsButtonExpanded(false)}
                className="form-radio text-purple-600"
              />
              <span className="text-gray-600">Compact</span>
            </label>

           
            <label
              className={`flex-1 p-4 rounded-lg cursor-pointer transition-all ${
                isButtonExpanded
                  ? "border-2 border-purple-600"
                  : "border border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="button-mode"
                value="expanded"
                checked={isButtonExpanded}
                onChange={() => setIsButtonExpanded(true)}
                className="form-radio text-purple-600"
              />
              <span className="text-gray-600">Expanded </span>
            </label>
          </div>
        </div>

      
        <div className="flex mb-6 space-x-4">
          <div className="flex-1 text-center">
            <img
              src="https://dummyimage.com/150x250/000/fff"
              alt="Left position placeholder"
              className="w-full h-auto object-cover rounded-lg mb-2"
            />
            <label className="flex items-center justify-center">
              <input
                type="radio"
                name="popup-position"
                value="left"
                checked={!isPopupRight}
                onChange={(e) => setIsPopupRight(false)}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Left</span>
            </label>
          </div>
          <div className="flex-1 text-center">
            <img
              src="https://dummyimage.com/150x250/000/fff"
              alt="Right position placeholder"
              className="w-full h-auto object-cover rounded-lg mb-2"
            />
            <label className="flex items-center justify-center">
              <input
                type="radio"
                name="popup-position"
                value="right"
                checked={isPopupRight}
                onChange={(e) => setIsPopupRight(true)}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Right</span>
            </label>
          </div>
        </div>

        {/* Additional Toggles */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p>Save course history</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <p>Announcement Emails</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <p>Reminders</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </SidePopup>
  );
};

export default SettingBar;
