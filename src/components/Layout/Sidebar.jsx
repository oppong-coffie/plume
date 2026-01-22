import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  Activity,
  Radio,
  Megaphone,
  Home,
  Briefcase,
  Building,
  Sun,
  Moon,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ activePage, setActivePage }) => {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const menuItems = [
    { id: "Dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "Packages", label: "Packages", icon: Package },
    { id: "Users", label: "Users", icon: Users },
    { id: "Signal Monitor", label: "Signal Monitor", icon: Radio },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-background/80 backdrop-blur-xl border-r border-white/5 z-50 flex flex-col transition-all duration-300">
      <div className="">
            <img
              src="/logo23.png"
              alt="Plume"
              className=""
            />
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className="w-full relative px-4 py-3 group outline-none"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <div
                className={`flex items-center gap-3 relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-red-500 dark:text-white"
                    : "text-red-500/60 hover:text-red-500 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-all duration-300 ${
                    isActive
                      ? "text-primary scale-110"
                      : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  }`}
                />
                <span className="font-semibold text-sm tracking-tight">
                  {item.label}
                </span>
                {isActive ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]"
                  />
                ) : (
                  <ChevronRight className="ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none" />
                )}
              </div>
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto space-y-4">
        <button
          onClick={toggleTheme}
          className="group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-surface/40 hover:bg-surface/60 border border-white/5 transition-all duration-300"
        >
          <div className="relative w-10 h-6 flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1 transition-colors duration-500">
            <motion.div
              animate={{ x: theme === "dark" ? 16 : 0 }}
              className="absolute z-10 flex items-center justify-center w-4 h-4 bg-white rounded-full shadow-md"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  {theme === "light" ? (
                    <motion.div
                      key="sun"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-2.5 h-2.5 text-orange-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-2.5 h-2.5 text-neon-blue" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
            <Sun className="w-3 h-3 text-gray-400 absolute left-1.5" />
            <Moon className="w-3 h-3 text-gray-500 absolute right-1.5" />
          </div>
          <span className="text-sm font-medium text-red-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-white transition-colors">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

        <div className="relative group overflow-hidden p-0.5 rounded-2xl">
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">
                Network Status
              </p>
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-neon-green" />
              <span className="text-sm font-semibold text-red-500 dark:text-white">
                All Systems Go
              </span>
            </div>
            <div className="mt-2 w-full bg-gray-200 dark:bg-white/5 h-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                className="h-full bg-neon-green shadow-[0_0_8px_rgba(34,197,94,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
