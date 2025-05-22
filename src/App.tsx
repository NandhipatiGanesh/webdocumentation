import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Sidebar } from "./components/sidebar";
import { MainContent } from "./components/main-content";

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
        <header className="border-b-0 bg-white px-4 py-4">
          <div className="flex w-full items-center justify-between">
            {/* Page Title */}
            <h1 className="text-2xl font-bold">Overview</h1>

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="md:hidden p-2"
              aria-label="Open Menu"
            >
              {/* Your SVG or Icon here */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line
                  x1="4"
                  y1="8"
                  x2="20"
                  y2="8"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="4"
                  y1="16"
                  x2="20"
                  y2="16"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* Right Side Actions (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search Input */}
              <div className="max-w-[300px]">
                <div className="flex items-center rounded-md bg-light-gray px-3 py-2">
                  <Icon
                    icon="lucide:search"
                    className="text-default-400 mr-2 h-5 w-5"
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </div>

              {/* Icon Buttons and Profile */}
              <div className="flex items-center gap-4">
                <button className="rounded-full p-2 hover:bg-light-gray">
                  <Icon icon="lucide:hexagon" className="h-6 w-6" />
                </button>
                <button className="rounded-full p-2 hover:bg-light-gray">
                  <Icon icon="lucide:bell" className="h-6 w-6" />
                </button>

                {/* Profile Section */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <img
                      src="https://img.heroui.chat/image/avatar?w=40&h=40&u=william"
                      alt="William Blake"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-neon-green ring-2 ring-white"></span>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">William Blake</p>
                    <div className="flex items-center text-xs text-default-500">
                      <span className="text-neon-green font-medium">PRO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <MainContent />
      </div>
    </div>
  );
}
