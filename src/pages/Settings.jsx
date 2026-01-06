import { Radio, MapPin, Activity } from "lucide-react";

const Signal = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-white mb-2">
          Signal Monitor
        </h2>
        <p className="text-gray-400">
          Real-time network alerts and proactive monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass p-6 rounded-2xl min-h-[400px] flex items-center justify-center relative overflow-hidden">
          {/* Abstract Map Placeholder */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-background to-background" />
            <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full w-full p-8">
              {[...Array(36)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full w-2 h-2 bg-white/10 ${
                    i % 7 === 0
                      ? "bg-neon-green animate-pulse shadow-[0_0_10px_#00FF94]"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="relative z-10 text-gray-500 font-medium">
            Geographic Node Map
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-neon-blue" />
              Live Alerts
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start p-3 rounded-xl bg-surface/50 border border-white/5"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-500 animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Interference Detected
                    </p>
                    <p className="text-xs text-gray-500">
                      Node #EF-203 • 2m ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border-l-4 border-neon-green">
            <h3 className="text-lg font-bold text-white mb-1">System Health</h3>
            <p className="text-3xl font-display font-bold text-neon-green">
              99.98%
            </p>
            <p className="text-sm text-gray-400">All regions operational</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signal;
