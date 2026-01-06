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
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = ({ activePage, setActivePage }) => {
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { id: "Dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "Packages", label: "Packages", icon: Package },
    { id: "Users", label: "Users", icon: Users },
    { id: "Signal Monitor", label: "Signal Monitor", icon: Radio },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass border-r border-border z-50 flex flex-col transition-colors duration-300">
      <div className="p-6">
        <div className="relative group overflow-hidden rounded-2xl p-4 glass border border-white/5 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_-5px_var(--color-primary)] hover:border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src="/logo2.jpg"
            alt="Plume"
            className="w-full h-12 object-contain mix-blend-multiply dark:mix-blend-screen transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-primary/10 text-neon-blue shadow-lg shadow-primary/5 border border-primary/20 font-bold"
                  : "text-gray-500 dark:text-gray-400 hover:bg-surface-hover hover:text-neon-blue"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive
                    ? "text-neon-blue"
                    : "text-gray-400 group-hover:text-neon-blue"
                }`}
              />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_8px_currentColor]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-400 hover:text-white mb-2"
        >
          <div className="flex items-center gap-3">
            {theme === "light" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
            <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
          </div>
          <div
            className={`w-8 h-4 rounded-full p-0.5 transition-colors ${
              theme === "dark" ? "bg-neon-blue" : "bg-gray-600"
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full bg-white shadow-sm transition-transform ${
                theme === "dark" ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </div>
        </button>

        <div className="p-4 rounded-xl bg-gradient-to-br from-surface to-background border border-white/5">
          <p className="text-xs text-gray-400 mb-1">Network Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-sm font-medium text-white">
              All Systems Go
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
