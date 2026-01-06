import { Bell, Search, ChevronDown } from "lucide-react";

const Header = ({ title }) => {
  return (
    <header className="sticky top-0 z-40 w-full glass border-b border-border">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-display font-semibold text-white capitalize">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-64 bg-surface/50 border border-white/10 rounded-full pl-9 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all"
            />
          </div>

          <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_rgba(189,0,255,0.5)]" />
          </button>

          <div className="flex items-center gap-3 pl-6 border-l border-white/10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple p-[1px]">
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-xs font-bold text-white">
                AD
              </div>
            </div>
            <div className="hidden md:block text-sm">
              <p className="font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
