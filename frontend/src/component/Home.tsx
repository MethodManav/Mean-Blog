import React from "react";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Top Navigation Bar */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <Content />
      </div>
    </div>
  );
};

export default AppLayout;
