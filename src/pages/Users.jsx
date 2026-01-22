import {
  Search,
  Filter,
  AlertTriangle,
  CheckCircle,
  Wifi,
  Signal,
  Users,
  Activity,
  Globe,
  Zap,
} from "lucide-react";
import StatCard from "../components/Dashboard/StatCard";

const usersData = [
  {
    id: 1,
    name: "Sarah Connor",
    plan: "Globe Trotter",
    bandwidth: "1.2 TB",
    qoe: 98,
    status: "Healthy",
    signal: "Excellent",
    lastIssue: "None",
  },
  {
    id: 2,
    name: "John Doe",
    plan: "Home Pass",
    bandwidth: "850 GB",
    qoe: 45,
    status: "Critical",
    signal: "Weak",
    lastIssue: "Interference",
  },
  {
    id: 3,
    name: "Cyberdyne Systems",
    plan: "Business",
    bandwidth: "4.5 TB",
    qoe: 88,
    status: "Warning",
    signal: "Good",
    lastIssue: "High Latency",
  },
  {
    id: 4,
    name: "Ripley Ellen",
    plan: "Space Pass",
    bandwidth: "2.1 TB",
    qoe: 92,
    status: "Healthy",
    signal: "Excellent",
    lastIssue: "None",
  },
  {
    id: 5,
    name: "Neo Anderson",
    plan: "The One",
    bandwidth: "9.9 TB",
    qoe: 100,
    status: "Healthy",
    signal: "Excellent",
    lastIssue: "None",
  },
];

const UsersPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header & Feature Metrics */}
      <div>
        <h2 className="text-3xl font-display font-bold text-red-500 dark:text-white mb-6">
          User Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Subscribers"
            value="1,245"
            change="+12 new today"
            trend="up"
            icon={Users}
            color="blue"
          />
          <StatCard
            title="Critical Issues"
            value="3"
            change="-2 from yesterday"
            trend="up"
            icon={AlertTriangle}
            color="orange"
          />
          <StatCard
            title="Avg Bandwidth"
            value="1.8 TB"
            change="Monthly Average"
            trend="up"
            icon={Activity}
            color="purple"
          />
          <StatCard
            title="Networks Online"
            value="98.5%"
            change="Global Uptime"
            trend="up"
            icon={Globe}
            color="green"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="glass rounded-2xl p-6 border border-white/5">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-red-500 dark:text-white">
              Subscribers List
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs text-red-500/60 dark:text-gray-400 border border-white/5">
              All Regions
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-neon-blue transition-colors" />
              <input
                type="text"
                placeholder="Search subscriber..."
                className="h-10 w-64 bg-surface-hover border border-border rounded-xl pl-9 pr-4 text-sm text-primary placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-all dark:bg-white/5 dark:text-white"
              />
            </div>
            <button className="p-2.5 bg-surface-hover border border-border rounded-xl hover:bg-border transition-colors text-gray-400 hover:text-primary dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-400 dark:hover:text-white">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Subscriber
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Plan / Bandwidth
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  QoE Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Signal Health
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {usersData.map((user) => (
                <tr
                  key={user.id}
                  className="group hover:bg-surface-hover/50 dark:hover:bg-white/5 transition-all duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 border border-white/10 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-red-500 dark:text-white">
                          {user.name}
                        </div>
                        <div className="text-xs text-red-500/60 dark:text-gray-500">
                          ID: #{1000 + user.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm text-red-500/80 dark:text-gray-300">
                        {user.plan}
                      </div>
                      <div className="text-xs text-red-500/60 dark:text-gray-500 flex items-center gap-1">
                        <Activity className="w-3 h-3" /> {user.bandwidth}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 w-24 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full shadow-[0_0_10px_currentColor] transition-all duration-500 ${
                            user.qoe > 90
                              ? "bg-white text-white"
                              : user.qoe > 70
                                ? "bg-red-400 text-red-400"
                                : "bg-red-600 text-red-600"
                          }`}
                          style={{ width: `${user.qoe}%` }}
                        />
                      </div>
                      <span
                        className={`text-sm font-bold ${
                          user.qoe > 90
                            ? "text-white"
                            : user.qoe > 70
                              ? "text-red-400"
                              : "text-red-600"
                        }`}
                      >
                        {user.qoe}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* Signal Indicator */}
                      <div className="flex gap-0.5 items-end h-4">
                        <div
                          className={`w-1 h-2 rounded-sm ${
                            user.signal === "Weak" ? "bg-red-600" : "bg-white"
                          }`}
                        ></div>
                        <div
                          className={`w-1 h-3 rounded-sm ${
                            user.signal === "Weak" ? "bg-gray-700" : "bg-white"
                          }`}
                        ></div>
                        <div
                          className={`w-1 h-4 rounded-sm ${
                            user.signal === "Weak" ? "bg-gray-700" : "bg-white"
                          }`}
                        ></div>
                      </div>
                      <span
                        className={`text-sm ${
                          user.signal === "Weak"
                            ? "text-red-600"
                            : "text-red-500/80 dark:text-gray-300"
                        }`}
                      >
                        {user.signal}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {user.status === "Healthy" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-medium">
                        <CheckCircle className="w-3 h-3" /> Healthy
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-medium animate-pulse">
                        <AlertTriangle className="w-3 h-3" /> Critical
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-2 rounded-lg bg-neon-blue/10 text-neon-blue text-xs font-bold hover:bg-neon-blue/20 transition-colors border border-neon-blue/20">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
