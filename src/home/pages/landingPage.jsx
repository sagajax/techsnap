import React from "react";
import BigCards from "../pages/BigCards";
import { Link } from "react-router-dom";
import Tabs from "../pages/Tabs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Section2 from "./Section";
import Home from "./Home";
import Cursor from "./Cursor";

function LandingPage() {
  return (
    <>
    <div className='no-scrollbar overflow-x-clip relative rounded-b-[2.5em] bg-white'>

      <Navbar />
      <Cursor />
      <Home />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">
          Welcome to TechSnap
        </h1>

        <div className="space-x-4">
          <Link
            to="/signin"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700"
          >
            Signup
          </Link>
          <Link
            to="/dashboard/profile"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
          >
            Dashboard
          </Link>
        </div>
      </div>
      <BigCards />
      <Tabs  />
      <Section2 />
      <Footer />
    </div>
    </>
  );
}

export default LandingPage;
