import  { useState } from "react";
import { Icon } from "@iconify/react";

export const Sidebar = () => {
  const [opensidebar, setOpenedSidebar] = useState(false);

  const menuItems = [
    { icon: "lucide:layout-grid", label: "Dashboard", active: false },
    { icon: "lucide:credit-card", label: "Payments", active: true },
    { icon: "lucide:message-square", label: "Messages", active: false },
    { icon: "lucide:mail", label: "Emails", active: false },
    { icon: "lucide:bar-chart-2", label: "Reports", active: false },
    { icon: "lucide:credit-card", label: "Billing", active: false },
  ];

  return (
    <div
      className={`flex h-full flex-col bg-sidebar-black py-8 transition-all duration-300 ${
        opensidebar ? "w-64" : "w-[100px]"
      }`}
    >
      {/* Top Icon */}
      <div className="mb-8 px-4">
        <div className="flex items-center gap-4 rounded-xl p-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
            <Icon
              icon="lucide:bar-chart-2"
              className="h-6 w-6 text-neon-green"
            />
          </div>
          {opensidebar && (
            <span className="text-sm font-semibold">Insight</span>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-1 flex-col items-start gap-4 px-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-4 w-full rounded-xl p-4 transition-all  ${
              item.active
                ? "bg-neon-green text-black gap-4 "
                : "text-white hover:bg-white/10 "
            }`}
          >
            <Icon icon={item.icon} className="h-6 w-6" />
            {opensidebar && <span className="text-sm">{item.label}</span>}
          </button>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="mt-auto flex flex-col items-start px-4 gap-4">
        <button
          className="flex items-center gap-4 rounded-xl p-3 text-white hover:bg-white/10"
          onClick={() => setOpenedSidebar((prev) => !prev)}
        >
          <Icon
            icon={
              opensidebar ? "lucide:chevrons-left" : "lucide:chevrons-right"
            }
            className="h-6 w-6"
          />
          {opensidebar && <span className="text-sm">Collapse</span>}
        </button>

        <button className="flex items-center gap-4 rounded-xl p-3 text-white hover:bg-white/10">
          <Icon icon="lucide:log-out" className="h-6 w-6" />
          {opensidebar && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
};
