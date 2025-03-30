import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/layoutComp/header";
import Sidebar from "../component/layoutComp/sidebar";
import MobileMenu from "../component/layoutComp/mobileSidebar";
import BottomBar from "../component/layoutComp/bottomBar";
import Footer from "../component/layoutComp/Footer";
function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (

      <div className="flex flex-col h-screen w-full ">
        <Header toggleMobileMenu={toggleMobileMenu} />
        <div className="flex dark:bg-blackTheme2 overflow-hidden ">
          <Sidebar isActive={isActive} />
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            isActive={isActive}
          />
          <div id="maincontent"
            className={` flex-1 h-full overflow-y-scroll   ${
              isMobileMenuOpen ? "blur" : ""
            }`}
          >
            <Outlet />
          </div>
        </div>
        {/* <div className="px-32 ml-24 hidden lg:block">
          <Footer />
        </div> */}
        <BottomBar />
      </div>
    
  );
}

export default Layout;
