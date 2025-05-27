import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Sidebar } from "./components/sidebar";
import { MainContent } from "./components/main-content";
import Header from './components/header';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-light-gray">
      <div
        className={`
    fixed left-0 top-0 z-50 h-full  bg-sidebar-black
    transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:static md:translate-x-0 md:flex
  `}
      >
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        

        <MainContent />
      </div>
    </div>
  );
}
