import { Users, Wifi, Activity, DollarSign } from "lucide-react";
import StatCard from "../components/Dashboard/StatCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Jan", revenue: 95000 },
    { name: "Feb", revenue: 102500 },
    { name: "Mar", revenue: 108000 },
    { name: "Apr", revenue: 112000 },
    { name: "May", revenue: 118500 },
    { name: "Jun", revenue: 124000 },
    { name: "Jul", revenue: 135000 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center p-2">
        <div className="">
          <h2 className="text-2xl font-display font-bold text-black dark:text-white mb-2">
            Network Overview
          </h2>
          <p className="text-sm font-medium text-gray-500">Live infrastructure monitoring and subscription management</p>
        </div>
        <div className=" gap-7 flex">
          <button className="border text-black p-1 rounded-md text-sm font-medium border-red-500">Last 30 Days</button>
          <button className="bg-red-500 rounded-md p-1 text-sm font-medium text-white">Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Subscribers"
          value="12,543"
          change="+12.5%"
          trend="up"
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Active Bandwidth"
          value="45.2 TB"
          change="+8.2%"
          trend="up"
          icon={Wifi}
          color="blue"
        />
        <StatCard
          title="Revenue"
          value="$1.2M"
          change="+15%"
          trend="up"
          icon={DollarSign}
          color="blue"
        />
        <StatCard
          title="Network Health"
          value="99.9%"
          change="All systems"
          trend="up"
          icon={Activity}
          color="orange"
        />
      </div>

      <div className="glass p-8 rounded-2xl h-[320px]">
        <h3 className="text-lg font-bold text-red-500 dark:text-white mb-4">
          Monthly Revenue
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF0000" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FF0000" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="name" stroke="var(--text-secondary)" />
            <YAxis
              stroke="var(--text-secondary)"
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
              itemStyle={{ color: "#FF0000" }}
              formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#FF0000"
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
