import React from "react";
import { Navbar, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Sidebar } from "./components/sidebar";
import { MainContent } from "./components/main-content";

export default function App() {
  return (
    <div className="flex h-screen bg-light-gray">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar className="border-b-0 bg-white px-4">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-2xl font-bold">Overview</h1>
            <div className="flex items-center gap-4">
              <Input
                classNames={{
                  base: "max-w-[300px]",
                  inputWrapper: "bg-light-gray",
                }}
                placeholder="Search"
                startContent={<Icon icon="lucide:search" className="text-default-400" />}
              />
              <div className="flex items-center gap-4">
                <button className="rounded-full p-2 hover:bg-light-gray">
                  <Icon icon="lucide:hexagon" className="h-6 w-6" />
                </button>
                <button className="rounded-full p-2 hover:bg-light-gray">
                  <Icon icon="lucide:bell" className="h-6 w-6" />
                </button>
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
        </Navbar>
        <MainContent />
      </div>
    </div>
  );
}