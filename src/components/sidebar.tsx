

// File : /src/components/sidebar.tsx
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  const [opensidebar, setOpenedSidebar] = useState(false);

  // State for collapsible sections
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    general: true,
    docs: true,
    api: false,
    support: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const sections = [
  {
    title: "General", //for General add Link /docs/gettingstarted
    key: "general",
    icon: "lucide:layout-grid",   // 👈 section icon
    items: [
      { icon: "lucide:layout-grid", label: "Dashboard", active: false },
      { icon: "lucide:credit-card", label: "Components", active: true },
      { icon: "lucide:message-square", label: "Templates", active: false },
      { icon: "lucide:mail", label: "Emails", active: false, disabled: true },
    ],
  },
  {
    title: "Documentation", //for documentation  add Link /docs/installation
    key: "docs",
    icon: "lucide:book-open",     // 👈 section icon
    items: [
      { icon: "lucide:file-text", label: "Installation", active: false },
      { icon: "lucide:settings", label: "Configuration", active: false },
      { icon: "lucide:layers", label: "UI Elements", active: false },
      { icon: "lucide:code-2", label: "Code Examples", active: false },
    ],
  },
  {
    title: "API & Modules",
    key: "api",
    icon: "lucide:database",      // 👈 section icon
    items: [
      { icon: "lucide:database", label: "API Reference", active: false },
      { icon: "lucide:box", label: "Modules", active: false },
      { icon: "lucide:wrench", label: "Utilities", active: false },
      { icon: "lucide:shield-check", label: "Security", active: false },
    ],
  },
  {
    title: "Support",
    key: "support",
    icon: "lucide:life-buoy",     // 👈 section icon
    items: [
      { icon: "lucide:users", label: "Team & Roles", active: false },
      { icon: "lucide:life-buoy", label: "FAQ", active: false },
      { icon: "lucide:help-circle", label: "Support", active: false },
      { icon: "lucide:info", label: "About", active: false },
    ],
  },
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
            <span className="text-sm font-semibold"><Link to="/">Documentation</Link></span>
          )}
        </div>
      </div>

      {/* Sidebar Sections */}
      <div className="flex flex-1 flex-col items-start gap-4 px-4 overflow-y-auto scrollbar-hide">
         {sections.map((section) => (
          <div key={section.key} className="w-full">
          {/* Section Header */}
          <button
            onClick={() => toggleSection(section.key)}
            className={`flex items-center  rounded-xl p-4 text-white hover:bg-white/10 ${opensidebar ? "justify-between w-full" : "justify-center w-fit ml-2"}`}
          >
            <div className="flex items-center gap-2">
              {/* Section Icon */}
              <Icon icon={section.icon} className="h-5 w-5" />
              {opensidebar && (
                <span className="text-sm font-semibold tracking-wide">
                  {section.title}
                </span>
              )}
            </div>

        {opensidebar && (
          <Icon
            icon={
              openSections[section.key]
                ? "lucide:chevron-down"
                : "lucide:chevron-right"
            }
            className="h-5 w-5"
          />
        )}
      </button>

      {/* Section Items here i need when sidebar in closed mode  items wont show  */} 
        {/* Section Items */}
        {/* Section Items */}
         {/* Section Items */}
         {opensidebar && openSections[section.key] && (
  <div className="relative flex flex-col gap-3 mt-3 ml-2 pl-4">
    {/* Vertical border */}
    <span className="absolute left-2 top-0 h-full w-[2px] bg-white/20 !rounded-b-[160px]"></span>

    {section.items.map((item, idx) => (
      <Link
        key={idx}
        to={
          section.key === "general" && item.label === "Dashboard"
            ? "/docs/getting-started"
            : section.key === "docs" && item.label === "Installation"
            ? "/docs/installation"
            : "#"
        }
        className={`flex items-center gap-4 w-full rounded-xl p-3 ml-1 transition-all
          ${
            item.disabled
              ? "text-white opacity-50 cursor-not-allowed"
              : item.active
              ? "bg-neon-green text-black"
              : "text-white hover:bg-white/10"
          }`}
      >
        <Icon icon={item.icon} className="h-5 w-5" />
        <span className="text-sm">{item.label}</span>
      </Link>
    ))}
  </div>
)}



        
    </div>
  ))}
</div>


      {/* Bottom Buttons */}
      <div className="mt-auto flex flex-col items-start px-4 gap-4">
        <button
          className="flex items-center gap-4 rounded-xl p-3 text-white hover:bg-white/10"
          onClick={() => setOpenedSidebar((prev) => !prev)}
        >
          <Icon
            icon={opensidebar ? "lucide:chevrons-left" : "lucide:chevrons-right"}
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
