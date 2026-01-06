import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({
  title,
  value,
  change,
  trend = "up",
  icon: Icon,
  color = "blue",
}) => {
  const isUp = trend === "up";

  const gradients = {
    blue: "from-neon-blue to-red-900",
    purple: "from-white/80 to-gray-400",
    green: "from-red-500 to-white/50",
    orange: "from-red-600 to-black",
  };

  const textColors = {
    blue: "text-neon-blue",
    purple: "text-white",
    green: "text-white",
    orange: "text-red-500",
  };

  return (
    <div className="glass p-6 rounded-2xl relative overflow-hidden group hover-lift border border-border transition-all duration-300">
      <div
        className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${gradients[color]} rounded-bl-2xl`}
      />

      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-3 rounded-xl bg-surface border border-white/5 ${textColors[color]}`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            isUp ? "text-neon-green" : "text-red-400"
          } bg-surface/50 px-2 py-1 rounded-lg`}
        >
          {isUp ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowDownRight className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>

      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
          {title}
        </p>
        <h3 className="text-3xl font-display font-bold text-primary dark:text-white tracking-tight">
          {value}
        </h3>
      </div>
    </div>
  );
};

export default StatCard;
