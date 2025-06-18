import React, { useState, useEffect, FC, JSX } from "react";
import {
  Banknote,
  Landmark,
  BarChart2,
  HandCoins,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes"; // For dark/light mode toggle

import Assets from "./Assets";
import Liabilities from "./Liabilities";
import Equity from "./Equity";
import Revenue from "./AssetLiabilitiesGame";

interface Module {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface SidebarModuleButtonProps {
  id: string;
  title: string;
  Icon: LucideIcon;
  active: boolean;
  onClick: (id: string) => void;
  completed: boolean;
}

const modules: Module[] = [
  { id: "assets", title: "Assets", icon: Landmark },
  { id: "liabilities", title: "Liabilities", icon: HandCoins },
  { id: "equity", title: "Equity", icon: Banknote },
  { id: "revenue", title: "Asset Liabilities Game", icon: BarChart2 },
];

const SidebarModuleButton: FC<SidebarModuleButtonProps> = ({
  id,
  title,
  Icon,
  active,
  onClick,
  completed,
}) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left w-full 
      ${active ? "bg-blue-500 text-white shadow-lg" : "bg-gray-800 text-white hover:bg-gray-700"}`}
  >
    <span className="flex items-center gap-3 text-base font-medium">
      <Icon className="w-5 h-5" />
      {title}
    </span>
    {completed && <CheckCircle className="w-5 h-5 text-green-400" />}
  </button>
);

const AccountancyLanding: FC = () => {
  const [selectedModule, setSelectedModule] = useState<string>("assets");
  const [completedModules, setCompletedModules] = useState<string[]>([
    "assets",
    "liabilities",
    "equity",
    "revenue",
  ]);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  const renderModuleComponent = (): JSX.Element | null => {
    switch (selectedModule) {
      case "assets":
        return <Assets />;
      case "liabilities":
        return <Liabilities />;
      case "equity":
        return <Equity />;
      case "revenue":
        return <Revenue />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:h-[calc(100vh-64px)] bg-[#0f172a] text-white">
      {/* Sidebar */}
      <aside className="md:w-72 w-full flex flex-col gap-4 p-4 md:sticky md:top-[64px] h-fit bg-[#111827]">
        <h2 className="text-xl font-bold mb-4">Module Journey</h2>
        {modules.map(({ id, title, icon: Icon }) => (
          <SidebarModuleButton
            key={id}
            id={id}
            title={title}
            Icon={Icon}
            active={selectedModule === id}
            onClick={setSelectedModule}
            completed={completedModules.includes(id)}
          />
        ))}
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 flex items-start justify-center overflow-y-auto bg-[#0f172a]">
        <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedModule}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {renderModuleComponent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Toggle Light Mode */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full"
      >
        Toggle Light Mode
      </button>
    </div>
  );
};

export default AccountancyLanding;
