import { useState } from "react";
import Layout from "./components/Layout/Layout";
import {
  Truck,
  Users,
  TrendingDown,
  Activity,
  Home,
  Briefcase,
  Network,
  Globe,
  Building,
  Wifi,
  Zap,
  Check,
  ArrowLeft,
  DollarSign,
} from "lucide-react";
import StatCard from "./components/Dashboard/StatCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Packages from "./pages/Packages";
import UsersPage from "./pages/Users";
import { ThemeProvider } from "./context/ThemeContext";

// --- SHARED COMPONENTS ---

// Unified Product Detail Template
const ProductDetail = ({
  title,
  subtitle,
  price,
  description,
  metrics,
  features,
  colorTheme,
  activePage,
  setActivePage,
}) => {
  const themeColor =
    {
      blue: "text-neon-blue border-neon-blue/20 bg-neon-blue/10",
      purple: "text-white border-white/20 bg-white/10",
      orange: "text-red-500 border-red-500/20 bg-red-500/10",
      green: "text-white border-white/20 bg-white/5",
    }[colorTheme] || "text-white";

  const borderColor = {
    blue: "border-neon-blue",
    purple: "border-white",
    orange: "border-red-500",
    green: "border-white/50",
  }[colorTheme];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setActivePage("packages")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Packages</span>
        </button>

        <div>
          <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-2">
            {title}
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className={`px-3 py-1 rounded-full border ${themeColor}`}>
              Price: {price}
            </span>
            <span>•</span>
            <span>{subtitle}</span>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Key Metrics / Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className={`glass p-6 rounded-2xl border-l-4 ${borderColor} h-full`}
          >
            <div className="mb-4">
              <metric.icon className={`w-8 h-8 ${themeColor.split(" ")[0]}`} />
            </div>
            <h3 className="text-lg font-bold text-primary dark:text-white">
              {metric.label}
            </h3>
            <p
              className={`text-2xl font-bold my-2 ${
                metric.trend === "up"
                  ? "text-neon-blue"
                  : "text-primary dark:text-white"
              }`}
            >
              {metric.value}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {metric.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Deep Dive Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feature List */}
        <div className="lg:col-span-3 glass p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-primary dark:text-white mb-6">
            Included Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
              >
                <div
                  className={`p-1 rounded-full mt-1 bg-primary/5 dark:bg-white/5`}
                >
                  <Check className={`w-3 h-3 ${themeColor.split(" ")[0]}`} />
                </div>
                <span className="text-sm leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
          <button
            className={`w-full md:w-auto px-8 mt-8 py-3 rounded-xl font-bold text-white bg-black dark:text-black dark:bg-white hover:opacity-90 transition-opacity`}
          >
            Manage Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

// --- CONFIGURATION FOR PRODUCTS ---

// [PANORAMA] - High level overview (Dashboard) - RESTORED DESIGN
const Panorama = () => {
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
      <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">
        Network Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Subscribers"
          value="12,543"
          change="+12.5% vs last month"
          trend="up"
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Active Bandwidth"
          value="45.2 TB"
          change="+8.2% usage spike"
          trend="up"
          icon={Wifi}
          color="purple"
        />
        <StatCard
          title="Revenue"
          value="$1.2M"
          change="+15% YoY Growth"
          trend="up"
          icon={DollarSign}
          color="green"
        />
        <StatCard
          title="Network Health"
          value="99.9%"
          change="All systems operational"
          trend="up"
          icon={Activity}
          color="orange"
        />
      </div>
      <div className="glass p-6 rounded-2xl h-[300px]">
        <h3 className="text-lg font-bold text-primary dark:text-white mb-4">
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

// ... (Other views remain ProductDetail based as they are 'packages')

const HomePassView = (props) => (
  <ProductDetail
    {...props}
    title="Plume Home"
    subtitle="The ultimate smart home experience"
    price="$4.99 /sub/mo"
    description="Delight your subscribers with self-optimizing WiFi, advanced parental controls, and cyber-security protection for every device."
    colorTheme="purple"
    metrics={[
      {
        label: "Adapt™",
        value: "AI WiFi",
        desc: "Self-optimizing connectivity",
        icon: Home,
      },
      {
        label: "Control™",
        value: "Unlimited",
        desc: "Detailed parental & guest controls",
        icon: Activity,
      },
      {
        label: "Guard™",
        value: "24/7",
        desc: "Advanced IoT cyber-protection",
        icon: Network,
      },
      {
        label: "Sense™",
        value: "Motion",
        desc: "Whole-home awareness",
        icon: Zap,
      },
    ]}
    features={[
      "App for iOS & Android",
      "Whole-Home WiFi Guarantee",
      "24/7 Customer Support",
      "Hardware Replacement Program",
      "Rolling 30-day History",
    ]}
  />
);

const WorkPassView = (props) => (
  <ProductDetail
    {...props}
    title="WorkPass"
    subtitle="Enterprise-grade connectivity for SMBs"
    price="$9.99 /loc/mo"
    description="Empower small businesses with enterprise-level security, guest analytics, and employee management tools without the complexity."
    colorTheme="orange"
    metrics={[
      {
        label: "Concierge™",
        value: "Portal",
        desc: "Guest login & branding tools",
        icon: Globe,
      },
      {
        label: "Keycard™",
        value: "Profiles",
        desc: "Staff & device management",
        icon: Briefcase,
      },
      {
        label: "Shield™",
        value: "Secure",
        desc: "Enterprise-grade security",
        icon: Network,
      },
      {
        label: "Flow™",
        value: "Insights",
        desc: "Motion-based business analytics",
        icon: Activity,
      },
    ]}
    features={[
      "Guest Analytics & Captive Portal",
      "Employee Device Management",
      "Cyber-threat Protection",
      "Compatible with SuperPod Hardware",
    ]}
  />
);

const UpriseView = (props) => (
  <ProductDetail
    {...props}
    title="Uprise for MDUs"
    subtitle="Connectivity & Property Management"
    price="$3.50 /unit/mo"
    description="Instant-on WiFi and smart property management for Multi-Dwelling Units. Seamless roaming and IoT integration out of the box."
    colorTheme="green"
    metrics={[
      {
        label: "Roaming",
        value: "Seamless",
        desc: "Property-wide connectivity",
        icon: Building,
      },
      {
        label: "Onboarding",
        value: "Instant",
        desc: "Zero-touch activation",
        icon: Wifi,
      },
      {
        label: "Smart Hub",
        value: "Integrated",
        desc: "Matter/Zigbee/BLE support",
        icon: Home,
      },
      {
        label: "Management",
        value: "Portal",
        desc: "Full property oversight",
        icon: Users,
      },
    ]}
    features={[
      "Seamless Roaming Everywhere",
      "Pre-installed Hardware",
      "Property Manager Tools",
      "IoT Device Integration (Locks, Thermostats)",
    ]}
  />
);

// [SIGNAL] - Network Ops
const Signal = () => (
  <div className="glass p-8 rounded-2xl text-center">
    <Activity className="w-16 h-16 text-neon-blue mx-auto mb-4 animate-pulse" />
    <h2 className="text-2xl font-bold text-primary dark:text-white">
      Signal Monitoring
    </h2>
    <p className="text-gray-500 dark:text-gray-400">
      Real-time network alerts active.
    </p>
  </div>
);

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Panorama />;
      case "panorama":
        return <Panorama />;

      case "Packages":
        return <Packages setActivePage={setActivePage} />;
      case "packages":
        return <Packages setActivePage={setActivePage} />;

      case "Users":
        return <UsersPage />;
      case "users":
        return <UsersPage />;

      case "Signal Monitor":
        return <Signal />;
      case "signal":
        return <Signal />;

      case "homepass":
        return (
          <HomePassView activePage={activePage} setActivePage={setActivePage} />
        );
      case "workpass":
        return (
          <WorkPassView activePage={activePage} setActivePage={setActivePage} />
        );
      case "uprise":
        return (
          <UpriseView activePage={activePage} setActivePage={setActivePage} />
        );

      case "frontline":
        return <UsersPage />;
      default:
        return <Panorama />;
    }
  };

  return (
    <ThemeProvider>
      <Layout activePage={activePage} setActivePage={setActivePage}>
        {renderPage()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
