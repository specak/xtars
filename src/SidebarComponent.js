import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom"; 
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import App from "./App";

// Example custom components
const SectionOne = () => <h1 className="text-2xl">🧩 Component for Section 1</h1>;
const SectionContentPlaceHolder = () => <h1 className="text-2xl">🚀 Component for Sections</h1>;
const Placeholder = ({ label }) => <h1 className="text-2xl">Put your component here for {label}</h1>;

// Sections
const sections = [
  { key: "section-1", label: "App1", component: <App /> },
  { key: "section-2", label: "Section 2", component: <SectionContentPlaceHolder /> },
  { key: "section-3", label: "Section 3", component: <SectionContentPlaceHolder /> },
  { key: "section-4", label: "Section 4", component: <SectionContentPlaceHolder /> },
  { key: "section-5", label: "Section 5", component: <SectionContentPlaceHolder /> },
  ...Array.from({ length: 20 }, (_, i) => {
    const index = i + 5;
    return {
      key: `section-${index}`,
      label: `Section ${index}`,
      component: <Placeholder label={`Section ${index}`} />,
    };
  }),
];

export default function SidebarTabs() {

  
  useEffect(() => {
    document.title = "Xtars App";
  }, []);

  
  const getInitialTab = () => {
    const params = new URLSearchParams(window.location.search);
    const sectionFromURL = params.get("section");
    if (sectionFromURL && sections.some(s => s.key === sectionFromURL)) {
      return sectionFromURL;
    }
    return sections[0].key;
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredSections = sections.filter((s) =>
    s.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeComponent = sections.find((s) => s.key === activeTab)?.component;

  // Theme toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Set activeTab from URL or default
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sectionFromURL = params.get("section");

    if (sectionFromURL && sections.some(s => s.key === sectionFromURL)) {
      setActiveTab(sectionFromURL);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("section", activeTab);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [activeTab]);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-white transition-colors">
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-800 dark:text-white"
        >
          {sidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed md:static z-40 md:z-auto top-0 left-0 h-full w-64 bg-gray-900 dark:bg-gray-800 text-white flex flex-col transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 text-2xl font-bold border-b border-gray-700 sticky top-0 bg-gray-900 dark:bg-gray-800 z-20">
          <span className="text-indigo-400">xtars</span>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-gray-700 bg-gray-900 dark:bg-gray-800 sticky top-[64px] z-10">
          <input
            type="text"
            placeholder="Search sections..."
            className="w-full px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Scrollable Tabs */}
        <div className="flex-1 overflow-y-auto relative">
          <div className="relative">
            {/* Sliding underline */}
            <motion.div
              layoutId="underline"
              className="absolute left-0 h-10 bg-gray-700 w-full rounded-md z-0"
              style={{
                top: filteredSections.findIndex((s) => s.key === activeTab) * 42,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>

          <div className="relative z-10 space-y-1 px-2 py-1">
          {filteredSections.map((section) => {
  const isActive = activeTab === section.key;

  return (
    <button
      key={section.key}
      className={clsx(
        "relative text-left w-full px-4 py-2 rounded transition-colors duration-200 overflow-hidden",
        isActive ? "text-white font-medium" : "hover:bg-gray-700 text-gray-300"
      )}
      onClick={() => {
        setActiveTab(section.key);
        setSidebarOpen(false);
      }}
    >
      {/* Sliding background */}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute inset-0 bg-gray-700 rounded-md z-0"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}

      {/* Label stays on top */}
      <span className="relative z-10">{section.label}</span>
    </button>
  );
})}

          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 text-xs text-gray-500 border-t border-gray-700 bg-gray-900 dark:bg-gray-800">
          © 2025 Xtars. All rights reserved.
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeComponent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
